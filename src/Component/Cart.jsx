import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowLeft,
  Tag,
  ShieldCheck,
  CreditCard,
  QrCode,
  Truck,
  CheckCircle2,
  Zap,
  Lock,
} from "lucide-react";

// Initial Cart Items (Supplements + Membership Pass)
const initialCartItems = [
  {
    id: 1,
    name: "CyberWhey 100% Isolate Protein (2kg)",
    category: "Supplements",
    flavor: "Double Rich Chocolate",
    price: 4999,
    originalPrice: 6499,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=300",
    isSubscription: false,
  },
  {
    id: 2,
    name: "NitroSurge Explosive Pre-Workout",
    category: "Supplements",
    flavor: "Electric Watermelon",
    price: 2199,
    originalPrice: 2899,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=300",
    isSubscription: false,
  },
  {
    id: 3,
    name: "Pro Beast Membership Pass (1 Month)",
    category: "Gym Membership",
    flavor: "All Gym Access + Steam Bath",
    price: 2999,
    originalPrice: 3499,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=300",
    isSubscription: true,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0); // in percentage
  const [couponMessage, setCouponMessage] = useState({ text: "", type: "" });
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Delivery Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  // Quantity Handlers
  const handleQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty =
            type === "inc" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  // Remove Item
  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Coupon Code Application
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "GYMX15") {
      setAppliedDiscount(15);
      setCouponMessage({
        text: "Promo code GYMX15 applied! 15% discount granted.",
        type: "success",
      });
    } else {
      setCouponMessage({
        text: "Invalid promo code. Try 'GYMX15'",
        type: "error",
      });
    }
  };

  // Price Calculations
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const shippingFee = subtotal > 3000 || cartItems.length === 0 ? 0 : 99;
  const grandTotal = subtotal - discountAmount + shippingFee;

  // Form Field Handler
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Order
  const handleCheckout = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setOrderPlaced(true);
  };

  // Order Success Screen
  if (orderPlaced) {
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
              Thank You For Your Order!
            </h2>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Your Gym Membership Pass has been activated. Your Supplement & Gear order <span className="text-white font-bold">#GX-98421</span> is being processed for dispatch.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left space-y-2 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Amount Paid:</span>
              <span className="text-white font-bold">₹{grandTotal}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Payment Mode:</span>
              <span className="text-cyan-400 font-bold uppercase">{paymentMethod}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Estimated Delivery:</span>
              <span className="text-emerald-400 font-bold">2 - 3 Days</span>
            </div>
          </div>

          <Link
            to="/"
            className="block w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-xs rounded-xl transition duration-300 shadow-lg shadow-cyan-500/20"
          >
            Return To Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-800/80 pb-6">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-cyan-400 transition mb-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Gym Store
            </Link>
            <h1 className="text-3xl font-black uppercase text-white tracking-tight flex items-center gap-3">
              YOUR CART & CHECKOUT <ShoppingBag className="w-7 h-7 text-cyan-400" />
            </h1>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            ITEMS IN CART: <span className="text-cyan-400 font-bold">{cartItems.length}</span>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart View */
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center max-w-lg mx-auto my-12 space-y-4">
            <ShoppingBag className="w-16 h-16 text-slate-600 mx-auto" />
            <h3 className="text-xl font-bold text-white">Your Cart is Empty</h3>
            <p className="text-xs text-slate-400">
              Explore our range of Whey Isolate, Creatine, Pre-Workouts and Membership Passes to start training.
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-xs rounded-xl transition"
            >
              Explore Gym Store
            </Link>
          </div>
        ) : (
          /* Main Cart Content */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Cart Items & Shipping Form */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* CART ITEMS LIST */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6">
                <h2 className="text-sm font-mono font-bold uppercase text-slate-400 tracking-wider">
                  1. REVIEW CART ITEMS
                </h2>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition"
                    >
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-xl bg-slate-900 shrink-0"
                        />
                        <div>
                          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                            {item.category}
                          </span>
                          <h3 className="font-bold text-sm text-white mt-1 line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="text-xs text-slate-400">{item.flavor}</p>
                          <div className="text-sm font-black text-white mt-2 sm:hidden">
                            ₹{item.price * item.quantity}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 border-slate-800/80 pt-3 sm:pt-0">
                        {/* Quantity Controls */}
                        {!item.isSubscription && (
                          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
                            <button
                              onClick={() => handleQuantity(item.id, "dec")}
                              className="text-slate-400 hover:text-white transition"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold text-white w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantity(item.id, "inc")}
                              className="text-slate-400 hover:text-white transition"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}

                        {/* Price */}
                        <div className="hidden sm:block text-right">
                          <span className="text-base font-black text-white">
                            ₹{item.price * item.quantity}
                          </span>
                          <span className="block text-[10px] text-slate-500 line-through">
                            ₹{item.originalPrice * item.quantity}
                          </span>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DELIVERY & ADDRESS FORM */}
              <form onSubmit={handleCheckout} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
                <h2 className="text-sm font-mono font-bold uppercase text-slate-400 tracking-wider">
                  2. DELIVERY ADDRESS & MEMBER DETAILS
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Shipping Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street, House No., Area"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Mumbai / Indore"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="400001"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* PAYMENT METHOD SELECTOR */}
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <h2 className="text-sm font-mono font-bold uppercase text-slate-400 tracking-wider">
                    3. SELECT PAYMENT METHOD
                  </h2>

                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("upi")}
                      className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-2 transition ${
                        paymentMethod === "upi"
                          ? "bg-cyan-500/10 border-cyan-500 text-cyan-400"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      <QrCode className="w-5 h-5" />
                      <span className="text-[11px] font-bold">UPI / GPay</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-2 transition ${
                        paymentMethod === "card"
                          ? "bg-cyan-500/10 border-cyan-500 text-cyan-400"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      <CreditCard className="w-5 h-5" />
                      <span className="text-[11px] font-bold">Debit / Card</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("cod")}
                      className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-2 transition ${
                        paymentMethod === "cod"
                          ? "bg-cyan-500/10 border-cyan-500 text-cyan-400"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      <Truck className="w-5 h-5" />
                      <span className="text-[11px] font-bold">Pay At Gym / COD</span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-sm rounded-2xl transition duration-300 shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" /> Complete Order (₹{grandTotal})
                </button>
              </form>

            </div>

            {/* Right Column: Order Summary & Coupon */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              
              {/* COUPON BOX */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
                  <Tag className="w-4 h-4" /> Promo Code / Gym Discount
                </div>

                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Try 'GYMX15'"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white uppercase focus:outline-none focus:border-cyan-500"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition"
                  >
                    Apply
                  </button>
                </form>

                {couponMessage.text && (
                  <p
                    className={`text-[11px] font-semibold ${
                      couponMessage.type === "success"
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {couponMessage.text}
                  </p>
                )}
              </div>

              {/* SUMMARY BREAKDOWN */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
                <h3 className="text-sm font-mono font-bold uppercase text-slate-400 tracking-wider">
                  ORDER BILL BREAKDOWN
                </h3>

                <div className="space-y-3 text-xs border-b border-slate-800/80 pb-4">
                  <div className="flex justify-between text-slate-300">
                    <span>Items Subtotal</span>
                    <span className="font-bold text-white">₹{subtotal}</span>
                  </div>

                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>GymX Coupon Discount ({appliedDiscount}%)</span>
                      <span className="font-bold">-₹{discountAmount}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-300">
                    <span>Express Delivery Fee</span>
                    <span>
                      {shippingFee === 0 ? (
                        <span className="text-emerald-400 font-bold uppercase">Free</span>
                      ) : (
                        `₹${shippingFee}`
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-sm font-bold text-white">Grand Total</span>
                  <span className="text-2xl font-black text-cyan-400">₹{grandTotal}</span>
                </div>

                {/* Security Guarantees */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>100% Authentic Gym Products & Certified Passes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Instant Membership Entry QR code on completion</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}