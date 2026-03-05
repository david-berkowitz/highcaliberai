import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, UserPlus, Trash2, X, Check } from "lucide-react";
import MetaTags from "@/components/SEO/MetaTags";

const ALL_SEGMENTS = [
  { value: "newsletter", label: "Newsletter", color: "bg-blue-100 text-blue-800" },
  { value: "resource_library", label: "Resource Library", color: "bg-purple-100 text-purple-800" },
  { value: "partners", label: "Partners", color: "bg-green-100 text-green-800" },
  { value: "course_students", label: "Course Students", color: "bg-yellow-100 text-yellow-800" },
  { value: "contact_form", label: "Contact Form", color: "bg-orange-100 text-orange-800" },
  { value: "ai_news", label: "AI News", color: "bg-cyan-100 text-cyan-800" },
  { value: "speaking_inquiry", label: "Speaking Inquiry", color: "bg-pink-100 text-pink-800" },
  { value: "other", label: "Other", color: "bg-gray-100 text-gray-700" },
];

const segmentColor = (val) => ALL_SEGMENTS.find(s => s.value === val)?.color || "bg-gray-100 text-gray-700";
const segmentLabel = (val) => ALL_SEGMENTS.find(s => s.value === val)?.label || val;

export default function SubscribersAdmin() {
  const qc = useQueryClient();
  const [filterSegment, setFilterSegment] = useState("all");
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ email: "", name: "", segments: [], notes: "" });
  const [editId, setEditId] = useState(null);
  const [editSegments, setEditSegments] = useState([]);

  const { data: subscribers = [], isLoading } = useQuery({
    queryKey: ["subscribers"],
    queryFn: () => base44.entities.EmailSubscriber.list("-created_date", 500),
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.EmailSubscriber.create(data),
    onSuccess: () => { qc.invalidateQueries(["subscribers"]); setShowAdd(false); setForm({ email: "", name: "", segments: [], notes: "" }); },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.EmailSubscriber.update(id, data),
    onSuccess: () => { qc.invalidateQueries(["subscribers"]); setEditId(null); },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.EmailSubscriber.delete(id),
    onSuccess: () => qc.invalidateQueries(["subscribers"]),
  });

  const filtered = subscribers.filter(s => {
    const matchSeg = filterSegment === "all" || (s.segments || []).includes(filterSegment);
    const matchSearch = !search || s.email?.toLowerCase().includes(search.toLowerCase()) || s.name?.toLowerCase().includes(search.toLowerCase());
    return matchSeg && matchSearch;
  });

  const exportCSV = () => {
    const rows = [["Name", "Email", "Segments", "Status", "Source", "Notes"]];
    filtered.forEach(s => rows.push([s.name || "", s.email, (s.segments || []).join("|"), s.status, s.source || "", s.notes || ""]));
    const csv = rows.map(r => r.map(c => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "subscribers.csv"; a.click();
  };

  const toggleSegmentInForm = (val) => {
    setForm(f => ({ ...f, segments: f.segments.includes(val) ? f.segments.filter(s => s !== val) : [...f.segments, val] }));
  };

  const toggleEditSegment = (val) => {
    setEditSegments(prev => prev.includes(val) ? prev.filter(s => s !== val) : [...prev, val]);
  };

  const startEdit = (sub) => { setEditId(sub.id); setEditSegments(sub.segments || []); };
  const saveEdit = (sub) => updateMutation.mutate({ id: sub.id, data: { segments: editSegments } });

  const segmentCounts = ALL_SEGMENTS.map(seg => ({
    ...seg,
    count: subscribers.filter(s => (s.segments || []).includes(seg.value)).length,
  }));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <MetaTags title="Subscribers Admin" />
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Subscribers</h1>
            <p className="text-sm text-gray-500 mt-1">{subscribers.filter(s => s.status !== "unsubscribed").length} active · {subscribers.length} total</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={exportCSV}><Download className="w-4 h-4 mr-1" />Export CSV</Button>
            <Button size="sm" onClick={() => setShowAdd(true)} className="bg-red-600 hover:bg-red-700"><UserPlus className="w-4 h-4 mr-1" />Add Subscriber</Button>
          </div>
        </div>

        {/* Segment summary chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          <button onClick={() => setFilterSegment("all")}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${filterSegment === "all" ? "bg-gray-800 text-white border-gray-800" : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"}`}>
            All ({subscribers.length})
          </button>
          {segmentCounts.map(seg => (
            <button key={seg.value} onClick={() => setFilterSegment(seg.value)}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${filterSegment === seg.value ? "bg-gray-800 text-white border-gray-800" : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"}`}>
              {seg.label} ({seg.count})
            </button>
          ))}
        </div>

        {/* Search */}
        <Input className="mb-4 max-w-sm" placeholder="Search by name or email..." value={search} onChange={e => setSearch(e.target.value)} />

        {/* Add form */}
        {showAdd && (
          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5 shadow-sm">
            <h3 className="font-semibold mb-3">Add Subscriber</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <Input placeholder="Email *" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              <Input placeholder="Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              <Input placeholder="Source (e.g. manual, newsletter)" value={form.source || ""} onChange={e => setForm(f => ({ ...f, source: e.target.value }))} />
              <Input placeholder="Notes" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} />
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {ALL_SEGMENTS.map(seg => (
                <button key={seg.value} onClick={() => toggleSegmentInForm(seg.value)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${form.segments.includes(seg.value) ? "bg-gray-800 text-white border-gray-800" : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"}`}>
                  {seg.label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="bg-red-600 hover:bg-red-700" onClick={() => createMutation.mutate(form)} disabled={!form.email}>Save</Button>
              <Button size="sm" variant="outline" onClick={() => setShowAdd(false)}>Cancel</Button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          {isLoading ? (
            <div className="p-8 text-center text-gray-400">Loading...</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-gray-400">No subscribers found.</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Name / Email</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Segments</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Source</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map(sub => (
                  <tr key={sub.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-900">{sub.name || <span className="text-gray-400 italic">No name</span>}</div>
                      <div className="text-gray-500 text-xs">{sub.email}</div>
                    </td>
                    <td className="px-4 py-3">
                      {editId === sub.id ? (
                        <div className="flex flex-wrap gap-1">
                          {ALL_SEGMENTS.map(seg => (
                            <button key={seg.value} onClick={() => toggleEditSegment(seg.value)}
                              className={`px-2 py-0.5 rounded-full text-xs font-medium border transition-colors ${editSegments.includes(seg.value) ? "bg-gray-800 text-white border-gray-800" : "bg-white text-gray-500 border-gray-200"}`}>
                              {seg.label}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {(sub.segments || []).map(s => (
                            <span key={s} className={`px-2 py-0.5 rounded-full text-xs font-medium ${segmentColor(s)}`}>{segmentLabel(s)}</span>
                          ))}
                          {(!sub.segments || sub.segments.length === 0) && <span className="text-gray-300 text-xs">—</span>}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${sub.status === "unsubscribed" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                        {sub.status || "active"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{sub.source || "—"}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1 justify-end">
                        {editId === sub.id ? (
                          <>
                            <button onClick={() => saveEdit(sub)} className="p-1 hover:text-green-600"><Check className="w-4 h-4" /></button>
                            <button onClick={() => setEditId(null)} className="p-1 hover:text-gray-600"><X className="w-4 h-4" /></button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => startEdit(sub)} className="p-1 text-gray-400 hover:text-gray-700 text-xs underline">Edit</button>
                            <button onClick={() => deleteMutation.mutate(sub.id)} className="p-1 text-gray-300 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}