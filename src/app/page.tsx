import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import { getRecentPosts } from "@/lib/sanity";

const Home = async () => {
  const posts = await getRecentPosts(13);
  const [featured, ...rest] = posts;

  return (
    <div className="py-12">
      {featured && <Banner post={featured} />}

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">ताज़ा समाचार</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <NewsCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;