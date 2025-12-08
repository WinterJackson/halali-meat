import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Legal disclaimer for Al-Barka Halali Meats - Important terms and limitations of liability.",
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Disclaimer</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Last updated: December 7, 2025
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base">
          <section className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The information contained on the Al-Barka Halali Meats website (halalimeatltd.com) is for 
              general information purposes only. While we endeavor to keep the information up to date 
              and correct, we make no representations or warranties of any kind, express or implied, 
              about the completeness, accuracy, reliability, suitability, or availability of the website 
              or the information, products, services, or related graphics contained on the website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. Website Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              All information on this website is provided "as is" without any warranty of any kind. 
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Modify, update, or remove any content without prior notice</li>
              <li>Correct errors, inaccuracies, or omissions at any time</li>
              <li>Update product specifications, pricing, and availability</li>
              <li>Temporarily or permanently discontinue any service or feature</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">2. Product Information</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">2.1 Specifications and Images</h3>
              <p className="text-muted-foreground leading-relaxed">
                Product images, descriptions, and specifications displayed on this website are for 
                illustrative purposes only. Actual products may vary slightly in appearance, color, 
                packaging, or specifications due to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Natural variations in meat products</li>
                <li>Different screen display settings</li>
                <li>Seasonal availability and sourcing</li>
                <li>Updates to packaging or processing methods</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">2.2 Pricing and Availability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Prices displayed on this website are subject to change without prior notice. Pricing 
                may vary based on:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Order quantity and volume</li>
                <li>Shipping destination and method</li>
                <li>Currency exchange rates</li>
                <li>Seasonal market conditions</li>
                <li>Special customer agreements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Product availability is not guaranteed until confirmed in writing via official quote 
                or order confirmation.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">3. Halal Certification</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we maintain strict adherence to halal standards and work with certified facilities, 
              we recommend that customers:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Request and review current halal certification documents</li>
              <li>Verify certifications meet their specific regional or organizational requirements</li>
              <li>Conduct their own audits or inspections if required</li>
              <li>Confirm compliance with destination country import regulations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Different markets and organizations may have varying halal certification standards. 
              It is the buyer's responsibility to ensure products meet their specific requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">4. Health and Safety</h2>
            <p className="text-muted-foreground leading-relaxed">
              All our products comply with applicable food safety regulations and standards. However:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Meat products must be stored, handled, and prepared according to food safety guidelines</li>
              <li>Proper refrigeration and cooking temperatures must be maintained</li>
              <li>Consumers with allergies or dietary restrictions should review product specifications carefully</li>
              <li>We are not liable for improper storage, handling, or preparation after delivery</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall Al-Barka Halali Meats, its directors, employees, or agents be liable for any:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Direct damages:</strong> Loss of profits, revenue, or business opportunities</li>
              <li><strong>Indirect damages:</strong> Consequential, incidental, or punitive damages</li>
              <li><strong>Data loss:</strong> Loss of data or corruption of information</li>
              <li><strong>Service interruption:</strong> Temporary unavailability of the website or services</li>
              <li><strong>Third-party actions:</strong> Actions or omissions of shipping carriers, customs authorities, or other third parties</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This limitation applies even if we have been advised of the possibility of such damages 
              and regardless of the legal theory (contract, tort, negligence, or otherwise).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">6. External Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites or services that are not owned or 
              controlled by Al-Barka Halali Meats. We:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Have no control over the content, privacy policies, or practices of third-party sites</li>
              <li>Do not assume responsibility for third-party content or services</li>
              <li>Do not endorse or make any representations about third-party websites</li>
              <li>Recommend reviewing the terms and privacy policies of any external sites you visit</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">7. Professional Advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              The information on this website is not intended to constitute professional advice. 
              You should:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Consult with qualified professionals regarding import/export regulations</li>
              <li>Seek legal advice for contractual matters and compliance requirements</li>
              <li>Verify all regulatory requirements with appropriate authorities</li>
              <li>Conduct due diligence before making any business decisions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">8. Quote Requests and Orders</h2>
            <p className="text-muted-foreground leading-relaxed">
              Quote requests submitted through our website:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Do not constitute a binding offer or agreement</li>
              <li>Are subject to product availability and confirmation</li>
              <li>May be modified or withdrawn at our discretion</li>
              <li>Require formal acceptance and written confirmation to become binding</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              No contractual relationship is established until both parties have signed a formal 
              purchase agreement or we have issued a written order confirmation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">9. International Trade</h2>
            <p className="text-muted-foreground leading-relaxed">
              As an international meat exporter, we operate across multiple jurisdictions. Customers are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Understanding and complying with import regulations in their country</li>
              <li>Obtaining necessary import licenses, permits, and certifications</li>
              <li>Paying applicable customs duties, taxes, and fees</li>
              <li>Ensuring compliance with veterinary and phytosanitary requirements</li>
              <li>Managing currency exchange risks and banking procedures</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">10. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is 
              the property of Al-Barka Halali Meats or its licensors and is protected by copyright, trademark, 
              and other intellectual property laws. Unauthorized use is prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">11. Force Majeure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We shall not be liable for any failure or delay in performance due to circumstances beyond 
              our reasonable control, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Natural disasters, epidemics, or pandemics</li>
              <li>War, terrorism, or civil unrest</li>
              <li>Government actions, trade restrictions, or embargoes</li>
              <li>Transportation disruptions or strikes</li>
              <li>Supplier failures or market shortages</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">12. Changes to This Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify this disclaimer at any time without prior notice. Changes 
              will be effective immediately upon posting to the website. Your continued use of the 
              website after changes constitutes acceptance of the modified disclaimer.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">13. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              This disclaimer is governed by and construed in accordance with the laws of Kenya. 
              Any disputes relating to this disclaimer shall be subject to the exclusive jurisdiction 
              of the courts of Kenya.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">14. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this disclaimer, please contact us:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-muted-foreground">
              <p><strong>Al-Barka Halali Meats</strong></p>
              <p>Email: info@halalimeatltd.com</p>
              <p>Visit our <a href="/contact" className="underline font-medium text-foreground hover:text-primary">Contact Page</a> for more information</p>
            </div>
          </section>

          <section className="space-y-4 border-t pt-6">
            <p className="text-xs text-muted-foreground italic">
              By using this website, you acknowledge that you have read, understood, and agree to be 
              bound by this disclaimer. If you do not agree with any part of this disclaimer, please 
              discontinue use of our website immediately.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
