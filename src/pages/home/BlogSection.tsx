import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard.tsx";
import { adminBaseUrl } from "../../App.tsx";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `${adminBaseUrl}/api/blog-posts?sort=publishedAt:desc&pagination[limit]=3&populate=*`,
    )
      .then((res) => res.json())
      .then((data) => setPosts(data.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    // <section className="py-24 bg-gray-100">
    //   <div className="max-w-6xl mx-auto px-4">
    //     <h2 className="mb-24 text-center font-mono text-6xl font-bold text-gray-900 tracking-tight">
    //       Confira nosso blog!
    //     </h2>
    //     <div className="grid md:grid-cols-3 gap-6">
    //       {posts.map((post: any) => (
    //         <BlogCard key={post.id} post={post} />
    //       ))}
    //     </div>
    //   </div>
    //
    //   <div className="mt-8 flex justify-center">
    //     <a
    //       href="/blog"
    //       className="border-2 rounded-lg border-gray-900 px-6 py-3 mt-6 text-gray-900 hover:bg-green-400 hover:text-gray-900 cursor-pointer font-mono tracking-tight"
    //     >
    //       Ver todos os posts
    //     </a>
    //   </div>
    // </section>
    <section className="py-20 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 font-mono tracking-tight">
            Nossos Últimos <span className="neon-blue">Insights</span>
          </h2>
          <a
            href="/blog"
            className="neon-blue font-medium hover:underline flex items-center gap-1"
          >
            Ver todos os artigos
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
