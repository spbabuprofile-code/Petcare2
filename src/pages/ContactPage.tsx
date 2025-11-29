import { useState } from 'react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We're here to help. Reach out to us anytime!</p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <Card>
              <form onSubmit={handleSubmit}>
                {submitted && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-600">
                    Thank you! We'll get back to you soon.
                  </div>
                )}

                <Input
                  type="text"
                  label="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mb-4"
                />

                <Input
                  type="email"
                  label="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mb-4"
                />

                <Input
                  type="tel"
                  label="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mb-4"
                />

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    className="input-field"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" fullWidth>
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <Card className="mb-6">
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-4">📞</div>
                <div>
                  <h3 className="font-semibold mb-1">Customer Support</h3>
                  <p className="text-text-secondary">Monday - Sunday: 9:00 AM - 9:00 PM</p>
                  <p className="text-primary font-medium mt-2">1800-123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="mb-6">
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-4">📧</div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-text-secondary">General Inquiries</p>
                  <p className="text-primary font-medium mt-2">support@vcarepet.com</p>
                  <p className="text-text-secondary mt-3">For careers and partnerships</p>
                  <p className="text-primary font-medium mt-1">careers@vcarepet.com</p>
                </div>
              </div>
            </Card>

            <Card className="mb-6">
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-4">🚑</div>
                <div>
                  <h3 className="font-semibold mb-1">Emergency Care</h3>
                  <p className="text-text-secondary">24/7 emergency services available at select locations</p>
                  <p className="text-primary font-medium mt-2">Emergency Hotline: 1800-EMERGENCY</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <div className="text-3xl mr-4">🏢</div>
                <div>
                  <h3 className="font-semibold mb-1">Head Office</h3>
                  <p className="text-text-secondary">
                    V-Care Pet Polyclinic<br />
                    DLF Cyber City, Phase 2<br />
                    Gurgaon, Haryana 122002<br />
                    India
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
