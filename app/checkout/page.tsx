"use client";
import { useState } from "react";
import Link from "next/link";

const cartItems = [
  { name: "Wireless Headphones", price: 2999, qty: 1, emoji: "🎧" },
  { name: "Smart Watch", price: 4999, qty: 1, emoji: "⌚" },
  { name: "Yoga Mat", price: 899, qty: 2, emoji: "🧘" },
];

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [placed, setPlaced] = useState(false);
  const subtotal = cartItems.reduce((acc, i) => acc + i.price * i.qty, 0);
  const shipping = 99;
  const total = subtotal + shipping;

  if (placed) return (
    <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
      <div className="text-center">
        <div className="text-7xl mb-6">🎉</div>
        <h1 className="text-3xl font-extrabold text-white mb-3">Order Placed!</h1>
        <p className="text-slate-400 mb-6">Thank you! Your order will arrive in 3-5 days.</p>
        <Link href="/" className="bg-gradient-to-r from-violet-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:-translate-y-0.5 transition-transform inline-block">
          Continue Shopping →
        </Link>
      </div>
    </main>
  );

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold">
          Shop<span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Flow</span>
        </Link>
        <span className="text-sm text-slate-400">🔒 Secure Checkout</span>
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-10 grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          {/* Steps */}
          <div className="flex items-center gap-2">
            {["Delivery", "Payment", "Review"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                  step > i + 1 ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white" :
                  step === i + 1 ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white" :
                  "bg-white/5 text-slate-500"
                }`}>
                  {step > i + 1 ? "✓" : i + 1}
                </div>
                <span className={`text-sm font-medium ${step === i + 1 ? "text-white" : "text-slate-500"}`}>{s}</span>
                {i < 2 && <div className="w-8 h-px bg-white/10 mx-1" />}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="bg-[#0d0d16] border border-white/5 rounded-2xl p-6 space-y-4">
              <h2 className="font-bold text-white text-lg">Delivery Address</h2>
              <div className="grid grid-cols-2 gap-4">
                {[["First Name", "Aditya"], ["Last Name", "Mohalkar"]].map(([label, placeholder]) => (
                  <div key={label}>
                    <label className="text-xs text-slate-400 mb-1 block">{label}</label>
                    <input type="text" placeholder={placeholder} className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-violet-500/50 text-white placeholder-slate-600" />
                  </div>
                ))}
              </div>
              {[["Phone", "+91 98765 43210"], ["Address", "Street, Area, Landmark"], ["City", "Beed"]].map(([label, placeholder]) => (
                <div key={label}>
                  <label className="text-xs text-slate-400 mb-1 block">{label}</label>
                  <input type="text" placeholder={placeholder} className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-violet-500/50 text-white placeholder-slate-600" />
                </div>
              ))}
              <button onClick={() => setStep(2)} className="w-full bg-gradient-to-r from-violet-500 to-pink-500 text-white py-3 rounded-xl font-bold hover:-translate-y-0.5 transition-transform">
                Continue to Payment →
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="bg-[#0d0d16] border border-white/5 rounded-2xl p-6 space-y-4">
              <h2 className="font-bold text-white text-lg">Payment Method</h2>
              {["UPI Payment", "Credit / Debit Card", "Cash on Delivery"].map((method, i) => (
                <label key={method} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 cursor-pointer hover:border-violet-500/30 transition-all">
                  <input type="radio" name="payment" defaultChecked={i === 0} className="accent-violet-500" />
                  <span className="text-sm font-medium text-white">{method}</span>
                </label>
              ))}
              <div>
                <label className="text-xs text-slate-400 mb-1 block">UPI ID</label>
                <input type="text" placeholder="yourname@upi" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-violet-500/50 text-white placeholder-slate-600" />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="flex-1 bg-white/5 border border-white/10 text-slate-400 py-3 rounded-xl font-medium hover:bg-white/10 transition-all">← Back</button>
                <button onClick={() => setStep(3)} className="flex-1 bg-gradient-to-r from-violet-500 to-pink-500 text-white py-3 rounded-xl font-bold hover:-translate-y-0.5 transition-transform">Review Order →</button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="bg-[#0d0d16] border border-white/5 rounded-2xl p-6 space-y-4">
              <h2 className="font-bold text-white text-lg">Review Order</h2>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 text-sm text-emerald-400 font-medium">
                ✅ Delivering to: Beed, Maharashtra - 431122
              </div>
              <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl px-4 py-3 text-sm text-violet-400 font-medium">
                💳 Payment via UPI
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="flex-1 bg-white/5 border border-white/10 text-slate-400 py-3 rounded-xl font-medium hover:bg-white/10 transition-all">← Back</button>
                <button onClick={() => setPlaced(true)} className="flex-1 bg-gradient-to-r from-violet-500 to-pink-500 text-white py-3 rounded-xl font-bold hover:-translate-y-0.5 transition-transform">
                  Place Order 🎉
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          <div className="bg-[#0d0d16] border border-white/5 rounded-2xl p-5">
            <h2 className="font-bold text-white mb-4">Order Summary</h2>
            <div className="space-y-3">
              {cartItems.map(item => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-xl">{item.emoji}</div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-white">{item.name}</p>
                    <p className="text-xs text-slate-500">Qty: {item.qty}</p>
                  </div>
                  <span className="text-xs font-bold text-white">₹{(item.price * item.qty).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/5 mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-slate-400">
                <span>Subtotal</span><span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-400">
                <span>Shipping</span><span>₹{shipping}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-white/5">
                <span>Total</span><span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">₹{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-4 text-xs text-violet-400">
            🚚 Free delivery on orders above ₹999. Expected: 3-5 days.
          </div>
        </div>
      </div>
    </main>
  );
}