import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Flame, 
  Trophy, 
  Zap, 
  ShieldCheck, 
  ShoppingBag, 
  Star, 
  ChevronRight, 
  Calculator, 
  Check, 
  ArrowRight 
} from 'lucide-react';

export default function Home() {
  // Billing cycle state for Membership plans
  const [isAnnual, setIsAnnual] = useState(false);

  // State for BMI Calculator
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  // Calculate BMI function
  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      let category = '';
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 24.9) category = 'Normal weight';
      else if (bmi < 29.9) category = 'Overweight';
      else category = 'Obese';

      setBmiResult({ bmi, category });
    }
  };

  // Products Data
  const products = [
    {
      id: 1,
      name: 'Cyber Isolate Whey Protein',
      price: '$69.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=400',
      tag: 'Best Seller'
    },
    {
      id: 2,
      name: 'Nitro Surge Pre-Workout',
      price: '$44.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=400',
      tag: 'High Energy'
    },
    {
      id: 3,
      name: 'Pro Lifting Straps & Belt',
      price: '$34.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
      tag: 'Gear'
    },
    {
      id: 4,
      name: 'BCAA Recovery Fuel Matrix',
      price: '$39.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=400',
      tag: 'Recovery'
    }
  ];

  // Programs Data
  const programs = [
    {
      title: 'Hypertrophy & Strength',
      desc: 'Build massive lean muscle with optimized progressive overload routines.',
      icon: Dumbbell,
      badge: 'Popular'
    },
    {
      title: 'HIIT & Shred Acceleration',
      desc: 'Melt fat off while preserving max muscle with high-intensity intervals.',
      icon: Flame,
      badge: 'Fat Loss'
    },
    {
      title: 'Pro Boxing & Combat Fitness',
      desc: 'Master striking techniques, agility, explosive power, and stamina.',
      icon: Trophy,
      badge: 'Agility'
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Zap size={14} className="animate-pulse" /> Next-Gen Fitness Protocol
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none uppercase">
                Forge Your <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                  Ultimate Physique
                </span>
              </h1>
              
              <p className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0">
                Unlock peak physical performance with elite training routines, real-time tracking, science-backed nutrition, and premium gear.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  to="/Signup"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition duration-300 flex items-center justify-center gap-2"
                >
                  Start Free Trial <ArrowRight size={18} />
                </Link>
                <Link
                  to="/Login"
                  className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-semibold rounded-xl transition duration-300 flex items-center justify-center"
                >
                  Member Login
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">15K+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Athletes</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-cyan-400">98%</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Success Rate</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-purple-400">50+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Expert Coaches</p>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 p-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
                  alt="Cyber Athlete"
                  className="w-full h-[450px] object-cover rounded-xl"
                />
                
                {/* Floating Widget */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-4 rounded-xl flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">AI Muscle Tracker Active</p>
                    <p className="text-xs text-slate-400">Optimizing hypertrophy sets in real-time...</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRAINING PROGRAMS SECTION */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2">Training Systems</h2>
            <p className="text-3xl sm:text-4xl font-extrabold uppercase">Engineered For Explosive Results</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => {
              const Icon = program.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl group-hover:scale-110 transition duration-300">
                        <Icon size={28} />
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                        {program.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{program.desc}</p>
                  </div>

                  <Link to="/Signup" className="inline-flex items-center text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 gap-1">
                    Explore Protocol <ChevronRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* E-COMMERCE SUPPLEMENT STORE SECTION */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2">Official Gear & Fuel</h2>
              <p className="text-3xl font-extrabold uppercase">Cyber Store Essentials</p>
            </div>
            <button className="mt-4 md:mt-0 text-sm font-semibold text-slate-400 hover:text-white flex items-center gap-1">
              View All Products <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-2">
                      <Star size={14} fill="currentColor" />
                      <span>{item.rating}</span>
                    </div>
                    <h4 className="font-bold text-white mb-2 line-clamp-1">{item.name}</h4>
                    <p className="text-xl font-black text-cyan-400">{item.price}</p>
                  </div>
                </div>
                
                <div className="px-5 pb-5">
                  <button className="w-full py-2.5 bg-slate-800 hover:bg-cyan-500 hover:text-black text-white text-xs font-bold uppercase rounded-lg transition duration-300 flex items-center justify-center gap-2">
                    <ShoppingBag size={14} /> Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE BMI CALCULATOR SECTION */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-slate-900/80 border border-slate-800 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase mb-4">
                  <Calculator size={14} /> Metric Analysis
                </div>
                <h3 className="text-3xl font-extrabold uppercase mb-4">Calculate Your Body Mass Index</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Quickly gauge your physical baseline with our instant calculation module. Use these insights to choose the ideal training track.
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
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Weight (kg)</label>
                      <input 
                        type="number" 
                        value={weight} 
                        onChange={(e) => setWeight(e.target.value)} 
                        placeholder="e.g. 70"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase text-xs rounded-lg transition duration-300"
                  >
                    Calculate BMI
                  </button>
                </form>
              </div>

              {/* BMI Result Display */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[260px]">
                {bmiResult ? (
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Your Result</p>
                    <p className="text-6xl font-black text-cyan-400">{bmiResult.bmi}</p>
                    <div className="inline-block px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-xs font-bold text-white">
                      Status: <span className="text-cyan-400">{bmiResult.category}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-slate-500 space-y-2">
                    <Calculator size={48} className="mx-auto opacity-40 mb-2" />
                    <p className="text-sm">Enter your metrics to reveal your status.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PRICING SECTION */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2">Membership Plans</h2>
            <p className="text-3xl sm:text-4xl font-extrabold uppercase mb-6">Ready To Level Up?</p>
            
            {/* Toggle Monthly / Annual */}
            <div className="inline-flex items-center bg-slate-900 p-1.5 rounded-full border border-slate-800">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition ${!isAnnual ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition ${isAnnual ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'}`}
              >
                Annual <span className="text-[10px] opacity-80">(Save 20%)</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Starter Plan */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold uppercase mb-2">Starter Tier</h3>
                <p className="text-slate-400 text-xs mb-6">Essential gym access & workout logs.</p>
                <div className="mb-6">
                  <span className="text-4xl font-black">{isAnnual ? '$29' : '$35'}</span>
                  <span className="text-slate-400 text-xs">/month</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2"><Check size={16} className="text-cyan-400" /> Full Gym Floor Access</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-cyan-400" /> Basic Locker Room</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-cyan-400" /> App Workout Logging</li>
                </ul>
              </div>
              <Link to="/Signup" className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-center text-xs font-bold uppercase rounded-xl transition">
                Choose Starter
              </Link>
            </div>

            {/* Pro Plan (Highlighted) */}
            <div className="relative bg-slate-900 border-2 border-cyan-500 rounded-2xl p-8 flex flex-col justify-between shadow-2xl shadow-cyan-500/10">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </span>
              <div>
                <h3 className="text-lg font-bold uppercase mb-2 text-cyan-400">Pro Beast Tier</h3>
                <p className="text-slate-400 text-xs mb-6">For dedicated athletes seeking max results.</p>
                <div className="mb-6">
                  <span className="text-4xl font-black">{isAnnual ? '$59' : '$69'}</span>
                  <span className="text-slate-400 text-xs">/month</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2"><Check size={16} className="text-cyan-400" /> Everything in Starter</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-cyan-400" /> All HIIT & Combat Classes</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-cyan-400" /> Sauna & Recovery Lounge</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-cyan-400" /> 10% Off Store Products</li>
                </ul>
              </div>
              <Link to="/Signup" className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-center text-xs font-bold uppercase rounded-xl transition">
                Join Pro Beast
              </Link>
            </div>

            {/* VIP Plan */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold uppercase mb-2">Elite VIP Tier</h3>
                <p className="text-slate-400 text-xs mb-6">Complete 1-on-1 coaching & elite access.</p>
                <div className="mb-6">
                  <span className="text-4xl font-black">{isAnnual ? '$119' : '$139'}</span>
                  <span className="text-slate-400 text-xs">/month</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2"><Check size={16} className="text-cyan-400" /> Everything in Pro</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-cyan-400" /> Dedicated Personal Trainer</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-cyan-400" /> Customized Nutrition Plan</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-cyan-400" /> 20% Off Store Products</li>
                </ul>
              </div>
              <Link to="/Signup" className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-center text-xs font-bold uppercase rounded-xl transition">
                Get VIP Access
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}