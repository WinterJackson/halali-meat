import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description: "Return and Refund Policy for Halali Meat Ltd - Quality guarantee and resolution procedures.",
};

export default function ReturnPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Return & Refund Policy</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Last updated: December 7, 2025
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base">
          <section className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              At Halali Meat Ltd, we are committed to delivering premium quality halal meat products. 
              This Return & Refund Policy outlines the conditions and procedures for returns, refunds, 
              and quality claims for our international customers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. Quality Guarantee</h2>
            <p className="text-muted-foreground leading-relaxed">
              We guarantee that all products:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Meet the specifications agreed upon in the order confirmation</li>
              <li>Are properly halal-certified and compliant with food safety standards</li>
              <li>Are packaged according to international export standards</li>
              <li>Maintain proper temperature throughout our cold chain process</li>
              <li>Have valid shelf life at the time of shipment</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">2. Grounds for Return or Refund</h2>
            <p className="text-muted-foreground leading-relaxed">
              Returns or refunds are accepted under the following conditions:
            </p>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">2.1 Quality Defects</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Product does not match agreed specifications (cut, grade, weight)</li>
                <li>Product shows signs of spoilage upon arrival</li>
                <li>Incorrect halal certification or missing documentation</li>
                <li>Contamination or foreign objects in packaging</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">2.2 Shipping or Handling Errors</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Temperature abuse during our leg of transportation (proven by data logger)</li>
                <li>Damaged packaging due to improper handling by our carrier</li>
                <li>Significant shortage in quantity shipped versus invoiced</li>
                <li>Wrong product delivered</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">2.3 Non-Compliance</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Product rejected by destination country authorities due to our documentation errors</li>
                <li>Failure to meet explicitly agreed-upon import requirements</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">3. Non-Returnable Conditions</h2>
            <p className="text-muted-foreground leading-relaxed">
              We <strong>cannot</strong> accept returns or issue refunds in the following cases:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Natural variations in meat products (slight color, marbling differences within grade)</li>
              <li>Buyer's remorse or change of mind after order confirmation</li>
              <li>Temperature abuse after delivery to customer's control</li>
              <li>Improper storage or handling by customer</li>
              <li>Expired shelf life due to customer's delayed clearance/pickup</li>
              <li>Damage caused by customer's customs broker or local carrier</li>
              <li>Rejection based on requirements not communicated before order</li>
              <li>Market price fluctuations or currency changes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">4. Claim Procedure</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">4.1 Immediate Notification</h3>
              <p className="text-muted-foreground leading-relaxed">
                Upon receiving the shipment, you must:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Inspect immediately:</strong> Check quality, quantity, temperature upon delivery</li>
                <li><strong>Document issues:</strong> Take clear photos/videos of any problems</li>
                <li><strong>Note on delivery receipt:</strong> Mark any visible damage or discrepancies</li>
                <li><strong>Preserve temperature logs:</strong> Retrieve data logger from shipment</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">4.2 Filing a Claim</h3>
              <p className="text-muted-foreground leading-relaxed">
                To file a quality claim or return request:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Contact us within 48 hours of delivery</strong>
                  <p className="text-sm">Email: claims@halalimeatltd.com with subject "CLAIM - [Order Number]"</p>
                </li>
                <li>
                  <strong>Provide detailed information:</strong>
                  <ul className="list-disc pl-6 mt-1 text-sm">
                    <li>Order number and invoice date</li>
                    <li>Product details (item code, lot number)</li>
                    <li>Nature of issue (quality, quantity, temperature, damage)</li>
                    <li>Temperature log data</li>
                    <li>Photos/videos showing the issue</li>
                    <li>Delivery receipt with noted discrepancies</li>
                  </ul>
                </li>
                <li>
                  <strong>Preserve the product:</strong>
                  <p className="text-sm">Keep product in proper refrigeration as evidence until claim is resolved</p>
                </li>
                <li>
                  <strong>Do not dispose:</strong>
                  <p className="text-sm">Do not destroy or dispose of product without our written authorization</p>
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">4.3 Claim Review Timeline</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Acknowledgment:</strong> Within 24 hours of claim submission</li>
                <li><strong>Initial Review:</strong> 2-3 business days</li>
                <li><strong>Investigation:</strong> 5-10 business days (may include third-party inspection)</li>
                <li><strong>Resolution:</strong> Communicated within 15 business days</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">5. Resolution Options</h2>
            <p className="text-muted-foreground leading-relaxed">
              If your claim is validated, we offer the following resolutions:
            </p>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">5.1 Full Refund</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>100% refund of product cost for major quality failures</li>
                <li>Issued via the original payment method</li>
                <li>Processing time: 7-14 business days</li>
                <li>Shipping costs refunded only if error was our fault</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">5.2 Partial Refund</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Proportional refund for partial quality issues</li>
                <li>Offered when product is still usable but below specification</li>
                <li>Percentage determined by severity of issue</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">5.3 Replacement Shipment</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Priority replacement shipment at no additional cost</li>
                <li>Best option for ongoing business relationships</li>
                <li>Processed within next production cycle (typically 2-3 weeks)</li>
                <li>Original defective product may need to be disposed (we provide authorization)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">5.4 Store Credit</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>110% of refund value as credit toward future orders</li>
                <li>Valid for 12 months</li>
                <li>Transferable to other products or order modifications</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">6. Physical Returns</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Important:</strong> Due to the perishable nature of meat products and international 
              shipping complexities, physical returns are generally <strong>not feasible</strong>. Instead:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Products are typically disposed of locally per our authorization</li>
              <li>Photographic/video evidence serves as proof of claim</li>
              <li>Third-party inspection may be arranged at our cost if needed</li>
              <li>In rare cases requiring return, we arrange and cover all logistics</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">7. Shipping Cost Responsibility</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-border rounded-lg">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">Scenario</th>
                    <th className="px-4 py-2 text-left font-semibold">Shipping Cost Responsibility</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">Our quality or documentation error</td>
                    <td className="px-4 py-2">We refund shipping costs</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">Carrier damage during our shipping leg</td>
                    <td className="px-4 py-2">We refund shipping costs</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">Customer's error or change of mind</td>
                    <td className="px-4 py-2">Customer responsibility (no refund)</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">Customs rejection due to customer's incomplete documents</td>
                    <td className="px-4 py-2">Customer responsibility</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">8. Dispute Escalation</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are not satisfied with our resolution:
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
              <li>Request escalation to our Quality Manager within 7 days</li>
              <li>If still unresolved, matter may be reviewed by senior management</li>
              <li>Final recourse: Mediation or arbitration per Terms & Conditions</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">9. Prevent Issues</h2>
            <p className="text-muted-foreground leading-relaxed">
              To minimize potential issues:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Communicate clearly:</strong> Specify all requirements before ordering</li>
              <li><strong>Review quotes carefully:</strong> Confirm specifications match your needs</li>
              <li><strong>Arrange customs clearance:</strong> Ensure timely pickup to prevent spoilage</li>
              <li><strong>Verify import rules:</strong> Confirm compliance before ordering</li>
              <li><strong>Inspect promptly:</strong> Check shipment immediately upon receipt</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">10. Contact for Claims</h2>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-muted-foreground">
              <p><strong>Halali Meat Ltd - Quality & Claims Department</strong></p>
              <p>Email: claims@halalimeatltd.com</p>
              <p>Phone: [Available on request]</p>
              <p>Business Hours: Monday-Friday, 8:00 AM - 5:00 PM EAT</p>
              <p>Visit our <a href="/contact" className="underline font-medium text-foreground hover:text-primary">Contact Page</a></p>
            </div>
          </section>

          <section className="space-y-4 border-t pt-6">
            <p className="text-xs text-muted-foreground italic">
              This policy applies to B2B customers only. We reserve the right to amend this policy 
              with notice. Specific return/refund terms in individual contracts take precedence over 
              this general policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
