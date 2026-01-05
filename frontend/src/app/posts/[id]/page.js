import Image from "next/image";

async function getPost(id) {
  const res = await fetch(
    `http://localhost:3001/api/posts/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export default async function PostPage({ params }) {
  const post = await getPost(params.id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT */}
      <div className="lg:col-span-2">
        <Image
          src={post.images?.[0] || "/placeholder.jpg"}
          alt={post.title}
          width={800}
          height={450}
          className="rounded-xl object-cover"
        />

        <h1 className="text-3xl font-bold mt-6">{post.title}</h1>
        <p className="text-gray-600 mt-2">
          by {post.fundraiserName || "Anonymous"}
        </p>

        <div className="mt-6 text-gray-800 leading-relaxed">
          {post.story}
        </div>
      </div>

      {/* RIGHT */}
      <div className="border rounded-2xl p-6 shadow-sm h-fit sticky top-24">
        <p className="text-2xl font-bold">
          ${post.raised?.toLocaleString() || 0} raised
        </p>

        <p className="text-gray-500">
          of ${post.goal?.toLocaleString() || 0}
        </p>

        <button className="w-full mt-6 bg-green-500 text-white py-3 rounded-full">
          Donate now
        </button>
      </div>

    </div>
  );
}
