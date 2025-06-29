
import { Badge } from '@/components/ui/badge';

interface Category {
  id: string;
  name: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selectedCategory === category.id
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
              : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:scale-105'
          }`}
        >
          {category.name}
          <Badge 
            variant="secondary" 
            className={`ml-2 ${
              selectedCategory === category.id 
                ? 'bg-white/20 text-white' 
                : 'bg-white/10 text-gray-400'
            }`}
          >
            {category.count}
          </Badge>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
