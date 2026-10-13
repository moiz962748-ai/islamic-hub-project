import React, { useState, useMemo } from "react";
import { ISLAMIC_NAMES, IslamicName } from "../mock/islamic-names";

export default function IslamicBabyNames() {
  const [searchQuery, setSearchQuery] = useState("");
  const [genderFilter, setGenderFilter] = useState<"all" | "boy" | "girl" | "unisex">("all");
  const [selectedLetter, setSelectedLetter] = useState<string>("");
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const copyNameDetails = (item: IslamicName) => {
    navigator.clipboard.writeText(`${item.name} (${item.arabic}) - Meaning: ${item.meaning}`);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filteredNames = useMemo(() => {
    return ISLAMIC_NAMES.filter((item) => {
      if (genderFilter !== "all" && item.gender !== genderFilter) return false;
      if (selectedLetter && !item.name.toUpperCase().startsWith(selectedLetter)) return false;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        return item.name.toLowerCase().includes(q) || item.arabic.includes(q) || item.meaning.toLowerCase().includes(q);
      }
      return true;
    });
  }, [searchQuery, genderFilter, selectedLetter]);

  return (
    <div className="min-h-screen bg-black text-neutral-50 p-4 sm:p-8 font-sans selection:bg-white selection:text-black">
      <header className="max-w-6xl mx-auto mb-8 border-b border-neutral-800 pb-5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-50 mb-2">
          Islamic Baby Names Finder — <span className="text-white underline decoration-neutral-700 underline-offset-4">Quranic &amp; Prophetic Meanings</span>
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400">Verified Arabic Etymology • Authentic References • Instant Search</p>
      </header>

      <main className="max-w-6xl mx-auto space-y-6">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <input
              type="text"
              placeholder="Search name, Arabic, or meaning..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="md:col-span-6 bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-neutral-50 focus:outline-none focus:border-white shadow-inner transition-colors"
            />
            <div className="md:col-span-6 flex gap-1 bg-black p-1 rounded-xl border border-neutral-800 shadow-inner">
              {(["all", "boy", "girl", "unisex"] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGenderFilter(g)}
                  className={`flex-1 py-1.5 text-xs capitalize rounded-lg transition-all ${genderFilter === g ? "bg-white text-black font-medium shadow-sm" : "text-neutral-400 hover:text-white hover:bg-neutral-900"}`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-1 items-center pt-3 border-t border-neutral-800">
            <span className="text-xs text-neutral-400 mr-2 font-mono font-semibold">A-Z:</span>
            <button
              onClick={() => setSelectedLetter("")}
              className={`px-2.5 py-1 text-xs rounded-md border transition-all ${selectedLetter === "" ? "bg-white text-black border-white font-medium shadow-sm" : "bg-black text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"}`}
            >
              All
            </button>
            {alphabet.map((char) => (
              <button
                key={char}
                onClick={() => setSelectedLetter(char)}
                className={`px-2 py-1 text-xs rounded-md border transition-all ${selectedLetter === char ? "bg-white text-black border-white font-medium shadow-sm" : "bg-black text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white hover:bg-neutral-900"}`}
              >
                {char}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredNames.map((item) => (
            <div key={item.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-50">{item.name}</h3>
                    <span className="text-xs text-neutral-400 font-mono capitalize">{item.gender} • {item.origin}</span>
                  </div>
                  <span className="font-serif text-2xl text-white">{item.arabic}</span>
                </div>
                <p className="text-sm text-neutral-400 mb-4 leading-relaxed">{item.meaning}</p>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex justify-between text-xs font-mono">
                <button onClick={() => copyNameDetails(item)} className="text-neutral-400 hover:text-white font-medium transition-colors">
                  {copiedId === item.id ? "✓ Copied" : "📋 Copy"}
                </button>
                <button onClick={() => toggleBookmark(item.id)} className={bookmarks.includes(item.id) ? "text-white font-bold" : "text-neutral-500 hover:text-white transition-colors"}>
                  {bookmarks.includes(item.id) ? "★ Saved" : "☆ Save"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
