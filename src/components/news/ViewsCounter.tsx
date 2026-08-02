"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface ViewsCounterProps {
  slug: string;
  initialViews?: number;
}

export default function ViewsCounter({
  slug,
  initialViews = 0,
}: ViewsCounterProps) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    const incrementViews = async () => {
      try {
        const response = await fetch(`/api/views/${slug}`, { method: "POST" });

        if (response.ok) {
          const data: { views: number } = await response.json();
          setViews(data.views);
        }
      } catch (error) {
        console.error("Error incrementing views:", error);
      }
    };

    const timer = setTimeout(incrementViews, 1000);

    return () => clearTimeout(timer);
  }, [slug]);

  return (
    <span className="flex items-center gap-1">
      <Eye size={16} />
      {views.toLocaleString("hi-IN")}
    </span>
  );
}