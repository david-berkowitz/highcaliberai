import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Globe, Shuffle, Sparkles, Volume2, RefreshCw } from "lucide-react";

const QUEENS_LANGUAGES = [
  { name: "Mandarin Chinese", community: "Flushing — the largest Chinatown outside Manhattan", emoji: "🇨🇳", script: "中文" },
  { name: "Cantonese", community: "Flushing & Elmhurst — a distinct and vibrant Chinese dialect community", emoji: "🇨🇳", script: "廣東話" },
  { name: "Spanish", community: "Jackson Heights & Corona — one of NYC's largest Latino communities", emoji: "🇪🇸", script: "Español" },
  { name: "Mexican Spanish", community: "Corona — one of the largest Mexican communities in NYC", emoji: "🇲🇽", script: "Español Mexicano" },
  { name: "Ecuadorian Spanish", community: "Jackson Heights & Corona — the largest Ecuadorian community in NYC", emoji: "🇪🇨", script: "Español Ecuatoriano" },
  { name: "Colombian Spanish", community: "Jackson Heights — a large Colombian community and cultural hub", emoji: "🇨🇴", script: "Español Colombiano" },
  { name: "Dominican Spanish", community: "Jamaica & Southeast Queens — vibrant Dominican community", emoji: "🇩🇴", script: "Español Dominicano" },
  { name: "Korean", community: "Flushing — Little Korea, one of the largest Korean communities outside Korea", emoji: "🇰🇷", script: "한국어" },
  { name: "Hindi", community: "Jackson Heights & Elmhurst — the heart of South Asian Queens", emoji: "🇮🇳", script: "हिन्दी" },
  { name: "Punjabi", community: "Richmond Hill — home to a thriving Sikh community", emoji: "🌐", script: "ਪੰਜਾਬੀ" },
  { name: "Gujarati", community: "Jackson Heights — alongside a thriving South Asian business district", emoji: "🌐", script: "ગુજરાતી" },
  { name: "Bengali", community: "Jamaica — one of NYC's fastest-growing Bangladeshi communities", emoji: "🇧🇩", script: "বাংলা" },
  { name: "Urdu", community: "Jamaica & Richmond Hill — a major South Asian hub in southern Queens", emoji: "🇵🇰", script: "اردو" },
  { name: "Tamil", community: "Jackson Heights & Flushing — South Indian Tamil community", emoji: "🌐", script: "தமிழ்" },
  { name: "Telugu", community: "Flushing & Jamaica — South Indian Telugu-speaking professionals", emoji: "🌐", script: "తెలుగు" },
  { name: "Marathi", community: "Jackson Heights — part of the broader Maharashtrian diaspora", emoji: "🌐", script: "मराठी" },
  { name: "Sinhalese", community: "Woodside & Elmhurst — Sri Lankan community", emoji: "🇱🇰", script: "සිංහල" },
  { name: "Nepali", community: "Woodside & Jackson Heights — a growing Nepali community", emoji: "🇳🇵", script: "नेपाली" },
  { name: "Tibetan", community: "Jackson Heights — one of the largest Tibetan communities in the US", emoji: "🏔️", script: "བོད་སྐད" },
  { name: "Greek", community: "Astoria — once the largest Greek community outside Greece", emoji: "🇬🇷", script: "Ελληνικά" },
  { name: "Arabic", community: "Astoria — home to a large Egyptian and Middle Eastern community", emoji: "🇪🇬", script: "عربي" },
  { name: "Hebrew", community: "Forest Hills & Great Neck — Israeli expat and Jewish community", emoji: "🇮🇱", script: "עברית" },
  { name: "Yiddish", community: "Forest Hills — an Ashkenazi Jewish community with deep historical roots", emoji: "✡️", script: "ייִדיש" },
  { name: "Tagalog", community: "Woodside — 'Little Manila', one of the largest Filipino communities in the US", emoji: "🇵🇭", script: "Filipino" },
  { name: "Vietnamese", community: "Elmhurst & Woodside — a vibrant Vietnamese community", emoji: "🇻🇳", script: "Tiếng Việt" },
  { name: "Thai", community: "Elmhurst — home to Thai restaurants and a tight-knit Thai community", emoji: "🇹🇭", script: "ไทย" },
  { name: "Burmese", community: "Woodside & Elmhurst — a growing Southeast Asian community", emoji: "🇲🇲", script: "မြန်မာ" },
  { name: "Khmer", community: "Elmhurst — Cambodian community rooted in Queens", emoji: "🇰🇭", script: "ខ្មែរ" },
  { name: "Indonesian", community: "Elmhurst — one of the most diverse ZIP codes on Earth", emoji: "🇮🇩", script: "Bahasa Indonesia" },
  { name: "Japanese", community: "Flushing & Forest Hills — Japanese expats and professionals", emoji: "🇯🇵", script: "日本語" },
  { name: "Romanian", community: "Sunnyside & Woodside — a large Eastern European community", emoji: "🇷🇴", script: "Română" },
  { name: "Polish", community: "Ridgewood — historically Polish neighborhood on the Queens/Brooklyn border", emoji: "🇵🇱", script: "Polski" },
  { name: "Russian", community: "Forest Hills & Rego Park — a major Russian-speaking Jewish community", emoji: "🇷🇺", script: "Русский" },
  { name: "Ukrainian", community: "Sunnyside & Woodside — a growing Ukrainian community", emoji: "🇺🇦", script: "Українська" },
  { name: "Uzbek", community: "Rego Park — a large Bukharian Jewish community from Central Asia", emoji: "🇺🇿", script: "O'zbek" },
  { name: "Hungarian", community: "Woodside & Sunnyside — Eastern European Hungarian community", emoji: "🇭🇺", script: "Magyar" },
  { name: "Albanian", community: "Astoria & Woodside — one of the largest Albanian communities in the US", emoji: "🇦🇱", script: "Shqip" },
  { name: "Serbian", community: "Astoria — home to a vibrant Serbian Orthodox community", emoji: "🇷🇸", script: "Српски" },
  { name: "Croatian", community: "Astoria — part of the South Slavic diaspora in western Queens", emoji: "🇭🇷", script: "Hrvatski" },
  { name: "Turkish", community: "Sunnyside & Astoria — a Turkish community with cultural presence", emoji: "🇹🇷", script: "Türkçe" },
  { name: "French", community: "Astoria & Jamaica — Francophone West African and Caribbean communities", emoji: "🇫🇷", script: "Français" },
  { name: "Italian", community: "Howard Beach & Ozone Park — Italian-American heritage neighborhoods", emoji: "🇮🇹", script: "Italiano" },
  { name: "Portuguese", community: "Astoria & Sunnyside — Brazilian and Portuguese communities", emoji: "🇧🇷", script: "Português" },
  { name: "Haitian Creole", community: "Cambria Heights — a large Haitian community in southeastern Queens", emoji: "🇭🇹", script: "Kreyòl" },
  { name: "Jamaican Patois", community: "Jamaica & Southeast Queens — one of the largest Jamaican communities outside the Caribbean", emoji: "🇯🇲", script: "Patwa" },
  { name: "Trinidadian Creole", community: "Southeast Queens — large Trinidadian-American community", emoji: "🇹🇹", script: "Trini" },
  { name: "Guyanese Creole", community: "Richmond Hill — the largest Guyanese community outside Guyana", emoji: "🇬🇾", script: "Guyanese" },
  { name: "Amharic", community: "Jamaica & Southeast Queens — a growing East African community", emoji: "🇪🇹", script: "አማርኛ" },
  { name: "Tigrinya", community: "Jamaica — Eritrean community in southeastern Queens", emoji: "🇪🇷", script: "ትግርኛ" },
  { name: "Somali", community: "Jamaica — Somali immigrant community in southeastern Queens", emoji: "🇸🇴", script: "Soomaali" },
  { name: "Wolof", community: "Southeast Queens — West African Senegalese community", emoji: "🇸🇳", script: "Wolof" },
  { name: "Yoruba", community: "Jamaica & Southeast Queens — Nigerian Yoruba community", emoji: "🇳🇬", script: "Yorùbá" },
  { name: "Igbo", community: "Southeast Queens — Nigerian Igbo community", emoji: "🇳🇬", script: "Igbo" },
  { name: "Twi", community: "Southeast Queens — Ghanaian Akan community", emoji: "🇬🇭", script: "Twi" },
  { name: "Swahili", community: "Southeast Queens — East African diaspora community", emoji: "🌍", script: "Kiswahili" },
  { name: "Fulani", community: "Southeast Queens — West African Fulani community", emoji: "🌍", script: "Fulfulde" },
  { name: "Persian (Farsi)", community: "Forest Hills & Rego Park — Iranian Jewish and Muslim communities", emoji: "🇮🇷", script: "فارسی" },
  { name: "Pashto", community: "Flushing & Jamaica — Afghan community in Queens", emoji: "🇦🇫", script: "پښتو" },
  { name: "Dari", community: "Flushing — Afghan Dari-speaking community", emoji: "🇦🇫", script: "دری" },
  { name: "Bukharian", community: "Rego Park & Forest Hills — the largest Bukharian Jewish community outside Central Asia", emoji: "🕍", script: "Бухорӣ" },
  { name: "Czech", community: "Astoria — Central European community", emoji: "🇨🇿", script: "Čeština" },
  { name: "Slovak", community: "Woodside — Slovak immigrant community", emoji: "🇸🇰", script: "Slovenčina" },
  // Additional languages
  { name: "Malay", community: "Elmhurst — Southeast Asian Malaysian community", emoji: "🇲🇾", script: "Bahasa Melayu" },
  { name: "Cebuano", community: "Woodside — Visayan Filipino community alongside Little Manila", emoji: "🇵🇭", script: "Bisaya" },
  { name: "Ilocano", community: "Woodside — Northern Filipino community in Little Manila", emoji: "🇵🇭", script: "Ilokano" },
  { name: "Kapampangan", community: "Woodside — Pampanga Filipino community", emoji: "🇵🇭", script: "Kapampangan" },
  { name: "Punjabi (Pakistani)", community: "Jamaica & Richmond Hill — Pakistani Punjabi community", emoji: "🇵🇰", script: "پنجابی" },
  { name: "Sindhi", community: "Jackson Heights — Sindhi Hindu and Muslim diaspora", emoji: "🇵🇰", script: "سنڌي" },
  { name: "Balochi", community: "Jamaica — small but tight-knit Balochi community", emoji: "🌐", script: "بلوچی" },
  { name: "Kashmiri", community: "Jackson Heights — Kashmiri diaspora in South Asian corridor", emoji: "🌐", script: "کٲشُر" },
  { name: "Oriya (Odia)", community: "Flushing & Jackson Heights — Odisha diaspora community", emoji: "🌐", script: "ଓଡ଼ିଆ" },
  { name: "Malayalam", community: "Flushing & Jackson Heights — Kerala community, one of the most educated immigrant groups", emoji: "🌐", script: "മലയാളം" },
  { name: "Kannada", community: "Flushing — Karnataka community of IT professionals and students", emoji: "🌐", script: "ಕನ್ನಡ" },
  { name: "Assamese", community: "Jackson Heights — small Northeast Indian diaspora", emoji: "🌐", script: "অসমীয়া" },
  { name: "Dzongkha", community: "Woodside — Bhutanese refugee community", emoji: "🇧🇹", script: "རྫོང་ཁ" },
  { name: "Mongolian", community: "Flushing — a growing Mongolian community near Little Asia", emoji: "🇲🇳", script: "Монгол" },
  { name: "Uyghur", community: "Flushing — Central Asian Uyghur diaspora community", emoji: "🌐", script: "ئۇيغۇرچە" },
  { name: "Kazakh", community: "Rego Park — Central Asian community near Bukharian corridor", emoji: "🇰🇿", script: "Қазақша" },
  { name: "Kyrgyz", community: "Rego Park — small Central Asian community", emoji: "🇰🇬", script: "Кыргызча" },
  { name: "Tajik", community: "Rego Park & Flushing — Tajik diaspora community", emoji: "🇹🇯", script: "Тоҷикӣ" },
  { name: "Azerbaijani", community: "Forest Hills — Azerbaijani community, often overlapping with Bukharian Jewish networks", emoji: "🇦🇿", script: "Azərbaycan" },
  { name: "Armenian", community: "Forest Hills & Rego Park — Armenian community with roots in the Middle East", emoji: "🇦🇲", script: "Հայերեն" },
  { name: "Georgian", community: "Forest Hills — Georgian Jewish and Christian communities", emoji: "🇬🇪", script: "ქართული" },
  { name: "Macedonian", community: "Astoria — part of the South Slavic community in western Queens", emoji: "🇲🇰", script: "Македонски" },
  { name: "Bulgarian", community: "Astoria & Woodside — Eastern European Bulgarian community", emoji: "🇧🇬", script: "Български" },
  { name: "Slovenian", community: "Astoria — small Slovenian community in western Queens", emoji: "🇸🇮", script: "Slovenščina" },
  { name: "Bosnian", community: "Astoria & Ridgewood — Bosnian Muslim community", emoji: "🇧🇦", script: "Bosanski" },
  { name: "Maltese", community: "Astoria — historic Maltese community", emoji: "🇲🇹", script: "Malti" },
  { name: "Catalan", community: "Astoria — Spanish and Catalan expat community", emoji: "🌐", script: "Català" },
  { name: "Galician", community: "Astoria — Galician Spanish community", emoji: "🌐", script: "Galego" },
  { name: "Basque", community: "Astoria — small Basque community in western Queens", emoji: "🌐", script: "Euskara" },
  { name: "Dutch", community: "Astoria & Long Island City — Dutch expat and heritage community", emoji: "🇳🇱", script: "Nederlands" },
  { name: "Swedish", community: "Astoria — Scandinavian expat community", emoji: "🇸🇪", script: "Svenska" },
  { name: "Norwegian", community: "Astoria — historic Scandinavian community in western Queens", emoji: "🇳🇴", script: "Norsk" },
  { name: "Finnish", community: "Astoria — small Northern European community", emoji: "🇫🇮", script: "Suomi" },
  { name: "Danish", community: "Astoria — Scandinavian expat and heritage community", emoji: "🇩🇰", script: "Dansk" },
  { name: "Afrikaans", community: "Southeast Queens — South African expat community", emoji: "🇿🇦", script: "Afrikaans" },
  { name: "Zulu", community: "Southeast Queens — South African Zulu diaspora", emoji: "🇿🇦", script: "isiZulu" },
  { name: "Xhosa", community: "Southeast Queens — South African Xhosa diaspora", emoji: "🇿🇦", script: "isiXhosa" },
  { name: "Shona", community: "Southeast Queens — Zimbabwean community", emoji: "🇿🇼", script: "ChiShona" },
  { name: "Lingala", community: "Southeast Queens — Congolese community", emoji: "🇨🇩", script: "Lingála" },
  { name: "Kikuyu", community: "Jamaica — Kenyan Kikuyu community", emoji: "🇰🇪", script: "Gĩkũyũ" },
  { name: "Oromo", community: "Jamaica — Ethiopian and East African Oromo diaspora", emoji: "🇪🇹", script: "Afaan Oromoo" },
  { name: "Tigre", community: "Jamaica — Eritrean Tigre-speaking community", emoji: "🇪🇷", script: "ትግሬ" },
  { name: "Dinka", community: "Jamaica — South Sudanese Dinka community", emoji: "🇸🇸", script: "Thuɔŋjäŋ" },
  { name: "Hausa", community: "Southeast Queens — West African Hausa community from Nigeria and Niger", emoji: "🇳🇬", script: "Hausa" },
  { name: "Mandinka", community: "Southeast Queens — Gambian and Senegalese Mandinka community", emoji: "🇬🇲", script: "Mandinka" },
  { name: "Krio", community: "Southeast Queens — Sierra Leonean Krio-speaking community", emoji: "🇸🇱", script: "Krio" },
  { name: "Fula Jallon", community: "Southeast Queens — Guinean Fula community", emoji: "🇬🇳", script: "Pular" },
  { name: "Bambara", community: "Southeast Queens — Malian Bambara community", emoji: "🇲🇱", script: "Bamanankan" },
  { name: "Ewe", community: "Southeast Queens — Ghanaian and Togolese Ewe community", emoji: "🇬🇭", script: "Eʋegbe" },
  { name: "Ga", community: "Southeast Queens — Ghanaian Ga-speaking community from Accra", emoji: "🇬🇭", script: "Gã" },
  { name: "Bassa", community: "Southeast Queens — Liberian Bassa community", emoji: "🇱🇷", script: "Bassa" },
  { name: "Kreyòl Ayisyen (rural)", community: "Cambria Heights — Haitian community from various regional dialects", emoji: "🇭🇹", script: "Kreyòl" },
  { name: "Martinican Creole", community: "Southeast Queens — French Caribbean Martinican community", emoji: "🇲🇶", script: "Kréyòl" },
  { name: "Guadeloupean Creole", community: "Southeast Queens — French Caribbean community", emoji: "🇬🇵", script: "Kréyòl" },
  { name: "Barbadian Creole", community: "Southeast Queens — Bajan community", emoji: "🇧🇧", script: "Bajan" },
  { name: "Grenadian Creole", community: "Southeast Queens — Grenadian community", emoji: "🇬🇩", script: "Creole" },
  { name: "Vincentian Creole", community: "Southeast Queens — St. Vincent and the Grenadines community", emoji: "🇻🇨", script: "Creole" },
  { name: "Belizean Creole", community: "Southeast Queens — Belizean community", emoji: "🇧🇿", script: "Kriol" },
  { name: "Papiamento", community: "Southeast Queens — Aruban and Curaçaoan community", emoji: "🇦🇼", script: "Papiamentu" },
  { name: "Sranan Tongo", community: "Southeast Queens — Surinamese community", emoji: "🇸🇷", script: "Sranan" },
  { name: "Paraguayan Guaraní", community: "Jackson Heights — Paraguayan community in Little South America", emoji: "🇵🇾", script: "Avañe'ẽ" },
  { name: "Quechua", community: "Jackson Heights & Corona — indigenous Peruvian and Ecuadorian communities", emoji: "🌎", script: "Runa Simi" },
  { name: "Aymara", community: "Jackson Heights — Bolivian indigenous diaspora", emoji: "🇧🇴", script: "Aymar aru" },
  { name: "Nahuatl", community: "Corona & Flushing — Mexican indigenous community", emoji: "🇲🇽", script: "Nāhuatl" },
  { name: "Mixtec", community: "Corona — one of the largest Mixtec communities outside Oaxaca", emoji: "🇲🇽", script: "Ñuu Savi" },
  { name: "Zapotec", community: "Jackson Heights — Oaxacan Zapotec community", emoji: "🇲🇽", script: "Didxazá" },
  { name: "Mayan (Yucatec)", community: "Jackson Heights & Corona — Yucatán Maya community", emoji: "🇲🇽", script: "Màaya T'àan" },
  { name: "Mandarin (Fujianese)", community: "Flushing — the Fujianese dialect community, distinct from Mandarin", emoji: "🇨🇳", script: "闽南话" },
  { name: "Shanghainese", community: "Flushing — Wu Chinese speakers from Shanghai", emoji: "🇨🇳", script: "上海话" },
  { name: "Hakka", community: "Flushing & Elmhurst — Hakka Chinese diaspora", emoji: "🇨🇳", script: "客家話" },
  { name: "Teochew", community: "Flushing — Chaoshan Chinese community", emoji: "🇨🇳", script: "潮州話" },
  { name: "Sinhala", community: "Woodside & Elmhurst — Sri Lankan Tamil and Sinhala community", emoji: "🇱🇰", script: "සිංහල" },
  { name: "Dhivehi", community: "Flushing — small Maldivian community", emoji: "🇲🇻", script: "ދިވެހި" },
  { name: "Tok Pisin", community: "Queens — Papua New Guinean community", emoji: "🇵🇬", script: "Tok Pisin" },
  { name: "Fijian", community: "Queens — Pacific Islander Fijian diaspora", emoji: "🇫🇯", script: "Vosa Vakaviti" },
  { name: "Samoan", community: "Queens — Pacific Islander Samoan community", emoji: "🇼🇸", script: "Gagana Samoa" },
  { name: "Tongan", community: "Queens — Pacific Islander Tongan community", emoji: "🇹🇴", script: "lea faka-Tonga" },
  { name: "Hawaiian Pidgin", community: "Queens — Hawaiian diaspora community", emoji: "🌺", script: "Pidgin" },
  { name: "Ladino", community: "Forest Hills — Sephardic Jewish community with Iberian roots", emoji: "✡️", script: "Judeo-Español" },
  { name: "Aramaic", community: "Forest Hills & Rego Park — Assyrian and Chaldean Christian community", emoji: "🌐", script: "ܐܪܡܝܐ" },
  { name: "Assyrian Neo-Aramaic", community: "Woodside & Forest Hills — Assyrian diaspora community", emoji: "🌐", script: "ܣܘܪܝܬ" },
  { name: "Kurdish (Kurmanji)", community: "Astoria & Ridgewood — Kurdish diaspora community", emoji: "🌐", script: "Kurdî" },
  { name: "Kurdish (Sorani)", community: "Flushing — Iraqi Kurdish community", emoji: "🌐", script: "کوردی" },
  { name: "Romani", community: "Woodside & Astoria — Romani community in Queens", emoji: "🌐", script: "Romani" },
];

