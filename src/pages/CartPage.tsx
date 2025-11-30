import { useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/common/Button';

export function CartPage() {
  const { items, removeFromCart, updateQuantity, totalAmount } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-text-secondary mb-6">Add some products to get started</p>
          <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="section-container">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <button
            onClick={() => navigate('/shop')}
            className="text-primary hover:text-blue-700 text-sm font-medium"
          >
            ← Continue Shopping
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-gray-900">Cart Items ({items.length})</h2>
                  <span className="text-sm text-gray-600">Price</span>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.product_id} className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-shrink-0 mx-auto sm:mx-0">
                        <img
                          src={item.image || 'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=200'}
                          alt={item.name}
                          className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-lg border border-gray-200 bg-gray-50 p-2"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                          <div className="flex-1">
                            <p className="text-xs sm:text-sm text-gray-500 mb-1">by {item.brand}</p>
                            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{item.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 mb-3">Size: {item.weight}</p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                <button
                                  onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                                  className="px-2 sm:px-3 py-2 hover:bg-gray-100 transition-colors border-r border-gray-300"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                                <span className="px-3 sm:px-4 py-2 min-w-[2.5rem] sm:min-w-[3rem] text-center font-medium text-sm sm:text-base">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                                  className="px-2 sm:px-3 py-2 hover:bg-gray-100 transition-colors border-l border-gray-300"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                              </div>

                              <button
                                onClick={() => removeFromCart(item.product_id)}
                                className="text-red-600 hover:text-red-700 font-medium text-xs sm:text-sm flex items-center gap-1"
                              >
                                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                Delete
                              </button>
                            </div>
                          </div>

                          <div className="text-left sm:text-right sm:ml-4">
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">
                              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1">
                              ₹{item.price.toLocaleString('en-IN')} / {item.weight}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 lg:sticky lg:top-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items):
                <span className="text-xl sm:text-2xl text-gray-900 ml-2">₹{totalAmount.toLocaleString('en-IN')}</span>
              </h2>

              <div className="mb-4 flex items-start gap-2">
                <input type="checkbox" id="gift" className="mt-1" />
                <label htmlFor="gift" className="text-sm text-gray-700">
                  This order contains a gift
                </label>
              </div>

              <Button
                fullWidth
                onClick={() => navigate('/checkout')}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg mb-3"
              >
                Proceed to Buy
              </Button>

              <div className="border-t pt-4 mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Charges</span>
                  <span className="font-medium text-green-600">FREE</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Estimated Total</span>
                    <span className="font-bold text-xl text-gray-900">₹{totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
