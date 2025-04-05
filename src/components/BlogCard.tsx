import { adminBaseUrl } from "../App.tsx";

const BlogCard = ({ post }: any) => {
  return (
    // <div key={post.id} className="bg-white rounded-lg  overflow-hidden">
    //   <img
    //     src={`${adminBaseUrl}${post.thumbnail.formats.large.url}`}
    //     alt={post.titulo}
    //     className="w-full h-48 object-cover"
    //   />
    //   <div className="p-4 min-h-48 flex flex-col items-center justify-between">
    //     <h3 className="text-xl font-semibold text-gray-900 font-mono tracking-tight text-center">
    //       {post.titulo}
    //     </h3>
    //
    //     <p className="text-gray-700 mt-2 line-clamp-3 text-center">
    //       {post.resumo}
    //     </p>
    //     <a
    //       href={`/blog/${post.documentId}`}
    //       className="inline-block mt-4 text-green-600 hover:underline"
    //     >
    //       Leia mais
    //     </a>
    //   </div>
    // </div>
    <div className="bg-white rounded-xl shadow overflow-hidden group flex flex-col min-h-[400px] ">
      <div className="overflow-hidden">
        <img
          src={`${adminBaseUrl}${post.thumbnail.formats.large.url}`}
          alt={post.titulo}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {post.titulo}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.resumo}</p>
        <div className="mt-auto">
          <a
            href={`/blog/${post.documentId}`}
            className="text-green-500 font-medium hover:underline flex items-center gap-1"
          >
            Ler mais
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
      </div>
    </div>
  );
};
export default BlogCard;
