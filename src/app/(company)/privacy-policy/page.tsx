import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Al-Barka Halali Meats - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Privacy Policy</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Last updated: December 7, 2025
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base">
          <section className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              At Al-Barka Halali Meats ("we", "us", or "our"), we are committed to protecting your privacy 
              and personal data. This Privacy Policy explains how we collect, use, disclose, and 
              safeguard your information when you visit our website halalimeatltd.com (the "Site") 
              or use our services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By using our Site, you agree to the collection and use of information in accordance 
              with this policy. If you do not agree with our policies and practices, please do not 
              use our Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. Information We Collect</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">1.1 Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you use our services, we may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                <li><strong>Quote Requests:</strong> Product interests, quantities, delivery requirements</li>
                <li><strong>Communications:</strong> Messages you send through our contact forms</li>
                <li><strong>Account Data:</strong> Username, encrypted password (for admin users)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">1.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you visit our Site, we automatically collect certain information:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns</li>
                <li><strong>Cookies:</strong> See our Cookies section below for details</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Service Delivery:</strong> Process quote requests, respond to inquiries, provide customer support</li>
              <li><strong>Business Operations:</strong> Maintain and improve our website, analyze usage patterns</li>
              <li><strong>Communications:</strong> Send service-related updates, quote confirmations, and responses to your messages</li>
              <li><strong>Marketing:</strong> With your consent, send promotional materials and company updates (you can opt-out anytime)</li>
              <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
              <li><strong>Security:</strong> Protect against fraud, unauthorized access, and security threats</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">3. Legal Basis for Processing (GDPR)</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are in the European Economic Area (EEA), our legal basis for collecting and using your information includes:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Consent:</strong> You have given clear consent for us to process your data for specific purposes</li>
              <li><strong>Contract:</strong> Processing is necessary to fulfill our contractual obligations to you</li>
              <li><strong>Legal Obligations:</strong> Processing is necessary to comply with the law</li>
              <li><strong>Legitimate Interests:</strong> Processing is in our legitimate business interests, provided your rights are not overridden</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">4. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, rent, or trade your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Service Providers:</strong> Cloud hosting (Vercel), database services (MongoDB Atlas), email services, file storage (Cloudinary)</li>
              <li><strong>Business Partners:</strong> Shipping and logistics companies for order fulfillment</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              All third parties are required to maintain the confidentiality and security of your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">5. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Essential Cookies:</strong> Required for authentication and site functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You can control cookies through your browser settings. Note that disabling cookies may 
              affect site functionality. Our cookie consent banner allows you to accept or decline 
              non-essential cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>HTTPS encryption for all data transmission</li>
              <li>Password hashing and encryption for account security</li>
              <li>Secure cloud infrastructure with access controls</li>
              <li>Regular security audits and updates</li>
              <li>Rate limiting to prevent abuse</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              However, no method of transmission over the internet is 100% secure. We cannot guarantee 
              absolute security of your data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Quote Requests:</strong> Retained for 2 years or until you request deletion</li>
              <li><strong>Contact Messages:</strong> Retained for 1 year or until resolved</li>
              <li><strong>Account Data:</strong> Retained until account deletion is requested</li>
              <li><strong>Analytics Data:</strong> Aggregated and anonymized data retained indefinitely</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">8. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
              <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
              <li><strong>Data Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time (where processing is based on consent)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise these rights, please contact us using the details in the "Contact Us" section below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly 
              collect personal information from children. If you believe we have collected information 
              from a child, please contact us immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">10. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries outside your country 
              of residence, including the United States and European Union. These countries may have 
              data protection laws different from your jurisdiction. We ensure appropriate safeguards 
              are in place for such transfers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">11. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or legal requirements. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the "Last updated" date at the top</li>
              <li>Sending you an email notification (for significant changes)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Your continued use of the Site after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our 
              data practices, please contact us:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-muted-foreground">
              <p><strong>Al-Barka Halali Meats</strong></p>
              <p>Email: privacy@halalimeatltd.com</p>
              <p>Or visit our <a href="/contact" className="underline font-medium text-foreground hover:text-primary">Contact Page</a></p>
            </div>
          </section>

          <section className="space-y-4 border-t pt-6">
            <p className="text-xs text-muted-foreground italic">
              This Privacy Policy is governed by the laws of Kenya and the European Union's General 
              Data Protection Regulation (GDPR). If you are a resident of the EEA, you have the right 
              to lodge a complaint with your local data protection authority.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
