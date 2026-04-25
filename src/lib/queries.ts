import { sql } from "./db";
import type {
  Story,
  Post,
  TrendingProduct,
  SuggestedShop,
  MobileFeedPost,
} from "./data";

function formatPrice(cents: number, currency: string): string {
  const symbols: Record<string, string> = {
    USD: "$", NGN: "₦", KES: "KSh ", GHS: "GH₵",
    ZAR: "R", EUR: "€", GBP: "£",
  };
  const symbol = symbols[currency] || `${currency} `;
  return `${symbol}${(cents / 100).toFixed(2)}`;
}

function timeAgo(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const seconds = Math.floor((Date.now() - d.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function formatCount(n: number): string {
  if (n < 1000) return n.toString();
  if (n < 1000000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "m";
}

export async function getStories(): Promise<Story[]> {
  try {
    const rows = (await sql`
      select s.id, sh.name as shop_name, sh.logo_url
      from stories s
      join shops sh on sh.id = s.shop_id
      where s.expires_at > now()
      order by s.created_at desc
      limit 10
    `) as Array<{ id: string; shop_name: string; logo_url: string }>;

    const yourStory: Story = {
      id: "you",
      username: "You",
      avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXA-xv0FFRaJUW7gmWetamnwrOYv9IN0qkJurZg_qdUctFf28s0r-m7poGERgLJmGYjxV6KVbeLSXlk5y3No7Su74YMd9YtQ1kLTXddmNFPOqJTCezCSY17hhVc0PORPavTCQTJ6GU9jEpiOLOpaT-5ag3Tdccxuj3lg7W0lIIBMHN862fz2JKKD7Yqox9tmMv6KUQs_PdKnGZBz8pATL3oIkYoCiHULLU1CVSzYhc7JmND_9y0qWOQMLZfWoKhpML4epo2gVylUM",
      hasUnseenStory: false,
    };

    return [yourStory, ...rows.map((r) => ({
      id: r.id,
      username: r.shop_name,
      avatarUrl: r.logo_url || "",
      hasUnseenStory: true,
    }))];
  } catch (error) {
    console.error("getStories error:", error);
    return [];
  }
}

export async function getDesktopPosts(): Promise<Post[]> {
  try {
    const postRows = (await sql`
      select p.id, p.type, p.caption, p.image_urls, p.location, p.hashtags,
        p.like_count, p.comment_count, p.created_at,
        s.name as shop_name, s.logo_url as shop_logo
      from posts p join shops s on s.id = p.shop_id
      order by p.created_at desc limit 20
    `) as Array<any>;

    const collectionPostIds = postRows.filter((p) => p.type === "collection").map((p) => p.id);
    let productMap: Record<string, Array<{ image_url: string; name: string; price: string; order: number }>> = {};

    if (collectionPostIds.length > 0) {
      const ppRows = (await sql`
        select pp.post_id, pp.display_order, pr.name, pr.price_cents, pr.currency, pr.image_urls
        from post_products pp join products pr on pr.id = pp.product_id
        where pp.post_id = any(${collectionPostIds})
        order by pp.display_order asc
      `) as Array<any>;

      for (const row of ppRows) {
        if (!productMap[row.post_id]) productMap[row.post_id] = [];
        productMap[row.post_id].push({
          image_url: row.image_urls?.[0] || "",
          name: row.name,
          price: formatPrice(row.price_cents, row.currency),
          order: row.display_order,
        });
      }
    }

    return postRows.map((p) => {
      if (p.type === "collection") {
        const items = (productMap[p.id] || []).sort((a, b) => a.order - b.order)
          .map((i) => ({ imageUrl: i.image_url, imageAlt: i.name, price: i.price }));
        return {
          id: p.id, type: "collection" as const,
          shopName: p.shop_name, shopAvatarUrl: p.shop_logo || "",
          timeAgo: timeAgo(p.created_at), caption: p.caption || "",
          likes: p.like_count, comments: p.comment_count, collectionItems: items,
        };
      }
      return {
        id: p.id, type: "single" as const,
        shopName: p.shop_name, shopAvatarUrl: p.shop_logo || "",
        location: p.location || undefined, timeAgo: timeAgo(p.created_at),
        caption: p.caption || "", likes: p.like_count, comments: p.comment_count,
        imageUrl: p.image_urls?.[0] || "", imageAlt: p.caption || "",
      };
    });
  } catch (error) {
    console.error("getDesktopPosts error:", error);
    return [];
  }
}

export async function getMobilePosts(): Promise<MobileFeedPost[]> {
  try {
    const rows = (await sql`
      select p.id, p.caption, p.image_urls, p.hashtags, p.like_count, p.comment_count,
        s.name as shop_name, s.logo_url as shop_logo
      from posts p join shops s on s.id = p.shop_id
      where p.type = 'single' order by p.created_at desc limit 10
    `) as Array<any>;

    return rows.map((p) => ({
      id: p.id, shopName: p.shop_name, shopAvatarUrl: p.shop_logo || "",
      caption: p.caption || "", imageUrl: p.image_urls?.[0] || "",
      imageAlt: p.caption || "", likes: formatCount(p.like_count),
      comments: formatCount(p.comment_count),
      hashtags: (p.hashtags || []).map((tag: string) => `#${tag}`),
    }));
  } catch (error) {
    console.error("getMobilePosts error:", error);
    return [];
  }
}

export async function getTrendingProducts(): Promise<TrendingProduct[]> {
  try {
    const rows = (await sql`
      select id, name, price_cents, currency, image_urls from products
      where is_published = true order by created_at desc limit 5
    `) as Array<any>;

    return rows.map((p) => ({
      id: p.id, name: p.name,
      price: formatPrice(p.price_cents, p.currency),
      imageUrl: p.image_urls?.[0] || "", imageAlt: p.name,
    }));
  } catch (error) {
    console.error("getTrendingProducts error:", error);
    return [];
  }
}

export async function getSuggestedShops(): Promise<SuggestedShop[]> {
  try {
    const rows = (await sql`
      select id, name, logo_url from shops order by created_at desc limit 5
    `) as Array<{ id: string; name: string; logo_url: string }>;

    return rows.map((s) => ({
      id: s.id, name: s.name, avatarUrl: s.logo_url || "",
    }));
  } catch (error) {
    console.error("getSuggestedShops error:", error);
    return [];
  }
}
