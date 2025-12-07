'use client';

import { useEffect, useState } from 'react';

interface DynamicFaviconProps {
  initialUrl?: string | null;
}

export function DynamicFavicon({ initialUrl }: DynamicFaviconProps) {
  const [faviconUrl, setFaviconUrl] = useState<string | null | undefined>(initialUrl);

  useEffect(() => {
    // Fetch latest settings to match HeaderRenderer logic
    fetch('/api/settings/public')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.settings?.faviconUrl) {
          setFaviconUrl(data.settings.faviconUrl);
        }
      })
      .catch(() => {
        // Silently fail
      });
  }, []);

  useEffect(() => {
    const favicon = faviconUrl || '/favicon.svg';
    
    // Find existing favicon link or create new one
    let link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    
    if (link) {
      link.href = favicon;
    } else {
      link = document.createElement('link');
      link.rel = 'icon';
      link.href = favicon;
      document.head.appendChild(link);
    }
  }, [faviconUrl]);

  return null; // This component doesn't render anything visible
}
