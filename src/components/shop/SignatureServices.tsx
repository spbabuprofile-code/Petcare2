import { Card } from '../common/Card';

export function SignatureServices() {
  return (
    <div className="bg-white py-12">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          V-Care Pet Polyclinic's Signature Services
        </h2>
        <p className="text-gray-600 mb-8">
          Keeping your pet healthy and happy starts with the best products on the Planet
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-none">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2 Hours Delivery</h3>
                <p className="text-gray-700 text-sm">
                  Fastest Doorstep Delivery of Pet Essentials
                </p>
              </div>
              <div className="text-4xl">🏍️</div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-none">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Best Offers</h3>
                <p className="text-gray-700 text-sm">
                  Unbeatable Discounts on Pet Food, Treats, Toys and Accessories
                </p>
              </div>
              <div className="text-4xl">🎁</div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-none">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Diverse Selection</h3>
                <p className="text-gray-700 text-sm">
                  Wide Range of Pet Brands for All Your Needs
                </p>
              </div>
              <div className="text-4xl">🍽️</div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cash On Delivery</h3>
                <p className="text-gray-700 text-sm">
                  Easy & Secure Payment Options
                </p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
