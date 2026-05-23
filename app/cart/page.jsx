"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useCart();

  const [location, setLocation] = useState("Kerala");

  const shippingRates = {
    Kerala: 40,
    TamilNadu: 60,
    Karnataka: 70,
    Default: 90,
  };

  const shipping = shippingRates[location] || 90;

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-[#FAF7F2] pt-24 px-4 md:px-8 pb-16">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-semibold mb-10">
          Your Cart
        </h1>

        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-8">

          {/* LEFT */}
          <div className="space-y-5">

            {cart.length === 0 ? (
              <p className="text-neutral-500">
                Cart is empty
              </p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/70 p-5 rounded-3xl border border-yellow-500/10"
                >
                  <div className="flex gap-5">

                    <Image
                      src={item.image}
                      alt=""
                      width={120}
                      height={120}
                      className="rounded-xl"
                    />

                    <div className="flex-1">

                      <div className="flex justify-between">
                        <h2 className="text-xl font-semibold">
                          {item.name}
                        </h2>

                        <button
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="text-red-500" />
                        </button>
                      </div>

                      {/* QTY */}
                      <div className="flex items-center gap-3 mt-4">

                        <button
                          onClick={() =>
                            updateQty(
                              item.id,
                              Math.max(1, item.qty - 1)
                            )
                          }
                        >
                          <Minus />
                        </button>

                        <span>{item.qty}</span>

                        <button
                          onClick={() =>
                            updateQty(item.id, item.qty + 1)
                          }
                        >
                          <Plus />
                        </button>

                      </div>

                      <p className="mt-3 text-yellow-600 font-semibold">
                        ₹{item.price * item.qty}
                      </p>

                    </div>

                  </div>
                </div>
              ))
            )}

          </div>

          {/* RIGHT */}
          <div className="bg-white/70 p-6 rounded-3xl border border-yellow-500/10 h-fit">

            <h2 className="text-2xl font-semibold">
              Checkout
            </h2>

            {/* LOCATION */}
            <div className="mt-5">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-3 rounded-xl border"
              >
                <option>Kerala</option>
                <option>TamilNadu</option>
                <option>Karnataka</option>
                <option>Default</option>
              </select>
            </div>

            {/* TOTAL */}
            <div className="mt-6 space-y-2">
              <p>Subtotal: ₹{subtotal}</p>
              <p>Shipping: ₹{shipping}</p>
              <p className="font-bold text-yellow-600 text-xl">
                Total: ₹{total}
              </p>
            </div>

            <button className="mt-6 w-full bg-[#D4AF37] text-white py-3 rounded-full flex items-center justify-center gap-2">
              Pay Now <ArrowRight />
            </button>

            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={14} />
              Secure Payment
            </div>

          </div>

        </div>
      </div>
    </main>
  );
                          }
