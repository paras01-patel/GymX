import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dumbbell,
  Send,
  Youtube,
  Twitter,
  Disc as Discord,
  MapPin,
  Phone,
  Mail,
  Zap,
  CheckCircle2,
} from "lucide-react";

const InstagramIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800/80 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Banner */}
      <div className="border-b border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-amber-500 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-4 h-4 fill-amber-500" /> VIP Cyber-Squad Access
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              GET 15% OFF YOUR FIRST ORDER & PASS
            </h3>
            <p className="text-zinc-400 text-sm mt-1">
              Join the elite squad for secret deals, supplement drops, and workout guides.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-5 py-3 rounded-2xl font-bold text-sm animate-in fade-in">
                <CheckCircle2 className="w-5 h-5" /> Code: GYMX15 Activated! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-black font-black px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                  JOIN <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Dumbbell className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <span className="text-3xl font-black text-white font-mono tracking-wider">
                GYM<span className="text-amber-500">X</span>
              </span>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              The ultimate high-performance cyber ecosystem combining state-of-the-art training facilities, customized membership tiers, and elite nutrition.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-3 py-1 text-xs font-mono text-zinc-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                SYSTEMS ONLINE • HQ LOCATION OPEN
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: InstagramIcon, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Discord, href: "#", label: "Discord" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  title={social.label}
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-bold mb-4 font-mono text-sm tracking-wider uppercase border-l-2 border-amber-500 pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home Page</Link></li>
              <li><Link to="/Login" className="hover:text-amber-400 transition-colors">Member Login</Link></li>
              <li><Link to="/Signup" className="hover:text-amber-400 transition-colors">Join Membership</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 font-mono text-sm tracking-wider uppercase border-l-2 border-cyan-500 pl-2">
              Membership
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/Signup" className="hover:text-cyan-400 transition-colors">Starter Pass</Link></li>
              <li><Link to="/Signup" className="hover:text-cyan-400 transition-colors">Pro Hypertrophy</Link></li>
              <li><Link to="/Signup" className="hover:text-cyan-400 transition-colors">Elite VIP</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 font-mono text-sm tracking-wider uppercase border-l-2 border-amber-500 pl-2">
              Account
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/Login" className="hover:text-amber-400 transition-colors">My Profile</Link></li>
              <li><Link to="/Login" className="hover:text-amber-400 transition-colors">My Subscriptions</Link></li>
              <li><Link to="/Login" className="hover:text-amber-400 transition-colors">Order History</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-b border-zinc-900 my-12 py-6 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Cyber-Hub Sector 4, Fitness Avenue, NY 10001</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>+1 (800) 999-GYMX / Support 24/7</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>support@gymx-cyber.com</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 <span className="text-white font-bold">GymX Inc</span>. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;