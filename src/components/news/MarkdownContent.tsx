import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownContent({ source }: { source: string }) {
  return (
    <div className="prose prose-lg max-w-none prose-pre:overflow-x-auto">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{source}</ReactMarkdown>
    </div>
  );
}