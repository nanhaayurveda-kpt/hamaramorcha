import { NextResponse } from "next/server";
import { writeClient } from "@/lib/sanity";

interface PostViews {
  _id: string;
  views?: number;
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const post = await writeClient.fetch<PostViews | null>(
      `*[_type == "post" && slug.current == $slug][0]{ _id, views }`,
      { slug },
    );

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const updated = await writeClient
      .patch(post._id)
      .setIfMissing({ views: 0 })
      .inc({ views: 1 })
      .commit<PostViews>();

    return NextResponse.json({ views: updated.views ?? 0 });
  } catch (error) {
    console.error("Error incrementing views:", error);
    return NextResponse.json(
      { error: "Failed to increment views" },
      { status: 500 },
    );
  }
}