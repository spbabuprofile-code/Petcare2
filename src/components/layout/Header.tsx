import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { Button } from '../common/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">V-Care Pet Polyclinic</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="text-text-primary hover:text-primary font-medium"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link to="/services/consultation" className="block px-4 py-2 hover:bg-gray-50">Veterinary Consultation</Link>
                  <Link to="/services/grooming" className="block px-4 py-2 hover:bg-gray-50">Grooming</Link>
                  <Link to="/services/pet-food" className="block px-4 py-2 hover:bg-gray-50">Pet Food Delivery</Link>
                  <Link to="/services/diagnostics" className="block px-4 py-2 hover:bg-gray-50">Diagnostics</Link>
                  <Link to="/services/surgery" className="block px-4 py-2 hover:bg-gray-50">Surgery</Link>
                  <Link to="/services/emergency" className="block px-4 py-2 hover:bg-gray-50">Emergency Care</Link>
                </div>
              )}
            </div>
            <Link to="/clinics" className="text-text-primary hover:text-primary font-medium">Clinics</Link>
            <Link to="/shop" className="text-text-primary hover:text-primary font-medium">Shop</Link>
            <Link to="/about" className="text-text-primary hover:text-primary font-medium">About Us</Link>
            <Link to="/blog" className="text-text-primary hover:text-primary font-medium">Blog</Link>
            <Link to="/contact" className="text-text-primary hover:text-primary font-medium">Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/cart" className="relative text-text-primary hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            {user ? (
              <div className="relative group">
                <button className="text-text-primary hover:text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/account" className="block px-4 py-2 hover:bg-gray-50">My Account</Link>
                  <Link to="/account/pets" className="block px-4 py-2 hover:bg-gray-50">My Pets</Link>
                  <Link to="/account/appointments" className="block px-4 py-2 hover:bg-gray-50">Appointments</Link>
                  <Link to="/account/orders" className="block px-4 py-2 hover:bg-gray-50">Orders</Link>
                  <button onClick={signOut} className="block w-full text-left px-4 py-2 hover:bg-gray-50">Sign Out</button>
                </div>
              </div>
            ) : (
              <Button onClick={() => navigate('/login')} variant="secondary">Login</Button>
            )}
            <Button onClick={() => navigate('/book-appointment')}>Book Appointment</Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/services/consultation" className="text-text-primary hover:text-primary">Services</Link>
              <Link to="/clinics" className="text-text-primary hover:text-primary">Clinics</Link>
              <Link to="/shop" className="text-text-primary hover:text-primary">Shop</Link>
              <Link to="/about" className="text-text-primary hover:text-primary">About Us</Link>
              <Link to="/blog" className="text-text-primary hover:text-primary">Blog</Link>
              <Link to="/contact" className="text-text-primary hover:text-primary">Contact</Link>
              <Link to="/cart" className="text-text-primary hover:text-primary">Cart ({totalItems})</Link>
              {user ? (
                <>
                  <Link to="/account" className="text-text-primary hover:text-primary">My Account</Link>
                  <button onClick={signOut} className="text-left text-text-primary hover:text-primary">Sign Out</button>
                </>
              ) : (
                <Link to="/login" className="text-text-primary hover:text-primary">Login</Link>
              )}
              <Button onClick={() => navigate('/book-appointment')} fullWidth>Book Appointment</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
