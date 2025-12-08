import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently Asked Questions about Halali Meat Ltd - Product sourcing, halal certification, ordering, and shipping.",
};

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Frequently Asked Questions</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base">
          {/* Ordering & Pricing */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground border-b pb-2">Ordering & Pricing</h2>
            
            <div className="space-y-4">
              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What is your minimum order quantity (MOQ)?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Our standard MOQ is 1,000 kg (1 ton) per product type. For mixed containers, 
                  minimum 500kg per product type. We can accommodate smaller quantities for trial 
                  orders (minimum 500kg total) with adjusted pricing.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  How do I request a quote?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Visit our <a href="/get-a-quote" className="underline text-foreground font-medium">Get a Quote</a> page 
                  and fill out the form with your requirements (product type, quantity, destination). 
                  We typically respond within 24 hours with a detailed quotation.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Are prices negotiable?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Yes, pricing is flexible based on order volume, frequency, and long-term contracts. 
                  Volume discounts are available for orders above 10 tons. Contact us to discuss 
                  custom pricing for your specific needs.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What payment methods do you accept?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We accept: Bank Wire Transfer (T/T), Letter of Credit (LC), and for established 
                  customers, payment terms of Net 30/60. Standard terms are 50% deposit upon order 
                  confirmation, 50% balance before shipment.
                </p>
              </details>
            </div>
          </section>

          {/* Halal Certification */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground border-b pb-2">Halal Certification</h2>
            
            <div className="space-y-4">
              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Which halal authority certifies your products?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Our products are certified by recognized halal authorities including Kenya's official 
                  halal certification bodies. We can also arrange certification from specific authorities 
                  required by your destination country (e.g., JAKIM for Malaysia, MUI for Indonesia, 
                  ESMA for UAE).
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Do you provide halal certificates with each shipment?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Yes, every shipment includes: Halal Certificate, Veterinary Health Certificate, 
                  Certificate of Origin, and Commercial Invoice. Additional certifications can be 
                  arranged based on destination requirements.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  How do you ensure halal compliance throughout processing?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Our entire supply chain is halal-compliant: (1) Slaughter is performed by trained 
                  Muslim slaughterers with proper Islamic rites, (2) Processing facilities are dedicated 
                  halal-only, (3) No cross-contamination with non-halal products, (4) Regular audits by 
                  halal certification bodies, (5) Full traceability from farm to shipment.
                </p>
              </details>
            </div>
          </section>

          {/* Products & Quality */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground border-b pb-2">Products & Quality</h2>
            
            <div className="space-y-4">
              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What types of meat do you export?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We specialize in: Beef (various cuts from grass-fed cattle), Lamb & Mutton (from 
                  Dorper and Merino sheep), Goat meat (from East African breeds). Products available 
                  in both chilled and frozen formats. Custom cuts available upon request.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Can you provide custom cuts or processing?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Yes! We offer custom cutting, trimming, marination, and packaging based on your 
                  specifications. Minimum order requirements may apply for highly customized orders. 
                  Discuss your needs with our sales team.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What is the shelf life of your products?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Frozen products: 12-24 months at -18°C or below. Chilled products: 30-45 days at 
                  0-4°C (vacuum-packed). All products are shipped with minimum 80% remaining shelf 
                  life unless otherwise agreed.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Do you provide product samples?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Yes, samples can be arranged. Samples are provided at cost (customer covers product 
                  and shipping). Sample costs are credited toward your first bulk order.
                </p>
              </details>
            </div>
          </section>

          {/* Shipping & Delivery */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground border-b pb-2">Shipping & Delivery</h2>
            
            <div className="space-y-4">
              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What shipping terms do you offer?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We offer FOB (Free On Board), CIF (Cost, Insurance & Freight), and for select 
                  destinations, DDP (Delivered Duty Paid). Default is FOB Mombasa. See our 
                  <a href="/shipping" className="underline text-foreground font-medium"> Shipping Policy</a> for details.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  How long does delivery take?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Air Freight: 3-7 days to most destinations. Sea Freight: 14-45 days depending on 
                  destination. Processing time before shipment: 10-20 business days. Total time 
                  from order to delivery: 2-8 weeks typically.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Which countries do you ship to?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We export to GCC countries (UAE, Saudi Arabia, Qatar, Kuwait, Oman), Middle East 
                  (Egypt, Jordan, Lebanon), Asia (Malaysia, Indonesia, Singapore), and various 
                  African nations. Contact us for specific country inquiries.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  How do you maintain cold chain during shipping?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We use: Reefer containers for sea freight (-18°C to -25°C for frozen, 0-4°C for 
                  chilled), Temperature-controlled air cargo holds, Continuous temperature monitoring 
                  with data loggers, Insulated packaging, Pre-cooling before loading. Temperature 
                  logs provided with delivery.
                </p>
              </details>
            </div>
          </section>

          {/* Import & Customs */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground border-b pb-2">Import & Customs</h2>
            
            <div className="space-y-4">
              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Who handles customs clearance?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  For FOB: Customer handles import clearance in destination country. For CIF: We handle 
                  export clearance in Kenya; customer handles import clearance. For DDP: We handle both. 
                  We provide all necessary documentation to facilitate clearance.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Do I need an import license?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Most countries require import licenses/permits for meat. Requirements vary by 
                  destination. We recommend verifying with your local veterinary/food authority before 
                  ordering. We can provide guidance and sample documentation.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What documents do you provide for customs?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Standard documents: Commercial Invoice, Packing List, Bill of Lading/Air Waybill, 
                  Halal Certificate, Veterinary Health Certificate, Certificate of Origin. Additional 
                  documents available: SASO certificate (Saudi), SFDA (Saudi), Embassy legalization.
                </p>
              </details>
            </div>
          </section>

          {/* Business & Partnerships */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground border-b pb-2">Business & Partnerships</h2>
            
            <div className="space-y-4">
              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Do you work with distributors and wholesalers?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Yes! We actively seek long-term partnerships with distributors, wholesalers, 
                  supermarket chains, and restaurants. We offer competitive pricing, reliable supply, 
                  and marketing support for partners. Contact us to discuss partnership opportunities.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Can you provide exclusive distribution rights?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Exclusive distribution agreements are available for serious partners meeting volume 
                  commitments. Terms include minimum annual purchase requirements, marketing obligations, 
                  and territory exclusivity. Contact us to discuss.
                </p>
              </details>

              <details className="group bg-muted/30 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Do you offer private labeling?
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Yes, private labeling and custom branding are available for large orders (minimum 
                  5 tons per shipment). We can accommodate your packaging design, logo, and branding 
                  requirements.
                </p>
              </details>
            </div>
          </section>

          {/* Still Have Questions? */}
          <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
