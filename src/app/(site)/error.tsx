"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-24 text-center">
      <h2 className="text-2xl font-semibold">कुछ गड़बड़ हो गई</h2>
      <p className="mt-3 text-gray-500">
        पृष्ठ लोड करते समय समस्या आई। कृपया दोबारा कोशिश करें।
      </p>
      <div className="mt-8">
        <Button onClick={reset} variant="default">
          दोबारा कोशिश करें
        </Button>
      </div>
    </div>
  );
}
