import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { writeClient } from "@/lib/sanity";

interface CommentBody {
  postId?: string;
  comment?: string;
}

export async function POST(request: Request) {
  const session = await getSession();

  if (!session) {
    return NextResponse.json({ error: "लॉगिन आवश्यक है" }, { status: 401 });
  }

  let body: CommentBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "अमान्य अनुरोध" }, { status: 400 });
  }

  const postId = body.postId?.trim();
  const comment = body.comment?.trim();

  if (!postId || !comment) {
    return NextResponse.json({ error: "टिप्पणी खाली है" }, { status: 400 });
  }

  if (comment.length > 2000) {
    return NextResponse.json(
      { error: "टिप्पणी बहुत लंबी है" },
      { status: 400 },
    );
  }

  try {
    await writeClient.create({
      _type: "comment",
      post: { _type: "reference", _ref: postId },
      name: session.name,
      email: session.email,
      comment,
      approved: false,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "टिप्पणी सहेजी नहीं जा सकी" },
      { status: 500 },
    );
  }
}
