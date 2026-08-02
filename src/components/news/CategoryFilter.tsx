import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Category } from "@/types/news";

interface CategoryFilterProps {
  categories: Category[];
  onCategoryChange: (category: string) => void;
}

function CategoryFilter({ categories, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 items-center justify-center mx-4">
      <h3 className="font-bold text-lg mb-2 shrink-0">श्रेणी</h3>

      <Select
        onValueChange={(value) =>
          onCategoryChange(value === "all" ? "" : value)
        }
      >
        <SelectTrigger className="w-45 rounded-md">
          <SelectValue placeholder="श्रेणी चुनें" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">सभी</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category._id} value={category.slug.current}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategoryFilter;
