import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dumbbell,
  Mail,
  Lock,
  User,
  Phone,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [memberRole, setMemberRole] = useState("gym_member"); // 'gym_member' or 'supplement_buyer'
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // 🔑 HARDCODED ADMIN CREDENTIALS
  const ADMIN_EMAIL = "admin@gymx.com";
  const ADMIN_PASSWORD = "admin123";

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    setTimeout(() => {
      setIsLoading(false);

      const enteredEmail = formData.email.trim().toLowerCase();
      const enteredPassword = formData.password;

      if (isLogin) {
        // 1. HARDCODED ADMIN LOGIN CHECK
        if (enteredEmail === ADMIN_EMAIL && enteredPassword === ADMIN_PASSWORD) {
          localStorage.setItem("userRole", "admin");
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userEmail", enteredEmail);
          localStorage.setItem("userName", "Admin"); // 👈 Admin Name saved

          // Event trigger taaki Navbar turant update ho sake
          window.dispatchEvent(new Event("storage"));

          navigate("/admin");
          return;
        }

        // 2. NORMAL USER LOGIN CHECK
        // Extracting name from email before '@' if name is not provided in form
        const displayName = formData.name.trim() || enteredEmail.split("@")[0];

        localStorage.setItem("userRole", "user");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", enteredEmail);
        localStorage.setItem("userName", displayName); // 👈 User Name saved

        // Event trigger
        window.dispatchEvent(new Event("storage"));

        navigate("/");
      } else {
        // REGISTER FLOW
        const displayName = formData.name.trim() || "Athlete";

        localStorage.setItem("userRole", "user");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", enteredEmail);
        localStorage.setItem("userName", displayName); // 👈 Form Name saved
        localStorage.setItem("memberRole", memberRole);

        // Event trigger
        window.dispatchEvent(new Event("storage"));

        navigate("/");
      }
    }, 1000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-16 px-4 font-sans selection:bg-cyan-500 selection:text-black flex items-center justify-center relative overflow-hidden">
      {/* Glow Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-2xl font-black text-white uppercase tracking-wider mb-2"
          >
            <div className="p-2 bg-cyan-500 text-black rounded-xl shadow-lg shadow-cyan-500/20">
              <Dumbbell className="w-6 h-6" />
            </div>
            <span>
              GYM<span className="text-cyan-400">X</span> STORE
            </span>
          </Link>
          <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">
            {isLogin ? "Welcome Back, Athlete" : "Start Your Fitness Journey"}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Mode Switcher Tabs */}
          <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800 mb-6">
            <button
              type="button"
              onClick={() => {
                setIsLogin(true);
                setErrorMsg("");
              }}
              className={`flex-1 py-2.5 text-xs font-bold uppercase rounded-xl transition-all duration-300 ${
                isLogin
                  ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setIsLogin(false);
                setErrorMsg("");
              }}
              className={`flex-1 py-2.5 text-xs font-bold uppercase rounded-xl transition-all duration-300 ${
                !isLogin
                  ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Register
            </button>
          </div>

          {/* ERROR ALERT */}
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-bold text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* NAME FIELD (Only for Register) */}
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Mercer"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            )}

            {/* EMAIL FIELD */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="athlete@gymx.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* PHONE FIELD (Only for Register) */}
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            )}

            {/* ROLE SELECTOR (Only for Register) */}
            {!isLogin && (
              <div className="pt-1">
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
                  Primary Fitness Goal
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMemberRole("gym_member")}
                    className={`p-2.5 rounded-xl border text-[11px] font-bold text-center transition ${
                      memberRole === "gym_member"
                        ? "bg-cyan-500/10 border-cyan-500 text-cyan-400"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    Gym Floor Access
                  </button>
                  <button
                    type="button"
                    onClick={() => setMemberRole("supplement_buyer")}
                    className={`p-2.5 rounded-xl border text-[11px] font-bold text-center transition ${
                      memberRole === "supplement_buyer"
                        ? "bg-cyan-500/10 border-cyan-500 text-cyan-400"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    Supplements Store
                  </button>
                </div>
              </div>
            )}

            {/* PASSWORD FIELD */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-bold uppercase text-slate-400">
                  Password
                </label>
                {isLogin && (
                  <a
                    href="#forgot"
                    className="text-[11px] font-bold text-cyan-400 hover:underline"
                  >
                    Forgot Password?
                  </a>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-11 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 mt-2 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-xs rounded-xl transition duration-300 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>
                    {isLogin ? "Sign In To Account" : "Create My Account"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* QUICK SOCIAL LOGIN */}
          <div className="mt-6 pt-6 border-t border-slate-800 text-center space-y-4">
            <p className="text-[11px] font-mono uppercase text-slate-500">
              Or continue with
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="py-2.5 px-4 bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl text-xs font-bold text-slate-300 flex items-center justify-center gap-2 transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                Google
              </button>

              <button
                type="button"
                className="py-2.5 px-4 bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl text-xs font-bold text-slate-300 flex items-center justify-center gap-2 transition"
              >
                <Zap className="w-4 h-4 text-amber-400" /> OTP Login
              </button>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-[10px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>256-Bit Encrypted Gym Pass Auth System</span>
          </div>
        </div>
      </div>
    </div>
  );
}