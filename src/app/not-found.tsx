import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-5xl font-bold text-gray-300">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">पृष्ठ नहीं मिला</h2>
      <p className="mt-3 text-gray-500">
        जो पृष्ठ आप खोज रहे हैं वह हटा दिया गया है या पता बदल गया है।
      </p>
      <div className="mt-8">
        <Button asChild variant="default">
          <Link href="/">मुख्य पृष्ठ पर लौटें</Link>
        </Button>
      </div>
    </div>
  );
}