import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Heart, ExternalLink, Calendar, Sparkles, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import MetaTags from '@/components/SEO/MetaTags';

export default function MenschPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractionMessage, setExtractionMessage] = useState('');

  const { data: posts = [], isLoading, refetch } = useQuery({
    queryKey: ['mensch-posts'],
    queryFn: () => base44.entities.MenschPost.list('-post_date'),
    initialData: [],
  });

  // Check if user is admin
  React.useEffect(() => {
    base44.auth.me().then(user => {
      setIsAdmin(user?.role === 'admin');
    }).catch(() => setIsAdmin(false));
  }, []);

  const handleExtractPost = async (e) => {
    e.preventDefault();
    setIsExtracting(true);
    setExtractionMessage('');

    try {
      const result = await base44.functions.invoke('extractMenschPost', { linkedin_url: linkedinUrl });
      setExtractionMessage(`✓ ${result.data.message}`);
      setLinkedinUrl('');
      refetch();
      setTimeout(() => {
        setShowAddForm(false);
        setExtractionMessage('');
      }, 2000);
    } catch (error) {
      setExtractionMessage(`✗ ${error.message || 'Failed to extract post'}`);
    } finally {
      setIsExtracting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <MetaTags 
        title="Meet a Mensch Monday - Celebrating Good People"
        description="David Berkowitz's Meet a Mensch Monday series on LinkedIn - celebrating people who make a difference in the world."
        url="https://highcaliberai.com/mensch"
        canonical="https://highcaliberai.com/mensch"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-blue-100 border border-blue-200">
              <Heart className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Every Monday</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Meet a <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mensch</span> Monday
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Celebrating good people who make a difference. A weekly series highlighting mensches—Yiddish for "a person of integrity and honor."
            </p>

            <a
              href="https://www.linkedin.com/in/dberkowitz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Follow on LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Admin Add Post */}
      {isAdmin && (
        <section className="px-6 pb-12">
          <div className="max-w-2xl mx-auto">
            {!showAddForm ? (
              <Button 
                onClick={() => setShowAddForm(true)}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Mensch Post
              </Button>
            ) : (
              <Card className="border-2 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Extract LinkedIn Post</h3>
                  <form onSubmit={handleExtractPost} className="space-y-4">
                    <Input
                      placeholder="Paste LinkedIn post URL..."
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      required
                    />
                    {extractionMessage && (
                      <p className={`text-sm ${extractionMessage.startsWith('✓') ? 'text-green-600' : 'text-red-600'}`}>
                        {extractionMessage}
                      </p>
                    )}
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        disabled={isExtracting}
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        {isExtracting ? 'Extracting...' : 'Extract & Add'}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setShowAddForm(false);
                          setLinkedinUrl('');
                          setExtractionMessage('');
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="text-center py-20">
              <p className="text-gray-500">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all border-2 border-gray-100 hover:border-blue-200 group">
                    <CardContent className="p-6">
                      {post.featured && (
                        <Badge className="mb-3 bg-blue-100 text-blue-700 border-0">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      
                      {post.image_url && (
                        <img 
                          src={post.image_url} 
                          alt={post.person_name}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      )}
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {post.person_name}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.post_date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-4">
                        {post.excerpt}
                      </p>
                      
                      <a
                        href={post.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all"
                      >
                        Read on LinkedIn
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white">
            <CardContent className="p-12 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Know a Mensch?</h2>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Have someone you'd like to nominate for a future Meet a Mensch Monday? Reach out on LinkedIn!
              </p>
              <a
                href="https://www.linkedin.com/in/dberkowitz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}