import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  QrCode,
  Package,
  Activity,
  Award,
  Calendar,
  Clock,
  ChevronRight,
  Dumbbell,
  CheckCircle2,
  Truck,
  Flame,
  ShieldCheck,
  LogOut,
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('pass'); // 'pass' | 'orders' | 'fitness'

  // Mock User Data
  const user = {
    name: 'Alex Mercer',
    memberId: 'GX-88492',
    tier: 'PRO BEAST MEMBER',
    validUntil: '24 Oct 2026',
    daysRemaining: 27,
    streak: 12,
  };

  // Mock Active Orders
  const activeOrder = {
    id: 'GX-98421',
    date: '25 Sep 2026',
    status: 'In Transit',
    items: [
      { name: 'NitroTech Whey Gold (2kg)', flavor: 'Double Rich Chocolate', qty: 1 },
      { name: 'Micronized Creatine (250g)', flavor: 'Unflavored', qty: 1 },
    ],
    trackingStep: 3, // 1: Placed, 2: Packed, 3: In Transit, 4: Delivered
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* User Greeting Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-5 z-10">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-black font-black text-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              AM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-white">{user.name}</h1>
                <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {user.tier}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Member ID: <span className="font-mono text-slate-200">{user.memberId}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto z-10">
            <div className="bg-slate-950 border border-slate-800 px-4 py-2.5 rounded-2xl flex items-center gap-3 flex-1 md:flex-none">
              <Flame className="w-5 h-5 text-amber-500" />
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Workout Streak</p>
                <p className="text-sm font-black text-white">{user.streak} Days 🔥</p>
              </div>
            </div>

            <Link
              to="/login"
              className="p-3 bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-red-400 rounded-2xl border border-slate-800 transition"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-3 mb-8 border-b border-slate-800/80 pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('pass')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'pass'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <QrCode className="w-4 h-4" /> Gym Digital Pass
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'orders'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Package className="w-4 h-4" /> Orders & Tracking
          </button>

          <button
            onClick={() => setActiveTab('fitness')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'fitness'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Activity className="w-4 h-4" /> Daily Tracker
          </button>
        </div>

        {/* TAB 1: DIGITAL GYM PASS */}
        {activeTab === 'pass' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Digital Pass Card */}
            <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-1">
                    <Dumbbell className="w-4 h-4" /> GYMX ATHLETE PASS
                  </div>
                  <h2 className="text-xl font-black text-white">{user.tier}</h2>
                </div>
                <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  ACTIVE
                </span>
              </div>

              {/* QR Code Placeholder */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
                <div className="bg-white p-3 rounded-xl shadow-lg">
                  {/* Visual QR pattern mockup */}
                  <div className="w-28 h-28 bg-slate-950 rounded flex items-center justify-center p-2">
                    <QrCode className="w-full h-full text-white" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-2">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                    Entry Scanner Code
                  </span>
                  <p className="text-2xl font-mono font-black text-cyan-400 tracking-wider">
                    {user.memberId}
                  </p>
                  <p className="text-xs text-slate-400">
                    Scan this code at the turnstile gate for gym floor access.
                  </p>
                </div>
              </div>

              {/* Pass Validity Footer */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 uppercase font-bold text-[10px]">Valid Until</span>
                  <p className="font-bold text-white mt-0.5">{user.validUntil}</p>
                </div>
                <div>
                  <span className="text-slate-500 uppercase font-bold text-[10px]">Days Remaining</span>
                  <p className="font-bold text-cyan-400 mt-0.5">{user.daysRemaining} Days Left</p>
                </div>
              </div>
            </div>

            {/* Pass Benefits */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                <h3 className="text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Tier Perks Included
                </h3>

                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>24/7 Access to Gym Floor & Cardio Zone</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>15% Flat Discount on Supplement Store</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Monthly InBody Bio-Scan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Locker Room & Steam Bath Access</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: ACTIVE ORDERS & TRACKING */}
        {activeTab === 'orders' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs text-slate-400 font-mono">ORDER ID: #{activeOrder.id}</span>
                <h3 className="text-lg font-bold text-white mt-0.5">Active Supplement Order</h3>
              </div>
              <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase">
                {activeOrder.status}
              </span>
            </div>

            {/* Tracking Progress Bar */}
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase text-slate-400">Live Delivery Tracking</p>
              
              <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                <div className={`p-2 rounded-xl border ${activeOrder.trackingStep >= 1 ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
                  1. Placed
                </div>
                <div className={`p-2 rounded-xl border ${activeOrder.trackingStep >= 2 ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
                  2. Packed
                </div>
                <div className={`p-2 rounded-xl border ${activeOrder.trackingStep >= 3 ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
                  3. In Transit
                </div>
                <div className={`p-2 rounded-xl border ${activeOrder.trackingStep >= 4 ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
                  4. Delivered
                </div>
              </div>
            </div>

            {/* Items Summary */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold uppercase text-slate-400">Items in Shipment</p>
              {activeOrder.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-xs">
                  <div>
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-[10px] text-slate-400">{item.flavor}</p>
                  </div>
                  <span className="font-bold text-slate-300">Qty: {item.qty}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: DAILY FITNESS TRACKER */}
        {activeTab === 'fitness' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-2">
              <span className="text-xs text-slate-400 font-bold uppercase">Daily Protein Target</span>
              <p className="text-3xl font-black text-cyan-400">140g <span className="text-xs font-normal text-slate-400">/ 160g</span></p>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden mt-3">
                <div className="bg-cyan-500 h-full w-[87%]" />
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-2">
              <span className="text-xs text-slate-400 font-bold uppercase">Water Hydration</span>
              <p className="text-3xl font-black text-cyan-400">2.8L <span className="text-xs font-normal text-slate-400">/ 4.0L</span></p>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden mt-3">
                <div className="bg-cyan-500 h-full w-[70%]" />
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-2">
              <span className="text-xs text-slate-400 font-bold uppercase">Calories Burned</span>
              <p className="text-3xl font-black text-amber-400">620 kcal</p>
              <p className="text-[11px] text-emerald-400 font-bold">↑ 12% higher than yesterday</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}