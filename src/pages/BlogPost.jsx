import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock, ArrowLeft, Tag, Share2, ChevronRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import MetaTags from "@/components/SEO/MetaTags";
import BlogPostStructuredData from "@/components/SEO/BlogStructuredData";

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => base44.entities.BlogPost.filter({ slug, published: true }),
    enabled: !!slug,
    initialData: [],
  });

  const { data: relatedPosts = [] } = useQuery({
    queryKey: ['related-posts', posts[0]?.category],
    queryFn: () => base44.entities.BlogPost.filter({ 
      published: true, 
      category: posts[0]?.category 
    }, '-published_date', 4),
    enabled: !!posts[0],
    initialData: [],
  });

  const post = posts[0];
  const related = relatedPosts.filter(p => p.slug !== slug).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading article...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to={createPageUrl('Blog')} className="text-red-600 hover:text-red-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title={post.title}
        description={post.excerpt}
        image={post.featured_image}
        url={`https://highcaliberai.com/blog/${post.slug}`}
        canonical={`https://highcaliberai.com/blog/${post.slug}`}
        type="article"
        author="David Berkowitz"
      />
      <BlogPostStructuredData post={post} />

      {/* Header */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-gray-500 mb-8">
            <Link to={createPageUrl('Home')} className="hover:text-gray-900">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to={createPageUrl('Blog')} className="hover:text-gray-900">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">{post.category}</span>
          </nav>

          <Link
            to={createPageUrl('Blog')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-red-600 text-white mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author & Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="flex flex-col gap-3">
                <Link 
                  to={createPageUrl('About')}
                  className="flex items-center gap-3 group"
                >
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/7cdf61db4_introstars2copy.png"
                    alt="David Berkowitz"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">David Berkowitz</span>
                    </div>
                    <span className="text-sm text-gray-500">AI Marketing Strategist</span>
                  </div>
                </Link>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.published_date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  {post.read_time && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.read_time} min read
                    </div>
                  )}
                </div>
              </div>
              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>

            {post.featured_image && (
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full rounded-xl mb-12 shadow-lg"
                loading="eager"
              />
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-gray-200">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Related Posts */}
            {related.length > 0 && (
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {related.map(relatedPost => (
                    <Link
                      key={relatedPost.id}
                      to={createPageUrl(`BlogPost?slug=${relatedPost.slug}`)}
                      className="group"
                    >
                      {relatedPost.featured_image && (
                        <img
                          src={relatedPost.featured_image}
                          alt={relatedPost.title}
                          className="w-full h-40 object-cover rounded-lg mb-3 group-hover:opacity-90 transition-opacity"
                        />
                      )}
                      <Badge className="bg-gray-100 text-gray-700 mb-2">{relatedPost.category}</Badge>
                      <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{relatedPost.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enjoyed this article?
              </h3>
              <p className="text-gray-600 mb-6">
                Subscribe to get more AI marketing insights delivered to your inbox monthly.
              </p>
              <NewsletterSignup source="blog-post" />
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}