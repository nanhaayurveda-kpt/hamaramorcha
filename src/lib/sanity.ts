import { createClient } from "@sanity/client";
import type { Category, Post } from "@/types/news";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error("Missing Sanity project id or dataset in environment");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2023-05-03",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

type RawPost = Omit<Post, "mainImageUrl" | "mainImageAlt">;

function getImageUrl(mainImage: string | null): string | null {
  if (!mainImage) return null;
  if (mainImage.startsWith("http")) return mainImage;
  return null;
}

function withImage(post: RawPost): Post {
  return {
    ...post,
    mainImageUrl: getImageUrl(post.mainImage),
    mainImageAlt: post.mainImageCaption || post.title,
  };
}

const POST_FIELDS = `
  _id,
  title,
  slug,
  mainImage,
  mainImageCaption,
  publishedAt,
  category->{name, slug},
  content,
  views
`;

export async function getAllPosts(): Promise<Post[]> {
  try {
    const posts = await client.fetch<RawPost[]>(
      `*[_type == "post"] | order(publishedAt desc) { ${POST_FIELDS} }`,
    );
    return posts.map(withImage);
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

export async function getPostsByCategory(
  categorySlug: string,
): Promise<Post[]> {
  try {
    const posts = await client.fetch<RawPost[]>(
      `*[_type == "post" && category->slug.current == $categorySlug]
        | order(publishedAt desc) { ${POST_FIELDS} }`,
      { categorySlug },
    );
    return posts.map(withImage);
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    return [];
  }
}

export async function getPostBySlugAndCategory(
  slug: string,
  categorySlug: string,
): Promise<Post | null> {
  try {
    const post = await client.fetch<RawPost | null>(
      `*[_type == "post" && slug.current == $slug
          && category->slug.current == $categorySlug][0] {
        _id,
        title,
        slug,
        mainImage,
        mainImageCaption,
        publishedAt,
        category->{name, slug},
        views,
        content[]{
          ...,
          _type == "pdfDocument" => {
            _type,
            _key,
            caption,
            file { asset -> { url } }
          }
        }
      }`,
      { slug, categorySlug },
    );

    return post ? withImage(post) : null;
  } catch (error) {
    console.error("Error fetching post by slug and category:", error);
    return null;
  }
}

export async function getPopularPosts(limit = 4): Promise<Post[]> {
  try {
    const posts = await client.fetch<RawPost[]>(
      `*[_type == "post"] | order(views desc, publishedAt desc)[0...$limit] {
        ${POST_FIELDS}
      }`,
      { limit },
    );
    return posts.map(withImage);
  } catch (error) {
    console.error("Error fetching popular posts:", error);
    return [];
  }
}

export async function getRecentPosts(limit = 5): Promise<Post[]> {
  try {
    const posts = await client.fetch<RawPost[]>(
      `*[_type == "post"] | order(publishedAt desc)[0...$limit] {
        ${POST_FIELDS}
      }`,
      { limit },
    );
    return posts.map(withImage);
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    return await client.fetch<Category[]>(
      `*[_type == "category"] | order(name asc) {
        _id,
        name,
        slug,
        "slugCurrent": slug.current
      }`,
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
