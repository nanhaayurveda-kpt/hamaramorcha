"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CommentFormProps {
  postId: string;
  userName: string | null;
  returnTo: string;
}

export default function CommentForm({
  postId,
  userName,
  returnTo,
}: CommentFormProps) {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  if (!userName) {
    return (
      <div className="border rounded-md p-4 text-center">
        <p className="mb-4 text-gray-600">
          टिप्पणी करने के लिए Google से लॉगिन करें।
        </p>
        <Button asChild variant="default">
          <a href={`/api/auth/google?returnTo=${encodeURIComponent(returnTo)}`}>
            Google से लॉगिन करें
          </a>
        </Button>
      </div>
    );
  }

  const submit = async () => {
    const text = comment.trim();
    if (!text) return;

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, comment: text }),
      });

      const data: { error?: string } = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "टिप्पणी भेजी नहीं जा सकी");
        return;
      }

      setComment("");
      setStatus("done");
      setMessage("टिप्पणी भेज दी गई। संपादक की मंज़ूरी के बाद दिखेगी।");
      router.refresh();
    } catch {
      setStatus("error");
      setMessage("टिप्पणी भेजी नहीं जा सकी");
    }
  };

  return (
    <div className="border rounded-md p-4">
      <p className="mb-3 text-sm text-gray-600">
        {userName} के रूप में टिप्पणी कर रहे हैं
      </p>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
        maxLength={2000}
        placeholder="अपनी टिप्पणी लिखें…"
        aria-label="टिप्पणी"
        className="w-full rounded-md border p-3 text-sm"
      />

      <div className="mt-3 flex items-center gap-4">
        <Button
          onClick={submit}
          variant="default"
          disabled={status === "sending" || !comment.trim()}
        >
          {status === "sending" ? "भेजा जा रहा है…" : "भेजें"}
        </Button>

        <form action="/api/auth/logout" method="post">
          <Button type="submit" variant="ghost">
            लॉगआउट
          </Button>
        </form>
      </div>

      {message && (
        <p
          className={`mt-3 text-sm ${
            status === "error" ? "text-red-600" : "text-green-700"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}