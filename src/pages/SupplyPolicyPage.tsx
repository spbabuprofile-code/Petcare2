export function SupplyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-4">Supply Policy</h1>
          <p className="text-xl">Product supply, delivery, and fulfillment terms</p>
        </div>
      </div>

      <div className="section-container py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <p className="text-sm text-gray-500 mb-6">Last Updated: January 1, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Product Availability</h2>
            <p className="text-gray-700 mb-4">
              V-Care Pet Polyclinic strives to maintain adequate stock of all pet food, treats, supplements, and accessories. However, product availability is subject to change based on:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Current inventory levels at each clinic location</li>
              <li>Manufacturer supply and distribution schedules</li>
              <li>Seasonal demand fluctuations</li>
              <li>Product discontinuation by manufacturers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Delivery Coverage</h2>
            <p className="text-gray-700 mb-4">
              We offer fast delivery services for pet food and accessories within Bangalore city limits:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>2-Hour Express Delivery:</strong> Available for orders placed before 6:00 PM in selected areas</li>
              <li><strong>Same-Day Delivery:</strong> Orders placed before 12:00 PM will be delivered by 9:00 PM</li>
              <li><strong>Standard Delivery:</strong> 24-48 hours for all Bangalore locations</li>
              <li><strong>In-Store Pickup:</strong> Available at all three clinic locations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Delivery Areas</h2>
            <p className="text-gray-700 mb-4">
              We currently deliver to the following areas in Bangalore:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="list-disc pl-6 space-y-1">
                <li>Koramangala</li>
                <li>HSR Layout</li>
                <li>Sarjapur Road</li>
                <li>Marathahalli</li>
                <li>Whitefield</li>
                <li>Indiranagar</li>
                <li>Bellandur</li>
              </ul>
              <ul className="list-disc pl-6 space-y-1">
                <li>Electronic City</li>
                <li>BTM Layout</li>
                <li>JP Nagar</li>
                <li>Jayanagar</li>
                <li>Yelahanka</li>
                <li>Hebbal</li>
                <li>And surrounding areas</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Delivery Charges</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-gray-800 font-semibold mb-2">FREE Delivery on orders above ₹500</p>
              <p className="text-gray-700 text-sm">Orders below ₹500 will incur a delivery charge of ₹50</p>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>2-Hour Express Delivery: Additional ₹100 charge</li>
              <li>Delivery to locations outside standard coverage area: ₹150-300 based on distance</li>
              <li>In-store pickup: No delivery charges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Order Processing Time</h2>
            <p className="text-gray-700 mb-4">
              Orders are processed within the following timeframes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Online Orders:</strong> Processed within 1-2 hours during business hours</li>
              <li><strong>Phone Orders:</strong> Processed immediately upon confirmation</li>
              <li><strong>After-Hours Orders:</strong> Processed the next business day</li>
              <li><strong>Custom Orders:</strong> 3-5 business days for special product requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Product Quality Assurance</h2>
            <p className="text-gray-700 mb-4">
              All products supplied by V-Care Pet Polyclinic meet the following standards:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Sourced from authorized distributors and manufacturers</li>
              <li>Stored in climate-controlled facilities</li>
              <li>Checked for expiry dates before dispatch</li>
              <li>Minimum 6 months shelf life at time of delivery (unless specified)</li>
              <li>Packaged securely to prevent damage during transit</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Order Tracking</h2>
            <p className="text-gray-700 mb-4">
              Once your order is dispatched, you will receive:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Order confirmation via email/SMS</li>
              <li>Dispatch notification with estimated delivery time</li>
              <li>Delivery partner contact information</li>
              <li>Real-time tracking for 2-hour express deliveries</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Out of Stock Items</h2>
            <p className="text-gray-700 mb-4">
              If an ordered item is out of stock:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You will be notified within 2 hours of order placement</li>
              <li>We will suggest alternative products or similar brands</li>
              <li>You may choose to wait for restocking (typically 3-7 days)</li>
              <li>Full refund will be processed if you choose to cancel</li>
              <li>Partial deliveries available for multi-item orders</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Bulk Orders</h2>
            <p className="text-gray-700 mb-4">
              For bulk orders (above ₹10,000 or 50+ kg), please contact us in advance:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Special pricing available for bulk purchases</li>
              <li>3-5 business days advance notice required</li>
              <li>Free delivery for bulk orders above ₹15,000</li>
              <li>Dedicated support for kennels, shelters, and breeders</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Special Handling Products</h2>
            <p className="text-gray-700 mb-4">
              Certain products require special handling and may have extended delivery times:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Refrigerated Items:</strong> Specialized cold chain delivery</li>
              <li><strong>Prescription Diets:</strong> Veterinary verification required before dispatch</li>
              <li><strong>Live Products:</strong> Not available for delivery</li>
              <li><strong>Fragile Items:</strong> Extra packaging time required</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Delivery Failure</h2>
            <p className="text-gray-700 mb-4">
              If delivery cannot be completed due to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Incorrect address provided</li>
              <li>Customer unavailable at delivery location</li>
              <li>Refusal to accept delivery</li>
              <li>Inaccessible delivery location</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We will attempt redelivery once at no additional charge. Subsequent redelivery attempts will incur a ₹50 charge. Orders not collected within 3 days will be returned and refunded minus delivery charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Damaged or Defective Products</h2>
            <p className="text-gray-700 mb-4">
              If you receive damaged or defective products:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Report the issue within 24 hours of delivery</li>
              <li>Provide photographs of the damaged product and packaging</li>
              <li>Do not discard the product until replacement is confirmed</li>
              <li>Replacement or refund will be processed within 2-3 business days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact for Supply Issues</h2>
            <p className="text-gray-700 mb-4">
              For any supply-related queries or issues, please contact:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li><strong>Email:</strong> orders@vcarepetpolyclinic.com</li>
              <li><strong>Phone:</strong> 08147 006345 (9 AM - 9 PM)</li>
              <li><strong>WhatsApp:</strong> Available for order tracking and updates</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
