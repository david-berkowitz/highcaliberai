import { useEffect } from 'react';

export default function PersonSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "David Berkowitz",
      "url": "https://highcaliberai.com",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/7cdf61db4_introstars2copy.png",
      "sameAs": [
        "https://www.linkedin.com/in/dberkowitz/",
        "https://twitter.com/dberkowitz"
      ],
      "jobTitle": "AI Marketing Strategist",
      "worksFor": {
        "@type": "Organization",
        "name": "High Caliber AI"
      },
      "alumniOf": "Boston University",
      "description": "AI marketing strategist, founder of AI Marketers Guild, and author of The Non-Obvious Guide to Using AI for Marketing"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}