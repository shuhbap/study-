"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function ProductPage() {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const price = 199;
  const total = price * qty;

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Navbar />

      <section className="pt-28 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* IMAGE */}
        <div>
          <Image
            src="/9D2F3332-C688-4224-83F8-94CAE44E9F91.png"
            alt="product"
            width={500}
            height={500}
          />
        </div>

        {/* DETAILS */}
        <div>

          <h1 className="text-4xl font-bold">
            Instant Biriyani Masala
          </h1>

          <p className="mt-2 text-gray-600">
            Premium luxury spice blend
          </p>

          {/* PRICE */}
          <h2 className="text-3xl mt-6 text-yellow-600 font-bold">
            ₹{total}
          </h2>

          {/* QTY */}
          <div className="flex items-center gap-4 mt-6">
            <button onClick={() => setQty(q => q > 1 ? q - 1 : 1)}>
              <Minus />
            </button>

            <span>{qty}</span>

            <button onClick={() => setQty(q => q + 1)}>
              <Plus />
            </button>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={() =>
              addToCart({
                id: "masala-1",
                name: "Biriyani Masala",
                price,
                qty,
                image: "/9D2F3332-C688-4224-83F8-94CAE44E9F91.png",
              })
            }
            className="mt-8 bg-[#D4AF37] text-white px-8 py-3 rounded-full flex items-center gap-2"
          >
            <ShoppingCart />
            Add To Cart
          </button>

        </div>

      </section>
    </main>
  );
}
