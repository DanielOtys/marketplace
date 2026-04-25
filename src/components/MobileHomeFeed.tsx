import Image from "next/image";
import type { MobileFeedPost, Story } from "@/lib/data";

type Props = {
  stories: Story[];
  posts: MobileFeedPost[];
};

export default function MobileHomeFeed({ stories, posts }: Props) {
  return (
    <div className="md:hidden flex flex-col min-h-screen relative bg-on-surface">
      <header className="fixed top-0 w-full z-40 bg-gradient-to-b from-black/60 to-transparent py-4 px-6">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar">
          {stories.map((story, idx) => (
            <div key={story.id} className={`flex-shrink-0 w-14 h-14 rounded-full p-0.5 ${idx === 0 ? "border-2 border-white" : "border-2 border-primary"}`}>
              <div className="relative w-full h-full rounded-full overflow-hidden">
                {story.avatarUrl && (
                  <Image src={story.avatarUrl} alt={story.username} fill className={`object-cover ${idx > 0 ? "opacity-80" : ""}`} sizes="56px" />
                )}
              </div>
            </div>
          ))}
        </div>
      </header>

      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory h-screen">
        {posts.map((post, idx) => (
          <section key={post.id} className="h-screen w-full snap-start relative flex flex-col justify-end pb-24">
            {post.imageUrl && (
              <div className="absolute inset-0">
                <Image src={post.imageUrl} alt={post.imageAlt} fill className="object-cover" sizes="100vw" priority={idx === 0} />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute right-4 bottom-32 flex flex-col gap-6 text-white items-center">
              <div className="flex flex-col items-center gap-1">
                <div className="bg-white/10 backdrop-blur-xl p-3 rounded-full active:scale-90 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined filled">favorite</span>
                </div>
                <span className="text-[10px] font-bold">{post.likes}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-white/10 backdrop-blur-xl p-3 rounded-full active:scale-90 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined">chat_bubble</span>
                </div>
                <span className="text-[10px] font-bold">{post.comments}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-white/10 backdrop-blur-xl p-3 rounded-full active:scale-90 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined">share</span>
                </div>
                <span className="text-[10px] font-bold">Share</span>
              </div>
              <div className="flex flex-col items-center gap-1 mt-4">
                <div className="bg-primary p-3 rounded-full active:scale-90 transition-transform shadow-lg shadow-primary/30 cursor-pointer">
                  <span className="material-symbols-outlined">shopping_bag</span>
                </div>
                <span className="text-[10px] font-bold">Shop</span>
              </div>
            </div>

            <div className="relative z-10 px-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  {post.shopAvatarUrl && (
                    <Image src={post.shopAvatarUrl} alt={post.shopName} fill className="object-cover" sizes="40px" />
                  )}
                </div>
                <span className="text-white font-bold">{post.shopName}</span>
                <button className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-[10px] font-bold uppercase">Follow</button>
              </div>
              <p className="text-white text-sm leading-snug max-w-[80%]">{post.caption}</p>
              {post.hashtags && post.hashtags.length > 0 && (
                <div className="flex gap-2">
                  {post.hashtags.map((tag) => (
                    <span key={tag} className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white/80 text-[10px] font-medium">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </main>

      <nav className="fixed bottom-0 w-full flex justify-around items-center px-4 py-3 pb-8 bg-[#faf9f8]/90 backdrop-blur-2xl rounded-t-[2rem] z-50 shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
        <a className="flex flex-col items-center justify-center text-primary bg-primary/10 rounded-full px-4 py-2 active:scale-90 duration-300" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-['Inter'] text-[10px] font-medium uppercase tracking-widest mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1a1c1c]/50 active:scale-90 duration-300" href="#">
          <span className="material-symbols-outlined">explore</span>
          <span className="font-['Inter'] text-[10px] font-medium uppercase tracking-widest mt-1">Discover</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1a1c1c]/50 active:scale-90 duration-300" href="#">
          <span className="material-symbols-outlined" style={{ fontSize: "2rem" }}>add_circle</span>
          <span className="font-['Inter'] text-[10px] font-medium uppercase tracking-widest mt-1">Create</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1a1c1c]/50 active:scale-90 duration-300" href="#">
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="font-['Inter'] text-[10px] font-medium uppercase tracking-widest mt-1">Messages</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1a1c1c]/50 active:scale-90 duration-300" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Inter'] text-[10px] font-medium uppercase tracking-widest mt-1">Profile</span>
        </a>
      </nav>
    </div>
  );
}
