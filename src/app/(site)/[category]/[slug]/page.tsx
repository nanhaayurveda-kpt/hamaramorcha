import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPostBySlugAndCategory } from "@/lib/sanity";
import Comments from "@/components/news/Comments";
import ViewsCounter from "@/components/news/ViewsCounter";
import { portableTextComponents } from "@/components/news/PortableTextComponents";

export const revalidate = 60;

type PostPageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = await getPostBySlugAndCategory(slug, category);

  if (!post) {
    return { title: "पृष्ठ नहीं मिला" };
  }

  const description = post.mainImageCaption ?? post.title;
  const image = post.mainImageUrl ?? "/og-image.jpg";
  const url = `/${category}/${slug}`;

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      url,
      siteName: "हमारा मोर्चा",
      locale: "hi_IN",
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [image],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { category, slug } = await params;

  const post = await getPostBySlugAndCategory(slug, category);

  if (!post) {
    notFound();
  }
  
  return (
    <article className="py-12 max-w-3xl mx-auto">
      {post.category?.name && (
        <p className="text-sm text-gray-500">{post.category.name}</p>
      )}
      <h1 className="text-3xl font-bold my-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        {post.publishedAt && (
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("hi-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
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
            sizes="(max-width: 768px) 100vw, 768px"
            alt={post.mainImageAlt}
            priority
            className="w-full h-auto rounded"
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
      <Comments postId={post._id} returnTo={`/${category}/${slug}`} />
    </article>
  );
}
