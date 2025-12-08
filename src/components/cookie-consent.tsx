"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_NAME = "cookie-consent";
const COOKIE_EXPIRY_DAYS = 365;

// Helper function to set a cookie
function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

// Helper function to get a cookie
function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = getCookie(COOKIE_NAME);
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    setCookie(COOKIE_NAME, "accepted", COOKIE_EXPIRY_DAYS);
    setShowConsent(false);
  };

  const declineConsent = () => {
    setCookie(COOKIE_NAME, "declined", COOKIE_EXPIRY_DAYS);
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-secondary text-secondary-foreground shadow-lg border-t">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to enhance your browsing experience and analyze site traffic. 
          By clicking "Accept", you consent to our use of cookies.{" "}
          <Link href="/privacy-policy" className="underline font-medium">
            Learn more
          </Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={declineConsent}>
            Decline
          </Button>
          <Button size="sm" onClick={acceptConsent}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
