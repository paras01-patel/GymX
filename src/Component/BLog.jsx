import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Flame,
  Clock,
  User,
  Search,
  ArrowRight,
  Tag,
  Dumbbell,
} from "lucide-react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Nutrition", "Supplements", "Workouts", "Recovery"];

  const articles = [
    {
      id: 1,
      title: "When to Take Creatine: Before or After Workout?",
      category: "Supplements",
      author: "Vikram Sharma",
      date: "Sep 20, 2026",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=800",
      excerpt:
        "Discover the science behind creatine timing, saturation phases, and whether mixing it with protein or carbs maximizes muscle gains.",
      tag: "Creatine Guide",
    },
    {
      id: 2,
      title: "Bulking vs. Cutting: Complete Macro & Diet Guide",
      category: "Nutrition",
      author: "Ananya Roy",
      date: "Sep 18, 2026",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      excerpt:
        "Learn how to calculate your caloric surplus and deficit, set optimal protein intake, and avoid dirty bulking mistakes.",
      tag: "Diet & Macros",
    },
    {
      id: 3,
      title: "The Ultimate Push-Pull-Legs (PPL) Workout Routine",
      category: "Workouts",
      author: "Rohan Verma",
      date: "Sep 12, 2026",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      excerpt:
        "Break down your weekly training split with compound movements, progressive overload targets, and hypertrophy isolation work.",
      tag: "Hypertrophy",
    },
    {
      id: 4,
      title: "Active Recovery Strategies for Muscle Growth & Soreness",
      category: "Recovery",
      author: "Dr. Karan Mehta",
      date: "Sep 08, 2026",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
      excerpt:
        "Reduce DOMS faster using contrast showers, foam rolling techniques, mobility routines, and sleep optimization tips.",
      tag: "Rest & Repair",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            <BookOpen className="w-4 h-4" /> Beast Knowledge Hub
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Fitness & Supplement Advice
          </h1>
          <p className="text-sm text-slate-400">
            Backed by fitness science, nutritionists, and certified coaches to help you reach peak performance.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search guides, workouts, diet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-slate-700 transition duration-300"
            >
              <div>
                {/* Image & Tag */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1.5">
                    <Tag className="w-3 h-3" /> {article.tag}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-cyan-400" /> {article.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => alert(`Opening Full Article: "${article.title}"`)}
                  className="w-full py-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 hover:text-cyan-400 rounded-xl transition flex items-center justify-center gap-2 group-hover:border-cyan-500/50"
                >
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}