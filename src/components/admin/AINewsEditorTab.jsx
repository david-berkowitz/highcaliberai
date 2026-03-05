import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, X, Eye, EyeOff, Trash2, ChevronDown, ChevronUp, Edit2, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AINewsEmailPreview from "@/components/admin/AINewsEmailPreview";

const EMPTY_DIGEST = {
  title: "",
  week_of: new Date().toISOString().split("T")[0],
  intro: "",
  news_items: [],
  commentary: "",
  published: false,
};

const EMPTY_ITEM = { headline: "", summary: "", why_it_matters: "", source_url: "", category: "Industry Trend" };
const CATEGORIES = ["Product Launch", "Industry Trend", "Research", "Tool Update", "Strategy"];

function DigestForm({ digest, onSave, onCancel }) {
  const [form, setForm] = useState(digest);
  const [previewOpen, setPreviewOpen] = useState(false);

  const setField = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const addItem = () => setForm(f => ({ ...f, news_items: [...(f.news_items || []), { ...EMPTY_ITEM }] }));

  const updateItem = (idx, key, val) => setForm(f => {
    const items = [...(f.news_items || [])];
    items[idx] = { ...items[idx], [key]: val };
    return { ...f, news_items: items };
  });

  const removeItem = (idx) => setForm(f => ({
    ...f,
    news_items: f.news_items.filter((_, i) => i !== idx),
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-2 border-red-100">
        <CardContent className="p-5 space-y-3">
          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Digest Header</h3>
          <Input placeholder="Title (e.g., Week of March 3, 2026)" value={form.title}
            onChange={e => setField("title", e.target.value)} />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Week Of</label>
              <Input type="date" value={form.week_of} onChange={e => setField("week_of", e.target.value)} />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="checkbox" checked={form.published}
                  onChange={e => setField("published", e.target.checked)}
                  className="w-4 h-4 text-red-600 rounded" />
                Publish immediately
              </label>
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Intro paragraph</label>
            <Textarea placeholder="Brief intro for this week's digest..." value={form.intro}
              onChange={e => setField("intro", e.target.value)} rows={2} />
          </div>
        </CardContent>
      </Card>

      {/* News Items */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">
            News Items ({form.news_items?.length || 0})
          </h3>
          <Button size="sm" onClick={addItem} className="bg-gray-900 hover:bg-gray-800 text-xs h-8">
            <Plus className="w-3 h-3 mr-1" /> Add Item
          </Button>
        </div>
        <div className="space-y-3">
          {(form.news_items || []).map((item, idx) => (
            <Card key={idx} className="border border-gray-200">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500">ITEM {idx + 1}</span>
                  <button onClick={() => removeItem(idx)} className="text-gray-300 hover:text-red-500">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <Input placeholder="Headline *" value={item.headline}
                  onChange={e => updateItem(idx, "headline", e.target.value)} className="text-sm" />
                <Textarea placeholder="Summary..." value={item.summary}
                  onChange={e => updateItem(idx, "summary", e.target.value)} rows={2} className="text-sm" />
                <Textarea placeholder="Why it matters..." value={item.why_it_matters}
                  onChange={e => updateItem(idx, "why_it_matters", e.target.value)} rows={2} className="text-sm" />
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Source URL" value={item.source_url}
                    onChange={e => updateItem(idx, "source_url", e.target.value)} className="text-sm" />
                  <select value={item.category} onChange={e => updateItem(idx, "category", e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Commentary */}
      <Card className="border border-gray-200">
        <CardContent className="p-5">
          <label className="text-xs text-gray-500 mb-2 block font-semibold uppercase tracking-wide">David's Take (Commentary)</label>
          <Textarea placeholder="Your weekly perspective..." value={form.commentary}
            onChange={e => setField("commentary", e.target.value)} rows={4} />
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-3 flex-wrap">
        <Button onClick={() => onSave(form)} disabled={!form.title || !form.week_of}
          className="bg-red-600 hover:bg-red-700">
          <Save className="w-4 h-4 mr-1" /> Save Digest
        </Button>
        <Button variant="outline" onClick={() => setPreviewOpen(true)}>
          <Eye className="w-4 h-4 mr-1" /> Email Preview
        </Button>
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
      </div>

      {previewOpen && (
        <AINewsEmailPreview digest={form} onClose={() => setPreviewOpen(false)} />
      )}
    </div>
  );
}

export default function AINewsEditorTab() {
  const qc = useQueryClient();
  const [editingId, setEditingId] = useState(null);
  const [creating, setCreating] = useState(false);

  const { data: digests = [] } = useQuery({
    queryKey: ["ai-news-admin"],
    queryFn: () => base44.entities.AINewsDigest.list("-week_of", 20),
  });

  const create = useMutation({
    mutationFn: (data) => base44.entities.AINewsDigest.create(data),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["ai-news-admin"] }); setCreating(false); },
  });

  const update = useMutation({
    mutationFn: ({ id, data }) => base44.entities.AINewsDigest.update(id, data),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["ai-news-admin"] }); setEditingId(null); },
  });

  const remove = useMutation({
    mutationFn: (id) => base44.entities.AINewsDigest.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["ai-news-admin"] }),
  });

  const togglePublished = (digest) =>
    update.mutate({ id: digest.id, data: { published: !digest.published } });

  if (creating) {
    return <DigestForm digest={{ ...EMPTY_DIGEST }}
      onSave={(data) => create.mutate(data)}
      onCancel={() => setCreating(false)} />;
  }

  if (editingId) {
    const digest = digests.find(d => d.id === editingId);
    if (digest) return <DigestForm digest={digest}
      onSave={(data) => update.mutate({ id: editingId, data })}
      onCancel={() => setEditingId(null)} />;
  }

  return (
    <div className="space-y-4">
      <Button onClick={() => setCreating(true)} className="bg-red-600 hover:bg-red-700">
        <Plus className="w-4 h-4 mr-1" /> New Digest
      </Button>

      {digests.length === 0 && (
        <p className="text-sm text-gray-400 py-8 text-center">No digests yet. Create your first one!</p>
      )}

      <div className="space-y-3">
        {digests.map(d => (
          <Card key={d.id} className="border border-gray-200">
            <CardContent className="p-4 flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold text-gray-900 text-sm">{d.title}</p>
                  <Badge className={`text-xs border-0 ${d.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                    {d.published ? "Published" : "Draft"}
                  </Badge>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  {new Date(d.week_of).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  {" · "}{d.news_items?.length || 0} items
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => togglePublished(d)} title={d.published ? "Unpublish" : "Publish"}
                  className="text-gray-400 hover:text-green-500 p-1">
                  {d.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                <button onClick={() => setEditingId(d.id)} className="text-gray-400 hover:text-gray-700 p-1">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={() => { if (confirm("Delete this digest?")) remove.mutate(d.id); }}
                  className="text-gray-300 hover:text-red-500 p-1">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}