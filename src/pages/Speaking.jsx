import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import MetaTags from "@/components/SEO/MetaTags";

// ── Data ──────────────────────────────────────────────────────────────────────

const SPEAKING_TOPICS = [
  {
    title: "AI Marketing Strategy for 2026 & Beyond",
    desc: "What's actually working right now — and what's hype. A framework marketing teams can act on Monday morning.",
    icon: "🎯",
  },
  {
    title: "From ChatGPT to Revenue: Practical AI for Marketing Teams",
    desc: "Real tools, real workflows, real ROI. No fluff, no fear — just what B2B marketers need to move fast.",
    icon: "💡",
  },
  {
    title: "Agentic AI: The Future of Marketing Operations",
    desc: "How autonomous AI agents are reshaping agency models, content production, and the CMO role.",
    icon: "🤖",
  },
  {
    title: "The Non-Obvious Guide to Using AI for Marketing",
    desc: "Based on David's bestselling book — counterintuitive lessons for marketers who want an edge.",
    icon: "📖",
  },
  {
    title: "AI Marketing Ethics, Risks & Getting It Right",
    desc: "The guardrails leaders need. How to adopt AI without losing trust, brand voice, or your team's buy-in.",
    icon: "⚖️",
  },
];

const STATS = [
  { value: "400+", label: "Speaking Engagements" },
  { value: "7,000+", label: "AI Marketers Guild Members" },
  { value: "20+", label: "Years in Digital Marketing" },
  { value: "1", label: "Published Book on AI Strategy" },
];

const PAST_STAGES = [
  "SXSW", "Cannes Lions", "INBOUND", "Google", "Adobe",
  "Salesforce", "Columbia University", "AARP", "HSMAI", "Kochava",
];

const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// ── Main Component ────────────────────────────────────────────────────────────

