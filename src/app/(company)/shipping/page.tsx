import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description: "Shipping and Delivery Policy for Halali Meat Ltd - International export terms and conditions.",
};

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Shipping & Delivery Policy</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Last updated: December 7, 2025
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base">
          <section className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              This Shipping & Delivery Policy outlines our international export procedures, shipping 
              methods, delivery timeframes, and responsibilities. We are committed to ensuring safe, 
              timely, and compliant delivery of all products.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. Shipping Methods</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">1.1 Air Freight</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Transit Time:</strong> 3-7 days depending on destination</li>
                <li><strong>Best For:</strong> Urgent orders, chilled products, small volumes</li>
                <li><strong>Temperature Control:</strong> Refrigerated containers maintaining 0-4°C</li>
                <li><strong>Airports:</strong> Jomo Kenyatta International (NBO), Mombasa (MBA)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">1.2 Sea Freight</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Transit Time:</strong> 14-45 days depending on destination</li>
                <li><strong>Best For:</strong> Large volume orders, frozen products</li>
                <li><strong>Temperature Control:</strong> Reefer containers at -18°C to -25°C</li>
                <li><strong>Ports:</strong> Mombasa Port (primary), Dar es Salaam (alternative)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">1.3 Method Selection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Shipping method is determined by: product type (chilled/frozen), order urgency, 
                volume, destination, and cost considerations. We recommend the most suitable option 
                for each order.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">2. Delivery Timeframes</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">2.1 Processing Time</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Order Confirmation to Production:</strong> 2-5 business days</li>
                <li><strong>Production & Processing:</strong> 5-10 business days</li>
                <li><strong>Quality Inspection & Packaging:</strong> 2-3 business days</li>
                <li><strong>Documentation Preparation:</strong> 1-2 business days</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Total processing time before shipment: <strong>10-20 business days</strong>
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">2.2 Transit Times by Region</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border border-border rounded-lg">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold">Destination</th>
                      <th className="px-4 py-2 text-left font-semibold">Air Freight</th>
                      <th className="px-4 py-2 text-left font-semibold">Sea Freight</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border">
                      <td className="px-4 py-2">GCC Countries (UAE, Saudi, Qatar)</td>
                      <td className="px-4 py-2">3-5 days</td>
                      <td className="px-4 py-2">14-18 days</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2">Middle East (Egypt, Jordan)</td>
                      <td className="px-4 py-2">4-6 days</td>
                      <td className="px-4 py-2">18-25 days</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2">Asia (Malaysia, Indonesia)</td>
                      <td className="px-4 py-2">5-7 days</td>
                      <td className="px-4 py-2">25-35 days</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2">Africa (Nigeria, Ghana)</td>
                      <td className="px-4 py-2">3-5 days</td>
                      <td className="px-4 py-2">20-30 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground italic mt-2">
                * Times are estimates and may vary due to customs clearance and local conditions
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">3. Incoterms & Responsibilities</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">3.1 FOB (Free On Board)</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Our Responsibility:</strong> Delivery to Mombasa/Nairobi port, export clearance</li>
                <li><strong>Your Responsibility:</strong> Freight charges, insurance, import clearance, delivery to final destination</li>
                <li><strong>Risk Transfer:</strong> When goods cross the ship's rail at loading port</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">3.2 CIF (Cost, Insurance & Freight)</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Our Responsibility:</strong> Freight to destination port, marine insurance, export clearance</li>
                <li><strong>Your Responsibility:</strong> Import clearance, duties/taxes, delivery from port to warehouse</li>
                <li><strong>Risk Transfer:</strong> When goods cross the ship's rail at loading port</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">3.3 DDP (Delivered Duty Paid)</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Our Responsibility:</strong> All costs and risks until delivery to your specified location</li>
                <li><strong>Your Responsibility:</strong> Receive goods at agreed location</li>
                <li><strong>Note:</strong> Available for select destinations only, premium pricing applies</li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Default term is <strong>FOB Mombasa</strong> unless otherwise agreed in writing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">4. Packaging & Temperature Control</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">4.1 Packaging Standards</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Food-grade vacuum packaging for individual cuts</li>
                <li>Cartons: Wax-coated, moisture-resistant cardboard</li>
                <li>Palletization: Standard EUR/CHEP pallets, stretch-wrapped</li>
                <li>Labeling: Product name, weight, date, halal certification mark</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">4.2 Cold Chain Management</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Chilled Products:</strong> Maintained at 0-4°C throughout transit</li>
                <li><strong>Frozen Products:</strong> Maintained at -18°C or below</li>
                <li><strong>Monitoring:</strong> Temperature data loggers in all shipments</li>
                <li><strong>Documentation:</strong> Temperature records provided with delivery</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">5. Shipping Documentation</h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide comprehensive documentation with every shipment:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Commercial Invoice:</strong> Detailed product description and pricing</li>
              <li><strong>Packing List:</strong> Contents, weights, carton numbers</li>
              <li><strong>Bill of Lading / Air Waybill:</strong> Shipping contract and receipt</li>
              <li><strong>Halal Certificate:</strong> Issued by certified halal authority</li>
              <li><strong>Veterinary Health Certificate:</strong> Kenya government-issued</li>
              <li><strong>Certificate of Origin:</strong> Kenya Chamber of Commerce</li>
              <li><strong>Temperature Log:</strong> Cold chain compliance record</li>
              <li><strong>Quality Inspection Report:</strong> Internal QC documentation</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Additional certificates (SASO, SFDA, etc.) available upon request.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">6. Customs & Import Clearance</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">6.1 Customer Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Verify import regulations in your country before ordering</li>
                <li>Obtain necessary import licenses and permits</li>
                <li>Designate a customs broker or clearing agent</li>
                <li>Pay applicable duties, taxes, and fees</li>
                <li>Comply with veterinary and food safety requirements</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">6.2 Our Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide guidance on documentation requirements and can coordinate with your customs 
                broker. However, import clearance is ultimately the customer's responsibility.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">7. Tracking & Communication</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Shipment Notification:</strong> Email sent when goods depart Kenya</li>
              <li><strong>Tracking Number:</strong> AWB/BL number provided for tracking</li>
              <li><strong>Updates:</strong> Key milestone notifications (loading, transit, arrival)</li>
              <li><strong>Support:</strong> Dedicated contact person for shipment inquiries</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">8. Delivery Issues</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">8.1 Delays</h3>
              <p className="text-muted-foreground leading-relaxed">
                Delays may occur due to: weather conditions, port congestion, customs inspections, 
                or strikes. We are not liable for delays beyond our control but will communicate 
                promptly and work to minimize impact.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">8.2 Damage or Loss</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Report damage/shortage immediately upon receipt</li>
                <li>Photograph damage and document with carrier</li>
                <li>File claim with carrier within 24-48 hours</li>
                <li>Notify us within 7 days for insurance claim processing</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">8.3 Rejected Shipments</h3>
              <p className="text-muted-foreground leading-relaxed">
                If a shipment is rejected by customs or buyer, return freight and disposal costs 
                are the customer's responsibility unless rejection is due to our non-compliance 
                with specifications.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">9. Insurance</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>CIF Orders:</strong> Marine insurance included (110% of invoice value)</li>
              <li><strong>FOB Orders:</strong> Customer arranges insurance (recommended)</li>
              <li><strong>Coverage:</strong> Loss, damage, and general average</li>
              <li><strong>Claims:</strong> Processed through insurance provider</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">10. Contact for Shipping Inquiries</h2>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-muted-foreground">
              <p><strong>Halali Meat Ltd - Logistics Department</strong></p>
              <p>Email: shipping@halalimeatltd.com</p>
              <p>Phone: [Available on request]</p>
              <p>Visit our <a href="/contact" className="underline font-medium text-foreground hover:text-primary">Contact Page</a></p>
            </div>
          </section>

          <section className="space-y-4 border-t pt-6">
            <p className="text-xs text-muted-foreground italic">
              This policy is subject to change. Specific shipping terms are confirmed in individual 
              order agreements and may vary from this general policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
