import React, { useEffect } from 'react';

export function BookStructuredData() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "The Non-Obvious Guide to Using AI for Marketing",
      "author": {
        "@type": "Person",
        "name": "David Berkowitz",
        "url": "https://www.linkedin.com/in/dberkowitz/",
        "jobTitle": "AI Marketing Strategist",
        "description": "Founder of AI Marketers Guild and Serial Marketers, Author, and Fractional CMO"
      },
      "isbn": "979-8989865703",
      "publisher": {
        "@type": "Organization",
        "name": "Ideapress Publishing"
      },
      "datePublished": "2025",
      "description": "A practical guide to harnessing the transformative power of AI for marketing without losing your brand's human touch",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e2caa7739d4d7ec44ee610/cedc73191_NOG-AIMarketing-2025-HiRes.jpg",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "19.99",
        "priceCurrency": "USD",
        "url": "https://www.amazon.com/Non-Obvious-Guide-Using-Marketing-Transformative-ebook/dp/B0DZQQW7M7"
      },
      "bookFormat": "https://schema.org/Paperback",
      "inLanguage": "en-US",
      "numberOfPages": "200",
      "genre": ["Business", "Marketing", "Technology", "Artificial Intelligence"]
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

export function PersonStructuredData() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "David Berkowitz",
      "url": "https://highcaliberai.com",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/7cdf61db4_introstars2copy.png",
      "jobTitle": "AI Marketing Strategist & Fractional CMO",
      "description": "Founder of AI Marketers Guild (7,000+ members) and author of The Non-Obvious Guide to Using AI for Marketing. Chief Community Officer at Marketecture Media.",
      "alumniOf": [
        {
          "@type": "Organization",
          "name": "Columbia University"
        },
        {
          "@type": "Organization",
          "name": "Binghamton University"
        }
      ],
      "worksFor": [
        {
          "@type": "Organization",
          "name": "High Caliber AI"
        },
        {
          "@type": "Organization",
          "name": "Marketecture Media"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/in/dberkowitz/",
        "https://serialmarketers.com/",
        "https://www.aimarketersguild.com/"
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Marketing Strategy",
        "Digital Marketing",
        "AI Marketing",
        "Content Marketing",
        "SEO",
        "Generative Engine Optimization"
      ]
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

export function OrganizationStructuredData() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "High Caliber AI",
      "url": "https://highcaliberai.com",
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png",
      "description": "Applied AI for Marketing. Fractional CMO services, AI marketing training, and strategic consulting for B2B tech companies.",
      "founder": {
        "@type": "Person",
        "name": "David Berkowitz"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "david@highcaliberai.com"
      },
      "sameAs": [
        "https://www.linkedin.com/in/dberkowitz/",
        "https://serialmarketers.com/"
      ],
      "areaServed": "Worldwide",
      "serviceType": [
        "Fractional CMO Services",
        "AI Marketing Consulting",
        "Marketing Training",
        "AI Strategy Development"
      ]
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

export function FAQStructuredData({ faqs }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [faqs]);

  return null;
}