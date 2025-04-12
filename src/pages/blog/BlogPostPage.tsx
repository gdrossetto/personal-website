import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../../components/Header.tsx";
import { Footer } from "../../components/Footer.tsx";
import { adminBaseUrl } from "../../App.tsx";
import parse from "html-react-parser";
import { ArrowLeft } from "lucide-react";

const BlogPostPage = () => {
  const { documentId } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the single blog post using the documentId
    fetch(`${adminBaseUrl}/api/blog-posts/${documentId}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data?.data as any);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
        setLoading(false);
      });
  }, [documentId]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-6">
        <div className="animate-pulse">
          <div className="w-full h-64 bg-gray-300 mb-4"></div>
          <div className="h-8 bg-gray-300 w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-300 w-full"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <>
      <Header />
      <article className="max-w-3xl mx-auto py-12 px-6">
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-[#0A1124] hover:underline transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span className="font-medium">Voltar para o blog</span>
          </Link>
        </div>
        
        <h1 className="font-bold text-gray-900 font-mono text-5xl mb-4 tracking-tight">
          {post.titulo}
        </h1>
        <title>{post.titulo}</title>
        <meta property="og:description" content={post.resumo} />
        <meta property="og:image" content={post.thumbnail.url} />
        <p className="text-gray-600 text-md mb-4">{post.resumo}</p>
        <p className="text-gray-600 text-sm">
          Publicado em {new Date(post.data).toLocaleDateString()}
        </p>
        <hr className="border-1 border-green-400 mt-8" />
        <div className="ck-content py-8">{parse(post.conteudo)}</div>
      </article>
      <Footer />
    </>
  );
};

export default BlogPostPage;
