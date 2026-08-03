import { Input } from "../ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="mb-4 md:w-3/4">
      <label htmlFor="news-search" className="block font-bold text-lg mb-2">
        समाचार खोजें
      </label>
      <Input
        id="news-search"
        type="search"
        placeholder="शीर्षक से खोजें..."
        className="p-2 border rounded-md w-full"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;