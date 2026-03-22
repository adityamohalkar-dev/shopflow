import Link from "next/link";

const products = [
  { id: 1, name: "Wireless Headphones", price: 2999, category: "Electronics", rating: 4.5, reviews: 128, emoji: "🎧" },
  { id: 2, name: "Running Shoes", price: 1799, category: "Fashion", rating: 4.3, reviews: 89, emoji: "👟" },
  { id: 3, name: "Coffee Maker", price: 3499, category: "Kitchen", rating: 4.7, reviews: 203, emoji: "☕" },
  { id: 4, name: "Yoga Mat", price: 899, category: "Fitness", rating: 4.4, reviews: 156, emoji: "🧘" },
  { id: 5, name: "Backpack", price: 1299, category: "Fashion", rating: 4.2, reviews: 74, emoji: "🎒" },
  { id: 6, name: "Smart Watch", price: 4999, category: "Electronics", rating: 4.6, reviews: 312, emoji: "⌚" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
        <span className="text-xl font-bold">
          Shop<span className="text-violet-600">Flow</span>
        </span>
        <div className="flex items-center gap-6">
          <span className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer">Products</span>
          <span className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer">Categories</span>
          <span className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer">Deals</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="text-2xl cursor-pointer">🛒</span>
            <span className="absolute -top-1 -right-1 bg-violet-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </div>
          <Link href="/checkout" className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-violet-700 transition">
            Checkout
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-violet-600 text-white px-8 py-16 text-center">
        <span className="bg-violet-500 text-violet-100 text-xs px-3 py-1 rounded-full font-medium">
          🔥 Sale up to 50% off
        </span>
        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Shop smarter,<br />live better
        </h1>
        <p className="mt-3 text-violet-200 text-lg max-w-xl mx-auto">
          Discover thousands of products at unbeatable prices. Fast delivery, easy returns.
        </p>
        <div className="mt-8 flex gap-3 justify-center">
          <button className="bg-white text-violet-600 px-6 py-3 rounded-lg font-medium hover:bg-violet-50 transition">
            Shop Now
          </button>
          <button className="border border-violet-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-500 transition">
            View Deals
          </button>
        </div>
      </section>

      {/* Search Bar */}
      <section className="max-w-2xl mx-auto px-8 -mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 px-4 py-3">
          <span className="text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
          />
          <button className="bg-violet-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium">
            Search
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-5xl mx-auto px-8 mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
        <div className="flex gap-3 flex-wrap">
          {["All", "Electronics", "Fashion", "Kitchen", "Fitness"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                cat === "All"
                  ? "bg-violet-600 text-white border-violet-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-violet-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-5xl mx-auto px-8 mt-8 pb-16">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Featured Products</h2>
        <div className="grid grid-cols-3 gap-5">
          {products.map((p) => (
            <div key={p.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition">
              <div className="bg-gray-50 h-36 flex items-center justify-center text-6xl">
                {p.emoji}
              </div>
              <div className="p-4">
                <span className="text-xs text-violet-600 font-medium">{p.category}</span>
                <h3 className="font-semibold text-gray-900 mt-1">{p.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-xs text-gray-500">{p.rating} ({p.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-gray-900">₹{p.price.toLocaleString()}</span>
                  <button className="bg-violet-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-violet-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 px-8 py-6 text-center text-sm text-gray-400">
        © 2026 ShopFlow. Built by{" "}
        <a href="https://github.com/adityamohalkar-dev" className="text-violet-600 hover:underline">
          Aditya Mohalkar
        </a>
      </footer>
    </main>
  );
}