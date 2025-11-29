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
    image: 'https://images.pexels.com/photos/5732444/pexels-photo-5732444.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'treats',
    label: 'Dog Treat',
    image: 'https://images.pexels.com/photos/4601196/pexels-photo-4601196.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'food',
    label: 'Cat Food',
    image: 'https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'treats',
    label: 'Cat Treat',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'accessories',
    label: 'Toys & Accessories',
    image: 'https://images.pexels.com/photos/1458901/pexels-photo-1458901.jpeg?auto=compress&cs=tinysrgb&w=400',
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
