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
      <span className="font-bold text-lg shrink-0">श्रेणी</span>

      <Select
        onValueChange={(value) => onCategoryChange(value === "all" ? "" : value)}
      >
        <SelectTrigger className="w-44 rounded-md" aria-label="श्रेणी चुनें">
          <SelectValue placeholder="श्रेणी चुनें" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">सभी</SelectItem>
          {categories.map((category) =>
            category.slug?.current ? (
              <SelectItem key={category._id} value={category.slug.current}>
                {category.name}
              </SelectItem>
            ) : null,
          )}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategoryFilter;