"use client";

import React, { useMemo, useState } from "react";
import type { Category, Post } from "@/types/news";
import NewsCard from "../shared/NewsCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

interface NewsListProps {
  posts: Post[];
  categories: Category[];
}

function NewsList({ posts, categories }: NewsListProps) {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        !category || post.category?.slug.current === category;

      const matchesSearch =
        !term || post.title.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [posts, search, category]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 mb-5">
        <SearchBar onSearch={setSearch} />
        <CategoryFilter categories={categories} onCategoryChange={setCategory} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
        {filteredPosts.map((post) => (
          <NewsCard key={post._id} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-10">
          कोई समाचार नहीं मिला
        </p>
      )}
    </div>
  );
}

export default NewsList;