import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, AlertCircle, ExternalLink, CheckCircle } from "lucide-react";

export default function PressCoverageAdmin() {
  const [filter, setFilter] = useState("all");
  const queryClient = useQueryClient();

  const { data: coverage, isLoading } = useQuery({
    queryKey: ['pressCoverage'],
    queryFn: () => base44.entities.PressCoverage.list('-sort_order'),
    initialData: [],
  });



  const filteredCoverage = coverage.filter(item => {
    if (filter === "needs_review") return item.import_status === "needs_review";
    if (filter === "parsed") return item.import_status === "parsed";
    return true;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading press coverage...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Press Coverage Admin</h1>
          <p className="text-gray-600">Manage press coverage imported from SerialMarketer.net</p>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mb-6">
          <Button
            onClick={() => queryClient.invalidateQueries({ queryKey: ['pressCoverage'] })}
            variant="outline"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All ({coverage.length})
          </Button>
          <Button
            variant={filter === "parsed" ? "default" : "outline"}
            onClick={() => setFilter("parsed")}
          >
            Parsed ({coverage.filter(c => c.import_status === "parsed").length})
          </Button>
          <Button
            variant={filter === "needs_review" ? "default" : "outline"}
            onClick={() => setFilter("needs_review")}
          >
            <AlertCircle className="w-4 h-4 mr-2" />
            Needs Review ({coverage.filter(c => c.import_status === "needs_review").length})
          </Button>
        </div>

        {/* Coverage List */}
        <div className="space-y-4">
          {filteredCoverage.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-gray-500">No coverage entries found. Click "Import from Serial Marketer" to get started.</p>
              </CardContent>
            </Card>
          ) : (
            filteredCoverage.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg">{item.article_title}</CardTitle>
                        {item.import_status === "needs_review" ? (
                          <Badge variant="destructive" className="flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            Needs Review
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Parsed
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 font-medium">{item.outlet_name}</p>
                    </div>
                    {item.article_url && (
                      <a
                        href={item.article_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {item.coverage_date_text && (
                      <div>
                        <span className="font-semibold text-gray-700">Date:</span>{" "}
                        <span className="text-gray-600">{item.coverage_date_text}</span>
                        {item.coverage_date && (
                          <span className="text-gray-400 ml-2">({item.coverage_date})</span>
                        )}
                      </div>
                    )}
                    {item.notes && (
                      <div>
                        <span className="font-semibold text-gray-700">Notes:</span>{" "}
                        <span className="text-gray-600">{item.notes}</span>
                      </div>
                    )}
                  </div>
                  {item.raw_snippet && (
                    <div className="mt-3 p-3 bg-gray-50 rounded text-xs text-gray-600">
                      <strong>Raw Snippet:</strong> {item.raw_snippet}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}