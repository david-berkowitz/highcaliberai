import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Calendar, Sparkles } from 'lucide-react';
import MetaTags from '@/components/SEO/MetaTags';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function AINews() {
  const { data: digests = [], isLoading } = useQuery({
    queryKey: ['aiNewsDigests'],
    queryFn: () => base44.entities.AINewsDigest.filter({ published: true }, '-week_of', 10)
  });

  const categoryColors = {
    'Product Launch': 'bg-blue-100 text-blue-800',
    'Industry Trend': 'bg-purple-100 text-purple-800',
    'Research': 'bg-green-100 text-green-800',
    'Tool Update': 'bg-orange-100 text-orange-800',
    'Strategy': 'bg-red-100 text-red-800'
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading news...</p>
      </div>
    );
  }

  const latestDigest = digests[0];
  const olderDigests = digests.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title="Weekly AI Marketing News Digest"
        description="Stay updated with the latest AI marketing news, tools, and trends. Curated weekly by David Berkowitz."
        url={window.location.href}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-10 h-10 text-red-400" />
            <h1 className="text-5xl font-bold">AI Marketing News</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Weekly digest of AI marketing developments that actually matter. Curated and analyzed by David Berkowitz.
          </p>
        </div>
      </section>

      {/* Latest Digest */}
      {latestDigest && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <span className="text-sm font-medium text-red-600 uppercase tracking-wide">Latest</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">{latestDigest.title}</h2>
            <p className="text-gray-600 mt-2">{new Date(latestDigest.week_of).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">{latestDigest.intro}</p>
          </div>

          {/* News Items */}
          <div className="space-y-12 mb-16">
            {latestDigest.news_items.map((item, idx) => (
              <article key={idx} className="pb-8 border-b border-gray-200 last:border-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-semibold text-gray-900 leading-tight">{item.headline}</h3>
                  <span className="text-xs font-medium text-gray-500 whitespace-nowrap">{item.category}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{item.summary}</p>
                <p className="text-sm text-gray-600 italic mb-3">{item.why_it_matters}</p>
                {item.source_url && (
                  <a
                    href={item.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-600 hover:text-red-700 inline-flex items-center gap-1"
                  >
                    Source <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </article>
            ))}
          </div>

          {/* Commentary */}
          {latestDigest.commentary && (
            <div className="border-t-2 border-gray-900 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">David's Take</h3>
              <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {latestDigest.commentary}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Older Digests */}
      {olderDigests.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Previous Digests</h2>
          <div className="space-y-8">
            {olderDigests.map((digest) => (
              <div key={digest.id} className="pb-8 border-b border-gray-200 last:border-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{digest.title}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  {new Date(digest.week_of).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · {digest.news_items.length} stories
                </p>
                <p className="text-gray-700">{digest.intro}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <NewsletterSignup />
      </section>

      {/* Empty State */}
      {digests.length === 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Coming Soon</h2>
          <p className="text-gray-600">The first weekly digest will be published soon. Subscribe to get notified!</p>
        </section>
      )}
    </div>
  );
}