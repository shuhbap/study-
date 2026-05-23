"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ShoppingCart,
  ShieldCheck,
  Star,
  Truck,
  Minus,
  Plus,
  Heart,
} from "lucide-react";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useCart } from "@/context/CartContext";

export default function ProductPage() {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const price = 199;
  const total = qty * price;

  const product = {
    id: 1,
    name: "Instant Biriyani Masala",
    price: 199,
    image: "/9D2F3332-C688-4224-83F8-94CAE44E9F91.png",
  };

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
  };

  return (
    <main className="bg-[#FAF7F2] min-h-screen overflow-hidden">

      <Navbar />

      <section className="pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* BACK */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-yellow-700 transition"
          >
            <ArrowLeft size={18} />
            Back To Store
          </Link>

          <div className="mt-8 grid lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <div className="relative flex justify-center">
              <div className="absolute h-[350px] w-[350px] rounded-full bg-yellow-300/20 blur-3xl" />

              <div className="relative rounded-[40px] border border-yellow-500/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_20px_70px_rgba(212,175,55,0.15)]">
                <Image
                  src={product.image}
                  alt="product"
                  width={550}
                  height={550}
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div>

              <h1 className="text-4xl md:text-6xl font-semibold" style={{ fontFamily: "serif" }}>
                Instant Biriyani <br />
                <span className="text-[#D4AF37]">Masala Mix</span>
              </h1>

              {/* PRICE */}
              <div className="mt-10">
                <p className="text-sm text-neutral-500">Price</p>
                <h2 className="text-5xl font-semibold text-[#D4AF37]">
                  ₹{total}
                </h2>
              </div>

              {/* QTY */}
              <div className="mt-8">
                <p className="text-sm text-neutral-500 mb-3">Quantity</p>

                <div className="flex items-center gap-5 rounded-full border border-yellow-500/20 bg-white px-5 py-3 w-fit">

                  <button onClick={() => setQty((p) => (p > 1 ? p - 1 : 1))}>
                    <Minus size={18} className="text-yellow-700" />
                  </button>

                  <span className="text-lg font-medium">{qty}</span>

                  <button onClick={() => setQty((p) => p + 1)}>
                    <Plus size={18} className="text-yellow-700" />
                  </button>

                </div>
              </div>

              {/* ADD TO CART */}
              <button
                onClick={handleAddToCart}
                className="mt-10 flex items-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 text-white text-lg shadow-[0_15px_40px_rgba(212,175,55,0.35)] transition hover:scale-[1.03]"
              >
                <ShoppingCart size={20} />
                Add To Cart
              </button>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
