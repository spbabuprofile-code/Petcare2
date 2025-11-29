import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CartPage } from './pages/CartPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { ClinicsPage } from './pages/ClinicsPage';
import { BlogPage } from './pages/BlogPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { AccountDashboard } from './pages/account/AccountDashboard';
import { ConsultationPage } from './pages/services/ConsultationPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/book-appointment" element={<BookAppointmentPage />} />
                <Route path="/clinics" element={<ClinicsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/account" element={<AccountDashboard />} />
                <Route path="/account/*" element={<AccountDashboard />} />
                <Route path="/services/consultation" element={<ConsultationPage />} />
                <Route path="/services/*" element={<ConsultationPage />} />
                <Route path="/wellness-plans" element={<AboutPage />} />
                <Route path="/terms" element={<StaticPage title="Terms & Conditions" />} />
                <Route path="/privacy" element={<StaticPage title="Privacy Policy" />} />
                <Route path="/refund-policy" element={<StaticPage title="Refund Policy" />} />
                <Route path="/checkout" element={<CheckoutPlaceholder />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

function StaticPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
      </div>
      <div className="section-container">
        <div className="prose max-w-none">
          <h2>Coming Soon</h2>
          <p>This page is under construction. Please check back later.</p>
        </div>
      </div>
    </div>
  );
}

function CheckoutPlaceholder() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <p className="text-text-secondary">Payment integration coming soon</p>
      </div>
    </div>
  );
}

export default App;
