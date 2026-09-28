import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  QrCode,
  Flame,
  ArrowRight,
  Dumbbell,
  HeartPulse,
  Award,
} from "lucide-react";

export default function Membership() {
  const [hasCardio, setHasCardio] = useState(false); // false = Strength Only, true = With Cardio
  const navigate = useNavigate();

  // Custom Pricing Matrix as requested
  const plans = [
    {
      id: "1-month",
      duration: "1 Month",
      badge: "Flexible Starter",
      strengthPrice: 800,
      cardioPrice: 1000,
      popular: false,
      features: [
        "Gym Floor & Free Weights Access",
        "Digital Entrance QR Pass",
        "Locker & Shower Access",
        "Trainer Guidance on Floor",
      ],
    },
    {
      id: "3-months",
      duration: "3 Months",
      badge: "Quarterly Transformation",
      strengthPrice: 1800,
      cardioPrice: 2400,
      popular: true,
      features: [
        "Gym Floor & Heavy Dumbbells",
        "Digital Membership QR Pass",
        "Locker & Shower Access",
        "Free Diet Chart Consultation",
        "Free Body Composition Test",
      ],
    },
    {
      id: "6-months",
      duration: "6 Months",
      badge: "Half Year Beast",
      strengthPrice: 3200,
      cardioPrice: 4200,
      popular: false,
      features: [
        "Full Gym Equipment Access",
        "Priority Locker Facility",
        "Monthly Progress Tracking",
        "1 Free Personal Trainer Session",
        "5% Flat Discount on Supplement Store",
      ],
    },
    {
      id: "1-year",
      duration: "1 Year",
      badge: "Best Value Pass",
      strengthPrice: 6000,
      cardioPrice: 7800,
      popular: false,
      features: [
        "Unlimited All-Day Access",
        "VIP Locker & Shower Access",
        "Personalized Workout & Diet Plan",
        "2 Free PT Sessions / Month",
        "10% Flat Discount on Supplement Store",
        "Free Guest Pass (1 / Month)",
      ],
    },
  ];

  const handleSelectPlan = (plan) => {
    const finalPrice = hasCardio ? plan.cardioPrice : plan.strengthPrice;
    const planType = hasCardio ? "Strength + Cardio" : "Strength Only";

    navigate("/Checkout", {
      state: {
        planName: `${plan.duration} Gym Membership (${planType})`,
        price: finalPrice,
      },
    });
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            <Zap className="w-4 h-4" /> Official Gym Plans
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Select Your Gym Membership
          </h1>
          <p className="text-sm text-slate-400">
            Choose your duration and toggle Cardio access as per your fitness goal.
          </p>

          {/* Cardio Toggle Switch */}
          <div className="pt-6 flex justify-center">
            <div className="bg-slate-900 border border-slate-800 p-2 rounded-2xl inline-flex items-center gap-3 shadow-xl">
              <button
                onClick={() => setHasCardio(false)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase transition flex items-center gap-2 ${
                  !hasCardio
                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Dumbbell className="w-4 h-4" /> Strength Only
              </button>

              <button
                onClick={() => setHasCardio(true)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase transition flex items-center gap-2 ${
                  hasCardio
                    ? "bg-gradient-to-r from-red-500 to-amber-500 text-black shadow-lg shadow-red-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <HeartPulse className="w-4 h-4" /> With Cardio
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {plans.map((plan) => {
            const currentPrice = hasCardio ? plan.cardioPrice : plan.strengthPrice;

            return (
              <div
                key={plan.id}
                className={`bg-slate-900 border ${
                  plan.popular
                    ? "border-cyan-500 ring-2 ring-cyan-500/30"
                    : "border-slate-800"
                } rounded-3xl p-6 flex flex-col justify-between relative shadow-2xl transition duration-300 hover:border-slate-700`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="space-y-5">
                  {/* Title & Badge */}
                  <div>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                      {plan.badge}
                    </span>
                    <h2 className="text-2xl font-black text-white uppercase mt-1">
                      {plan.duration}
                    </h2>

                    {/* Price Display */}
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl font-black text-white">₹{currentPrice}</span>
                      <span className="text-xs text-slate-400 font-bold">/ Total</span>
                    </div>

                    <p className="text-[11px] font-bold mt-1 text-slate-400">
                      Access:{" "}
                      <span className={hasCardio ? "text-amber-400" : "text-cyan-400"}>
                        {hasCardio ? "Strength + Cardio" : "Strength Only"}
                      </span>
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 border-t border-slate-800 pt-5">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      Plan Includes:
                    </p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                    {hasCardio && (
                      <div className="flex items-start gap-2 text-xs text-amber-400 font-bold">
                        <HeartPulse className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Treadmill, Elliptical & Rowing Machine Access</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Join Button */}
                <div className="pt-6">
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3 rounded-xl font-black uppercase text-xs transition flex items-center justify-center gap-2 shadow-lg ${
                      plan.popular
                        ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-cyan-500/20"
                        : "bg-slate-950 hover:bg-slate-800 text-white border border-slate-800"
                    }`}
                  >
                    Join Now (₹{currentPrice}) <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto text-cyan-400">
              <QrCode className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-sm">Instant Digital Pass</h3>
            <p className="text-xs text-slate-400">Join plan and instantly get your QR entrance pass on your Dashboard.</p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-sm">Zero Admission Fee</h3>
            <p className="text-xs text-slate-400">No registration or extra hidden maintenance charges applied.</p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto text-amber-400">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-sm">Store Perks</h3>
            <p className="text-xs text-slate-400">Long term members get automatic discounts on Whey & Creatine orders.</p>
          </div>
        </div>

      </div>
    </div>
  );
}