import EmailContactForm from '@/components/forms/email-contact-form';
import WhatsAppContactForm from '@/components/forms/whatsapp-contact-form';
import ContactInfoMap from '@/components/sections/contact-info-map';

interface ContactInfo {
  companyEmail: string;
  companyPhone: string;
  companyAddress: string;
  companyWhatsapp: string;
}

async function getContactInfo(): Promise<ContactInfo> {
  try {
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3001';
    const res = await fetch(`${baseUrl}/api/contact-info`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });
    
    if (!res.ok) throw new Error('Failed to fetch');
    
    return res.json();
  } catch (error) {
    console.error('Failed to fetch contact info:', error);
    // Return defaults on error
    return {
      companyEmail: 'info@halalimeatltd.com',
      companyPhone: '+254 123 456 789',
      companyAddress: 'Nairobi, Kenya',
      companyWhatsapp: '+254123456789',
    };
  }
}

export default async function ContactPage() {
  const contactInfo = await getContactInfo();

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Contact Us</h1>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">We'd love to hear from you. Reach out with any questions or for a quote.</p>
      </div>

      {/* Forms Section */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
        <EmailContactForm />
        <WhatsAppContactForm whatsappNumber={contactInfo.companyWhatsapp} />
      </div>

      {/* Contact Info & Map Section */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        <ContactInfoMap contactInfo={contactInfo} />
      </div>
    </div>
  );
}