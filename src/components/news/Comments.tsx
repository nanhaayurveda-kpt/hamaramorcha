import CommentForm from "./CommentForm";
import { getSession } from "@/lib/auth";
import { getApprovedComments } from "@/lib/sanity";

interface CommentsProps {
  postId: string;
  returnTo: string;
}

export default async function Comments({ postId, returnTo }: CommentsProps) {
  const [session, comments] = await Promise.all([
    getSession(),
    getApprovedComments(postId),
  ]);

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">
        टिप्पणियाँ ({comments.length})
      </h2>

      {comments.length > 0 ? (
        <ul className="space-y-6 mb-8">
          {comments.map((item) => (
            <li key={item._id} className="border-b pb-4 last:border-b-0">
              <div className="flex items-baseline gap-3">
                <span className="font-semibold">{item.name}</span>
                <time
                  dateTime={item._createdAt}
                  className="text-xs text-gray-500"
                >
                  {new Date(item._createdAt).toLocaleDateString("hi-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-2 text-gray-800 leading-relaxed whitespace-pre-line">
                {item.comment}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-8 text-gray-500">अभी कोई टिप्पणी नहीं है।</p>
      )}

      <CommentForm
        postId={postId}
        userName={session?.name ?? null}
        returnTo={returnTo}
      />
    </section>
  );
}