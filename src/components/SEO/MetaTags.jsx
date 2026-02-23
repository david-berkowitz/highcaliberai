import { useEffect } from 'react';

export default function MetaTags({ 
  title, 
  description, 
  image, 
  url,
  type = 'website',
  author = 'David Berkowitz',
  canonical
}) {
  useEffect(() => {
    // Update document title
    document.title = title ? `${title} | High Caliber AI` : 'High Caliber AI - Applied AI for Marketing';

    // Helper to normalize URLs (remove trailing slashes, ensure https)
    const normalizeUrl = (rawUrl) => {
      if (!rawUrl) return null;
      let normalized = rawUrl.trim();
      // Remove trailing slash except for root domain
      if (normalized !== 'https://highcaliberai.com' && normalized.endsWith('/')) {
        normalized = normalized.slice(0, -1);
      }
      return normalized;
    };

    // Helper function to set or update meta tags
    const setMetaTag = (property, content) => {
      if (!content) return;
      
      let element = document.querySelector(`meta[property="${property}"]`) || 
                    document.querySelector(`meta[name="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        if (property.startsWith('og:') || property.startsWith('twitter:')) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Normalize URLs
    const normalizedUrl = normalizeUrl(url);
    const normalizedCanonical = normalizeUrl(canonical);
    const normalizedImage = image || 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png';

    // Standard meta tags
    setMetaTag('description', description);
    setMetaTag('author', author);

    // Open Graph tags
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', normalizedImage);
    setMetaTag('og:url', normalizedUrl);
    setMetaTag('og:type', type);
    setMetaTag('og:site_name', 'High Caliber AI');

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', normalizedImage);
    setMetaTag('twitter:creator', '@dberkowitz');

    // Canonical URL - use normalized canonical if provided, otherwise normalized url
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    const finalCanonical = normalizedCanonical || normalizedUrl || normalizeUrl(window.location.href.split('?')[0]);
    link.setAttribute('href', finalCanonical);

    // Hreflang tags for language/region targeting
    let hreflangUS = document.querySelector('link[rel="alternate"][hreflang="en-US"]');
    if (!hreflangUS) {
      hreflangUS = document.createElement('link');
      hreflangUS.setAttribute('rel', 'alternate');
      hreflangUS.setAttribute('hreflang', 'en-US');
      document.head.appendChild(hreflangUS);
    }
    hreflangUS.setAttribute('href', finalCanonical);

    let hreflangDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (!hreflangDefault) {
      hreflangDefault = document.createElement('link');
      hreflangDefault.setAttribute('rel', 'alternate');
      hreflangDefault.setAttribute('hreflang', 'x-default');
      document.head.appendChild(hreflangDefault);
    }
    hreflangDefault.setAttribute('href', finalCanonical);

    // Cleanup function
    return () => {
      // Optional: Remove meta tags on unmount if needed
    };
    }, [title, description, image, url, type, author, canonical]);

  return null;
}