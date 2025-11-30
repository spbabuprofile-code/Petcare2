export function RefundCancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-4">Refund & Cancellation Policy</h1>
          <p className="text-xl">Understand our refund, return, and cancellation terms</p>
        </div>
      </div>

      <div className="section-container py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <p className="text-sm text-gray-500 mb-6">Last Updated: January 1, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Appointment Cancellation Policy</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Customer Cancellations</h3>
            <p className="text-gray-700 mb-4">
              Appointments may be cancelled or rescheduled under the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>24+ Hours Notice:</strong> Full refund or free rescheduling</li>
              <li><strong>12-24 Hours Notice:</strong> 50% cancellation fee applies</li>
              <li><strong>Less than 12 Hours:</strong> Full appointment fee charged</li>
              <li><strong>No-Show:</strong> Full appointment fee charged, no refund</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Clinic Cancellations</h3>
            <p className="text-gray-700 mb-4">
              If V-Care Pet Polyclinic needs to cancel or reschedule your appointment:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You will be notified at least 6 hours in advance</li>
              <li>Alternative time slots will be offered with priority booking</li>
              <li>Full refund if no suitable alternative is available</li>
              <li>10% discount on next appointment as compensation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Product Returns & Refunds</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Returnable Items</h3>
            <p className="text-gray-700 mb-4">
              The following products are eligible for return within 7 days of delivery:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Unopened pet food packages with intact seals</li>
              <li>Unused pet accessories in original packaging</li>
              <li>Defective or damaged products</li>
              <li>Wrong items delivered</li>
              <li>Products with manufacturing defects</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Non-Returnable Items</h3>
            <p className="text-gray-700 mb-4">
              The following products cannot be returned or refunded:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Opened pet food packages (for hygiene and safety reasons)</li>
              <li>Used grooming products or shampoos</li>
              <li>Prescription medications and supplements</li>
              <li>Custom-ordered or personalized items</li>
              <li>Sale or clearance items marked "Final Sale"</li>
              <li>Products purchased more than 7 days ago</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Return Process</h2>
            <p className="text-gray-700 mb-4">
              To initiate a return:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Contact us within 7 days of delivery via email or phone</li>
              <li>Provide order number, product details, and reason for return</li>
              <li>Send photographs if claiming damage or defect</li>
              <li>Await return authorization and instructions</li>
              <li>Return the product in original packaging with all tags and labels</li>
              <li>Refund will be processed within 5-7 business days after inspection</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Methods</h2>
            <p className="text-gray-700 mb-4">
              Refunds will be issued using the original payment method:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Credit/Debit Card:</strong> 5-7 business days</li>
              <li><strong>UPI/Net Banking:</strong> 3-5 business days</li>
              <li><strong>Cash Payment:</strong> Bank transfer within 3 business days</li>
              <li><strong>Store Credit:</strong> Issued immediately for future purchases</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Note: Bank processing times may vary. V-Care Pet Polyclinic is not responsible for delays caused by financial institutions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Partial Refunds</h2>
            <p className="text-gray-700 mb-4">
              Partial refunds may be issued in the following situations:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Products returned without original packaging (50% refund)</li>
              <li>Products with signs of use or damage caused by customer</li>
              <li>Products returned after 7 days but within 14 days (75% refund)</li>
              <li>Missing accessories or components from the product</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Exchange Policy</h2>
            <p className="text-gray-700 mb-4">
              Product exchanges are available for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Different size or flavor of the same product</li>
              <li>Defective products (exchanged with same or equivalent product)</li>
              <li>Wrong items delivered (exchanged at no additional cost)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Exchanges must be requested within 7 days of delivery. No additional delivery charges for genuine exchange cases.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Cancellation</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Grooming Services</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Cancel 24+ hours before: Full refund</li>
              <li>Cancel 12-24 hours before: 50% refund</li>
              <li>Cancel less than 12 hours: No refund</li>
              <li>If pet shows aggressive behavior: Partial refund based on work completed</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Surgical Procedures</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Cancel 48+ hours before: Full refund minus deposit (₹500-1000)</li>
              <li>Cancel 24-48 hours before: 50% refund</li>
              <li>Cancel less than 24 hours: No refund due to preparation costs</li>
              <li>Medical reasons: Full refund with veterinary documentation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Damaged or Defective Products</h2>
            <p className="text-gray-700 mb-4">
              If you receive damaged or defective products:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Report within 24 hours of delivery with photographs</li>
              <li>Do not use or dispose of the product</li>
              <li>Keep all original packaging and documentation</li>
              <li>We will arrange pickup at no cost to you</li>
              <li>Choose between replacement or full refund</li>
              <li>Refund/replacement processed within 3-5 business days</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Shipping Charges Refund</h2>
            <p className="text-gray-700 mb-4">
              Delivery charges are refundable only in the following cases:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Wrong item delivered due to our error</li>
              <li>Defective or damaged product received</li>
              <li>Order cancelled by V-Care Pet Polyclinic</li>
              <li>Delivery failure due to logistical issues on our end</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Delivery charges are non-refundable for customer-initiated cancellations or change of mind.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Veterinary Service Refunds</h2>
            <p className="text-gray-700 mb-4">
              Veterinary consultation and treatment fees are non-refundable once services have been rendered. However, refunds may be considered in exceptional circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Incorrect diagnosis later proven (case-by-case basis)</li>
              <li>Services not provided as agreed</li>
              <li>Billing errors (corrected immediately)</li>
              <li>Double charging (refunded immediately)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Refund Timeline</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-gray-800 font-semibold mb-2">Standard Refund Processing:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Product inspection: 1-2 business days</li>
                <li>Refund approval: 1 business day</li>
                <li>Bank processing: 3-7 business days</li>
                <li>Total time: 5-10 business days from return receipt</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Customer Satisfaction Guarantee</h2>
            <p className="text-gray-700 mb-4">
              At V-Care Pet Polyclinic, we stand behind our products and services. If you are not satisfied with a product due to quality issues (not preference), we will work with you to find a solution, which may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Product replacement with a different brand</li>
              <li>Store credit for future purchases</li>
              <li>Consultation with our veterinarians for alternative options</li>
              <li>Full refund in genuine cases</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. How to Request Refund or Cancellation</h2>
            <p className="text-gray-700 mb-4">
              Contact us through any of these channels:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li><strong>Email:</strong> refunds@vcarepetpolyclinic.com</li>
              <li><strong>Phone:</strong> 08147 006345 (9 AM - 9 PM)</li>
              <li><strong>In-Person:</strong> Visit any of our three Bangalore locations</li>
              <li><strong>Website:</strong> Use the cancellation option in your account</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Please have your order number, appointment ID, or receipt ready when contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Force Majeure</h2>
            <p className="text-gray-700 mb-4">
              V-Care Pet Polyclinic will not be liable for delays or cancellations caused by circumstances beyond our reasonable control, including but not limited to natural disasters, pandemics, government restrictions, or supply chain disruptions. In such cases, full refunds will be provided for affected appointments and orders.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              If you have concerns about a refund or cancellation decision:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Contact our customer service team for initial resolution</li>
              <li>If unresolved, escalate to clinic manager within 7 days</li>
              <li>Final review by senior management within 14 days</li>
              <li>All decisions will be communicated in writing</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
