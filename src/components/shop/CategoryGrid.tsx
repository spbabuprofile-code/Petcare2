import { Card } from '../common/Card';

interface Category {
  name: string;
  image: string;
  label: string;
}

const categories: Category[] = [
  {
    name: 'food',
    label: 'Dog Food',
    image: '/1-use.jpeg',
  },
  {
    name: 'treats',
    label: 'Dog Treat',
    image: '/6-use.jpeg',
  },
  {
    name: 'food',
    label: 'Cat Food',
    image: '/4-use.jpeg',
  },
  {
    name: 'treats',
    label: 'Cat Treat',
    image: '/2-use.jpeg',
  },
  {
    name: 'accessories',
    label: 'Toys & Accessories',
    image: '/3-use.jpeg',
  },
  {
    name: 'all',
    label: 'Super Deals Upto 50% Off',
    image: 'https://images.pexels.com/photos/4587979/pexels-photo-4587979.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

interface CategoryGridProps {
  onCategorySelect: (category: string) => void;
}

export function CategoryGrid({ onCategorySelect }: CategoryGridProps) {
  return (
    <div className="bg-white py-12">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Categories</h2>
        <p className="text-gray-600 mb-8">
          Fresh Chicken, Mutually-backed Treats, Super Snacks - ONLINE for your pet's table!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onCategorySelect(category.name)}
            >
              <img
                src={category.image}
                alt={category.label}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <p className="text-center font-semibold text-gray-900 text-sm">{category.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
