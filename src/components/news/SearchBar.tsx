import React from "react";
import { Input } from "../ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="mb-4 md:w-3/4">
      <h3 className="font-bold text-lg mb-2">समाचार खोजें</h3>
      <Input
        type="text"
        placeholder="शीर्षक से खोजें..."
        className="p-2 border rounded-md w-full"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;