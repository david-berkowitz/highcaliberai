import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  Users, Heart, FileText, CheckCircle, XCircle, Clock, 
  ExternalLink, Plus, X, ChevronDown, ChevronUp, Edit2, Save, Eye, EyeOff
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TABS = [
  { id: "partners", label: "Partner Approvals", icon: Users },
  { id: "mensch", label: "Meet a Mensch", icon: Heart },
  { id: "bylines", label: "Bylines", icon: FileText },
  { id: "blog", label: "Blog Posts", icon: FileText },
  { id: "codes", label: "Discount Codes", icon: Eye },
];

const STATUS_COLORS = {
  pending_payment: "bg-amber-100 text-amber-700 border-amber-200",
  pending_review:  "bg-blue-100 text-blue-700 border-blue-200",
  approved:        "bg-green-100 text-green-700 border-green-200",
  rejected:        "bg-red-100 text-red-700 border-red-200",
  paused:          "bg-gray-100 text-gray-600 border-gray-200",
};

// ─── Partners Tab ───────────────────────────────────────────────────────────
function PartnersTab() {
  const qc = useQueryClient();
  const [filter, setFilter] = useState("pending_review");
  const [expanded, setExpanded] = useState(null);

  const { data: listings = [] } = useQuery({
    queryKey: ["admin-listings"],
    queryFn: () => base44.entities.PartnerListing.list("-created_date", 100),
  });

  const update = useMutation({
    mutationFn: ({ id, data }) => base44.entities.PartnerListing.update(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-listings"] }),
  });

  const filtered = filter === "all" ? listings : listings.filter(l => l.status === filter);
  const counts = { all: listings.length };
  ["pending_payment","pending_review","approved","rejected","paused"].forEach(s => {
    counts[s] = listings.filter(l => l.status === s).length;
  });

  return (
    <div className="space-y-4">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2">
        {[["all","All"],["pending_review","Needs Review"],["approved","Approved"],["rejected","Rejected"],["pending_payment","Awaiting Payment"],["paused","Paused"]].map(([val,label]) => (
          <button key={val} onClick={() => setFilter(val)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${filter === val ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"}`}>
            {label} <span className="opacity-60">({counts[val] ?? 0})</span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && <p className="text-sm text-gray-400 py-8 text-center">No listings in this status.</p>}

      {filtered.map(l => (
        <Card key={l.id} className="border border-gray-200">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-gray-900">{l.company_name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${STATUS_COLORS[l.status] || ""}`}>
                    {l.status?.replace("_", " ")}
                  </span>
                  {l.amount_paid > 0 && <span className="text-xs text-green-600 font-medium">💰 ${l.amount_paid}</span>}
                  {l.stripe_session_id === "COMPED" && <span className="text-xs text-purple-600 font-medium">🎁 Comped</span>}
                </div>
                <p className="text-sm text-gray-500 mt-0.5">{l.company_type} · {l.contact_name} · <a href={`mailto:${l.contact_email}`} className="hover:underline">{l.contact_email}</a></p>
                {l.website && <a href={l.website} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline flex items-center gap-1 mt-1"><ExternalLink className="w-3 h-3"/>{l.website}</a>}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {l.status === "pending_review" && (
                  <>
                    <Button size="sm" onClick={() => update.mutate({ id: l.id, data: { status: "approved" } })}
                      className="bg-green-600 hover:bg-green-700 text-white text-xs h-8 px-3">
                      <CheckCircle className="w-3 h-3 mr-1"/> Approve
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => update.mutate({ id: l.id, data: { status: "rejected" } })}
                      className="text-red-600 border-red-200 hover:bg-red-50 text-xs h-8 px-3">
                      <XCircle className="w-3 h-3 mr-1"/> Reject
                    </Button>
                  </>
                )}
                {l.status === "approved" && (
                  <Button size="sm" variant="outline" onClick={() => update.mutate({ id: l.id, data: { status: "paused" } })}
                    className="text-gray-600 text-xs h-8 px-3">Pause</Button>
                )}
                {l.status === "paused" && (
                  <Button size="sm" variant="outline" onClick={() => update.mutate({ id: l.id, data: { status: "approved" } })}
                    className="text-green-600 text-xs h-8 px-3">Re-activate</Button>
                )}
                <button onClick={() => setExpanded(expanded === l.id ? null : l.id)}
                  className="text-gray-400 hover:text-gray-600 p-1">
                  {expanded === l.id ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
                </button>
              </div>
            </div>

            {expanded === l.id && (
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-600">
                {l.tagline && <p><span className="font-medium text-gray-700">Tagline:</span> {l.tagline}</p>}
                {l.description && <p><span className="font-medium text-gray-700">Description:</span> {l.description}</p>}
                {l.specialty_category && <p><span className="font-medium text-gray-700">Specialty:</span> {l.specialty_category}</p>}
                {l.headquarters && <p><span className="font-medium text-gray-700">HQ:</span> {l.headquarters}</p>}
                {l.engagement_model && <p><span className="font-medium text-gray-700">Engagement:</span> {l.engagement_model}</p>}
                {l.budget_range && <p><span className="font-medium text-gray-700">Budget:</span> {l.budget_range}</p>}
                {l.services?.length > 0 && <p><span className="font-medium text-gray-700">Services:</span> {l.services.join(", ")}</p>}
                <p className="text-xs text-gray-400">Submitted: {new Date(l.created_date).toLocaleString()}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ─── Mensch Tab ──────────────────────────────────────────────────────────────
function MenschTab() {
  const qc = useQueryClient();
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [extracting, setExtracting] = useState(false);
  const [msg, setMsg] = useState("");

  const { data: posts = [] } = useQuery({
    queryKey: ["mensch-posts-admin"],
    queryFn: () => base44.entities.MenschPost.list("-post_date", 50),
  });

  const toggleFeatured = useMutation({
    mutationFn: ({ id, featured }) => base44.entities.MenschPost.update(id, { featured }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["mensch-posts-admin"] }),
  });

  const deletePost = useMutation({
    mutationFn: (id) => base44.entities.MenschPost.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["mensch-posts-admin"] }),
  });

  const handleExtract = async (e) => {
    e.preventDefault();
    if (!linkedinUrl.trim()) return;
    setExtracting(true);
    setMsg("");
    try {
      const result = await base44.functions.invoke("extractMenschPost", { linkedin_url: linkedinUrl });
      setMsg(`✓ ${result.data.message}`);
      setLinkedinUrl("");
      qc.invalidateQueries({ queryKey: ["mensch-posts-admin"] });
    } catch (err) {
      setMsg(`✗ ${err.message}`);
    }
    setExtracting(false);
  };

  return (
    <div className="space-y-6">
      <Card className="border-2 border-blue-100 bg-blue-50">
        <CardContent className="p-5">
          <h3 className="font-semibold text-gray-900 mb-3 text-sm">Add New Mensch Post</h3>
          <form onSubmit={handleExtract} className="flex gap-2">
            <Input placeholder="Paste LinkedIn post URL..." value={linkedinUrl}
              onChange={e => setLinkedinUrl(e.target.value)} className="flex-1 text-sm" />
            <Button type="submit" disabled={extracting} className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
              {extracting ? "Extracting..." : "Extract & Add"}
            </Button>
          </form>
          {msg && <p className={`text-xs mt-2 font-medium ${msg.startsWith("✓") ? "text-green-600" : "text-red-600"}`}>{msg}</p>}
        </CardContent>
      </Card>

      <div className="space-y-3">
        {posts.map(post => (
          <Card key={post.id} className="border border-gray-200">
            <CardContent className="p-4 flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-900 text-sm">{post.person_name}</p>
                  {post.featured && <Badge className="bg-blue-100 text-blue-700 border-0 text-xs">Featured</Badge>}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{new Date(post.post_date).toLocaleDateString()}</p>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">{post.excerpt}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => toggleFeatured.mutate({ id: post.id, featured: !post.featured })}
                  className="text-gray-400 hover:text-blue-500 p-1" title={post.featured ? "Unfeature" : "Feature"}>
                  {post.featured ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                </button>
                <a href={post.linkedin_url} target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 p-1">
                  <ExternalLink className="w-4 h-4"/>
                </a>
                <button onClick={() => { if (confirm("Delete this post?")) deletePost.mutate(post.id); }}
                  className="text-gray-300 hover:text-red-500 p-1">
                  <X className="w-4 h-4"/>
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─── Bylines Tab ─────────────────────────────────────────────────────────────
function BylinesTab() {
  const qc = useQueryClient();
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ title: "", source_url: "", publication_date: "", excerpt: "", full_text: "", type: "article", featured: true });

  const { data: pieces = [] } = useQuery({
    queryKey: ["featured-writing-admin"],
    queryFn: () => base44.entities.FeaturedWriting.list("-publication_date", 50),
  });

  const create = useMutation({
    mutationFn: (data) => base44.entities.FeaturedWriting.create(data),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["featured-writing-admin"] }); setShowAdd(false); setForm({ title: "", source_url: "", publication_date: "", excerpt: "", full_text: "", type: "article", featured: true }); },
  });

  const deletePiece = useMutation({
    mutationFn: (id) => base44.entities.FeaturedWriting.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["featured-writing-admin"] }),
  });

  const toggleFeatured = useMutation({
    mutationFn: ({ id, featured }) => base44.entities.FeaturedWriting.update(id, { featured }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["featured-writing-admin"] }),
  });

  return (
    <div className="space-y-4">
      <Button onClick={() => setShowAdd(!showAdd)} className="bg-red-600 hover:bg-red-700">
        <Plus className="w-4 h-4 mr-1"/> Add Byline / Writing
      </Button>

      {showAdd && (
        <Card className="border-2 border-red-100 bg-red-50">
          <CardContent className="p-5 space-y-3">
            <h3 className="font-semibold text-sm text-gray-900">Add Featured Writing</h3>
            <Input placeholder="Title *" value={form.title} onChange={e => setForm(f => ({...f, title: e.target.value}))} className="text-sm"/>
            <Input placeholder="Source URL *" value={form.source_url} onChange={e => setForm(f => ({...f, source_url: e.target.value}))} className="text-sm"/>
            <div className="grid grid-cols-2 gap-3">
              <Input type="date" value={form.publication_date} onChange={e => setForm(f => ({...f, publication_date: e.target.value}))} className="text-sm"/>
              <select value={form.type} onChange={e => setForm(f => ({...f, type: e.target.value}))}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="article">Article</option>
                <option value="linkedin_post">LinkedIn Post</option>
                <option value="essay">Essay</option>
              </select>
            </div>
            <Textarea placeholder="Excerpt / summary..." value={form.excerpt} onChange={e => setForm(f => ({...f, excerpt: e.target.value}))} rows={2} className="text-sm"/>
            <Textarea placeholder="Full text (optional)..." value={form.full_text} onChange={e => setForm(f => ({...f, full_text: e.target.value}))} rows={4} className="text-sm"/>
            <div className="flex gap-2">
              <Button onClick={() => create.mutate(form)} disabled={!form.title || !form.source_url || !form.publication_date}
                className="bg-red-600 hover:bg-red-700">Save</Button>
              <Button variant="outline" onClick={() => setShowAdd(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-3">
        {pieces.map(p => (
          <Card key={p.id} className="border border-gray-200">
            <CardContent className="p-4 flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold text-gray-900 text-sm">{p.title}</p>
                  <Badge className="text-xs bg-gray-100 text-gray-600 border-0">{p.type}</Badge>
                  {p.featured && <Badge className="text-xs bg-red-100 text-red-600 border-0">Featured</Badge>}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{p.publication_date}</p>
                {p.excerpt && <p className="text-xs text-gray-600 mt-1 line-clamp-1">{p.excerpt}</p>}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => toggleFeatured.mutate({ id: p.id, featured: !p.featured })}
                  className="text-gray-400 hover:text-red-500 p-1" title={p.featured ? "Unfeature" : "Feature"}>
                  {p.featured ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                </button>
                <a href={p.source_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 p-1">
                  <ExternalLink className="w-4 h-4"/>
                </a>
                <button onClick={() => { if (confirm("Delete?")) deletePiece.mutate(p.id); }}
                  className="text-gray-300 hover:text-red-500 p-1">
                  <X className="w-4 h-4"/>
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─── Blog Tab ─────────────────────────────────────────────────────────────────
function BlogTab() {
  const qc = useQueryClient();
  const { data: posts = [] } = useQuery({
    queryKey: ["blog-posts-admin"],
    queryFn: () => base44.entities.BlogPost.list("-created_date", 50),
  });

  const togglePublished = useMutation({
    mutationFn: ({ id, published }) => base44.entities.BlogPost.update(id, { published }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["blog-posts-admin"] }),
  });

  const deletePost = useMutation({
    mutationFn: (id) => base44.entities.BlogPost.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["blog-posts-admin"] }),
  });

  return (
    <div className="space-y-3">
      {posts.map(p => (
        <Card key={p.id} className="border border-gray-200">
          <CardContent className="p-4 flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-semibold text-gray-900 text-sm">{p.title}</p>
                <Badge className={`text-xs border-0 ${p.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {p.published ? "Published" : "Draft"}
                </Badge>
                {p.category && <Badge className="text-xs bg-blue-50 text-blue-600 border-0">{p.category}</Badge>}
              </div>
              {p.excerpt && <p className="text-xs text-gray-600 mt-1 line-clamp-1">{p.excerpt}</p>}
              <p className="text-xs text-gray-400 mt-0.5">{p.published_date || new Date(p.created_date).toLocaleDateString()}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button onClick={() => togglePublished.mutate({ id: p.id, published: !p.published })}
                className="text-gray-400 hover:text-green-500 p-1" title={p.published ? "Unpublish" : "Publish"}>
                {p.published ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
              </button>
              <button onClick={() => { if (confirm("Delete?")) deletePost.mutate(p.id); }}
                className="text-gray-300 hover:text-red-500 p-1">
                <X className="w-4 h-4"/>
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ─── Discount Codes Tab ───────────────────────────────────────────────────────
function DiscountCodesTab() {
  const COURSE_CODES = [
    { code: "bookVIP", discount: "100%", notes: "Free access — for book readers / VIPs" },
  ];

  const PARTNER_CODES = [
    { code: "HCAIVIP", discount: "100%", notes: "Complimentary listing" },
    { code: "HCAI50",  discount: "50%",  notes: "Half-price listing" },
  ];

  const CodeTable = ({ codes }) => (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left py-2 px-3 font-semibold text-gray-700">Code</th>
            <th className="text-left py-2 px-3 font-semibold text-gray-700">Discount</th>
            <th className="text-left py-2 px-3 font-semibold text-gray-700">Notes</th>
          </tr>
        </thead>
        <tbody>
          {codes.map(c => (
            <tr key={c.code} className="border-b border-gray-50 hover:bg-gray-50">
              <td className="py-2.5 px-3">
                <code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded font-mono text-xs">{c.code}</code>
              </td>
              <td className="py-2.5 px-3">
                <Badge className={c.discount === "100%" ? "bg-purple-100 text-purple-700 border-0" : "bg-blue-100 text-blue-700 border-0"}>
                  {c.discount} off
                </Badge>
              </td>
              <td className="py-2.5 px-3 text-gray-500">{c.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="space-y-6">
      <Card className="border border-gray-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold text-gray-900">📚 Online Course Codes</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CodeTable codes={COURSE_CODES} />
        </CardContent>
      </Card>

      <Card className="border border-gray-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold text-gray-900">🤝 Partner Marketplace Codes</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CodeTable codes={PARTNER_CODES} />
        </CardContent>
      </Card>

      <p className="text-xs text-gray-400">
        To add or change codes, update the backend functions: <code className="bg-gray-100 px-1 rounded">courseCheckout</code> and <code className="bg-gray-100 px-1 rounded">partnerCheckout</code>.
      </p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AdminHub() {
  const [activeTab, setActiveTab] = useState("partners");
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    base44.auth.me()
      .then(user => setIsAdmin(user?.role === "admin"))
      .catch(() => setIsAdmin(false));
  }, []);

  if (isAdmin === null) return <div className="min-h-screen flex items-center justify-center text-gray-400">Checking access...</div>;
  if (!isAdmin) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <XCircle className="w-12 h-12 text-red-400 mx-auto mb-3"/>
        <h2 className="text-xl font-bold text-gray-800">Access Denied</h2>
        <p className="text-gray-500 mt-1">Admin login required.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Hub</h1>
          <p className="text-gray-500 mt-1 text-sm">Manage partners, content, and listings in one place.</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 mb-8 shadow-sm">
          {TABS.map(tab => {
            const Icon = tab.icon;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id ? "bg-gray-900 text-white shadow-sm" : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                }`}>
                <Icon className="w-4 h-4"/>
                <span className="hidden sm:block">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === "partners" && <PartnersTab />}
        {activeTab === "mensch" && <MenschTab />}
        {activeTab === "bylines" && <BylinesTab />}
        {activeTab === "blog" && <BlogTab />}
        {activeTab === "codes" && <DiscountCodesTab />}
      </div>
    </div>
  );
}