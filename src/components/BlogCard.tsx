// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const BlogCard = ({ post }) => {
  return (
    <div key={post.id} className="bg-white rounded-lg  overflow-hidden">
      <img
        src={`http://192.241.159.160:1337${post.thumbnail.formats.large.url}`}
        alt={post.titulo}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 font-mono tracking-tight">
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
  );
};
export default BlogCard;
