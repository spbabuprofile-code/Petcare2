import { X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  weight: string;
}

interface ProductSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

export function ProductSelectorModal({ isOpen, onClose, products }: ProductSelectorModalProps) {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleProductSelect = (product: Product) => {
    if (!user) {
      sessionStorage.setItem('redirectAfterLogin', '/shop');
      navigate('/login');
      return;
    }

    addToCart({
      product_id: `product_${product.id}`,
      name: product.name,
      brand: product.brand,
      price: product.price,
      quantity: 1,
      image: product.image,
      weight: product.weight
    });

    onClose();
    navigate('/cart');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Select a Product to Order</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-72px)] sm:max-h-[calc(90vh-88px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all p-4 cursor-pointer group"
                onClick={() => handleProductSelect(product)}
              >
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-semibold">
                  {product.brand}
                </p>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{product.weight}</p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <button className="w-full bg-blue-500 group-hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors">
                  Select & Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
