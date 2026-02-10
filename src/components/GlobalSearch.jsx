import React, { useState, useEffect } from "react";
import { Search, X, FileText, BookOpen, Newspaper } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function GlobalSearch({ open, onOpenChange }) {
  const [query, setQuery] = useState("");

  const { data: blogPosts = [] } = useQuery({
    queryKey: ['search-blog'],
    queryFn: () => base44.entities.BlogPost.filter({ published: true }),
    enabled: open,
  });

  const { data: aiNews = [] } = useQuery({
    queryKey: ['search-news'],
    queryFn: () => base44.entities.AINewsDigest.filter({ published: true }),
    enabled: open,
  });

  const filteredResults = {
    blog: blogPosts.filter(post => 
      post.title?.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5),
    news: aiNews.filter(item =>
      item.title?.toLowerCase().includes(query.toLowerCase()) ||
      item.intro?.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 3),
  };

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden p-0">
        <div className="border-b border-gray-200 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search blog posts, news, resources..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="overflow-y-auto max-h-[500px] p-4">
          {!query ? (
            <div className="text-center py-12 text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Start typing to search...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Blog Posts */}
              {filteredResults.blog.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Blog Posts
                  </h3>
                  <div className="space-y-2">
                    {filteredResults.blog.map(post => (
                      <Link
                        key={post.id}
                        to={createPageUrl(`BlogPost?slug=${post.slug}`)}
                        onClick={() => onOpenChange(false)}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 mb-1">{post.title}</h4>
                        <p className="text-sm text-gray-600 line-clamp-1">{post.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* AI News */}
              {filteredResults.news.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                    <Newspaper className="w-4 h-4" />
                    AI News
                  </h3>
                  <div className="space-y-2">
                    {filteredResults.news.map(item => (
                      <Link
                        key={item.id}
                        to={createPageUrl('AINews')}
                        onClick={() => onOpenChange(false)}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 line-clamp-1">{item.intro}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredResults.blog.length === 0 && filteredResults.news.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <p>No results found for "{query}"</p>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}