import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/image copy copy copy.png"
              alt="V-Care Pet Polyclinic"
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-text-primary hover:text-primary font-semibold text-base transition-colors whitespace-nowrap">
                Home
              </Link>
              <Link to="/about" className="text-text-primary hover:text-primary font-semibold text-base transition-colors whitespace-nowrap">
                About Us
              </Link>
              <Link to="/clinics" className="text-text-primary hover:text-primary font-semibold text-base transition-colors whitespace-nowrap">
                Our Clinics
              </Link>
              <Link to="/services/grooming" className="text-text-primary hover:text-primary font-semibold text-base transition-colors whitespace-nowrap">
                Grooming
              </Link>
              <Link to="/services/consultation" className="text-text-primary hover:text-primary font-semibold text-base transition-colors whitespace-nowrap">
                Medical Care
              </Link>
              <Link to="/shop" className="text-text-primary hover:text-primary font-semibold text-base transition-colors whitespace-nowrap">
                Food & Accessories
              </Link>
              <Link to="/services" className="text-text-primary hover:text-primary font-semibold text-base transition-colors whitespace-nowrap">
                Our Services
              </Link>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6 text-text-primary" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            {user ? (
              <div className="relative group">
                <button className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center hover:bg-blue-600 transition-colors text-base">
                  {user.email?.substring(0, 2).toUpperCase() || 'U'}
                </button>
                <div className="absolute right-0 top-full mt-2 w-52 bg-white shadow-lg rounded-lg py-2 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                  </div>
                  <Link to="/account" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    My Account
                  </Link>
                  <Link to="/account/pets" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    My Pets
                  </Link>
                  <Link to="/account/appointments" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Appointments
                  </Link>
                  <Link to="/account/orders" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Orders
                  </Link>
                  <button
                    onClick={signOut}
                    className="block w-full text-left px-4 py-2.5 hover:bg-gray-50 text-red-600 hover:text-red-700 transition-colors border-t border-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="block">
                <button className="h-12 px-8 border-2 border-primary text-primary rounded-lg font-bold hover:bg-blue-50 transition-colors text-base whitespace-nowrap">
                  Login
                </button>
              </Link>
            )}
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6 text-text-primary" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="p-2 touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/clinics"
                className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Clinics
              </Link>
              <Link
                to="/services/grooming"
                className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Grooming
              </Link>

              <Link
                to="/services/consultation"
                className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Medical Care
              </Link>

              <Link
                to="/shop"
                className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Food & Accessories
              </Link>

              <Link
                to="/services"
                className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>

              {user ? (
                <>
                  <div className="py-2 px-2 border-t border-gray-200 mt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-white font-semibold flex items-center justify-center">
                        {user.email?.substring(0, 2).toUpperCase() || 'U'}
                      </div>
                      <p className="text-sm font-medium text-gray-900 truncate flex-1">{user.email}</p>
                    </div>
                  </div>
                  <Link
                    to="/account"
                    className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Account
                  </Link>
                  <Link
                    to="/account/pets"
                    className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Pets
                  </Link>
                  <Link
                    to="/account/appointments"
                    className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Appointments
                  </Link>
                  <Link
                    to="/account/orders"
                    className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Orders
                  </Link>
                  <button
                    onClick={() => { signOut(); setIsMenuOpen(false); }}
                    className="text-left text-red-600 hover:text-red-700 font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors w-full border-t border-gray-200 mt-2 pt-3"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-primary hover:text-blue-700 font-semibold py-2 px-2 rounded hover:bg-blue-50 transition-colors border-t border-gray-200 mt-2 pt-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
