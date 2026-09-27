import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  ShoppingBag,
  Dumbbell,
  ShieldCheck,
  Truck,
  Star,
  ArrowRight,
  Flame,
  PackageCheck,
  Sparkles,
  ChevronRight,
  Calculator,
  Check,
  Trophy,
  Users,
  Clock,
  HeartPulse,
} from "lucide-react";

// Dedicated Gym Needs Product Catalog
const storeProducts = [
  {
    id: 1,
    name: "CyberWhey 100% Isolate Protein (2kg)",
    category: "protein",
    categoryLabel: "Protein",
    price: "₹4,999",
    originalPrice: "₹6,499",
    rating: 4.9,
    reviews: 240,
    tag: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=500",
    desc: "27g Pure Whey Isolate per serving with Digestive Enzymes.",
  },
  {
    id: 2,
    name: "Ultra-Pure Creatine Monohydrate (250g)",
    category: "creatine",
    categoryLabel: "Creatine",
    price: "₹1,199",
    originalPrice: "₹1,599",
    rating: 4.9,
    reviews: 185,
    tag: "MAX POWER",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=500",
    desc: "Microfiltered 100% Pure Monohydrate for strength & size.",
  },
  {
    id: 3,
    name: "NitroSurge Explosive Pre-Workout (30 Servings)",
    category: "preworkout",
    categoryLabel: "Pre-Workout",
    price: "₹2,199",
    originalPrice: "₹2,899",
    rating: 4.8,
    reviews: 142,
    tag: "HIGH ENERGY",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=500",
    desc: "300mg Caffeine + L-Citrulline for extreme pump and laser focus.",
  },
  {
    id: 4,
    name: "GymX Heavy-Duty Leather Lifting Belt",
    category: "gear",
    categoryLabel: "Gym Gear",
    price: "₹1,899",
    originalPrice: "₹2,499",
    rating: 4.9,
    reviews: 310,
    tag: "PRO GEAR",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=500",
    desc: "10mm genuine leather for heavy squats & deadlift lumbar support.",
  },
  {
    id: 5,
    name: "Pro Padded Wrist Wraps & Lifting Straps Combo",
    category: "gear",
    categoryLabel: "Gym Gear",
    price: "₹799",
    originalPrice: "₹1,199",
    rating: 4.7,
    reviews: 98,
    tag: "ESSENTIAL",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=500",
    desc: "Non-slip grip support for heavy pulling movements.",
  },
  {
    id: 6,
    name: "Stainless Steel Insulated Gym Shaker (750ml)",
    category: "gear",
    categoryLabel: "Accessories",
    price: "₹899",
    originalPrice: "₹1,299",
    rating: 4.8,
    reviews: 165,
    tag: "LEAK PROOF",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=500",
    desc: "Double-wall thermal insulation to keep protein shakes ice cold.",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAnnual, setIsAnnual] = useState(false);

  // BMI Calculator States
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      let category = "";
      if (bmi < 18.5) category = "Underweight - Need Mass Gainer";
      else if (bmi < 24.9) category = "Normal - Maintain / Lean Muscle";
      else if (bmi < 29.9) category = "Overweight - Cut Fat / HIIT";
      else category = "Obese - Fat Loss & Cardio Protocol";

      setBmiResult({ bmi, category });
    }
  };

  const filteredProducts =
    selectedCategory === "all"
      ? storeProducts
      : storeProducts.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-20 font-sans selection:bg-cyan-500 selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-cyan-500/30 px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>OFFICIAL GYM PASS & AUTHENTIC SUPPLEMENT STORE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              BUILD YOUR BODY <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">
                FUEL YOUR GAINS
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              State-of-the-art gym access combined with 100% original Protein, Creatine, Pre-Workout, and heavy-duty gym gear — all delivered under one roof.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/Signup"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-sm tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2"
              >
                Join Gym Today <Zap className="w-4 h-4 fill-black" />
              </Link>
              <a
                href="#store"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                Buy Supplements <ShoppingBag className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">12,500+</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Active Members</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-cyan-400">100%</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Lab Pure</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-400">24/7</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Gym Access</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl">
                      <Dumbbell className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">GymX Hub & Store</h4>
                      <p className="text-xs text-slate-400">All Gym Needs Integrated</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full uppercase">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-2">
                      <PackageCheck className="w-4 h-4 text-cyan-400" /> Whey Isolate & Creatine
                    </span>
                    <span className="text-cyan-400 font-bold">In Stock</span>
                  </div>

                  <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-2">
                      <Flame className="w-4 h-4 text-amber-400" /> High Octane Pre-Workout
                    </span>
                    <span className="text-amber-400 font-bold">Trending</span>
                  </div>

                  <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-purple-400" /> Belts, Straps & Shakers
                    </span>
                    <span className="text-purple-400 font-bold">Original</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/Signup"
                    className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition"
                  >
                    View All Gym Passes & Store <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED GYM E-COMMERCE STORE SECTION */}
      <section id="store" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
            <PackageCheck className="w-4 h-4" /> Authentic Gym Nutrition & Gear
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">
            PURE GYM ESSENTIALS SHOP
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            No filler products. Only high-potency Supplements, Creatine, Pre-workouts, and Heavy-Duty Lifting Gear.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Items" },
              { id: "protein", label: "Proteins" },
              { id: "creatine", label: "Creatine" },
              { id: "preworkout", label: "Pre-Workout" },
              { id: "gear", label: "Belts & Gear" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition duration-300 ${
                  selectedCategory === tab.id
                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 bg-slate-950 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-slate-950/90 text-cyan-400 border border-cyan-500/30 text-[10px] font-black uppercase px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase">{product.categoryLabel}</span>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{product.rating}</span>
                      <span className="text-slate-500">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-white text-base mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{product.desc}</p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white">{product.price}</span>
                    <span className="text-xs text-slate-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button className="w-full py-3.5 bg-slate-800 hover:bg-cyan-500 hover:text-black text-white text-xs font-black uppercase rounded-xl transition duration-300 flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" /> Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE BMI & CALORIE CALCULATOR */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="bg-gradient-to-r from-slate-900 to-slate-900/90 border border-slate-800 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase mb-4">
                <Calculator className="w-4 h-4" /> Fitness Metric Engine
              </div>
              <h3 className="text-3xl font-black uppercase text-white mb-4">Calculate Your Body Status</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Know your Body Mass Index (BMI) instantly to pick the right Supplement stack (Mass Gainer vs Whey Isolate) and workout pass.
              </p>

              <form onSubmit={calculateBMI} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Height (cm)</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="e.g. 175"
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Weight (kg)</label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="e.g. 72"
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 text-sm"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-xs rounded-xl transition duration-300"
                >
                  Calculate My BMI
                </button>
              </form>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[260px]">
              {bmiResult ? (
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Your Score</p>
                  <p className="text-6xl font-black text-cyan-400">{bmiResult.bmi}</p>
                  <div className="inline-block px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-white">
                    Recommendation: <span className="text-amber-400">{bmiResult.category}</span>
                  </div>
                </div>
              ) : (
                <div className="text-slate-500 space-y-2">
                  <Calculator className="w-12 h-12 mx-auto opacity-40 mb-2" />
                  <p className="text-sm">Enter height & weight to check your recommendation.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEMBERSHIP PLANS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-2 block">
            Gym Pass Memberships
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-6">
            CHOOSE YOUR ACCESS TIER
          </h2>

          <div className="inline-flex items-center bg-slate-900 p-1.5 rounded-full border border-slate-800">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition ${
                !isAnnual ? "bg-cyan-500 text-black" : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Pass
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition ${
                isAnnual ? "bg-cyan-500 text-black" : "text-slate-400 hover:text-white"
              }`}
            >
              Annual Pass <span className="text-[10px] opacity-80">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold uppercase text-white mb-2">Starter Pass</h3>
              <p className="text-slate-400 text-xs mb-6">Standard Gym floor & cardio access.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{isAnnual ? "₹1,499" : "₹1,899"}</span>
                <span className="text-slate-400 text-xs">/month</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Standard Gym Floor Access</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Locker Room & Shower</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> 5% Off Supplements Shop</li>
              </ul>
            </div>
            <Link to="/Signup" className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-center text-xs font-bold uppercase rounded-xl transition">
              Get Starter Pass
            </Link>
          </div>

          {/* Pro Beast Plan */}
          <div className="relative bg-slate-900 border-2 border-cyan-500 rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-cyan-500/10">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
              Most Popular
            </span>
            <div>
              <h3 className="text-lg font-bold uppercase text-cyan-400 mb-2">Pro Beast Pass</h3>
              <p className="text-slate-400 text-xs mb-6">Unlimited Gym, Heavy Lifting Area & HIIT Classes.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{isAnnual ? "₹2,499" : "₹2,999"}</span>
                <span className="text-slate-400 text-xs">/month</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> 24/7 All Gym Floor & Steam Bath</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> All Group HIIT & Boxing Classes</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Free Monthly Body Composition Analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> 15% Off All Protein & Creatine Orders</li>
              </ul>
            </div>
            <Link to="/Signup" className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black text-center text-xs font-black uppercase rounded-xl transition">
              Join Pro Beast Tier
            </Link>
          </div>

          {/* VIP Plan */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold uppercase text-white mb-2">Elite VIP Pass</h3>
              <p className="text-slate-400 text-xs mb-6">1-on-1 Personal Trainer & Custom Supplement Protocol.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{isAnnual ? "₹4,999" : "₹5,999"}</span>
                <span className="text-slate-400 text-xs">/month</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Everything in Pro Beast Pass</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Dedicated Personal Trainer</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Personalized Diet & Supplement Stack</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> 25% Flat Discount On All Store Items</li>
              </ul>
            </div>
            <Link to="/Signup" className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-center text-xs font-bold uppercase rounded-xl transition">
              Get VIP Access
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TRUST BADGES SECTION */}
      <section className="py-12 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl border border-cyan-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">100% Authentic Supplements</h4>
                <p className="text-xs text-slate-400">Directly imported with QR verification codes</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Superfast Shipping</h4>
                <p className="text-xs text-slate-400">Same day dispatch on Whey, Creatine & Gear</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-2xl border border-purple-500/20">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Instant Gym Entry Pass</h4>
                <p className="text-xs text-slate-400">QR entry generated instantly after registration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}