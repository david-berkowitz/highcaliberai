import { useEffect } from 'react';

export default function OrganizationSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "High Caliber AI",
      "url": "https://highcaliberai.com",
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png",
      "description": "Applied AI for Marketing - Strategic consulting, training, and fractional CMO services specializing in AI marketing implementation.",
      "founder": {
        "@type": "Person",
        "name": "David Berkowitz",
        "url": "https://highcaliberai.com/about",
        "sameAs": [
          "https://www.linkedin.com/in/dberkowitz/",
          "https://twitter.com/dberkowitz"
        ],
        "jobTitle": "Founder & AI Marketing Strategist",
        "alumniOf": "Boston University"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Business Inquiries",
        "email": "david@highcaliberai.com",
        "url": "https://highcaliberai.com/contact"
      },
      "sameAs": [
        "https://www.linkedin.com/in/dberkowitz/"
      ],
      "areaServed": "US",
      "serviceType": [
        "AI Marketing Strategy",
        "Fractional CMO Services",
        "AI Training & Workshops",
        "Marketing Team Enablement"
      ]
    });
    script.id = 'organization-schema';
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('organization-schema');
      if (existing) existing.remove();
    };
  }, []);

  return null;
}