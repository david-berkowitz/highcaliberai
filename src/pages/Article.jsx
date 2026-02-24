import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import MetaTags from "@/components/SEO/MetaTags";
import ShareButtons from "@/components/ShareButtons";

export default function Article() {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id');

  const { data: article, isLoading } = useQuery({
    queryKey: ['article', articleId],
    queryFn: async () => {
      const articles = await base44.entities.FeaturedWriting.list();
      return articles.find(a => a.id === articleId);
    },
    enabled: !!articleId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to={createPageUrl('Bylines')}>
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Bylines
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const articleUrl = `https://highcaliberai.com/article?id=${article.id}`;

  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title={`${article.title} - David Berkowitz`}
        description={article.excerpt || article.title}
        url={articleUrl}
        canonical={articleUrl}
      />

      {/* Article Header */}
      <div className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to={createPageUrl('Bylines')}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Bylines
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-blue-100 text-blue-700 border-0">
                {article.type === 'linkedin_post' ? 'LinkedIn' : article.type === 'essay' ? 'Essay' : 'Article'}
              </Badge>
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                {new Date(article.publication_date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <div className="whitespace-pre-wrap leading-relaxed text-gray-800">
            {article.full_text}
          </div>
        </div>

        {/* Share & Original Source */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Share this article</h3>
              <ShareButtons 
                url={articleUrl}
                title={article.title}
              />
            </div>

            {article.source_url && (
              <a
                href={article.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
              >
                View Original Post
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>
        </div>

        {/* Author */}
        <Card className="mt-12 bg-gradient-to-br from-gray-50 to-white border-gray-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQGq3OEF_AXgbg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725028862311?e=1748476800&v=beta&t=QQMdLIhPxk-2pDhvT_O0DQSggSe1F2Qy6cg0eN8uDpY"
                alt="David Berkowitz"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">David Berkowitz</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fractional CMO & AI Marketing Strategist. Founder of AI Marketers Guild (7,000+ members) and author of "The Non-Obvious Guide to Using AI for Marketing."
                </p>
                <Link 
                  to={createPageUrl('About')}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Learn more about David →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}