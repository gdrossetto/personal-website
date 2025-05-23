import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard.tsx";
import { adminBaseUrl } from "../../App.tsx";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `${adminBaseUrl}/api/blog-posts?sort=publishedAt:desc&pagination[limit]=3&populate=*`
    )
      .then((res) => res.json())
      .then((data) => setPosts(data.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <section className="py-18 bg-[#f7f9fc]">
      <div className="mx-auto px-6 md:px-24  flex flex-col justify-center items-center">
        <h2 className="text-6xl font-semibold text-gray-900 mb-18 text-center">
          Nossos Últimos <span className="neon-blue">Insights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <a
          href="/blog"
          className="block mt-12 px-6 py-3 border-2 border-[#0A1124] text-[#0A1124] font-semibold rounded-lg hover:bg-[#0A1124] hover:text-white transition"
        >
          Ver todos os artigos
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
