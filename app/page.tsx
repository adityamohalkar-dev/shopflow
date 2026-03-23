"use client";
import { useState } from "react";
import Link from "next/link";

const products = [
  { id: 1, name: "Wireless Headphones", price: 2999, originalPrice: 4999, category: "Electronics", rating: 4.5, reviews: 128, emoji: "🎧", badge: "Best Seller" },
  { id: 2, name: "Running Shoes", price: 1799, originalPrice: 2499, category: "Fashion", rating: 4.3, reviews: 89, emoji: "👟", badge: "New" },
  { id: 3, name: "Coffee Maker", price: 3499, originalPrice: 4999, category: "Kitchen", rating: 4.7, reviews: 203, emoji: "☕", badge: "Top Rated" },
  { id: 4, name: "Yoga Mat", price: 899, originalPrice: 1299, category: "Fitness", rating: 4.4, reviews: 156, emoji: "🧘", badge: "" },
  { id: 5, name: "Backpack", price: 1299, originalPrice: 1999, category: "Fashion", rating: 4.2, reviews: 74, emoji: "🎒", badge: "" },
  { id: 6, name: "Smart Watch", price: 4999, originalPrice: 7999, category: "Electronics", rating: 4.6, reviews: 312, emoji: "⌚", badge: "Hot" },
];

const categories = ["All", "Electronics", "Fashion", "Kitchen", "Fitness"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filtered = products.filter(p =>
    (activeCategory === "All" || p.category === activeCategory) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (id: number) => setCart(prev => [...prev, id]);
  const toggleWishlist = (id: number) => setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 px-8 py-4 flex items-center justify-between">
        <span className="text-xl font-extrabold">
          Shop<span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Flow</span>
        </span>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          {["Products", "Categories", "Deals"].map(item => (
            <span key={item} className="hover:text-white cursor-pointer transition-colors">{item}</span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link href="/checkout" className="relative">
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm hover:bg-white/10 transition-all flex items-center gap-2">
              🛒 <span className="text-white font-medium">Cart</span>
              {cart.length > 0 && (
                <span className="bg-violet-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
          <Link href="/checkout" className="bg-gradient-to-r from-violet-500 to-pink-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:-translate-y-0.5 transition-transform">
            Checkout →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-pink-500/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6">
            🔥 Sale up to 50% off — Limited time
          </span>
          <h1 className="text-6xl font-extrabold leading-none tracking-tight mb-4">
            Shop smarter,<br />
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              live better
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            Discover thousands of products at unbeatable prices. Fast delivery, easy returns, <strong className="text-white">guaranteed satisfaction.</strong>
          </p>

          {/* Search */}
          <div className="max-w-lg mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 px-4 py-3">
            <span className="text-slate-400">🔍</span>
            <input
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm text-white placeholder-slate-500"
            />
            <button className="bg-gradient-to-r from-violet-500 to-pink-500 text-white px-4 py-1.5 rounded-xl text-sm font-bold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-8 mb-6">
        <div className="flex gap-3 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-violet-500/20"
                  : "bg-white/5 border border-white/10 text-slate-400 hover:border-violet-500/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-8 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white">
            {filtered.length} Products
            {activeCategory !== "All" && <span className="text-violet-400 ml-2">in {activeCategory}</span>}
          </h2>
          <select className="bg-white/5 border border-white/10 text-slate-400 text-sm px-3 py-2 rounded-xl outline-none">
            <option>Sort: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {filtered.map(p => (
            <div key={p.id} className="bg-[#0d0d16] border border-white/5 rounded-2xl overflow-hidden hover:border-violet-500/20 hover:-translate-y-1 transition-all group">
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] h-44 flex items-center justify-center text-7xl">
                {p.emoji}
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    {p.badge}
                  </span>
                )}
                <button
                  onClick={() => toggleWishlist(p.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  {wishlist.includes(p.id) ? "❤️" : "🤍"}
                </button>
              </div>
              <div className="p-4">
                <span className="text-xs text-violet-400 font-medium">{p.category}</span>
                <h3 className="font-bold text-white mt-1 mb-1">{p.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-400 text-xs">{"★".repeat(Math.floor(p.rating))}</span>
                  <span className="text-xs text-slate-500">{p.rating} ({p.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-extrabold text-white">₹{p.price.toLocaleString()}</span>
                    <span className="text-xs text-slate-500 line-through ml-2">₹{p.originalPrice.toLocaleString()}</span>
                    <span className="text-xs text-emerald-400 ml-1 font-medium">
                      {Math.round((1 - p.price / p.originalPrice) * 100)}% off
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(p.id)}
                    className="bg-gradient-to-r from-violet-500 to-pink-500 text-white px-3 py-2 rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-violet-500/20 transition-all"
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/5 px-8 py-6 text-center text-sm text-slate-600">
        Built by <a href="https://github.com/adityamohalkar-dev" className="text-violet-400 hover:underline">Aditya Mohalkar</a> © 2026
      </footer>
    </main>
  );
}