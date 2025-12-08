import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Sitemap for Al-Barka Halali Meats - Navigate all pages on our website.",
};

export default function SitemapPage() {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/halal-standards", label: "Halal Standards" },
      ],
    },
    {
      title: "Products",
      links: [
        { href: "/products", label: "All Products" },
        { href: "/products?category=beef", label: "Beef" },
        { href: "/products?category=lamb", label: "Lamb & Mutton" },
        { href: "/products?category=goat", label: "Goat" },
        { href: "/products?type=frozen", label: "Frozen Products" },
        { href: "/products?type=chilled", label: "Chilled Products" },
      ],
    },
    {
      title: "Support & Contact",
      links: [
        { href: "/contact", label: "Contact Us" },
        { href: "/get-a-quote", label: "Get a Quote" },
        { href: "/faq", label: "Frequently Asked Questions" },
      ],
    },
    {
      title: "Legal & Policies",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms & Conditions" },
        { href: "/shipping", label: "Shipping & Delivery Policy" },
        { href: "/returns", label: "Return & Refund Policy" },
        { href: "/disclaimer", label: "Disclaimer" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Sitemap</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Navigate all pages on our website
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sitemapSections.map((section) => (
            <div key={section.title} className="bg-muted/30 rounded-lg p-6">
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 border-b pb-2">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center"
                    >
                      <span className="mr-2 text-primary">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            Can't find what you're looking for? Visit our{" "}
            <Link href="/faq" className="text-primary font-medium hover:underline">
              FAQ page
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              contact us
            </Link>{" "}
            directly.
          </p>
        </div>
      </div>
    </div>
  );
}
