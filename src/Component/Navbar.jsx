import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Dumbbell, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  PackageCheck,
  ShieldCheck,
  BookOpen,
  LogOut,
  LayoutDashboard
} from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();
  const location = useLocation();

  // Route चेंज होने पर मोबाइल ड्रॉर बंद कर दें
  useEffect(() => {
    setIsOpen(false);
    setIsStoreOpen(false);
  }, [location.pathname]);

  // localStorage से User डाटा निकालें और सिंक रखें
  useEffect(() => {
    const checkUser = () => {
      const savedUserData = localStorage.getItem("user");
      if (savedUserData) {
        try {
          const parsedUser = JSON.parse(savedUserData);
          setUser(parsedUser);
        } catch (error) {
          setUser({ name: savedUserData });
        }
      } else {
        setUser(null);
      }
    };

    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setIsOpen(false);
    navigate("/login");
  };

  // User का नाम निकालने के लिए helper
  const getUserDisplayName = () => {
    if (!user) return "Profile";
    if (typeof user === "string") return user;
    return user.name || user.username || user.fullName || user.email?.split('@')[0] || "Profile";
  };

  // Check if User is Admin
  const isAdmin = user && (user.role === 'admin' || user.isAdmin === true || user.email?.includes('admin'));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 font-sans h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* BRAND LOGO */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition duration-300">
              <Dumbbell className="w-6 h-6 transform -rotate-45" />
            </div>
            <span className="text-2xl font-black text-white tracking-wider">
              GYM<span className="text-cyan-400">X</span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link 
              to="/" 
              className={`text-sm font-bold transition ${location.pathname === '/' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}
            >
              Home
            </Link>

            <Link 
              to="/Store" 
              className={`text-sm font-bold transition ${location.pathname === '/Store' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}
            >
              Store
            </Link>

            <Link 
              to="/membership" 
              className={`text-sm font-bold transition ${location.pathname === '/membership' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}
            >
              Memberships
            </Link>

            {/* UNIFIED STORE & SERVICES DROPDOWN */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setIsStoreOpen(true)}
              onMouseLeave={() => setIsStoreOpen(false)}
            >
              <button 
                onClick={() => setIsStoreOpen(!isStoreOpen)}
                className="flex items-center gap-1.5 text-sm font-bold text-slate-300 hover:text-cyan-400 transition"
              >
                More Features <ChevronDown size={14} className={`transition duration-300 ${isStoreOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {/* DROPDOWN MENU */}
              {isStoreOpen && (
                <div className="absolute top-full -left-6 w-80 bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-2xl shadow-black/80 animate-in fade-in duration-200 mt-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                    Beast Hub Services
                  </div>

                  <div className="space-y-1 mt-1">
                    <Link 
                      to="/membership" 
                      onClick={() => setIsStoreOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/80 transition text-slate-200 hover:text-cyan-400"
                    >
                      <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg">
                        <Zap size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold">Gym Memberships</p>
                        <p className="text-[10px] text-slate-400">1, 3, 6 & 12 Month Plans</p>
                      </div>
                    </Link>

                    <Link 
                      to="/Store" 
                      onClick={() => setIsStoreOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/80 transition text-slate-200 hover:text-amber-400"
                    >
                      <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
                        <PackageCheck size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold">Supplements Store</p>
                        <p className="text-[10px] text-slate-400">Whey, Creatine, Pre-Workout</p>
                      </div>
                    </Link>

                    <Link 
                      to="/book-trainer" 
                      onClick={() => setIsStoreOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/80 transition text-slate-200 hover:text-purple-400"
                    >
                      <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold">Personal Trainers</p>
                        <p className="text-[10px] text-slate-400">Book 1-on-1 Fitness Sessions</p>
                      </div>
                    </Link>

                    <Link 
                      to="/blog" 
                      onClick={() => setIsStoreOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/80 transition text-slate-200 hover:text-emerald-400"
                    >
                      <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                        <BookOpen size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold">Fitness Guides & Blogs</p>
                        <p className="text-[10px] text-slate-400">Diet, Macros & Workout Tips</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={`text-sm font-bold transition ${location.pathname === '/contact' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}
            >
              Contact
            </Link>
          </div>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {isAdmin && (
              <Link
                to="/admin/add-supplement"
                className="px-3 py-2 rounded-xl text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition flex items-center gap-1.5"
              >
                <LayoutDashboard size={15} /> Admin
              </Link>
            )}

            {/* Cart Icon */}
            <button 
              onClick={() => navigate("/Cart")}
              className="relative p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition cursor-pointer"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-black text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-slate-950">
                  {cartCount}
                </span>
              )}
            </button>

            {/* USER PROFILE / LOGIN */}
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/profile"
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition flex items-center gap-1.5"
                >
                  <User size={16} /> 
                  <span className="max-w-[110px] truncate">{getUserDisplayName()}</span>
                </Link>

                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-2 rounded-xl text-red-400 bg-red-500/10 border border-red-500/30 hover:bg-red-500 hover:text-white transition flex items-center justify-center"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded-xl text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition duration-300 flex items-center gap-1.5"
              >
                <User size={16} /> Login
              </Link>
            )}

            <Link
              to="/membership"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black text-xs font-black uppercase transition shadow-lg shadow-cyan-500/10"
            >
              Join Now
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden flex items-center gap-2.5">
            <button 
              onClick={() => navigate("/Cart")}
              className="relative p-2.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyan-500 text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 py-5 space-y-2">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-300 hover:bg-slate-900"
          >
            Home
          </Link>
          <Link 
            to="/membership" 
            onClick={() => setIsOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-cyan-400 hover:bg-slate-900"
          >
            ⚡ Gym Membership Plans
          </Link>
          <Link 
            to="/Store" 
            onClick={() => setIsOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-amber-400 hover:bg-slate-900"
          >
            📦 Supplements & Gear Store
          </Link>
          <Link 
            to="/book-trainer" 
            onClick={() => setIsOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-purple-400 hover:bg-slate-900"
          >
            🏋️ Book Personal Trainer
          </Link>
          <Link 
            to="/blog" 
            onClick={() => setIsOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-emerald-400 hover:bg-slate-900"
          >
            📖 Fitness Guides & Blog
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-300 hover:bg-slate-900"
          >
            📞 Contact Support
          </Link>

          {isAdmin && (
            <Link 
              to="/admin/add-supplement" 
              onClick={() => setIsOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-amber-400 hover:bg-slate-900 bg-amber-500/10 border border-amber-500/20"
            >
              👑 Admin Dashboard / Add Product
            </Link>
          )}

          <div className="pt-3 border-t border-slate-800 flex gap-2">
            {user ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 text-center bg-cyan-500/10 text-xs font-bold text-cyan-400 rounded-xl border border-cyan-500/30 flex items-center justify-center gap-1.5 truncate"
                >
                  <User size={15} /> {getUserDisplayName()}
                </Link>
                <button
                  onClick={handleLogout}
                  className="py-3 px-4 bg-red-500/10 text-xs font-bold text-red-400 rounded-xl border border-red-500/30 flex items-center gap-1"
                >
                  <LogOut size={15} /> Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 text-center bg-cyan-500/10 text-xs font-bold text-cyan-400 rounded-xl border border-cyan-500/30"
                >
                  Login
                </Link>
                <Link
                  to="/membership"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 text-center bg-cyan-500 text-xs font-bold text-black rounded-xl"
                >
                  Join Now
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}