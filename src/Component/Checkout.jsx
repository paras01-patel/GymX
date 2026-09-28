import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  CreditCard,
  QrCode,
  Truck,
  CheckCircle2,
  Lock,
  ArrowLeft,
  Package,
  MapPin,
  Phone,
  User,
  Mail,
} from "lucide-react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isPlaced, setIsPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  // Mock items passed from cart
  const orderItems = [
    {
      id: 1,
      name: "CyberWhey 100% Isolate Protein (2kg)",
      flavor: "Double Rich Chocolate",
      price: 4999,
      qty: 1,
    },
    {
      id: 2,
      name: "Ultra-Pure Creatine Monohydrate (250g)",
      flavor: "Unflavored",
      price: 1199,
      qty: 1,
    },
  ];

  const subtotal = orderItems.reduce((acc, i) => acc + i.price * i.qty, 0);
  const discount = 500; // Applied coupon
  const delivery = 0; // Free delivery
  const grandTotal = subtotal - discount + delivery;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsPlaced(true);
  };

  // ORDER SUCCESS SCREEN
  if (isPlaced) {
    return (
      <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-20 px-4 font-sans flex items-center justify-center">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              ORDER CONFIRMED
            </span>
            <h2 className="text-2xl font-black text-white mt-1">
              Payment Successful!
            </h2>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Your Gym Order <span className="text-white font-bold">#GX-98421</span> has been placed. Order status and delivery updates have been sent to your mobile.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left space-y-2.5 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Recipient:</span>
              <span className="text-white font-bold">{formData.name || "Alex Mercer"}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Amount Paid:</span>
              <span className="text-cyan-400 font-bold">₹{grandTotal}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Payment Mode:</span>
              <span className="text-emerald-400 font-bold uppercase">{paymentMethod}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Est. Delivery:</span>
              <span className="text-amber-400 font-bold">2 - 3 Days</span>
            </div>
          </div>

          <Link
            to="/"
            className="block w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-xs rounded-xl transition duration-300 shadow-lg shadow-cyan-500/20"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 border-b border-slate-800/80 pb-6">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-cyan-400 transition mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back To Shopping Cart
          </Link>
          <h1 className="text-3xl font-black uppercase text-white tracking-tight flex items-center gap-3">
            SECURE CHECKOUT <Lock className="w-6 h-6 text-cyan-400" />
          </h1>
        </div>

        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Address & Payment Selection */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Delivery Details */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4" /> 1. Shipping Address & Contact
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Alex Mercer"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase">Mobile Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alex@gymx.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase">Flat / Street / Landmark</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="House No 42, Gymkhana Road"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Indore"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="452001"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Mode Selection */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider flex items-center gap-2">
                <CreditCard className="w-4 h-4" /> 2. Select Payment Option
              </h2>

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`p-3.5 rounded-2xl border text-center flex flex-col items-center gap-2 transition ${
                    paymentMethod === "upi"
                      ? "bg-cyan-500/10 border-cyan-500 text-cyan-400"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <QrCode className="w-5 h-5" />
                  <span className="text-[11px] font-bold">UPI / PhonePe</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3.5 rounded-2xl border text-center flex flex-col items-center gap-2 transition ${
                    paymentMethod === "card"
                      ? "bg-cyan-500/10 border-cyan-500 text-cyan-400"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="text-[11px] font-bold">Debit / Credit</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`p-3.5 rounded-2xl border text-center flex flex-col items-center gap-2 transition ${
                    paymentMethod === "cod"
                      ? "bg-cyan-500/10 border-cyan-500 text-cyan-400"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <Truck className="w-5 h-5" />
                  <span className="text-[11px] font-bold">Pay At Gym</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 lg:sticky lg:top-28">
              <h2 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <Package className="w-4 h-4 text-amber-400" /> ORDER SUMMARY
              </h2>

              <div className="space-y-3 border-b border-slate-800 pb-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-xs">
                    <div>
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-[10px] text-slate-400">{item.flavor} × {item.qty}</p>
                    </div>
                    <span className="font-bold text-white">₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs border-b border-slate-800 pb-4">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="text-white font-bold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Discount Applied</span>
                  <span className="font-bold">-₹{discount}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Express Shipping</span>
                  <span className="text-emerald-400 font-bold uppercase">FREE</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-1">
                <span className="text-sm font-bold text-white">Total Amount</span>
                <span className="text-2xl font-black text-cyan-400">₹{grandTotal}</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-xs rounded-xl transition duration-300 shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 mt-4"
              >
                <Lock className="w-4 h-4" /> Place Order Now (₹{grandTotal})
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>256-Bit Encrypted Payment Processing</span>
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}