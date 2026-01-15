import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import MetaTags from "@/components/SEO/MetaTags";

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => base44.entities.BlogPost.filter({ slug, published: true }),
    enabled: !!slug,
    initialData: [],
  });

  const post = posts[0];

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
        type="article"
      />

      {/* Header */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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

            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
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