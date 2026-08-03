import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import type { Post } from "@/types/news";

interface NewsCardProps {
  post: Post;
}

const NewsCard = ({ post }: NewsCardProps) => {
  const categorySlug = post.category?.slug?.current;
  const postSlug = post.slug?.current;

  if (!categorySlug || !postSlug) return null;

  const href = `/${categorySlug}/${postSlug}`;

  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href={href}>
        {post.mainImageUrl ? (
          <Image
            src={post.mainImageUrl}
            width={500}
            height={500}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={post.mainImageAlt ?? post.title}
            className="mb-5 md:h-56 w-full object-cover rounded hover:scale-105 cursor-pointer transition-all duration-200"
          />
        ) : (
          <div className="mb-5 md:h-56 w-full rounded bg-gray-200" />
        )}
      </Link>

      <div>
        {post.category?.name && (
          <p className="text-sm text-gray-500">{post.category.name}</p>
        )}

        <h2 className="text-xl font-semibold my-3">
          <Link href={href} className="hover:text-red-500 transition-colors">
            {post.title}
          </Link>
        </h2>

        {post.publishedAt && (
          <p className="mb-4 text-sm text-gray-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("hi-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        )}

        <Button asChild variant="default">
          <Link href={href}>पूरा पढ़ें</Link>
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;