export default function QueensTranslator() {
  const [tagline, setTagline] = useState("");
  const [language, setLanguage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tried, setTried] = useState(false);

  const pickRandomLanguage = () => {
    const idx = Math.floor(Math.random() * QUEENS_LANGUAGES.length);
    return QUEENS_LANGUAGES[idx];
  };

  const translate = async () => {
    if (!tagline.trim()) return;
    setLoading(true);
    setResult(null);
    const lang = pickRandomLanguage();
    setLanguage(lang);
    setTried(true);

    const response = await base44.integrations.Core.InvokeLLM({
      prompt: `You are a fun, enthusiastic translator for a marketing keynote event in Queens, NY — the most linguistically diverse place on Earth.

Translate this startup marketing tagline into ${lang.name}:
"${tagline}"

Return ONLY this JSON (no extra text):
{
  "translation": "the translated text",
  "pronunciation": "phonetic pronunciation guide for English speakers (romanized, easy to read)",
  "literal_meaning": "a fun note about what it literally means or any interesting nuance",
  "marketing_insight": "one sentence about how ${lang.name}-speaking communities in Queens might uniquely respond to this message — tie it to marketing"
}`,
      response_json_schema: {
        type: "object",
        properties: {
          translation: { type: "string" },
          pronunciation: { type: "string" },
          literal_meaning: { type: "string" },
          marketing_insight: { type: "string" },
        },
      },
    });

    setResult(response);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-10 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-8 text-6xl">🌍</div>
        <div className="absolute top-8 right-12 text-5xl">🗽</div>
        <div className="absolute bottom-8 left-16 text-4xl">🌏</div>
        <div className="absolute bottom-4 right-8 text-5xl">🌎</div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            <Globe className="w-3.5 h-3.5" /> QUEENS EXCLUSIVE EXPERIENCE
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            The Queens Language Challenge 🗺️
          </h3>
          <p className="text-blue-200 text-sm max-w-xl mx-auto leading-relaxed">
            Queens is the most linguistically diverse place on Earth — <strong className="text-white">160+ languages</strong> spoken across 2.3 million people.
            Type your startup tagline and discover how it sounds in a random Queens language.
          </p>
          <p className="text-white/40 text-xs mt-2">{QUEENS_LANGUAGES.length} languages in this experience</p>
        </div>

        <div className="max-w-xl mx-auto mb-6">
          <label className="block text-blue-200 text-sm font-semibold mb-2">Your startup tagline or marketing message:</label>
          <div className="flex gap-2">
            <input
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !loading && translate()}
              placeholder="e.g. The fastest way to find your first customers"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
            <button
              onClick={translate}
              disabled={loading || !tagline.trim()}
              className="px-5 py-3 bg-yellow-400 text-yellow-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-40 flex items-center gap-2 whitespace-nowrap text-sm"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <><Sparkles className="w-4 h-4" /> Translate!</>
              )}
            </button>
          </div>
        </div>

        {loading && (
          <div className="text-center py-8">
            <Globe className="w-10 h-10 text-yellow-400 mx-auto mb-3 animate-pulse" />
            <p className="text-blue-200 text-sm">Picking a random Queens language and translating…</p>
          </div>
        )}

        <AnimatePresence>
          {result && language && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/20">
                  <span className="text-4xl">{language.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xl font-bold text-white">{language.name}</h4>
                      <span className="text-white/50 text-sm">{language.script}</span>
                    </div>
                    <p className="text-blue-300 text-xs mt-0.5">📍 {language.community}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-1">Your tagline in {language.name}:</p>
                  <p className="text-2xl font-bold text-white leading-relaxed">{result.translation}</p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Volume2 className="w-3.5 h-3.5 text-blue-300" />
                    <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest">How to say it:</p>
                  </div>
                  <p className="text-white text-sm font-mono">{result.pronunciation}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {result.literal_meaning && (
                    <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-4">
                      <p className="text-xs font-semibold text-yellow-400 mb-1">🔤 Nuance:</p>
                      <p className="text-yellow-100 text-sm leading-relaxed">{result.literal_meaning}</p>
                    </div>
                  )}
                  {result.marketing_insight && (
                    <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-4">
                      <p className="text-xs font-semibold text-green-400 mb-1">📈 Marketing insight:</p>
                      <p className="text-green-100 text-sm leading-relaxed">{result.marketing_insight}</p>
                    </div>
                  )}
                </div>

                <div className="mt-5 text-center">
                  <button
                    onClick={translate}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <Shuffle className="w-4 h-4" /> Translate into a different Queens language
                  </button>
                </div>
              </div>

              <p className="text-center text-white/30 text-xs mt-3">
                This is one of {QUEENS_LANGUAGES.length} languages in this experience — Queens has 160+ total. Reach them all with the right marketing.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {!tried && !loading && (
          <div className="text-center">
            <p className="text-white/40 text-xs">↑ Try it — every translation is a surprise from a real Queens community</p>
          </div>
        )}
      </div>
    </div>
  );
}