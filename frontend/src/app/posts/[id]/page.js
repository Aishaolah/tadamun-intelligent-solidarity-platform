import Image from "next/image";
import DonateModal from "@/components/DonateModal";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

async function getPost(id) {
  const res = await fetch(`http://localhost:3001/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await getPost(id);

  const imageSrc =
    post.images && post.images.length > 0
      ? post.images[0]
      : "/placeholder.jpg";

  const progress =
    post.targetAmount > 0
      ? Math.min((post.receivedAmount / post.targetAmount) * 100, 100)
      : 0;

  return (
    <>
    <Navbar />
    <div className="mt-20 max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT SIDE */}
      <div className="lg:col-span-2">
        {/* Image + overlay */}
        <div className="relative">
          <Image
            src={imageSrc}
            alt={post.title}
            width={900}
            height={500}
            className="rounded-2xl object-cover"
            priority
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6 rounded-b-2xl">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="mt-1 text-sm">
              by <span className="font-medium">{post.fundraiserName}</span>
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Story</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.description}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="border rounded-2xl p-6 shadow-sm h-fit sticky top-24">
        <p className="text-2xl font-bold">
          {post.receivedAmount.toLocaleString()} {post.currency} raised
        </p>

        <p className="text-gray-500 mb-4">
          of {post.targetAmount.toLocaleString()} {post.currency}
        </p>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Donate modal button */}
        <DonateModal />
      </div>
    </div>
    <Footer />
    </>
  );
}
