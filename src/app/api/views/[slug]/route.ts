import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";

interface PostViews {
  _id: string;
  views?: number;
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const post = await client.fetch<PostViews | null>(
      `*[_type == "post" && slug.current == $slug][0]{ _id, views }`,
      { slug }
    );

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const newViews = (post.views ?? 0) + 1;

    await client.patch(post._id).set({ views: newViews }).commit();

    return NextResponse.json({ views: newViews });
  } catch (error) {
    console.error("Error incrementing views:", error);
    return NextResponse.json(
      { error: "Failed to increment views" },
      { status: 500 }
    );
  }
}