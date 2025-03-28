import { useEffect, useState } from "react";
import { Header } from "../../components/Header.tsx";
import { Footer } from "../../components/Footer.tsx";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "http://192.241.159.160:1337/api/blog-posts?sort=publishedAt:desc&populate=*",
    )
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
                  <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={`http://192.241.159.160:1337${post.thumbnail.formats.large.url}`}
                      alt={post.titulo}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {post.titulo}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {new Date(post.data).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700 mt-2">{post.resumo}</p>
                      <a
                        href={`/blog/${post.documentId}`}
                        className="inline-block mt-4 text-green-600 hover:underline"
                      >
                        Leia mais
                      </a>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
