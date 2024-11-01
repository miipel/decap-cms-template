import { getAllPosts } from "@/components/lib/api";
import markdownToHtml from "@/components/lib/markdownToHtml";

export default async function Home() {
  const posts = getAllPosts();
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {await Promise.all(posts.map(async (post) => {
          const content = await markdownToHtml(post.content || '');
          return (
            <article key={post.slug} className="flex flex-col justify-center text-center max-w-prose mx-auto prose prose-stone m-8">
              <h1>{post.meta.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
          );
        }))}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </div>
  );
}
