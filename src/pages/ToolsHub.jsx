import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Wrench, ArrowRight, BookOpen } from "lucide-react";
import MetaTags from "@/components/SEO/MetaTags";

export default function ToolsHub() {
  const { data: posts = [] } = useQuery({
    queryKey: ['tools-posts'],
    queryFn: () => base44.entities.BlogPost.filter({ 
      published: true, 
      category: 'Tools & Tech' 
    }, '-published_date'),
    initialData: [],
  });

  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="AI Marketing Tools Hub - Reviews, Comparisons & Guides"
        description="Comprehensive reviews and comparisons of AI marketing tools. Cut through the hype with practical evaluations and integration guides."
        url="https://highcaliberai.com/tools-hub"
        canonical="https://highcaliberai.com/tools-hub"
      />

      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Tools Hub
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Honest reviews, practical comparisons, and integration guides for AI marketing tools. No vendor fluff, just what actually works.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Link to={createPageUrl("Resources")} className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Tool Directory</h3>
              <p className="text-gray-600 mb-4">Curated list of AI marketing tools across content creation, automation, and analytics.</p>
              <span className="text-red-600 font-semibold flex items-center">
                Browse Tools <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tool Comparisons</h3>
              <p className="text-gray-600 mb-4">Head-to-head comparisons of popular AI tools to help you choose the right fit.</p>
              <span className="text-gray-500 text-sm">Coming soon</span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integration Guides</h3>
              <p className="text-gray-600 mb-4">Step-by-step guides for implementing AI tools in your marketing stack.</p>
              <span className="text-gray-500 text-sm">Coming soon</span>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Tool Reviews & Insights</h2>
            {posts.length === 0 ? (
              <p className="text-gray-600">Tool reviews coming soon...</p>
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