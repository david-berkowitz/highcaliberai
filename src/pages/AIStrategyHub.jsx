import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Target, ArrowRight, BookOpen } from "lucide-react";
import MetaTags from "@/components/SEO/MetaTags";

export default function AIStrategyHub() {
  const { data: posts = [] } = useQuery({
    queryKey: ['strategy-posts'],
    queryFn: () => base44.entities.BlogPost.filter({ 
      published: true, 
      category: 'AI Strategy' 
    }, '-published_date'),
    initialData: [],
  });

  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="AI Strategy Hub - Marketing Leadership & GTM Resources"
        description="Comprehensive guide to AI marketing strategy, fractional CMO leadership, GTM modernization, and team enablement. Expert insights for B2B marketing leaders."
        url="https://highcaliberai.com/ai-strategy-hub"
        canonical="https://highcaliberai.com/ai-strategy-hub"
      />

      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Strategy Hub
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, scale, and modernize your marketing with AI—from fractional leadership to team enablement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Link to={createPageUrl("Services")} className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Fractional GTM Leadership</h3>
              <p className="text-gray-600 mb-4">Embed a senior marketing executive to lead strategy, tech stack decisions, and execution.</p>
              <span className="text-red-600 font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            <Link to={createPageUrl("ZAIAudit")} className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">AI Readiness Assessment</h3>
              <p className="text-gray-600 mb-4">Take the free assessment to identify gaps and prioritize high-impact AI initiatives.</p>
              <span className="text-red-600 font-semibold flex items-center">
                Start Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            <Link to={createPageUrl("WorkshopShowcase")} className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Applied AI Training</h3>
              <p className="text-gray-600 mb-4">Workshops that turn your team into AI-augmented creators with hands-on projects.</p>
              <span className="text-red-600 font-semibold flex items-center">
                View Training <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest AI Strategy Insights</h2>
            {posts.length === 0 ? (
              <p className="text-gray-600">Strategy articles coming soon...</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    to={createPageUrl(`BlogPost?slug=${post.slug}`)}
                    className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-red-200 transition-all"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {post.read_time} min read
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="text-center">
            <Link
              to={createPageUrl("Blog")}
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}