"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SiteSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [term, setTerm] = useState(searchParams.get("q") ?? "");

  const submit = () => {
    const query = term.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex gap-2 w-full max-w-md">
      <Input
        type="search"
        value={term}
        placeholder="पूरी साइट पर खोजें…"
        aria-label="पूरी साइट पर खोजें"
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
        }}
      />
      <Button onClick={submit} variant="default">
        खोजें
      </Button>
    </div>
  );
}