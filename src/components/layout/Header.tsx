import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMedicalCareOpen, setIsMedicalCareOpen] = useState(false);
  const [isOurServicesOpen, setIsOurServicesOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-text-primary">V-Care Pet Polyclinic</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            <Link to="/" className="text-text-primary hover:text-primary font-semibold text-lg transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-text-primary hover:text-primary font-semibold text-lg transition-colors">
              About Us
            </Link>
            <Link to="/clinics" className="text-text-primary hover:text-primary font-semibold text-lg transition-colors">
              Our Clinics
            </Link>
            <Link to="/services/grooming" className="text-text-primary hover:text-primary font-semibold text-lg transition-colors">
              Grooming
            </Link>

            <div className="relative group">
              <button
                className="text-text-primary hover:text-primary font-semibold text-lg transition-colors"
                onMouseEnter={() => setIsMedicalCareOpen(true)}
                onMouseLeave={() => setIsMedicalCareOpen(false)}
              >
                Medical Care
              </button>
              {isMedicalCareOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-100"
                  onMouseEnter={() => setIsMedicalCareOpen(true)}
                  onMouseLeave={() => setIsMedicalCareOpen(false)}
                >
                  <Link to="/services/consultation" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Veterinary Consultation
                  </Link>
                  <Link to="/services/surgery" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Surgery & Orthopedics
                  </Link>
                  <Link to="/services/diagnostics" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Diagnostics & Radiology
                  </Link>
                  <Link to="/services/dental" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Dental Care
                  </Link>
                  <Link to="/services/vaccination" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Vaccination Programs
                  </Link>
                  <Link to="/services/emergency" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    24/7 Emergency Care
                  </Link>
                </div>
              )}
            </div>

            <Link to="/shop" className="text-text-primary hover:text-primary font-semibold text-lg transition-colors">
              Food & Accessories
            </Link>

            <div className="relative group">
              <button
                className="text-text-primary hover:text-primary font-semibold text-lg transition-colors"
                onMouseEnter={() => setIsOurServicesOpen(true)}
                onMouseLeave={() => setIsOurServicesOpen(false)}
              >
                Our Services
              </button>
              {isOurServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-100"
                  onMouseEnter={() => setIsOurServicesOpen(true)}
                  onMouseLeave={() => setIsOurServicesOpen(false)}
                >
                  <Link to="/services/consultation" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Veterinary Consultation
                  </Link>
                  <Link to="/services/grooming" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Grooming Services
                  </Link>
                  <Link to="/services/surgery" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Surgery
                  </Link>
                  <Link to="/services/diagnostics" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Diagnostics
                  </Link>
                  <Link to="/services/emergency" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Emergency Care
                  </Link>
                  <Link to="/shop" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Pet Food & Supplies
                  </Link>
                  <Link to="/blog" className="block px-4 py-2.5 hover:bg-gray-50 text-text-primary hover:text-primary transition-colors">
                    Pet Care Resources
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/cart" className="relative text-text-primary hover:text-primary transition-colors p-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="px-6 py-2.5 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                  Account
                </button>
                <div className="absolute right-0 top-full mt-2 w-52 bg-white shadow-lg rounded-lg py-2 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
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
                    className="block w-full text-left px-4 py-2.5 hover:bg-gray-50 text-red-600 hover:text-red-700 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-2.5 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Login
              </button>
            )}

            <button
              onClick={() => navigate('/book-appointment')}
              className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-[#E55A2A] transition-colors shadow-sm"
            >
              Book Appointment
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
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

              <div className="py-2">
                <p className="text-sm font-semibold text-gray-500 px-2 mb-2">Medical Care</p>
                <Link to="/services/consultation" className="block py-2 px-4 text-text-secondary hover:text-primary hover:bg-gray-50 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Veterinary Consultation
                </Link>
                <Link to="/services/surgery" className="block py-2 px-4 text-text-secondary hover:text-primary hover:bg-gray-50 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Surgery & Orthopedics
                </Link>
                <Link to="/services/diagnostics" className="block py-2 px-4 text-text-secondary hover:text-primary hover:bg-gray-50 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Diagnostics
                </Link>
                <Link to="/services/emergency" className="block py-2 px-4 text-text-secondary hover:text-primary hover:bg-gray-50 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Emergency Care
                </Link>
              </div>

              <Link
                to="/shop"
                className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Food & Accessories
              </Link>

              <Link
                to="/cart"
                className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart ({totalItems})
              </Link>

              {user ? (
                <>
                  <Link
                    to="/account"
                    className="text-text-primary hover:text-primary font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Account
                  </Link>
                  <button
                    onClick={() => { signOut(); setIsMenuOpen(false); }}
                    className="text-left text-red-600 hover:text-red-700 font-semibold py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-primary hover:text-[#E55A2A] font-semibold py-2 px-2 rounded hover:bg-orange-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}

              <button
                onClick={() => { navigate('/book-appointment'); setIsMenuOpen(false); }}
                className="bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#E55A2A] transition-colors shadow-sm mt-2"
              >
                Book Appointment
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
