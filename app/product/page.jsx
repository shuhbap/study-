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
import Loader from "../components/Loader";

export default function ProductPage() {
  const [qty, setQty] = useState(1);

  const price = 199;

  const total = qty * price;

  return (
    <main className="bg-[#FAF7F2] min-h-screen overflow-hidden">
      <Loader />

      <Navbar />

      {/* PAGE */}
      <section className="pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* BACK */}
          <Link
            href="/"
            className="
            inline-flex items-center gap-2
            text-neutral-600
            hover:text-yellow-700
            transition
            "
          >
            <ArrowLeft size={18} />

            Back To Store
          </Link>

          {/* GRID */}
          <div
            className="
            mt-8
            grid lg:grid-cols-2
            gap-14
            items-center
            "
          >
            {/* LEFT IMAGE */}
            <div className="relative flex justify-center">
              {/* GLOW */}
              <div
                className="
                absolute
                h-[350px]
                w-[350px]
                rounded-full
                bg-yellow-300/20
                blur-3xl
                "
              />

              {/* CARD */}
              <div
                className="
                relative
                rounded-[40px]
                border border-yellow-500/10
                bg-white/70
                backdrop-blur-xl
                p-6 md:p-10
                shadow-[0_20px_70px_rgba(212,175,55,0.15)]
                "
              >
                <Image
                  src="/9D2F3332-C688-4224-83F8-94CAE44E9F91.png"
                  alt="Tamooh Product"
                  width={550}
                  height={550}
                  priority
                  className="
                  object-contain
                  drop-shadow-2xl
                  "
                />
              </div>
            </div>

            {/* RIGHT */}
            <div>
              {/* BADGE */}
              <div
                className="
                inline-flex items-center gap-2
                rounded-full
                border border-yellow-500/20
                bg-white
                px-4 py-2
                text-yellow-700
                text-sm
                "
              >
                Premium Collection
              </div>

              {/* TITLE */}
              <h1
                className="
                mt-6
                text-4xl md:text-6xl
                leading-tight
                font-semibold
                "
                style={{
                  fontFamily: "serif",
                }}
              >
                Instant Biriyani
                <br />

                <span className="text-[#D4AF37]">
                  Masala Mix
                </span>
              </h1>

              {/* RATING */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>

                <p className="text-neutral-500">
                  5.0 Premium Rating
                </p>
              </div>

              {/* DESC */}
              <p
                className="
                mt-7
                text-lg
                leading-relaxed
                text-neutral-600
                max-w-xl
                "
              >
                Crafted using premium handpicked spices with
                rich aroma and authentic royal flavor for
                luxury biriyani experiences at home.
              </p>

              {/* FEATURES */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div
                  className="
                  flex items-center gap-2
                  rounded-full
                  border border-yellow-500/20
                  bg-white
                  px-4 py-3
                  text-sm
                  "
                >
                  <ShieldCheck
                    size={17}
                    className="text-green-600"
                  />

                  Premium Quality
                </div>

                <div
                  className="
                  flex items-center gap-2
                  rounded-full
                  border border-yellow-500/20
                  bg-white
                  px-4 py-3
                  text-sm
                  "
                >
                  <Truck
                    size={17}
                    className="text-yellow-700"
                  />

                  Fast Delivery
                </div>
              </div>

              {/* PRICE */}
              <div className="mt-10">
                <p className="text-neutral-500 text-sm">
                  Premium Price
                </p>

                <h2 className="text-5xl font-semibold text-[#D4AF37] mt-2">
                  ₹{total}
                </h2>
              </div>

              {/* QUANTITY */}
              <div className="mt-8">
                <p className="text-sm text-neutral-500 mb-3">
                  Quantity
                </p>

                <div
                  className="
                  flex items-center gap-5
                  rounded-full
                  border border-yellow-500/20
                  bg-white
                  px-5 py-3
                  w-fit
                  "
                >
                  <button
                    onClick={() =>
                      setQty((prev) =>
                        prev > 1 ? prev - 1 : 1
                      )
                    }
                  >
                    <Minus
                      size={18}
                      className="text-yellow-700"
                    />
                  </button>

                  <span className="text-lg font-medium">
                    {qty}
                  </span>

                  <button
                    onClick={() =>
                      setQty((prev) => prev + 1)
                    }
                  >
                    <Plus
                      size={18}
                      className="text-yellow-700"
                    />
                  </button>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                {/* CART */}
                <Link href="/cart">
                  <button
                    className="
                    flex items-center gap-3
                    rounded-full
                    bg-[#D4AF37]
                    px-8 py-4
                    text-white
                    text-lg
                    shadow-[0_15px_40px_rgba(212,175,55,0.35)]
                    transition duration-300
                    hover:scale-[1.03]
                    "
                  >
                    <ShoppingCart size={20} />

                    Add To Cart
                  </button>
                </Link>

                {/* WISHLIST */}
                <button
                  className="
                  flex items-center gap-3
                  rounded-full
                  border border-yellow-500/20
                  bg-white
                  px-8 py-4
                  text-lg
                  transition duration-300
                  hover:border-yellow-600
                  "
                >
                  <Heart
                    size={20}
                    className="text-red-500"
                  />

                  Wishlist
                </button>
              </div>

              {/* DELIVERY */}
              <div
                className="
                mt-12
                rounded-[30px]
                border border-yellow-500/10
                bg-white/70
                backdrop-blur-xl
                p-6
                "
              >
                <div className="flex items-start gap-4">
                  <Truck
                    size={24}
                    className="text-yellow-700 mt-1"
                  />

                  <div>
                    <h3 className="text-xl font-semibold">
                      Fast Premium Delivery
                    </h3>

                    <p className="mt-2 text-neutral-600 leading-relaxed">
                      Delivered safely across India with
                      secure premium packaging and protected
                      shipping support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MORE DETAILS */}
          <div className="mt-24">
            <div className="max-w-4xl">
              <p className="text-yellow-600 tracking-[4px] uppercase text-sm">
                Product Details
              </p>

              <h2
                className="
                mt-4
                text-4xl md:text-5xl
                font-semibold
                "
                style={{
                  fontFamily: "serif",
                }}
              >
                Why TAMOOH?
              </h2>

              <p
                className="
                mt-8
                text-lg
                text-neutral-600
                leading-relaxed
                "
              >
                TAMOOH blends authentic traditional spices,
                elegant flavor balance and luxury quality to
                create a premium instant biriyani experience.
                Every pack is carefully designed for aroma,
                richness and unforgettable taste.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
