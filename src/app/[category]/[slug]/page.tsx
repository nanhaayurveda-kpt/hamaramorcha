import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPostBySlugAndCategory } from "@/lib/sanity";
import ViewsCounter from "@/components/news/ViewsCounter";
import { portableTextComponents } from "@/components/news/PortableTextComponents";

export default async function PostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  const post = await getPostBySlugAndCategory(slug, category);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12 max-w-3xl mx-auto">
      <p className="text-sm text-gray-500">{post.category?.name}</p>

      <h1 className="text-3xl font-bold my-4">{post.title}</h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        <span>
          {new Date(post.publishedAt).toLocaleDateString("hi-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        {post.slug?.current && (
          <ViewsCounter slug={post.slug.current} initialViews={post.views} />
        )}
      </div>

      {post.mainImageUrl && (
        <figure className="mb-8">
          <Image
            src={post.mainImageUrl}
            width={1200}
            height={630}
            alt={post.mainImageAlt}
            priority
            className="w-full rounded"
          />
          {post.mainImageCaption && (
            <figcaption className="text-sm text-gray-500 mt-2">
              {post.mainImageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {post.content && (
        <div className="prose prose-lg max-w-none">
          <PortableText
            value={post.content}
            components={portableTextComponents}
          />
        </div>
      )}
    </article>
  );
}
