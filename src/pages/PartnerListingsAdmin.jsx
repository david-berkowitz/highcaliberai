import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CheckCircle, XCircle, Clock, AlertCircle, ExternalLink, Search, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const STATUS_CONFIG = {
  pending_payment: { label: "Pending Payment", color: "bg-gray-100 text-gray-600", icon: Clock },
  pending_review:  { label: "Pending Review",  color: "bg-amber-100 text-amber-700", icon: AlertCircle },
  approved:        { label: "Approved",         color: "bg-green-100 text-green-700", icon: CheckCircle },
  rejected:        { label: "Rejected",         color: "bg-red-100 text-red-700",    icon: XCircle },
};

export default function PartnerListingsAdmin() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const queryClient = useQueryClient();

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => setUser(null)).finally(() => setLoading(false));
  }, []);

  const { data: listings = [], isFetching } = useQuery({
    queryKey: ["admin-partner-listings"],
    queryFn: () => base44.entities.PartnerListing.list("-created_date", 200),
    enabled: !!user && user.role === "admin",
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, status }) => base44.entities.PartnerListing.update(id, { status }),
    onSuccess: () => queryClient.invalidateQueries(["admin-partner-listings"]),
  });

  if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>;

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-500">This page is for admins only.</p>
        </div>
      </div>
    );
  }

  const filtered = listings.filter(l => {
    const matchesStatus = filterStatus === "all" || l.status === filterStatus;
    const q = search.toLowerCase();
    const matchesSearch = !q ||
      l.company_name?.toLowerCase().includes(q) ||
      l.contact_email?.toLowerCase().includes(q) ||
      l.contact_name?.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  const counts = Object.keys(STATUS_CONFIG).reduce((acc, key) => {
    acc[key] = listings.filter(l => l.status === key).length;
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Partner Listings Admin</h1>
          <p className="text-gray-500 mt-1">{listings.length} total submissions</p>
        </div>
        <Button variant="outline" size="sm" onClick={() => queryClient.invalidateQueries(["admin-partner-listings"])} disabled={isFetching}>
          <RefreshCw className={`w-4 h-4 mr-2 ${isFetching ? "animate-spin" : ""}`} /> Refresh
        </Button>
      </div>

      {/* Status summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
          <button key={key} onClick={() => setFilterStatus(filterStatus === key ? "all" : key)}
            className={`p-4 rounded-xl border-2 text-left transition-all ${filterStatus === key ? "border-gray-900 bg-gray-50" : "border-gray-200 bg-white hover:border-gray-300"}`}>
            <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-semibold mb-2 ${cfg.color}`}>
              <cfg.icon className="w-3 h-3" /> {cfg.label}
            </div>
            <div className="text-2xl font-bold text-gray-900">{counts[key] || 0}</div>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Search by company, name, or email..."
          value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {/* Listings table */}
      <div className="space-y-4">
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">No listings found.</div>
        )}
        {filtered.map(listing => {
          const cfg = STATUS_CONFIG[listing.status] || STATUS_CONFIG.pending_review;
          return (
            <div key={listing.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Logo + info */}
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  {listing.logo_url
                    ? <img src={listing.logo_url} alt={listing.company_name} className="h-12 w-12 object-contain rounded-lg border border-gray-200 flex-shrink-0" />
                    : <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 font-bold text-lg flex-shrink-0">{listing.company_name?.[0]}</div>
                  }
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{listing.company_name}</h3>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${cfg.color}`}>
                        <cfg.icon className="w-3 h-3" /> {cfg.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">
                      {listing.company_type} · {listing.specialty_category || "—"} · {listing.headquarters || "—"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {listing.contact_name} · <a href={`mailto:${listing.contact_email}`} className="text-red-600 hover:underline">{listing.contact_email}</a>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Submitted: {new Date(listing.created_date).toLocaleDateString()} ·
                      Paid: ${listing.amount_paid ?? 0}
                      {listing.discount_code && ` (Code: ${listing.discount_code})`}
                    </p>
                    {listing.description && (
                      <p className="text-sm text-gray-600 mt-3 line-clamp-2">{listing.description}</p>
                    )}
                    {listing.services?.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {listing.services.slice(0, 5).map(s => (
                          <span key={s} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 flex-shrink-0 md:items-end">
                  {listing.website && (
                    <a href={listing.website} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
                      <ExternalLink className="w-3 h-3" /> Visit Site
                    </a>
                  )}
                  {listing.status === "pending_review" && (
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white"
                        disabled={updateMutation.isPending}
                        onClick={() => updateMutation.mutate({ id: listing.id, status: "approved" })}>
                        <CheckCircle className="w-4 h-4 mr-1" /> Approve
                      </Button>
                      <Button size="sm" variant="outline" className="border-red-300 text-red-600 hover:bg-red-50"
                        disabled={updateMutation.isPending}
                        onClick={() => updateMutation.mutate({ id: listing.id, status: "rejected" })}>
                        <XCircle className="w-4 h-4 mr-1" /> Reject
                      </Button>
                    </div>
                  )}
                  {listing.status === "approved" && (
                    <Button size="sm" variant="outline" className="border-red-300 text-red-600 hover:bg-red-50"
                      disabled={updateMutation.isPending}
                      onClick={() => updateMutation.mutate({ id: listing.id, status: "rejected" })}>
                      <XCircle className="w-4 h-4 mr-1" /> Revoke
                    </Button>
                  )}
                  {listing.status === "rejected" && (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white"
                      disabled={updateMutation.isPending}
                      onClick={() => updateMutation.mutate({ id: listing.id, status: "approved" })}>
                      <CheckCircle className="w-4 h-4 mr-1" /> Re-Approve
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}