export default function Speaking() {
  const [engagements, setEngagements] = useState([]);
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.SpeakingEngagement.list("-date").then((data) => {
      setEngagements(data);
      setLoading(false);
    });
  }, []);

  // Derive unique years from data
  const years = ["All Years", ...Array.from(
    new Set(engagements.map((e) => new Date(e.date).getFullYear()))
  ).sort((a, b) => b - a)];

  // Filter + deduplicate
  const filtered = engagements
    .filter((e) => {
      const year = new Date(e.date).getFullYear();
      return selectedYear === "All Years" || year === Number(selectedYear);
    })
    .filter((e, idx, arr) =>
      arr.findIndex(
        (x) => x.event_name === e.event_name && x.role === e.role && x.date === e.date
      ) === idx
    );

  // Group by year for display
  const grouped = filtered.reduce((acc, eng) => {
    const year = new Date(eng.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(eng);
    return acc;
  }, {});

  const sortedYears = Object.keys(grouped).sort((a, b) => b - a);

  return (
    <div style={{ fontFamily: "inherit", background: "#fff", minHeight: "100vh" }}>

      <MetaTags
        title="David Berkowitz Speaking Engagements | AI Marketing Keynotes"
        description="Book David Berkowitz for AI marketing keynotes, workshops, and panels. 400+ speaking engagements at SXSW, Cannes Lions, INBOUND, Google, and more."
        url="https://highcaliberai.com/speaking"
        canonical="https://highcaliberai.com/speaking"
      />

      {/* ── GEO / Speaker Schema ──────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "David Berkowitz",
            url: "https://highcaliberai.com",
            jobTitle: "AI Marketing Strategist & Keynote Speaker",
            description:
              "David Berkowitz is a keynote speaker on AI marketing strategy with 400+ speaking engagements at SXSW, Cannes Lions, INBOUND, Google, and more. Founder of AI Marketers Guild (7,000+ members) and author of The Non-Obvious Guide to Using AI for Marketing.",
            knowsAbout: [
              "AI Marketing Strategy",
              "Agentic AI",
              "Marketing Automation",
              "B2B Marketing",
              "Generative AI for Marketing",
              "Marketing Leadership",
            ],
            sameAs: [
              "https://www.linkedin.com/in/dberkowitz",
              "https://serialmarketer.net",
              "https://highcaliberai.com/About",
            ],
          }),
        }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <span style={{
              background: "rgba(239,68,68,0.15)", color: "#ef4444",
              border: "1px solid rgba(239,68,68,0.3)", borderRadius: "999px",
              padding: "6px 18px", fontSize: "13px", fontWeight: 700, letterSpacing: "0.05em",
            }}>
              🎤 400+ Speaking Engagements
            </span>
          </div>

          <h1 style={{
            textAlign: "center", color: "#ffffff",
            fontSize: "clamp(26px, 5vw, 42px)", fontWeight: 800,
            marginBottom: "8px", lineHeight: 1.15,
          }}>
            Speaking Engagements
          </h1>

          <p style={{
            textAlign: "center", color: "#94a3b8", fontSize: "17px",
            maxWidth: "600px", margin: "0 auto 10px", lineHeight: 1.6,
          }}>
            Keynotes, panels, and workshops on AI marketing, digital strategy,
            and marketing innovation at industry events, universities, and executive forums worldwide.
          </p>

          <p style={{
            textAlign: "center", color: "#64748b", fontSize: "14px",
            fontStyle: "italic", marginBottom: "36px",
          }}>
            Not a futurist. Not a theorist. A practitioner who runs AI-powered campaigns,
            trains teams, and leads a 7,000-member community — then brings that experience to your stage.
          </p>

          {/* Stats bar */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "12px", marginBottom: "36px",
          }}>
            {STATS.map((stat, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px", padding: "18px 12px", textAlign: "center",
              }}>
                <div style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#ef4444", lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "5px", lineHeight: 1.3 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Past stages */}
          <p style={{
            textAlign: "center", color: "#475569", fontSize: "12px",
            fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px",
          }}>
            Past & Recent Stages
          </p>
          <p style={{ textAlign: "center", color: "#475569", fontSize: "13px", marginBottom: "32px" }}>
            {PAST_STAGES.join("  ·  ")}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/Contact" style={{
              background: "#ef4444", color: "#ffffff", fontWeight: 700,
              fontSize: "15px", padding: "13px 26px", borderRadius: "8px",
              textDecoration: "none", display: "inline-block",
            }}>
              Submit a Speaking Inquiry →
            </a>
            <a href="/Book" style={{
              background: "transparent", color: "#e2e8f0", fontWeight: 600,
              fontSize: "15px", padding: "13px 26px", borderRadius: "8px",
              textDecoration: "none", display: "inline-block",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              📖 View David's Book
            </a>
          </div>
        </div>
      </div>

      {/* ── Speaking Topics ───────────────────────────────────────── */}
      <div style={{ background: "#f8fafc", padding: "48px 24px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>
            Topics & Keynotes
          </h2>
          <p style={{ textAlign: "center", color: "#64748b", fontSize: "14px", marginBottom: "24px" }}>
            All sessions customized for your audience — from startup ecosystems to enterprise teams
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
            {SPEAKING_TOPICS.map((topic, i) => (
              <div key={i} style={{
                background: "#ffffff", border: "1px solid #e2e8f0",
                borderRadius: "10px", padding: "16px 18px",
                display: "flex", gap: "12px", alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "20px", flexShrink: 0, marginTop: "2px" }}>{topic.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "13px", color: "#0f172a", marginBottom: "4px", lineHeight: 1.3 }}>
                    {topic.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "#64748b", lineHeight: 1.5 }}>
                    {topic.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Engagement List ───────────────────────────────────────── */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Year filter pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px", justifyContent: "center" }}>
          {years.map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              style={{
                padding: "6px 16px", borderRadius: "999px", border: "1px solid",
                borderColor: selectedYear === yr ? "#ef4444" : "#e2e8f0",
                background: selectedYear === yr ? "#ef4444" : "#fff",
                color: selectedYear === yr ? "#fff" : "#64748b",
                fontWeight: selectedYear === yr ? 700 : 400,
                fontSize: "13px", cursor: "pointer",
              }}
            >
              {yr}
            </button>
          ))}
        </div>

        {/* Engagement cards grouped by year */}
        {loading ? (
          <p style={{ textAlign: "center", color: "#94a3b8" }}>Loading…</p>
        ) : sortedYears.length === 0 ? (
          <p style={{ textAlign: "center", color: "#94a3b8" }}>No engagements found.</p>
        ) : (
          sortedYears.map((year) => (
            <div key={year} style={{ marginBottom: "40px" }}>
              <h3 style={{
                fontSize: "22px", fontWeight: 800, color: "#0f172a",
                borderBottom: "2px solid #f1f5f9", paddingBottom: "10px", marginBottom: "16px",
              }}>
                {year}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {grouped[year].map((eng, i) => {
                  const d = new Date(eng.date);
                  const mon = monthNames[d.getMonth()];
                  const day = d.getDate();
                  return (
                    <div key={i} style={{
                      display: "flex", gap: "16px", alignItems: "flex-start",
                      padding: "16px", background: "#f8fafc",
                      borderRadius: "10px", border: "1px solid #e2e8f0",
                    }}>
                      {/* Date badge */}
                      <div style={{
                        flexShrink: 0, width: "48px", textAlign: "center",
                        background: "#0f172a", borderRadius: "8px", padding: "8px 4px",
                      }}>
                        <div style={{ color: "#ef4444", fontSize: "11px", fontWeight: 700 }}>{mon}</div>
                        <div style={{ color: "#fff", fontSize: "18px", fontWeight: 800, lineHeight: 1 }}>{day}</div>
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                          <span style={{
                            background: "#1e3a5f", color: "#fff",
                            fontSize: "11px", fontWeight: 700,
                            padding: "2px 10px", borderRadius: "999px",
                          }}>
                            {eng.role}
                          </span>
                          <span style={{ fontSize: "15px", fontWeight: 700, color: "#0f172a" }}>
                            {eng.event_name}
                          </span>
                        </div>
                        {eng.title && (
                          <p style={{ fontSize: "13px", color: "#64748b", margin: "2px 0 0", lineHeight: 1.4 }}>
                            {eng.title}
                          </p>
                        )}
                        {eng.url && (
                          <a
                            href={eng.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "12px", color: "#ef4444", textDecoration: "none", marginTop: "4px", display: "inline-block" }}
                          >
                            Event Details →
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* ── Bottom CTA ────────────────────────────────────────────── */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
        padding: "56px 24px", textAlign: "center",
      }}>
        <h2 style={{ color: "#fff", fontSize: "26px", fontWeight: 800, marginBottom: "10px" }}>
          Ready to Book David for Your Event?
        </h2>
        <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "500px", margin: "0 auto 28px", lineHeight: 1.6 }}>
          Keynotes, workshops, and panels. Available for in-person and virtual events.
          Let's build something your audience will actually use.
        </p>
        <a href="/Contact" style={{
          background: "#ef4444", color: "#fff", fontWeight: 700,
          fontSize: "16px", padding: "14px 32px", borderRadius: "8px",
          textDecoration: "none", display: "inline-block",
        }}>
          Submit a Speaking Inquiry →
        </a>
      </div>

    </div>
  );
}