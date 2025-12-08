import AuthProvider from '@/components/auth/auth-provider';
import { DynamicFavicon } from "@/components/common/dynamic-favicon";
import CookieConsent from "@/components/cookie-consent";
import FooterRenderer from '@/components/layout/footer-renderer';
import PageWrapper from "@/components/layout/page-wrapper";
import { ThemeProviderWrapper } from "@/components/theme-provider-wrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  // Use public settings fetcher to avoid "Dynamic server usage" error during build
  // getSettings() calls getServerSession() which uses headers(), breaking static generation
  const { getPublicSettings } = await import("@/app/actions/settings-actions");
  const result = await getPublicSettings().catch(() => ({ success: false, settings: null }));
  const settings = result.success ? result.settings : null;
  const favicon = settings?.faviconUrl || '/favicon.svg';
  const companyName = settings?.companyName || "Al-Barka Halali Meats";

  return {
    title: {
      default: companyName,
      template: `%s | ${companyName}`,
    },
    description: "Premium Halal Meat, Exported with Trust. We specialize in sourcing, processing, and exporting high-quality, 100% halal-certified meat from East Africa to the GCC and beyond.",
    icons: {
      icon: favicon,
    },
    keywords: ["halal meat", "meat exporter", "beef", "goat", "lamb", "kenya", "tanzania", "somalia", "GCC"],
    openGraph: {
      title: companyName,
      description: "Halal Meat, Exported with Trust.",
      url: "https://halalimeatltd.com",
      siteName: companyName,
      images: [
        {
          url: "https://halalimeatltd.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: companyName,
      description: "Halal Meat, Exported with Trust.",
      images: ["https://halalimeatltd.com/twitter-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <DynamicFavicon />
        <AuthProvider>
          <ThemeProviderWrapper
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PageWrapper>{children}</PageWrapper>
            <CookieConsent />
            <Toaster richColors position="top-right" />
            <FooterRenderer />
          </ThemeProviderWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
