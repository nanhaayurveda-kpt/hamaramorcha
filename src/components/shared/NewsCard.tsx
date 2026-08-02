import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import type { Post } from "@/types/news";

interface NewsCardProps {
  post: Post;
}

const NewsCard = ({ post }: NewsCardProps) => {
  const href = `/${post.category?.slug.current ?? "vividha"}/${post.slug.current}`;

  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href={href}>
        {post.mainImageUrl ? (
          <Image
            src={post.mainImageUrl}
            width={500}
            height={500}
            alt={post.mainImageAlt}
            priority
            className="mb-5 md:h-56 w-full object-cover rounded hover:scale-105 cursor-pointer transition-all duration-200"
          />
        ) : (
          <div className="mb-5 md:h-56 w-full rounded bg-gray-200 dark:bg-gray-700" />
        )}
      </Link>

      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {post.category?.name}
        </p>

        <h2 className="text-xl font-semibold my-3">{post.title}</h2>

        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          {new Date(post.publishedAt).toLocaleDateString("hi-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <Link href={href}>
          <Button variant="default">पूरा पढ़ें</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
