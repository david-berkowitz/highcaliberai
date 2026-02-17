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
import PersonSchema from "@/components/SEO/PersonSchema";
import PeopleAlsoAsk from "@/components/PeopleAlsoAsk";
import ShareButtons from "@/components/ShareButtons";
import Breadcrumbs from "@/components/Breadcrumbs";

// Generate People Also Ask questions based on post category
function generatePAAQuestions(post) {
  const categoryQuestions = {
    "AI Strategy": [
      { question: "How do I assess my team's AI readiness?", answer: "Start with an AI Readiness Audit that evaluates four areas: tech stack (what tools you have vs. need), team skills (who can actually use AI), processes (how work gets done), and policies (what's allowed). Be brutally honest about gaps—most teams overestimate readiness by 30-40%." },
      { question: "What's the difference between fractional CMO and consulting?", answer: "Fractional CMOs embed with your team to lead execution—they own outcomes. Consultants deliver recommendations and leave. Think of it as the difference between hiring a part-time executive vs. buying a strategy deck." },
      { question: "How long does AI adoption take?", answer: "Quick wins happen in 4-8 weeks (tool adoption, basic training). Real transformation takes 6-12 months because you're changing how people work, not just adding software. Anyone promising overnight results is selling vaporware." }
    ],
    "Tools & Tech": [
      { question: "How do I choose between AI tools?", answer: "Use the 'Process Over Product' framework: map your workflow first, identify bottlenecks, then find tools that solve specific problems. Most teams buy tools first and wonder why adoption fails. Start with the work, not the software." },
      { question: "What's the ROI of AI marketing tools?", answer: "Look for time savings (hours returned to the team), quality improvements (better output), and scale (doing more with same headcount). Avoid vanity metrics like 'AI-generated posts.' Measure what matters: revenue impact, team capacity, customer outcomes." },
      { question: "Should I use free or paid AI tools?", answer: "Free tools work for experimentation and low-stakes tasks. Paid tools matter when you need: reliability (uptime), support (when things break), integration (connecting to your stack), and compliance (data security). Budget $50-200/user/month for serious adoption." }
    ],
    "Industry Trends": [
      { question: "What is GEO and why does it matter?", answer: "Generative Engine Optimization (GEO) means optimizing for AI search engines like ChatGPT, Perplexity, and Google AI Overviews. It matters because 40%+ of searches now start with AI. If you're not showing up in AI results, you're invisible to a growing segment." },
      { question: "Is AI search replacing Google?", answer: "Not replacing—augmenting. Google still owns 90%+ of search, but AI tools are changing how people search. The shift: fewer clicks to websites, more answers in-stream. Your strategy: be the source AI engines cite, not just a link they might show." },
      { question: "What AI trends should marketers ignore?", answer: "Ignore: 'AI will replace all marketers' (won't happen), fully autonomous AI agents (not ready), and any tool promising to 'automate your entire marketing' (vaporware). Focus on: AI as augmentation, workflow automation, and practical content scaling." }
    ],
    "Case Studies": [
      { question: "What results can I expect from AI implementation?", answer: "Typical wins after 6 months: 20-30% time savings on repetitive tasks, 40-60% increase in content output, 15-25% improvement in team capacity. Results vary by starting point—teams with low AI maturity see bigger gains faster." },
      { question: "How do I measure AI success?", answer: "Track three metrics: Adoption Rate (% of team actively using AI), Time-to-Value (how fast you see results), and Business Impact (revenue, leads, efficiency). Avoid tracking 'number of AI tools'—that's shelfware risk, not success." },
      { question: "What are common AI implementation mistakes?", answer: "Top mistakes: buying tools before defining process (causes shelfware), skipping training (adoption fails), no governance (legal/PR risk), and expecting instant ROI (transformation takes time). Fix: start small, train hard, set policies, measure outcomes." }
    ],
    "How-To": [
      { question: "How do I train my team on AI?", answer: "Use Applied Workshops—not theory lectures. Give them real projects: write a blog post with AI, build a campaign brief, create social content. Learning by doing builds muscle memory. Skip the 'what is AI' intro decks—your team needs reps, not concepts." },
      { question: "What's the best way to start with AI?", answer: "Start with high-frequency, low-risk tasks: meeting summaries, email drafts, social post ideas. Get your team comfortable with AI on tasks that don't matter much if they fail. Build confidence, then tackle bigger projects like strategy and customer-facing content." },
      { question: "How do I overcome team resistance to AI?", answer: "Address fears head-on: AI augments, doesn't replace (show examples of roles evolving, not disappearing). Prove quick wins (show time saved on boring tasks). Make it opt-in initially (early adopters become internal champions). Most resistance melts after people see real benefits." }
    ]
  };

  return categoryQuestions[post.category] || [];
}

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
        image={post.featured_image || "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png"}
        url={`https://highcaliberai.com/blog/${post.slug}`}
        canonical={`https://highcaliberai.com/blog/${post.slug}`}
        type="article"
        author="David Berkowitz"
      />
      <BlogPostStructuredData post={post} />
      <PersonSchema />

      {/* Header */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[
            { label: "Blog", href: createPageUrl('Blog') },
            { label: post.category }
          ]} />

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
              <ShareButtons 
                url={`https://highcaliberai.com/blog/${post.slug}`}
                title={post.title}
                description={post.excerpt}
              />
            </div>

            {/* Key Takeaways Box - AI-friendly summary */}
            {post.excerpt && (
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💡</span> Key Takeaways
                </h2>
                <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
              </div>
            )}

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

            {/* Summary Section - AI-optimized */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Insights</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Category:</strong> {post.category}</p>
                <p><strong>Read Time:</strong> {post.read_time || '5'} minutes</p>
                <p><strong>Summary:</strong> {post.excerpt}</p>
              </div>
            </div>

            {/* People Also Ask Section */}
            <PeopleAlsoAsk questions={generatePAAQuestions(post)} />

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