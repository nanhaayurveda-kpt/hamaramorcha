import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import { getRecentPosts } from "@/lib/sanity";

export const revalidate = 60;

const Home = async () => {
  const posts = await getRecentPosts(13);
  const [featured, ...rest] = posts;

  if (posts.length === 0) {
    return (
      <div className="py-12">
        <p className="text-gray-500">अभी कोई समाचार प्रकाशित नहीं हुआ है।</p>
      </div>
    );
  }

  return (
    <div className="py-12">
      <Banner post={featured} />

      {rest.length > 0 && (
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-8">ताज़ा समाचार</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <NewsCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;