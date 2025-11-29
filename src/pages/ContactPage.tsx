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
              <div>
                <h3 className="font-semibold mb-3 text-lg">📍 Kaikondrahalli Clinic</h3>
                <p className="text-text-secondary text-sm mb-2">
                  65/1C, Sarjapur – Marathahalli Rd<br />
                  Next to Jain Heights, Kaikondrahalli<br />
                  Bangalore - 560035
                </p>
                <p className="text-primary font-semibold">📞 08147 006345</p>
                <p className="text-xs text-accent-green mt-2">✓ 24/7 Emergency Care Available</p>
              </div>
            </Card>

            <Card className="mb-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg">📍 Koramangala Clinic</h3>
                <p className="text-text-secondary text-sm mb-2">
                  1st Main Cross, Jakkasandra<br />
                  1st Block, Koramangala<br />
                  Bangalore - 560034
                </p>
                <p className="text-primary font-semibold">📞 080 2552 5834</p>
                <p className="text-xs text-text-secondary mt-2">Hours: Mon-Sun 9:00 AM - 9:00 PM</p>
              </div>
            </Card>

            <Card className="mb-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg">📍 Whitefield Clinic</h3>
                <p className="text-text-secondary text-sm mb-2">
                  Ground Floor, 1, Whitefield Main Rd<br />
                  Opp. CSI Church, Sathya Sai Layout<br />
                  Bangalore - 560066
                </p>
                <p className="text-primary font-semibold">📞 08147 006341</p>
                <p className="text-xs text-accent-green mt-2">✓ 24/7 Emergency Care Available</p>
              </div>
            </Card>

            <Card>
              <div>
                <h3 className="font-semibold mb-3 text-lg">📧 Email & Support</h3>
                <p className="text-text-secondary text-sm">General Inquiries & Appointments</p>
                <p className="text-primary font-medium mt-1 mb-3">info@vcarepetpolyclinic.com</p>
                <p className="text-text-secondary text-sm">Emergency Support</p>
                <p className="text-primary font-medium mt-1">Call clinic numbers above for 24/7 emergency care</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
