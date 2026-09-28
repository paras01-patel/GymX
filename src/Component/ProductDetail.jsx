import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  ShoppingCart,
  CheckCircle2,
  ArrowLeft,
  Flame,
  Award,
} from 'lucide-react';

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();

  // Selected State
  const [selectedFlavor, setSelectedFlavor] = useState('Double Rich Chocolate');
  const [selectedSize, setSelectedSize] = useState('2 kg (4.4 lbs)');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('nutrition'); // 'nutrition' | 'reviews' | 'authenticity'

  // Mock Single Product Data
  const product = {
    id: id || 101,
    name: 'NitroTech Gold 100% Whey Isolate & Peptides',
    brand: 'MuscleTech',
    rating: 4.8,
    reviewsCount: 342,
    price: 4999,
    originalPrice: 6499,
    inStock: true,
    flavors: ['Double Rich Chocolate', 'Vanilla Ice Cream', 'Strawberry Blast', 'Cookies & Cream'],
    sizes: ['1 kg (2.2 lbs)', '2 kg (4.4 lbs)', '4 kg (8.8 lbs)'],
    images: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=800',
    ],
    nutritionInfo: [
      { label: 'Protein Per Serving', value: '25g' },
      { label: 'BCAAs', value: '5.5g' },
      { label: 'Glutamine & Precursor', value: '4g' },
      { label: 'Total Sugars', value: '1g' },
      { label: 'Servings Per Tub', value: '60 Servings' },
    ],
    reviews: [
      {
        id: 1,
        author: 'Rohan Sharma',
        rating: 5,
        date: '2 Days ago',
        comment: 'Authentic product! Great mixability and no bloating at all. MuscleTech delivers top quality as always.',
      },
      {
        id: 2,
        author: 'Aman Verma',
        rating: 4,
        date: '1 Week ago',
        comment: 'Chocolate flavor is really smooth with cold milk. Taste is 10/10.',
      },
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleQuantityChange = (type) => {
    if (type === 'inc') setQuantity((prev) => prev + 1);
    if (type === 'dec' && quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/store"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-cyan-400 transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back To Beast Store
        </Link>

        {/* Top Product Section: Gallery + Purchase Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 overflow-hidden flex items-center justify-center relative group">
              <img
                src={selectedImage}
                alt={product.name}
                className="max-h-96 object-contain transition duration-500 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-cyan-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                100% Authentic
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-2xl border p-2 bg-slate-900 overflow-hidden transition ${
                    selectedImage === img
                      ? 'border-cyan-500 ring-2 ring-cyan-500/30'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details & Buying Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                {product.brand}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-1 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-lg border border-amber-500/20 text-xs font-bold gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-xs text-slate-400">
                  ({product.reviewsCount} Verified Buyer Reviews)
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-baseline gap-4">
              <span className="text-3xl font-black text-white">₹{product.price * quantity}</span>
              <span className="text-sm text-slate-500 line-through">
                ₹{product.originalPrice * quantity}
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full uppercase">
                Save ₹{(product.originalPrice - product.price) * quantity}
              </span>
            </div>

            {/* Flavor Options */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                Select Flavor: <span className="text-cyan-400 font-normal">{selectedFlavor}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.flavors.map((flv) => (
                  <button
                    key={flv}
                    onClick={() => setSelectedFlavor(flv)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition border ${
                      selectedFlavor === flv
                        ? 'bg-cyan-500 text-black border-cyan-500'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {flv}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Options */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                Select Weight / Size: <span className="text-cyan-400 font-normal">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition border ${
                      selectedSize === sz
                        ? 'bg-cyan-500 text-black border-cyan-500'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add to Cart Button */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
                <button
                  onClick={() => handleQuantityChange('dec')}
                  className="p-2 text-slate-400 hover:text-white transition"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-mono font-bold text-sm text-white">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange('inc')}
                  className="p-2 text-slate-400 hover:text-white transition"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() =>
                  addToCart &&
                  addToCart({
                    ...product,
                    selectedFlavor,
                    selectedSize,
                    quantity,
                  })
                }
                className="flex-1 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black uppercase text-xs rounded-xl transition shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" /> Add To Cart (₹{product.price * quantity})
              </button>
            </div>

            {/* Delivery & Assurance Guarantees */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Fast Express Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Genuine Tag</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-amber-400 shrink-0" />
                <span>7 Days Replacement</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Section: Tabs for Nutrition Info & Reviews */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="flex gap-4 border-b border-slate-800 pb-4 mb-6">
            <button
              onClick={() => setActiveTab('nutrition')}
              className={`text-xs font-bold uppercase tracking-wider pb-2 transition border-b-2 ${
                activeTab === 'nutrition'
                  ? 'border-cyan-500 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Nutrition Facts
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`text-xs font-bold uppercase tracking-wider pb-2 transition border-b-2 ${
                activeTab === 'reviews'
                  ? 'border-cyan-500 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Customer Reviews ({product.reviews.length})
            </button>
          </div>

          {/* TAB 1: NUTRITION FACTS */}
          {activeTab === 'nutrition' && (
            <div className="max-w-xl space-y-3 text-xs">
              <p className="text-slate-400 mb-4">
                Nutritional values calculated per serving size (33g scoop with water):
              </p>
              {product.nutritionInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex justify-between p-3 bg-slate-950 rounded-xl border border-slate-800/80"
                >
                  <span className="text-slate-300 font-medium">{info.label}</span>
                  <span className="font-bold text-cyan-400">{info.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {product.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-2 text-xs"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">{rev.author}</span>
                    <span className="text-[10px] text-slate-500">{rev.date}</span>
                  </div>
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}