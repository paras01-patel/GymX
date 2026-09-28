import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "Supplement order delivery kitne dino mein hoti hai?",
      a: "Metro cities mein delivery 24-48 ghante ke andar ho jaati hai. Baaki locations par 3-5 working days lagte hain.",
    },
    {
      q: "Kya supplements 100% authentic hain?",
      a: "Haan, hum direct authorized brand distributors se sourcing karte hain. Har product par authenticity QR code sticker milta hai.",
    },
    {
      q: "Gym Membership Pass scan kaise hota hai?",
      a: "Aapke User Dashboard (`/dashborad`) mein ek dynamic QR Code milta hai, jise gym entrance par scanner par dikhana hota hai.",
    },
    {
      q: "Personal Trainer booking cancel ya reschedule kar sakte hain?",
      a: "Haan, session start hone se 4 ghante pehle tak aap Dashboard se bina kisi extra charge ke reschedule kar sakte hain.",
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            <MessageSquare className="w-4 h-4" /> 24/7 Beast Support
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Contact & Help Center
          </h1>
          <p className="text-sm text-slate-400">
            Koi query, order assistance, ya gym pass help chahiye? Humari team hamesha ready hai!
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Call Support</p>
              <p className="text-xs font-bold text-white">+91 98765 43210</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Email Us</p>
              <p className="text-xs font-bold text-white">support@beastfitness.com</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Headquarters</p>
              <p className="text-xs font-bold text-white">MG Road, Cyber City, IN</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl text-purple-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Gym Working Hours</p>
              <p className="text-xs font-bold text-white">05:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        {/* Form + FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
              <Send className="w-5 h-5 text-cyan-400" /> Send Message
            </h2>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-base font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-400">
                  Humari support team 2 ghante ke andar aap se email par contact karegi.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-cyan-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 uppercase font-bold mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 uppercase font-bold mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1.5">Select Topic</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option>General Inquiry</option>
                    <option>Supplement Order Support</option>
                    <option>Gym Membership Pass Question</option>
                    <option>Personal Trainer Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1.5">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Apna sawaal ya concern likhein..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black uppercase text-xs rounded-xl transition shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Submit Query
                </button>
              </form>
            )}
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-4">
            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-amber-400" /> Frequently Asked
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left flex justify-between items-center text-xs font-bold text-white hover:text-cyan-400 transition"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <p className="px-4 pb-4 text-[11px] text-slate-400 border-t border-slate-800/60 pt-3 leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}