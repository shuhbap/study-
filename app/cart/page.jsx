"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function Cart() {
  const [qty, setQty] = useState(1);
  const [location, setLocation] = useState("Kerala");

  const productPrice = 199;

  const shippingRates = {
    Kerala: 40,
    TamilNadu: 60,
    Karnataka: 70,
    Default: 90,
  };

  const shipping =
    shippingRates[location] || shippingRates.Default;

  const subtotal = productPrice * qty;
  const total = subtotal + shipping;

  // LOAD RAZORPAY
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // PAYMENT
  const handlePayment = () => {
    if (!window.Razorpay) {
      alert("Payment system loading...");
      return;
    }

    const options = {
      key: "RAZORPAY_KEY_ID", // replace
      amount: total * 100,
      currency: "INR",
      name: "TAMOOH",
      description: "Premium Biriyani Masala Order",
      image: "/logo.jpg",

      handler: function (response) {
        alert(
          `Order Successful 🎉\nPayment ID: ${response.razorpay_payment_id}`
        );
      },

      prefill: {
        name: "Customer",
        email: "customer@gmail.com",
        contact: "9999999999",
      },

      theme: {
        color: "#D4AF37",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] pt-24 px-4 md:px-8 pb-16">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-yellow-600 tracking-[4px] uppercase text-xs">
            Premium Checkout
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold mt-2">
            Your Cart
          </h1>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-8">

          {/* LEFT - PRODUCT */}
          <div className="space-y-6">

            <div className="rounded-[30px] bg-white/70 backdrop-blur-xl border border-yellow-500/10 shadow-lg p-5 md:p-7">

              <div className="flex flex-col md:flex-row gap-6">

                {/* IMAGE */}
                <div className="relative w-full md:w-[200px] h-[200px] rounded-2xl overflow-hidden bg-[#f8f3e8]">
                  <Image
                    src="/9D2F3332-C688-4224-83F8-94CAE44E9F91.png"
                    alt="product"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex-1">

                  <div className="flex justify-between">
                    <div>
                      <p className="text-yellow-600 text-xs tracking-[3px] uppercase">
                        Tamooh Signature
                      </p>

                      <h2 className="text-2xl md:text-3xl font-semibold mt-1">
                        Instant Biriyani Masala
                      </h2>

                      <p className="text-neutral-500 mt-3 text-sm md:text-base">
                        Premium spice blend for royal biriyani experience.
                      </p>
                    </div>

                    <button className="h-10 w-10 flex items-center justify-center rounded-full border border-red-200 hover:bg-red-50">
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                  </div>

                  {/* QTY + PRICE */}
                  <div className="flex items-center justify-between mt-8">

                    {/* QTY */}
                    <div className="flex items-center gap-4 border border-yellow-500/20 px-4 py-2 rounded-full">
                      <button onClick={() => setQty(q => q > 1 ? q - 1 : 1)}>
                        <Minus size={16} className="text-yellow-700" />
                      </button>

                      <span className="font-medium">{qty}</span>

                      <button onClick={() => setQty(q => q + 1)}>
                        <Plus size={16} className="text-yellow-700" />
                      </button>
                    </div>

                    {/* PRICE */}
                    <div className="text-right">
                      <p className="text-sm text-neutral-500">Subtotal</p>
                      <h3 className="text-2xl font-semibold text-yellow-600">
                        ₹{subtotal}
                      </h3>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* RIGHT - SUMMARY */}
          <div className="h-fit sticky top-24 rounded-[30px] bg-white/70 backdrop-blur-xl border border-yellow-500/10 shadow-lg p-6">

            <h2 className="text-2xl font-semibold">Checkout</h2>

            {/* LOCATION */}
            <div className="mt-6">
              <label className="text-sm text-neutral-500 mb-2 block">
                Shipping Location
              </label>

              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />

                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-yellow-500/20 rounded-xl pl-10 py-3 bg-[#faf7f2]"
                >
                  <option>Kerala</option>
                  <option>TamilNadu</option>
                  <option>Karnataka</option>
                  <option>Default</option>
                </select>
              </div>
            </div>

            {/* SUMMARY */}
            <div className="mt-6 space-y-3 text-sm">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹0</span>
              </div>

              <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-yellow-600">₹{total}</span>
              </div>

            </div>

            {/* PAYMENT */}
            <button
              onClick={handlePayment}
              className="mt-7 w-full flex items-center justify-center gap-2 bg-[#D4AF37] text-white py-4 rounded-full shadow-lg hover:scale-[1.02] transition"
            >
              Pay Now
              <ArrowRight size={18} />
            </button>

            {/* SECURE */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-500">
              <ShieldCheck size={14} className="text-green-600" />
              Secure payment powered by Razorpay
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
