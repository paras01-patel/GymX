import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Flame, 
  ShieldCheck, 
  PackageCheck 
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Example cart items counter

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* BRAND LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition duration-300">
              <Dumbbell className="w-6 h-6 transform -rotate-45" />
            </div>
            <span className="text-2xl font-black text-white tracking-wider">
              GYM<span className="text-cyan-400">X</span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-bold text-slate-300 hover:text-cyan-400 transition">
              Home
            </Link>

            {/* UNIFIED STORE & SERVICES DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setIsStoreOpen(true)}
              onMouseLeave={() => setIsStoreOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-bold text-slate-300 hover:text-cyan-400 transition py-2">
                Store & Plans <ChevronDown size={14} className={`transition duration-300 ${isStoreOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {/* DROPDOWN MENU */}
              {isStoreOpen && (
                <div className="absolute top-full -left-10 w-80 bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-2xl shadow-black/80 animate-in fade-in duration-200">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                    All-In-One Cyber Hub
                  </div>

                  <div className="space-y-1 mt-1">
                    <Link 
                      to="/Signup" 
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition text-slate-200 hover:text-cyan-400"
                    >
                      <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg">
                        <Zap size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold">Gym Memberships</p>
                        <p className="text-[10px] text-slate-400">Starter, Pro Beast & VIP Passes</p>
                      </div>
                    </Link>

                    <Link 
                      to="/" 
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition text-slate-200 hover:text-amber-400"
                    >
                      <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
                        <PackageCheck size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold">Supplements & Protein</p>
                        <p className="text-[10px] text-slate-400">Whey Isolate, Pre-Workout, BCAA</p>
                      </div>
                    </Link>

                    <Link 
                      to="/" 
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition text-slate-200 hover:text-purple-400"
                    >
                      <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold">Pro Gym Gear</p>
                        <p className="text-[10px] text-slate-400">Belts, Lifting Straps, Accessories</p>
                      </div>
                    </Link>

                    <Link 
                      to="/" 
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition text-slate-200 hover:text-emerald-400"
                    >
                      <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                        <Flame size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold">Training Programs</p>
                        <p className="text-[10px] text-slate-400">Hypertrophy, HIIT & Boxing Guides</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/Signup" className="text-sm font-bold text-slate-300 hover:text-cyan-400 transition">
              Memberships
            </Link>
          </div>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            {/* Cart Icon with Counter */}
            <button className="relative p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition">
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-black text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-slate-950">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Login / Sign Up */}
            <Link
              to="/Login"
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white transition flex items-center gap-1.5"
            >
              <User size={16} /> Login
            </Link>

            <Link
              to="/Signup"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black text-xs font-black uppercase transition shadow-lg shadow-cyan-500/10"
            >
              Join Now
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden flex items-center gap-3">
            <button className="relative p-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg">
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyan-500 text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold text-slate-300 hover:bg-slate-900"
          >
            Home
          </Link>
          <Link 
            to="/Signup" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold text-cyan-400 hover:bg-slate-900"
          >
            ⚡ Memberships Pass
          </Link>
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold text-amber-400 hover:bg-slate-900"
          >
            📦 Supplements & Gear Store
          </Link>
          <div className="pt-2 border-t border-slate-800 flex gap-2">
            <Link
              to="/Login"
              onClick={() => setIsOpen(false)}
              className="flex-1 py-2.5 text-center bg-slate-900 text-xs font-bold text-slate-200 rounded-xl border border-slate-800"
            >
              Login
            </Link>
            <Link
              to="/Signup"
              onClick={() => setIsOpen(false)}
              className="flex-1 py-2.5 text-center bg-cyan-500 text-xs font-bold text-black rounded-xl"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}