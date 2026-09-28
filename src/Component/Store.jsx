import React, { useState } from 'react';

const storeProducts = [
  {
    id: 101,
    name: 'NitroTech Whey Gold Protein',
    brand: 'MuscleTech',
    category: 'Proteins',
    price: 4999,
    originalPrice: 6299,
    rating: 4.8,
    reviews: 240,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=600',
    flavors: ['Double Rich Chocolate', 'Vanilla Ice Cream'],
    tag: 'Best Seller',
  },
  {
    id: 102,
    name: 'Micronized Creatine Monohydrate',
    brand: 'Optimum Nutrition',
    category: 'Creatine',
    price: 1299,
    originalPrice: 1799,
    rating: 4.9,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=600',
    flavors: ['Unflavored', 'Fruit Punch'],
    tag: 'Trending',
  },
  {
    id: 103,
    name: 'C4 Original Explosive Pre-Workout',
    brand: 'Cellucor',
    category: 'Pre-Workout',
    price: 2499,
    originalPrice: 3199,
    rating: 4.6,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=600',
    flavors: ['Blue Razz', 'Watermelon'],
    tag: 'Hot',
  },
  {
    id: 104,
    name: 'Heavy Duty Leather Lifting Belt',
    brand: 'Beast Gear',
    category: 'Gear',
    price: 1899,
    originalPrice: 2499,
    rating: 4.7,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    flavors: ['Black - L', 'Black - M'],
    tag: 'Gear',
  },
  {
    id: 105,
    name: 'Extreme Mass Gainer (3kg)',
    brand: 'Labrada',
    category: 'Gainers',
    price: 3899,
    originalPrice: 4899,
    rating: 4.5,
    reviews: 130,
    image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=600',
    flavors: ['Chocolate Fudge', 'Strawberry'],
    tag: 'High Calorie',
  },
  {
    id: 106,
    name: 'Stainless Steel Shaker Bottle (750ml)',
    brand: 'Beast Gear',
    category: 'Gear',
    price: 699,
    originalPrice: 999,
    rating: 4.8,
    reviews: 310,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    flavors: ['Matte Black', 'Silver'],
    tag: 'Essentials',
  },
];

export default function Store({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedFlavors, setSelectedFlavors] = useState({});

  // Flavor selection handler
  const handleFlavorChange = (productId, flavor) => {
    setSelectedFlavors({ ...selectedFlavors, [productId]: flavor });
  };

  // Filter & Search Logic
  let filteredProducts = storeProducts.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting Logic
  if (sortBy === 'low-to-high') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'high-to-low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-4 md:px-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500">
          Beast Supplement Store
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          100% Authentic Supplements, Fast Delivery & Guaranteed Results.
        </p>
      </div>

      {/* Controls Bar: Search, Filters & Sorting */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 mb-10 shadow-xl max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search supplement, gear..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 text-white px-4 py-2.5 pl-10 rounded-xl border border-slate-700 focus:outline-none focus:border-red-500 transition"
            />
            <span className="absolute left-3 top-3 text-gray-400">🔍</span>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['All', 'Proteins', 'Creatine', 'Pre-Workout', 'Gainers', 'Gear'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div className="w-full md:w-auto flex justify-end">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-800 text-white px-4 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-red-500 text-sm"
            >
              <option value="popular">Sort: Featured</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              {/* Product Image Box */}
              <div className="relative overflow-hidden h-60 bg-slate-950 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  {product.tag}
                </span>
                <span className="absolute top-3 right-3 bg-slate-900/80 text-yellow-400 text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur">
                  ★ {product.rating} ({product.reviews})
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <p className="text-xs text-red-400 font-bold tracking-wider uppercase mb-1">
                  {product.brand}
                </p>
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                  {product.name}
                </h3>

                {/* Flavor Selection */}
                <div className="mt-3">
                  <label className="text-xs text-gray-400 block mb-1 font-medium">Select Flavor / Variant:</label>
                  <select
                    value={selectedFlavors[product.id] || product.flavors[0]}
                    onChange={(e) => handleFlavorChange(product.id, e.target.value)}
                    className="w-full bg-slate-800 text-xs text-gray-200 px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-red-500"
                  >
                    {product.flavors.map((flv) => (
                      <option key={flv} value={flv}>
                        {flv}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Price & Add to Cart Action */}
            <div className="p-5 pt-0 border-t border-slate-800/50 mt-4">
              <div className="flex items-baseline justify-between mb-4 pt-3">
                <div>
                  <span className="text-2xl font-black text-white">₹{product.price}</span>
                  <span className="text-xs text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                </div>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>

              <button
                onClick={() =>
                  addToCart({
                    ...product,
                    selectedFlavor: selectedFlavors[product.id] || product.flavors[0],
                  })
                }
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold py-3 rounded-xl shadow-lg transition active:scale-98 flex items-center justify-center gap-2"
              >
                🛒 Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Products Found */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No products found matching your search or filter.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="mt-4 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-sm"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}