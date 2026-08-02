import { notFound } from "next/navigation";
import NewsList from "@/components/news/NewsList";
import { getCategories, getPostsByCategory } from "@/lib/sanity";
import React from "react";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
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
      <h2 className="text-2xl font-bold mb-8">{current.name}</h2>
      <NewsList posts={posts} categories={categories} />
    </div>
  );
}
