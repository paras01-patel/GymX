import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, ShoppingBag, Search, Zap, Dumbbell, 
  Flame, Sparkles, ChevronDown, ShieldCheck, ShoppingCart 
} from "lucide-react";

const Navbar = ({ cartCount = 0, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPumpMode, setIsPumpMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const playPumpSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(120, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.3);
      
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
      console.log("Audio not supported or blocked");
    }
  };

  const togglePumpMode = () => {
    playPumpSound();
    setIsPumpMode(!isPumpMode);
  };

  return (
    <>
      {/* Dynamic Top Announcement Ticker */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-400 text-xs py-1.5 px-4 border-b border-zinc-800/80 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-mono">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-300">LIVE GYM METRICS:</span>
            <span className="text-emerald-400 font-bold">84% Capacity</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">142 Cyber-Beasts Active Right Now</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1 hover:text-white cursor-pointer transition">
              <Flame className="w-3.5 h-3.5 text-amber-500" /> Daily Burn Challenge
            </span>
            <span>•</span>
            <Link to="/Signup" className="text-amber-400 hover:underline">
              Get 20% Off Annual Pass →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism HUD Navbar */}
      <nav
        className={`fixed top-0 sm:top-7 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-950/85 backdrop-blur-2xl border-b border-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3"
            : "bg-zinc-950/40 backdrop-blur-md border-b border-zinc-800/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group relative">
            <div className={`p-2 rounded-xl transition-all duration-500 ${
              isPumpMode 
                ? "bg-amber-500/20 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.5)] border border-amber-500/40" 
                : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
            }`}>
              <Dumbbell className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black tracking-wider text-white font-mono leading-none">
                GYM<span className={`transition-colors duration-500 ${isPumpMode ? "text-amber-500" : "text-cyan-400"}`}>X</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] text-zinc-500 font-bold uppercase">
                Cyber Fitness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-2xl border border-zinc-800/80 backdrop-blur-md">
            
            {/* Home */}
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition ${
                location.pathname === "/" 
                  ? "text-amber-400 bg-zinc-800/90" 
                  : "text-zinc-300 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              Home
            </Link>

            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("programs")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-xl transition">
                Programs <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === "programs" && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-zinc-900/95 border border-zinc-800 rounded-2xl p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link to="/" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-800/80 transition group">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Hypertrophy Lab</div>
                      <p className="text-xs text-zinc-400">Pure muscle science & heavy iron</p>
                    </div>
                  </Link>
                  
                  <Link to="/" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-800/80 transition group">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">HIIT & Conditioning</div>
                      <p className="text-xs text-zinc-400">High-octane calorie destruction</p>
                    </div>
                  </Link>

                  <Link to="/" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-800/80 transition group">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">VIP 1-on-1 Coaching</div>
                      <p className="text-xs text-zinc-400">Custom diet + personal trainer</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Login Link */}
            <Link
              to="/Login"
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition ${
                location.pathname === "/Login" 
                  ? "text-amber-400 bg-zinc-800/90" 
                  : "text-zinc-300 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              Login
            </Link>

            {/* Signup Link */}
            <Link
              to="/Signup"
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition ${
                location.pathname === "/Signup" 
                  ? "text-amber-400 bg-zinc-800/90" 
                  : "text-zinc-300 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              Signup
            </Link>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition"
              title="Cart"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-zinc-950 animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Pump Mode Button */}
            <button
              onClick={togglePumpMode}
              className={`hidden md:flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider border transition-all duration-300 ${
                isPumpMode
                  ? "bg-amber-500/20 text-amber-400 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700"
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${isPumpMode ? "animate-spin text-amber-400" : ""}`} />
              {isPumpMode ? "PUMP: ON 🔥" : "PUMP MODE"}
            </button>

            {/* Join CTA */}
            <Link
              to="/Signup"
              className={`relative group overflow-hidden px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all duration-300 ${
                isPumpMode
                  ? "bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-[0_0_25px_rgba(245,158,11,0.6)]"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              }`}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                JOIN NOW <Zap className="w-4 h-4 fill-current" />
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 px-6 py-6 space-y-4 backdrop-blur-3xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-3 font-semibold text-lg text-zinc-300">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-amber-400 transition py-2 border-b border-zinc-900"
              >
                Home
              </Link>
              <Link
                to="/Login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-amber-400 transition py-2 border-b border-zinc-900"
              >
                Login
              </Link>
              <Link
                to="/Signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-amber-400 transition py-2 border-b border-zinc-900 flex justify-between items-center"
              >
                Signup / Join <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">20% OFF</span>
              </Link>
            </div>

            <div className="pt-2">
              <button
                onClick={togglePumpMode}
                className="w-full py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-amber-400 font-bold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                TOGGLE PUMP MODE ({isPumpMode ? "ACTIVE 🔥" : "OFF"})
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4">
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-xl rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
              <Search className="w-5 h-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search programs, whey protein, gym passes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent w-full text-white focus:outline-none text-base placeholder:text-zinc-600"
                autoFocus
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-400 px-2 py-1 rounded"
              >
                ESC
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;