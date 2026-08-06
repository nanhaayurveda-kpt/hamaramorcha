import type { Metadata } from "next";
import { Suspense } from "react";
import NewsCard from "@/components/shared/NewsCard";
import SiteSearch from "@/components/shared/SiteSearch";
import { searchPosts } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "खोज परिणाम",
  robots: { index: false },
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const term = q?.trim() ?? "";
  const posts = term ? await searchPosts(term) : [];

  return (
    <div className="py-12">
      <h1 className="text-2xl font-bold mb-6">समाचार खोजें</h1>

      <div className="mb-8">
        <Suspense fallback={null}>
          <SiteSearch />
        </Suspense>
      </div>

      {term && (
        <p className="mb-6 text-gray-500">
          &ldquo;{term}&rdquo; के लिए {posts.length} परिणाम
        </p>
      )}

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <NewsCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        term && (
          <p className="text-center text-gray-500 py-10">
            कोई समाचार नहीं मिला
          </p>
        )
      )}
    </div>
  );
}
