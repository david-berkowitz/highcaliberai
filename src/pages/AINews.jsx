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
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <Card className="shadow-xl border-2 border-red-500">
            <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-red-600" />
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Latest Digest</span>
                  </div>
                  <CardTitle className="text-3xl">{latestDigest.title}</CardTitle>
                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(latestDigest.week_of).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{latestDigest.intro}</p>

              {/* News Items */}
              <div className="space-y-6 mb-8">
                {latestDigest.news_items.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-red-500 pl-6 py-2">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{item.headline}</h3>
                      <Badge className={categoryColors[item.category] || 'bg-gray-100 text-gray-800'}>
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-3">{item.summary}</p>
                    <div className="bg-blue-50 border-l-2 border-blue-400 pl-4 py-2 mb-3">
                      <p className="text-sm font-medium text-blue-900">
                        <span className="font-semibold">Why it matters:</span> {item.why_it_matters}
                      </p>
                    </div>
                    {item.source_url && (
                      <a
                        href={item.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                      >
                        Read full story <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Commentary */}
              {latestDigest.commentary && (
                <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    💭 David's Take
                  </h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {latestDigest.commentary}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      )}

      {/* Older Digests */}
      {olderDigests.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Previous Digests</h2>
          <div className="grid gap-6">
            {olderDigests.map((digest) => (
              <Card key={digest.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{digest.title}</CardTitle>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(digest.week_of).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{digest.intro}</p>
                  <p className="text-sm text-gray-600">
                    {digest.news_items.length} stories curated
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
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