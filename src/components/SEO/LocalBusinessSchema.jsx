import { useEffect } from 'react';

export default function LocalBusinessSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "High Caliber AI",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png",
      "@id": "https://highcaliberai.com",
      "url": "https://highcaliberai.com",
      "telephone": "",
      "email": "david@highcaliberai.com",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.7128,
        "longitude": -74.0060
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      },
      "sameAs": [
        "https://www.linkedin.com/in/dberkowitz/"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      }
    });
    script.id = 'local-business-schema';
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('local-business-schema');
      if (existing) existing.remove();
    };
  }, []);

  return null;
}