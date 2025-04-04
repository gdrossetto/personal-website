import { adminBaseUrl } from "../App.tsx";

const BlogCard = ({ post }: any) => {
  return (
    <div key={post.id} className="bg-white rounded-lg  overflow-hidden">
      <img
        src={`${adminBaseUrl}${post.thumbnail.formats.large.url}`}
        alt={post.titulo}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 min-h-48 flex flex-col items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900 font-mono tracking-tight text-center">
          {post.titulo}
        </h3>

        <p className="text-gray-700 mt-2 line-clamp-3 text-center">
          {post.resumo}
        </p>
        <a
          href={`/blog/${post.documentId}`}
          className="inline-block mt-4 text-green-600 hover:underline"
        >
          Leia mais
        </a>
      </div>
    </div>
  );
};
export default BlogCard;
