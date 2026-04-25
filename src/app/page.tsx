import DesktopHomeFeed from "@/components/DesktopHomeFeed";
import MobileHomeFeed from "@/components/MobileHomeFeed";
import {
  getStories,
  getDesktopPosts,
  getMobilePosts,
  getTrendingProducts,
  getSuggestedShops,
} from "@/lib/queries";

export const revalidate = 60;

export default async function Home() {
  const [stories, desktopPosts, mobilePosts, trendingProducts, suggestedShops] =
    await Promise.all([
      getStories(),
      getDesktopPosts(),
      getMobilePosts(),
      getTrendingProducts(),
      getSuggestedShops(),
    ]);

  return (
    <>
      <DesktopHomeFeed
        stories={stories}
        posts={desktopPosts}
        trendingProducts={trendingProducts}
        suggestedShops={suggestedShops}
      />
      <MobileHomeFeed stories={stories} posts={mobilePosts} />
    </>
  );
}
