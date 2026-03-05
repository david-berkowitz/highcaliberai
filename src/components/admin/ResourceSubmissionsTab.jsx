import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CheckCircle, XCircle, ExternalLink, ChevronDown, ChevronUp, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const STATUS_COLORS = {
  pending:  "bg-amber-100 text-amber-700 border-amber-200",
  approved: "bg-green-100 text-green-700 border-green-200",
  rejected: "bg-red-100 text-red-700 border-red-200",
};

export default function ResourceSubmissionsTab() {
  const qc = useQueryClient();
  const [filter, setFilter] = useState("pending");
  const [expanded, setExpanded] = useState(null);

  const { data: submissions = [] } = useQuery({
    queryKey: ["resource-submissions-admin"],
    queryFn: () => base44.entities.ResourceSubmission.list("-created_date", 100),
  });

  const update = useMutation({
    mutationFn: ({ id, data }) => base44.entities.ResourceSubmission.update(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["resource-submissions-admin"] }),
  });

  const filtered = filter === "all" ? submissions : submissions.filter(s => s.status === filter);
  const counts = { all: submissions.length };
  ["pending", "approved", "rejected"].forEach(s => {
    counts[s] = submissions.filter(r => r.status === s).length;
  });

  return (
    <div className="space-y-4">
      {/* Summary counts */}
      <div className="grid grid-cols-3 gap-3 mb-2">
        {[
          { key: "pending", label: "Pending", color: "bg-amber-50 border-amber-200 text-amber-700" },
          { key: "approved", label: "Approved", color: "bg-green-50 border-green-200 text-green-700" },
          { key: "rejected", label: "Rejected", color: "bg-red-50 border-red-200 text-red-700" },
        ].map(({ key, label, color }) => (
          <div key={key} className={`border rounded-xl p-3 text-center ${color}`}>
            <div className="text-2xl font-bold">{counts[key] ?? 0}</div>
            <div className="text-xs font-semibold">{label}</div>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2">
        {[["all", "All"], ["pending", "Pending Review"], ["approved", "Approved"], ["rejected", "Rejected"]].map(([val, label]) => (
          <button key={val} onClick={() => setFilter(val)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${filter === val ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"}`}>
            {label} <span className="opacity-60">({counts[val] ?? 0})</span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Clock className="w-8 h-8 mx-auto mb-2 opacity-40" />
          <p className="text-sm">No submissions in this status.</p>
        </div>
      )}

      {filtered.map(s => (
        <Card key={s.id} className="border border-gray-200">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-gray-900">{s.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${STATUS_COLORS[s.status] || ""}`}>
                    {s.status}
                  </span>
                  <Badge className="bg-gray-100 text-gray-600 border-0 text-xs">{s.category}</Badge>
                  {s.has_referral && <Badge className="bg-blue-50 text-blue-600 border-0 text-xs">Has Referral</Badge>}
                </div>
                <p className="text-sm text-gray-500 mt-0.5">
                  By {s.submitter_name} · <a href={`mailto:${s.submitter_email}`} className="hover:underline">{s.submitter_email}</a>
                </p>
                <a href={s.url} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:underline flex items-center gap-1 mt-1">
                  <ExternalLink className="w-3 h-3" />{s.url}
                </a>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {s.status === "pending" && (
                  <>
                    <Button size="sm" onClick={() => update.mutate({ id: s.id, data: { status: "approved" } })}
                      className="bg-green-600 hover:bg-green-700 text-white text-xs h-8 px-3">
                      <CheckCircle className="w-3 h-3 mr-1" /> Approve
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => update.mutate({ id: s.id, data: { status: "rejected" } })}
                      className="text-red-600 border-red-200 hover:bg-red-50 text-xs h-8 px-3">
                      <XCircle className="w-3 h-3 mr-1" /> Reject
                    </Button>
                  </>
                )}
                {s.status === "approved" && (
                  <Button size="sm" variant="outline" onClick={() => update.mutate({ id: s.id, data: { status: "rejected" } })}
                    className="text-red-600 text-xs h-8 px-3">Revoke</Button>
                )}
                {s.status === "rejected" && (
                  <Button size="sm" variant="outline" onClick={() => update.mutate({ id: s.id, data: { status: "approved" } })}
                    className="text-green-600 text-xs h-8 px-3">Approve</Button>
                )}
                <button onClick={() => setExpanded(expanded === s.id ? null : s.id)}
                  className="text-gray-400 hover:text-gray-600 p-1">
                  {expanded === s.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {expanded === s.id && (
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-600">
                <p><span className="font-medium text-gray-700">Description:</span> {s.description}</p>
                <p><span className="font-medium text-gray-700">Why Include:</span> {s.why_include}</p>
                {s.tier && <p><span className="font-medium text-gray-700">Tier:</span> {s.tier}</p>}
                {s.has_referral && s.referral_code && (
                  <p><span className="font-medium text-gray-700">Referral Code:</span>{" "}
                    <code className="bg-gray-100 px-2 py-0.5 rounded text-xs font-mono">{s.referral_code}</code>
                  </p>
                )}
                <p className="text-xs text-gray-400">Submitted: {new Date(s.created_date).toLocaleString()}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}