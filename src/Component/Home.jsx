import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dumbbell,
  Zap,
  ShoppingBag,
  ShieldCheck,
  UserCheck,
  Award,
  ArrowRight,
  Flame,
  CheckCircle2,
  HeartPulse,
  Star,
  Sparkles,
  Users,
  Activity,
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-20 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-slate-900">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            <Flame className="w-4 h-4 text-cyan-400 animate-pulse" /> Ultimate Fitness & Supplement Hub
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none">
            TRANSFORM YOUR BODY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              UNLEASH THE BEAST
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            High-tech gym floor access, 100% authentic Whey & Supplements store, and certified Personal Trainers — all in one powerful platform.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/membership"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black uppercase text-xs rounded-2xl transition shadow-xl shadow-cyan-500/20 flex items-center gap-2"
            >
              Explore Gym Passes <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/store"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-black uppercase text-xs rounded-2xl transition flex items-center gap-2"
            >
              Shop Supplements <ShoppingBag className="w-4 h-4 text-amber-400" />
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-black text-cyan-400">100%</h3>
              <p className="text-[11px] text-slate-400 font-bold uppercase mt-0.5">Authentic Supplements</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-black text-emerald-400">₹800/mo</h3>
              <p className="text-[11px] text-slate-400 font-bold uppercase mt-0.5">Starting Membership</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-black text-amber-400">15+</h3>
              <p className="text-[11px] text-slate-400 font-bold uppercase mt-0.5">Certified Trainers</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-black text-purple-400">QR Pass</h3>
              <p className="text-[11px] text-slate-400 font-bold uppercase mt-0.5">Instant Entry</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SHOWCASE */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Everything You Need</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">One Cyber Gym Ecosystem</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Gym Membership */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white uppercase">Gym Memberships</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Flexible plans from 1 Month to 1 Year with optional Cardio access and digital QR Entry Passes.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Strength & Cardio Options</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Locker & Sauna Access</li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => navigate("/membership")}
                  className="w-full py-3 bg-slate-950 hover:bg-cyan-500 hover:text-black border border-slate-800 text-white font-bold text-xs uppercase rounded-xl transition flex items-center justify-center gap-2"
                >
                  View Plans <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Supplement Store */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center text-amber-400 group-hover:scale-110 transition">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white uppercase">Authentic Store</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Verified Whey Isolate, Creatine Monohydrate, Pre-Workouts and BCAAs with fast door delivery.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> QR Authenticity Verified</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Fast Metro Shipping</li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => navigate("/store")}
                  className="w-full py-3 bg-slate-950 hover:bg-amber-500 hover:text-black border border-slate-800 text-white font-bold text-xs uppercase rounded-xl transition flex items-center justify-center gap-2"
                >
                  Shop Supplements <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Personal Trainers */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded-2xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white uppercase">Personal Trainers</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Book 1-on-1 sessions with elite bodybuilders and certified powerlifting coaches.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Customized Workout Plans</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Macro & Nutrition Guidance</li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => navigate("/book-trainer")}
                  className="w-full py-3 bg-slate-950 hover:bg-purple-500 hover:text-black border border-slate-800 text-white font-bold text-xs uppercase rounded-xl transition flex items-center justify-center gap-2"
                >
                  Book Trainer <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW FEATURED PRODUCTS SECTION */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Top Selling Nutrition
              </span>
              <h2 className="text-3xl font-black text-white uppercase mt-1">Featured Supplements</h2>
            </div>
            <Link to="/store" className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 uppercase tracking-wider">
              Explore All Store <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                name: "Cyber-Whey Hydro Isolate (2kg)",
                tag: "Best Seller",
                price: "₹4,999",
                rating: "4.9",
                bg: "from-amber-500/20 to-orange-500/5",
                badgeColor: "bg-amber-500 text-black",
              },
              {
                id: 2,
                name: "Micronized Creatine Monohydrate",
                tag: "Pure Muscle",
                price: "₹1,299",
                rating: "4.8",
                bg: "from-cyan-500/20 to-blue-500/5",
                badgeColor: "bg-cyan-500 text-black",
              },
              {
                id: 3,
                name: "Hyper-Pump Pre-Workout (30 Servings)",
                tag: "High Energy",
                price: "₹2,199",
                rating: "5.0",
                bg: "from-purple-500/20 to-pink-500/5",
                badgeColor: "bg-purple-500 text-white",
              },
            ].map((prod) => (
              <div key={prod.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition flex flex-col justify-between">
                <div>
                  <div className={`w-full h-44 rounded-2xl bg-gradient-to-br ${prod.bg} flex items-center justify-center relative overflow-hidden mb-5`}>
                    <span className={`absolute top-3 left-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-md ${prod.badgeColor}`}>
                      {prod.tag}
                    </span>
                    <ShoppingBag className="w-16 h-16 text-slate-700" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> {prod.rating} / 5.0
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">{prod.name}</h3>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-lg font-black text-white">{prod.price}</span>
                  <button onClick={() => navigate("/store")} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition">
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK MEMBERSHIP PREVIEW BANNER */}
      <section className="py-16 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="bg-cyan-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Special Gym Pass Rates
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase">
                Membership Starting At Only ₹800/Month!
              </h2>
              <p className="text-xs text-slate-400 max-w-xl">
                Choose Strength Only or Add Cardio access according to your budget and training goal.
              </p>
            </div>

            <Link
              to="/membership"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-xs rounded-2xl transition shrink-0 shadow-lg shadow-cyan-500/20"
            >
              Choose Your Plan Now
            </Link>
          </div>
        </div>
      </section>

      {/* NEW TESTIMONIALS & SOCIAL PROOF */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-2">
              <Users className="w-4 h-4" /> GymX Athlete Reviews
            </span>
            <h2 className="text-3xl font-black text-white uppercase">WHAT OUR MEMBERS SAY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Aman Sharma",
                role: "Powerlifter",
                review: "GymX transformed my routine. QR pass entry is instant, and their supplement delivery is authentic with fast verification.",
              },
              {
                name: "Rohan Verma",
                role: "Bodybuilder",
                review: "Booked personal trainer sessions for 3 months. Form correction and diet programming added 10kg to my bench press!",
              },
              {
                name: "Priya Patel",
                role: "Fitness Enthusiast",
                review: "Cleanest equipment in the city. The cardio and strength area combination for ₹1200/mo is unbeatable value.",
              },
            ].map((rev, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">"{rev.review}"</p>
                <div className="border-t border-slate-800/80 pt-3">
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-[10px] text-cyan-400 font-mono uppercase">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GYMX BANNER */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-2">
              <ShieldCheck className="w-8 h-8 text-cyan-400 mx-auto" />
              <h4 className="font-black text-white uppercase text-sm">Verified Authenticity</h4>
              <p className="text-xs text-slate-400">Direct distributor sourcing with QR scan guarantee on every tub.</p>
            </div>
            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-2">
              <Award className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-black text-white uppercase text-sm">Certified Floor Coaches</h4>
              <p className="text-xs text-slate-400">Friendly guidance on proper lifting form and injury prevention.</p>
            </div>
            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-2">
              <HeartPulse className="w-8 h-8 text-amber-400 mx-auto" />
              <h4 className="font-black text-white uppercase text-sm">All-In-One Dashboard</h4>
              <p className="text-xs text-slate-400">Track orders, active membership passes, and trainer schedules easily.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}