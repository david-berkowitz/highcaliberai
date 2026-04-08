import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import MetaTags from '@/components/SEO/MetaTags';
import Breadcrumbs from '@/components/Breadcrumbs';
import { createPageUrl } from '@/utils';

const TYPE_LABEL = {
  linkedin_post: 'LinkedIn',
  essay: 'Essay',
  article: 'Article',
};

const TYPE_COLORS = {
  linkedin_post: 'bg-blue-100 text-blue-700',
  essay: 'bg-purple-100 text-purple-700',
  article: 'bg-red-100 text-red-700',
};

function formatDate(dateStr) {
  if (!dateStr) return '';
  if (isNaN(Date.parse(dateStr))) return dateStr;
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function Bylines() {
  const [writings, setWritings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.FeaturedWriting.list('-publication_date').then((data) => {
      setWritings(data);
      setLoading(false);
    });
  }, []);

  const featuredPieces = writings.filter((w) => w.featured);
  const allOther = writings.filter((w) => !w.featured);

  const newsletterPosts = allOther.filter(
    (w) => w.source_url && w.source_url.includes('aibriefnewsletter.com')
  );
  const otherWritings = allOther.filter(
    (w) => !w.source_url || !w.source_url.includes('aibriefnewsletter.com')
  );

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title="Published Bylines - David Berkowitz's Articles"
        description="Featured articles and thought leadership by David Berkowitz across leading publications including AI Brief Newsletter and more."
        url="https://highcaliberai.com/bylines"
        canonical="https://highcaliberai.com/bylines"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Breadcrumbs
          items={[
            { label: 'Resources', href: createPageUrl('Resources') },
            { label: 'Bylines' },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Published <span className="text-red-600">Bylines</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Featured articles and thought leadership across leading publications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Highlights */}
      {featuredPieces.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">Featured</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Highlighted Pieces</h2>
              <p className="text-gray-500">A few favorites worth reading first</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPieces.map((piece, index) => (
                <motion.div
                  key={piece.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all p-8"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${TYPE_COLORS[piece.type] || 'bg-gray-100 text-gray-700'}`}>
                      {TYPE_LABEL[piece.type] || piece.type}
                    </span>
                    <span className="text-sm text-gray-400">{formatDate(piece.publication_date)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{piece.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{piece.excerpt}</p>
                  {piece.source_url && (
                    <a
                      href={piece.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group"
                    >
                      Read it
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AI Brief Newsletter grid */}
      {!loading && newsletterPosts.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-red-50 border border-red-200">
                <span className="text-sm font-semibold text-red-700 uppercase tracking-wide">AI Brief Newsletter</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Brief by Marketecture</h2>
              <p className="text-gray-500 text-base">
                Weekly newsletter on AI marketing — written by David for 7,000+ subscribers
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsletterPosts.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <a
                    href={article.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col h-full"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-red-600 uppercase tracking-wider">AI Brief Newsletter</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm flex-grow leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="pt-4 border-t border-gray-100 text-xs text-gray-400">
                      {formatDate(article.publication_date)}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other writing */}
      {!loading && otherWritings.length > 0 && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">More Writing</h2>
              <p className="text-gray-500">Essays, LinkedIn posts, and other pieces</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {otherWritings.map((piece, index) => (
                <motion.div
                  key={piece.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all p-8"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${TYPE_COLORS[piece.type] || 'bg-gray-100 text-gray-700'}`}>
                      {TYPE_LABEL[piece.type] || piece.type}
                    </span>
                    <span className="text-sm text-gray-400">{formatDate(piece.publication_date)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{piece.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{piece.excerpt}</p>
                  {piece.source_url && (
                    <a
                      href={piece.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group"
                    >
                      Read it
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {loading && (
        <div className="text-gray-400 py-24 text-center">Loading…</div>
      )}
    </div>
  );
}