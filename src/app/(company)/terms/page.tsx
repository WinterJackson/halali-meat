import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Halali Meat Ltd - Legal terms governing the use of our services.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Terms & Conditions</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Last updated: December 7, 2025
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base">
          <section className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions ("Terms") govern your use of the Halali Meat Ltd website 
              and services. By accessing our website or placing an order, you agree to be bound by 
              these Terms. Please read them carefully before proceeding.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. Definitions</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>"Company," "We," "Us," "Our"</strong> refers to Halali Meat Ltd</li>
              <li><strong>"Customer," "You," "Your"</strong> refers to the individual or entity purchasing our products</li>
              <li><strong>"Products"</strong> refers to all meat products offered for sale</li>
              <li><strong>"Services"</strong> includes product supply, export services, and related activities</li>
              <li><strong>"Order"</strong> means a confirmed purchase agreement between parties</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">2. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using our website, requesting quotes, or placing orders, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>You have read and understood these Terms</li>
              <li>You have the legal authority to enter into binding contracts</li>
              <li>You represent a legitimate business entity (for B2B customers)</li>
              <li>All information provided is accurate and complete</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">3. Quote Requests & Orders</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">3.1 Quote Process</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Quote requests submitted via our website are non-binding inquiries</li>
                <li>We reserve the right to accept or decline any quote request</li>
                <li>Quotes are valid for 30 days unless otherwise specified</li>
                <li>Pricing is subject to market conditions and availability</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">3.2 Order Confirmation</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>An order is only binding upon our written confirmation</li>
                <li>We may request additional documentation before confirming orders</li>
                <li>Minimum order quantities may apply</li>
                <li>Orders are subject to product availability</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">3.3 Order Cancellation</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Customers may cancel orders before production begins</li>
                <li>Cancellations after production incur a 25% restocking fee</li>
                <li>We reserve the right to cancel orders due to force majeure events</li>
                <li>Full refunds apply if we cancel an order</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">4. Pricing & Payment</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">4.1 Pricing</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>All prices are quoted in USD unless otherwise stated</li>
                <li>Prices exclude shipping, insurance, duties, and taxes</li>
                <li>Prices are subject to change without prior notice</li>
                <li>Volume discounts available for large orders</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">4.2 Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Payment terms: 50% deposit, 50% before shipment (standard)</li>
                <li>Alternative terms subject to credit approval</li>
                <li>Accepted methods: Bank transfer, Letter of Credit (LC)</li>
                <li>Late payment incurs 2% monthly interest charge</li>
                <li>Orders not paid within 7 days may be cancelled</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">4.3 Currency & Exchange</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currency exchange rate fluctuations are the customer's responsibility. Prices are 
                locked at the exchange rate on the date of invoice issuance.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">5. Product Quality & Compliance</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">5.1 Quality Standards</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>All products meet international food safety standards</li>
                <li>Halal certification provided for all meat products</li>
                <li>Veterinary health certificates included with shipments</li>
                <li>HACCP compliance maintained throughout processing</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">5.2 Product Variations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Natural variations in meat products (color, marbling, size) are expected. Products 
                meet specified grade standards but may vary within acceptable ranges.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">5.3 Regulatory Compliance</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Customers responsible for verifying import compliance in destination country</li>
                <li>We provide standard export documentation</li>
                <li>Additional certifications available upon request (fees may apply)</li>
                <li>Customers must obtain necessary import licenses</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">6. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website (text, images, logos, designs) is owned by Halali Meat Ltd 
              or licensed to us. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Reproduce, distribute, or modify our content without permission</li>
              <li>Use our trademarks or brand identity</li>
              <li>Scrape or harvest data from our website</li>
              <li>Reverse engineer or copy our website design</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Halali Meat Ltd shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Third-party claims arising from product use</li>
              <li>Delays or failures due to force majeure events</li>
              <li>Issues arising from improper storage or handling after delivery</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Our total liability for any claim shall not exceed the invoice value of the affected products.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">8. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless Halali Meat Ltd from any claims, damages, or 
              expenses arising from:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Your violation of these Terms</li>
              <li>Your use or misuse of our products</li>
              <li>Violation of third-party rights</li>
              <li>False or misleading information provided to us</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">9. Dispute Resolution</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">9.1 Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of Kenya. Any disputes shall be subject to the 
                exclusive jurisdiction of Kenyan courts.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">9.2 Arbitration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Parties agree to attempt mediation before litigation. If mediation fails, disputes 
                may be submitted to arbitration under Kenyan Arbitration Act.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">10. Privacy & Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of our website is also governed by our Privacy Policy. By accepting these Terms, 
              you consent to our data collection and use practices as described in the Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">11. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes become effective upon 
              posting to the website. Continued use of our services constitutes acceptance of modified Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">12. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found invalid or unenforceable, the remaining provisions 
              shall continue in full force and effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">13. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms, please contact us:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-muted-foreground">
              <p><strong>Halali Meat Ltd</strong></p>
              <p>Email: legal@halalimeatltd.com</p>
              <p>Visit our <a href="/contact" className="underline font-medium text-foreground hover:text-primary">Contact Page</a></p>
            </div>
          </section>

          <section className="space-y-4 border-t pt-6">
            <p className="text-xs text-muted-foreground italic">
              By using our website or services, you acknowledge that you have read, understood, and 
              agree to be bound by these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
