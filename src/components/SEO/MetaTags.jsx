import { useEffect } from 'react';

export default function MetaTags({ 
  title, 
  description, 
  image, 
  url,
  type = 'website',
  author = 'David Berkowitz'
}) {
  useEffect(() => {
    // Update document title
    document.title = title ? `${title} | High Caliber AI` : 'High Caliber AI - Applied AI for Marketing';

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

    // Standard meta tags
    setMetaTag('description', description);
    setMetaTag('author', author);

    // Open Graph tags
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', image);
    setMetaTag('og:url', url);
    setMetaTag('og:type', type);
    setMetaTag('og:site_name', 'High Caliber AI');

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    setMetaTag('twitter:creator', '@dberkowitz');

    // Cleanup function
    return () => {
      // Optional: Remove meta tags on unmount if needed
    };
  }, [title, description, image, url, type, author]);

  return null;
}