import { useEffect, useState } from "react";
import { Header } from "../../components/Header.tsx";
import { Footer } from "../../components/Footer.tsx";
import { adminBaseUrl } from "../../App.tsx";
import BlogCard from "../../components/BlogCard.tsx";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-[#f7f9fc]">
      <Header />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-[#0A1124] hover:underline transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span className="font-medium">Voltar para a página inicial</span>
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-6xl font-semibold text-gray-900 mb-4">
              Blog da <span className="neon-blue">GR</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore nossos artigos sobre tecnologia, desenvolvimento e inovação
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse"
                    >
                      <div className="w-full h-48 bg-gray-200"></div>
                      <div className="p-6">
                        <div className="h-6 bg-gray-200 w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-200 w-1/2 mb-4"></div>
                        <div className="h-4 bg-gray-200 w-full"></div>
                      </div>
                    </div>
                  ))
              : posts.map((post: any) => (
                  <BlogCard key={post.id} post={post} />
                ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
