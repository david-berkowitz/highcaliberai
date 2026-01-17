import { useEffect } from 'react';

export default function BlogPostStructuredData({ post }) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.featured_image,
      "datePublished": post.published_date,
      "dateModified": post.updated_date || post.published_date,
      "author": {
        "@type": "Person",
        "name": "David Berkowitz",
        "url": "https://highcaliberai.com/about",
        "jobTitle": "AI Marketing Strategist",
        "sameAs": [
          "https://www.linkedin.com/in/dberkowitz/",
          "https://twitter.com/dberkowitz"
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "High Caliber AI",
        "url": "https://highcaliberai.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://highcaliberai.com/blog/${post.slug}`
      },
      "keywords": post.tags?.join(', ') || '',
      "articleSection": post.category,
      "wordCount": post.content?.split(/\s+/).length || 0
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [post]);

  return null;
}