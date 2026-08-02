import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import type { Post } from "@/types/news";

interface BannerProps {
  post: Post;
}

export default function Banner({ post }: BannerProps) {
  const categorySlug = post.category?.slug?.current;
  const postSlug = post.slug?.current;

  if (!categorySlug || !postSlug) return null;

  const href = `/${categorySlug}/${postSlug}`;

  return (
    <div className="bg-slate-100 rounded-md">
      <div className="px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          {post.mainImageUrl ? (
            <Link href={href}>
              <Image
                src={post.mainImageUrl}
                alt={post.mainImageAlt}
                width={500}
                height={500}
                loading="eager"
                className="w-full h-auto rounded"
              />
            </Link>
          ) : (
            <div className="w-full aspect-video rounded bg-gray-200" />
          )}
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold">{post.category?.name}</h4>

          <h2 className="text-3xl font-bold">
            <Link href={href} className="hover:text-red-500 transition-colors">
              {post.title}
            </Link>
          </h2>

          <p className="text-sm text-gray-500">
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
    </div>
  );
}