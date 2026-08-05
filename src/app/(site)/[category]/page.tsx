import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsList from "@/components/news/NewsList";
import { getCategories, getPostsByCategory } from "@/lib/sanity";

export const revalidate = 60;

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.flatMap((item) =>
    item.slug?.current ? [{ category: item.slug.current }] : [],
  );
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categories = await getCategories();
  const current = categories.find((item) => item.slug?.current === category);

  if (!current) {
    return { title: "पृष्ठ नहीं मिला" };
  }

  return {
    title: current.name,
    description: `${current.name} श्रेणी के ताज़ा समाचार।`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const [posts, categories] = await Promise.all([
    getPostsByCategory(category),
    getCategories(),
  ]);

  const current = categories.find((item) => item.slug?.current === category);

  if (!current) {
    notFound();
  }

  return (
    <div className="py-12">
      <h1 className="text-2xl font-bold mb-8">{current.name}</h1>
      <NewsList posts={posts} categories={categories} />
    </div>
  );
}
