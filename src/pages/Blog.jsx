import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import NewsletterSignup from "@/components/NewsletterSignup";
import MetaTags from "@/components/SEO/MetaTags";
import AgentChat from "@/components/AgentChat";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const today = new Date().toISOString().split('T')[0];

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: () => base44.entities.BlogPost.filter({ published: true }, '-published_date'),
    initialData: [],
  });

  const categories = ["all", "AI Strategy", "Case Studies", "Tools & Tech", "Industry Trends", "How-To"];

  const filteredPosts = posts.filter(post => {
    if (post.published_date && post.published_date > today) return false;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="AI Marketing Blog & Insights"
        description="Expert insights on AI marketing strategy, tools, case studies, and industry trends. Learn how to transform your marketing with artificial intelligence."
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png"
        url="https://highcaliberai.com/blog"
        canonical="https://highcaliberai.com/blog"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Marketing <span className="text-red-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Practical strategies, case studies, and insights on using AI to transform your marketing
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <Link to={createPageUrl("Resources")} className="text-red-600 hover:text-red-700 font-medium">Browse Resources</Link>
              <span className="text-gray-300">•</span>
              <Link to={createPageUrl("AINews")} className="text-red-600 hover:text-red-700 font-medium">Weekly AI News</Link>
              <span className="text-gray-300">•</span>
              <Link to={createPageUrl("Services")} className="text-red-600 hover:text-red-700 font-medium">Our Services</Link>
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-red-100">
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPost.featured_image && (
                    <div className="relative h-64 md:h-full">
                      <img
                        src={featuredPost.featured_image}
                        alt={featuredPost.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge className="bg-red-600 text-white mb-4 w-fit">Featured</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.published_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </div>
                      {featuredPost.read_time && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.read_time} min read
                        </div>
                      )}
                    </div>
                    <Link
                      to={createPageUrl(`BlogPost?slug=${featuredPost.slug}`)}
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group"
                    >
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="text-center py-20">
              <p className="text-gray-500">Loading articles...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-block px-6 py-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-900 font-medium mb-2">📝 Coming Soon</p>
                <p className="text-blue-700 text-sm">We're working on fresh AI marketing insights. Check back soon for in-depth articles, case studies, and strategy guides.</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-red-200">
                    {post.featured_image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <Badge className="bg-gray-100 text-gray-700 mb-3">{post.category}</Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.published_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                        {post.read_time && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.read_time} min
                          </div>
                        )}
                      </div>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="text-xs text-gray-500 flex items-center gap-1">
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link
                        to={createPageUrl(`BlogPost?slug=${post.slug}`)}
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm group"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Ahead of the AI Curve
            </h2>
            <p className="text-red-100 text-lg">
              Get monthly insights, case studies, and AI marketing strategies delivered to your inbox
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <NewsletterSignup source="blog" />
          </div>
        </div>
      </section>

      <AgentChat 
        agentName="blog_discovery_assistant"
        title="Find Content"
        subtitle="I'll help you discover relevant articles"
      />
      </div>
      );
      }