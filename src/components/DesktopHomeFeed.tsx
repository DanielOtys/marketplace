import Image from "next/image";
import type { Post, Story, TrendingProduct, SuggestedShop } from "@/lib/data";

type Props = {
  stories: Story[];
  posts: Post[];
  trendingProducts: TrendingProduct[];
  suggestedShops: SuggestedShop[];
};

export default function DesktopHomeFeed({
  stories,
  posts,
  trendingProducts,
  suggestedShops,
}: Props) {
  return (
    <div className="hidden md:block min-h-screen">
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#faf9f8] flex flex-col gap-2 py-8 px-4 font-['Inter'] text-base font-semibold z-10">
        <div className="px-4 mb-8">
          <span className="text-xl font-bold italic text-[#1a1c1c]">[YourBrandName]</span>
          <p className="text-xs font-normal opacity-50">Digital Curator</p>
        </div>
        <nav className="flex-1 flex flex-col gap-2">
          <a className="text-primary bg-primary/5 rounded-full mx-2 px-4 py-3 flex items-center gap-3 hover:translate-x-1 duration-200" href="#">
            <span className="material-symbols-outlined">home</span><span>Home</span>
          </a>
          <a className="text-[#1a1c1c] mx-2 px-4 py-3 flex items-center gap-3 hover:bg-[#f4f3f2] transition-all hover:translate-x-1 duration-200 rounded-full" href="#">
            <span className="material-symbols-outlined">explore</span><span>Discover</span>
          </a>
          <a className="text-[#1a1c1c] mx-2 px-4 py-3 flex items-center gap-3 hover:bg-[#f4f3f2] transition-all hover:translate-x-1 duration-200 rounded-full" href="#">
            <span className="material-symbols-outlined">chat</span><span>Messages</span>
          </a>
          <a className="text-[#1a1c1c] mx-2 px-4 py-3 flex items-center gap-3 hover:bg-[#f4f3f2] transition-all hover:translate-x-1 duration-200 rounded-full" href="#">
            <span className="material-symbols-outlined">person</span><span>Profile</span>
          </a>
          <a className="text-[#1a1c1c] mx-2 px-4 py-3 flex items-center gap-3 hover:bg-[#f4f3f2] transition-all hover:translate-x-1 duration-200 rounded-full" href="#">
            <span className="material-symbols-outlined">storefront</span><span>Seller Admin</span>
          </a>
        </nav>
        <button className="bg-gradient-to-br from-primary to-primary-container text-white rounded-full py-4 mx-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform">Create Post</button>
      </aside>

      <main className="mx-auto pt-8 pb-20 px-4" style={{ width: '720px', marginLeft: 'auto', marginRight: 'calc(50% - 300px)' }}>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-8 mb-8">
          {stories.map((story) => (
            <div key={story.id} className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className={`w-16 h-16 rounded-full p-0.5 border-2 ${story.hasUnseenStory ? "border-primary" : "border-on-surface/30"}`}>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  {story.avatarUrl && (
                    <Image src={story.avatarUrl} alt={story.username} fill className="object-cover" sizes="64px" />
                  )}
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{story.username}</span>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          {posts.map((post) => {
            if (post.type === "single") {
              return (
                <article key={post.id} className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm">
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        {post.shopAvatarUrl && (
                          <Image src={post.shopAvatarUrl} alt={post.shopName} fill className="object-cover" sizes="40px" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{post.shopName}</h4>
                        <p className="text-[10px] text-on-surface/50 uppercase tracking-tighter">{post.location} • {post.timeAgo}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface/40">more_horiz</span>
                  </div>
                  {post.imageUrl && (
                    <div className="aspect-[4/5] w-full relative">
                      <Image src={post.imageUrl} alt={post.imageAlt || ""} fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-6 mb-4">
                      <span className="material-symbols-outlined filled text-primary cursor-pointer">favorite</span>
                      <span className="material-symbols-outlined cursor-pointer">chat_bubble</span>
                      <span className="material-symbols-outlined cursor-pointer">send</span>
                      <span className="material-symbols-outlined ml-auto cursor-pointer">bookmark</span>
                    </div>
                    <p className="font-bold text-sm mb-2">{post.likes.toLocaleString()} likes</p>
                    <p className="text-sm leading-relaxed">
                      <span className="font-bold mr-2">{post.shopName}</span>{post.caption}
                    </p>
                  </div>
                </article>
              );
            }
            return (
              <article key={post.id} className="space-y-4">
                <div className="flex items-center gap-3 px-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
                    {post.shopAvatarUrl && (
                      <Image src={post.shopAvatarUrl} alt={post.shopName} fill className="object-cover" sizes="32px" />
                    )}
                  </div>
                  <h4 className="font-bold text-sm">{post.shopName}</h4>
                </div>
                {post.collectionItems && post.collectionItems.length >= 3 && (
                  <div className="grid grid-cols-2 gap-2 h-[450px]">
                    <div className="bg-surface-container-low rounded-lg overflow-hidden h-full relative">
                      <Image src={post.collectionItems[0].imageUrl} alt={post.collectionItems[0].imageAlt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 300px" />
                      <div className="absolute bottom-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold">{post.collectionItems[0].price}</div>
                    </div>
                    <div className="grid grid-rows-2 gap-2 h-full">
                      {post.collectionItems.slice(1, 3).map((item, i) => (
                        <div key={i} className="bg-surface-container-low rounded-lg overflow-hidden relative">
                          <Image src={item.imageUrl} alt={item.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 300px" />
                          <div className="absolute bottom-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold">{item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </main>

      <aside className="w-96 h-screen fixed right-0 top-0 bg-[#faf9f8] p-8 space-y-10 overflow-y-auto hide-scrollbar z-10">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/30">search</span>
          <input className="w-full bg-surface-container-highest border-none rounded-full py-3 pl-12 pr-4 text-sm focus:ring-1 focus:ring-primary/20 outline-none" placeholder="Search curators & drops" type="text" />
        </div>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-sm tracking-tight uppercase">Trending Now</h3>
            <a className="text-[10px] font-bold text-primary" href="#">View All</a>
          </div>
          <div className="space-y-4">
            {trendingProducts.map((product) => (
              <div key={product.id} className="flex items-center gap-4 group cursor-pointer">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  {product.imageUrl && (
                    <Image src={product.imageUrl} alt={product.imageAlt} fill className="object-cover" sizes="64px" />
                  )}
                </div>
                <div>
                  <p className="font-bold text-sm group-hover:text-primary transition-colors">{product.name}</p>
                  <p className="text-xs opacity-50">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-sm">shopping_bag</span>
            <h3 className="font-bold text-xs uppercase tracking-widest">Cart Preview</h3>
          </div>
          <div className="border-t border-on-surface/5 pt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm opacity-60">2 items</span>
              <span className="font-bold">$458.00</span>
            </div>
            <button className="w-full py-3 bg-on-surface text-surface rounded-full text-xs font-bold uppercase tracking-widest active:scale-95 transition-transform">Checkout Now</button>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-sm tracking-tight uppercase mb-6">Curators to Follow</h3>
          <div className="space-y-4">
            {suggestedShops.map((shop) => (
              <div key={shop.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    {shop.avatarUrl && (
                      <Image src={shop.avatarUrl} alt={shop.name} fill className="object-cover" sizes="40px" />
                    )}
                  </div>
                  <p className="text-sm font-bold">{shop.name}</p>
                </div>
                <button className="text-[10px] font-bold text-primary hover:underline">Follow</button>
              </div>
            ))}
          </div>
        </section>
      </aside>
    </div>
  );
}
