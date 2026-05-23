"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Star,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <main className="bg-[#FAF7F2] text-neutral-900 overflow-hidden">
      <Loader />

      <Navbar />

      {/* HERO */}
      <section
        className="
        relative
        min-h-screen
        flex items-center
        pt-28
        pb-24
        px-4 md:px-8
        "
      >
        {/* BG BLUR */}
        <div
          className="
          absolute
          top-20 right-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-yellow-300/20
          blur-3xl
          "
        />

        <div
          className="
          max-w-7xl mx-auto
          grid lg:grid-cols-2
          gap-16
          items-center
          relative z-10
          "
        >
          {/* LEFT */}
          <div>
            {/* BADGE */}
            <div
              className="
              inline-flex
              items-center gap-2
              rounded-full
              border border-yellow-500/20
              bg-white/80
              px-5 py-2
              text-sm
              text-yellow-700
              shadow-sm
              "
            >
              <Sparkles size={15} />

              Premium Biriyani Experience
            </div>

            {/* TITLE */}
            <h1
              className="
              mt-7
              text-5xl md:text-7xl
              leading-[1.05]
              font-semibold
              tracking-[-2px]
              "
              style={{
                fontFamily: "serif",
              }}
            >
              Our Story
              <br />

              <span className="text-[#D4AF37]">
                Begins With
              </span>

              <br />

              Taste.
            </h1>

            {/* DESC */}
            <p
              className="
              mt-8
              max-w-xl
              text-lg
              leading-relaxed
              text-neutral-600
              "
            >
              TAMOOH brings together authentic traditional
              biriyani flavor with luxury presentation,
              premium ingredients and unforgettable aroma.
            </p>

            {/* BUTTON */}
            <div className="mt-10">
              <Link href="#store">
                <button
                  className="
                  group
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
                  Explore Store

                  <ArrowRight
                    size={19}
                    className="
                    transition
                    group-hover:translate-x-1
                    "
                  />
                </button>
              </Link>
            </div>

            {/* FEATURES */}
            <div className="mt-14 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-semibold text-[#D4AF37]">
                  100%
                </h3>

                <p className="text-neutral-500 text-sm mt-1">
                  Premium Spices
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-[#D4AF37]">
                  24h
                </h3>

                <p className="text-neutral-500 text-sm mt-1">
                  Fast Delivery
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-[#D4AF37]">
                  5★
                </h3>

                <p className="text-neutral-500 text-sm mt-1">
                  Trusted Taste
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div
              className="
              absolute
              h-[380px]
              w-[380px]
              rounded-full
              bg-[#D4AF37]/20
              blur-3xl
              "
            />

            <div
              className="
              relative
              rounded-[45px]
              border border-yellow-500/10
              bg-white/70
              backdrop-blur-xl
              p-6
              shadow-[0_20px_70px_rgba(212,175,55,0.18)]
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
        </div>
      </section>

      {/* STORE */}
      <section
        id="store"
        className="
        py-24
        px-4 md:px-8
        "
      >
        <div className="max-w-7xl mx-auto">
          {/* TOP */}
          <div className="text-center mb-16">
            <p
              className="
              uppercase
              tracking-[4px]
              text-yellow-600
              text-sm
              "
            >
              Explore Products
            </p>

            <h2
              className="
              mt-4
              text-4xl md:text-6xl
              font-semibold
              "
              style={{
                fontFamily: "serif",
              }}
            >
              Luxury Collections
            </h2>
          </div>

          {/* PRODUCTS */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div
              className="
              group
              rounded-[35px]
              border border-yellow-500/10
              bg-white/80
              p-6
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(212,175,55,0.08)]
              transition duration-300
              hover:-translate-y-2
              "
            >
              {/* IMAGE */}
              <div
                className="
                rounded-[30px]
                bg-[#f8f3e8]
                p-6
                flex justify-center
                "
              >
                <Image
                  src="/9D2F3332-C688-4224-83F8-94CAE44E9F91.png"
                  alt="Single Pack"
                  width={240}
                  height={240}
                  className="
                  object-contain
                  transition duration-300
                  group-hover:scale-105
                  "
                />
              </div>

              {/* DETAILS */}
              <div className="mt-6">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                </div>

                <p className="mt-4 text-yellow-600 tracking-[3px] uppercase text-xs">
                  Single Pack
                </p>

                <h3 className="text-3xl font-semibold mt-2">
                  ₹199
                </h3>

                <p className="mt-3 text-neutral-600 leading-relaxed">
                  Perfect premium pack for daily luxury
                  cooking and rich authentic flavor.
                </p>

                <button
                  className="
                  mt-7
                  flex w-full items-center justify-center gap-2
                  rounded-full
                  bg-[#D4AF37]
                  py-4
                  text-white
                  transition duration-300
                  hover:scale-[1.02]
                  "
                >
                  <ShoppingBag size={17} />

                  Add To Cart
                </button>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
              group
              rounded-[35px]
              border border-yellow-500/10
              bg-white/80
              p-6
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(212,175,55,0.08)]
              transition duration-300
              hover:-translate-y-2
              "
            >
              {/* IMAGE */}
              <div
                className="
                rounded-[30px]
                bg-[#f8f3e8]
                p-6
                flex justify-center
                "
              >
                <Image
                  src="/9D2F3332-C688-4224-83F8-94CAE44E9F91.png"
                  alt="Bulk Pack"
                  width={240}
                  height={240}
                  className="
                  object-contain
                  transition duration-300
                  group-hover:scale-105
                  "
                />
              </div>

              {/* DETAILS */}
              <div className="mt-6">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                </div>

                <p className="mt-4 text-yellow-600 tracking-[3px] uppercase text-xs">
                  Bulk Pack
                </p>

                <h3 className="text-3xl font-semibold mt-2">
                  ₹999
                </h3>

                <p className="mt-3 text-neutral-600 leading-relaxed">
                  Designed for restaurants, catering and
                  premium large-scale cooking experiences.
                </p>

                <button
                  className="
                  mt-7
                  flex w-full items-center justify-center gap-2
                  rounded-full
                  bg-[#D4AF37]
                  py-4
                  text-white
                  transition duration-300
                  hover:scale-[1.02]
                  "
                >
                  <ShoppingBag size={17} />

                  Add To Cart
                </button>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="
              group
              rounded-[35px]
              border border-yellow-500/10
              bg-white/80
              p-6
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(212,175,55,0.08)]
              transition duration-300
              hover:-translate-y-2
              "
            >
              {/* IMAGE */}
              <div
                className="
                relative
                rounded-[30px]
                bg-[#f8f3e8]
                p-6
                flex justify-center
                "
              >
                {/* OFFER BADGE */}
                <div
                  className="
                  absolute top-4 right-4
                  rounded-full
                  bg-red-500
                  px-4 py-1
                  text-xs
                  text-white
                  "
                >
                  OFFER
                </div>

                <Image
                  src="/9D2F3332-C688-4224-83F8-94CAE44E9F91.png"
                  alt="Offer Pack"
                  width={240}
                  height={240}
                  className="
                  object-contain
                  transition duration-300
                  group-hover:scale-105
                  "
                />
              </div>

              {/* DETAILS */}
              <div className="mt-6">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                </div>

                <p className="mt-4 text-yellow-600 tracking-[3px] uppercase text-xs">
                  Offer Pack
                </p>

                <h3 className="text-3xl font-semibold mt-2">
                  ₹499
                </h3>

                <p className="mt-3 text-neutral-600 leading-relaxed">
                  Exclusive combo offer with luxury savings
                  and premium festive packaging.
                </p>

                <button
                  className="
                  mt-7
                  flex w-full items-center justify-center gap-2
                  rounded-full
                  bg-[#D4AF37]
                  py-4
                  text-white
                  transition duration-300
                  hover:scale-[1.02]
                  "
                >
                  <ShoppingBag size={17} />

                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
