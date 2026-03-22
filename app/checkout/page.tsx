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
  const subtotal = cartItems.reduce((acc, i) => acc + i.price * i.qty, 0);
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Shop<span className="text-violet-600">Flow</span>
        </Link>
        <span className="text-sm text-gray-500">Secure Checkout 🔒</span>
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-10 grid grid-cols-3 gap-8">
        {/* Left — Form */}
        <div className="col-span-2 space-y-6">
          {/* Steps */}
          <div className="flex items-center gap-3">
            {["Delivery", "Payment", "Review"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${
                  step > i + 1 ? "bg-violet-600 text-white" :
                  step === i + 1 ? "bg-violet-600 text-white" :
                  "bg-gray-200 text-gray-500"
                }`}>
                  {step > i + 1 ? "✓" : i + 1}
                </div>
                <span className={`text-sm ${step === i + 1 ? "font-medium text-gray-900" : "text-gray-400"}`}>{s}</span>
                {i < 2 && <div className="w-8 h-px bg-gray-200 mx-1" />}
              </div>
            ))}
          </div>

          {/* Step 1 - Delivery */}
          {step === 1 && (
            <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-4">
              <h2 className="font-semibold text-gray-900">Delivery Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">First Name</label>
                  <input type="text" placeholder="Aditya" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-400" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Last Name</label>
                  <input type="text" placeholder="Mohalkar" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-400" />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Phone</label>
                <input type="text" placeholder="+91 98765 43210" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-400" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Address</label>
                <input type="text" placeholder="Street, Area" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">City</label>
                  <input type="text" placeholder="Beed" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-400" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Pincode</label>
                  <input type="text" placeholder="431122" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-400" />
                </div>
              </div>
              <button onClick={() => setStep(2)} className="w-full bg-violet-600 text-white py-3 rounded-lg font-medium hover:bg-violet-700 transition">
                Continue to Payment →
              </button>
            </div>
          )}

          {/* Step 2 - Payment */}
          {step === 2 && (
            <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-4">
              <h2 className="font-semibold text-gray-900">Payment Method</h2>
              {["UPI", "Credit / Debit Card", "Cash on Delivery"].map((method) => (
                <label key={method} className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-violet-400 transition">
                  <input type="radio" name="payment" className="accent-violet-600" defaultChecked={method === "UPI"} />
                  <span className="text-sm font-medium text-gray-700">{method}</span>
                </label>
              ))}
              <div>
                <label className="text-xs text-gray-500 mb-1 block">UPI ID</label>
                <input type="text" placeholder="yourname@upi" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-400" />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                  ← Back
                </button>
                <button onClick={() => setStep(3)} className="flex-1 bg-violet-600 text-white py-3 rounded-lg font-medium hover:bg-violet-700 transition">
                  Review Order →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 - Review */}
          {step === 3 && (
            <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-4">
              <h2 className="font-semibold text-gray-900">Review Order</h2>
              <div className="bg-green-50 border border-green-100 rounded-lg px-4 py-3 text-sm text-green-700 font-medium">
                ✅ Delivering to: Beed, Maharashtra - 431122
              </div>
              <div className="bg-violet-50 border border-violet-100 rounded-lg px-4 py-3 text-sm text-violet-700 font-medium">
                💳 Payment: UPI
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                  ← Back
                </button>
                <button className="flex-1 bg-violet-600 text-white py-3 rounded-lg font-medium hover:bg-violet-700 transition">
                  Place Order 🎉
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right — Order Summary */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h2 className="font-semibold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-xl">
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-400">Qty: {item.qty}</p>
                  </div>
                  <span className="text-xs font-semibold text-gray-900">₹{(item.price * item.qty).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="bg-violet-50 border border-violet-100 rounded-xl p-4 text-xs text-violet-700">
            🚚 Free delivery on orders above ₹999. Expected delivery: 3-5 days.
          </div>
        </div>
      </div>
    </main>
  );
}