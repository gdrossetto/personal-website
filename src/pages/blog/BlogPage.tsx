import { useEffect, useState } from "react";
import { Header } from "../../components/Header.tsx";
import { Footer } from "../../components/Footer.tsx";
import { adminBaseUrl } from "../../App.tsx";
import BlogCard from "../../components/BlogCard.tsx";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${adminBaseUrl}/api/blog-posts?sort=publishedAt:desc&populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="mb-24 text-center font-mono text-6xl font-bold text-gray-900 tracking-tight">
            Blog da GR
          </h2>{" "}
          <div className="grid md:grid-cols-3 gap-6">
            {loading
              ? Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
                    >
                      <div className="w-full h-48 bg-gray-300"></div>
                      <div className="p-4">
                        <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-300 w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-300 w-full"></div>
                      </div>
                    </div>
                  ))
              : posts.map((post: any) => (
                  <BlogCard post={post} key={post.id} />
                ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
