"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Star,
  ShieldCheck,
  Truck,
  Sparkles,
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
        min-h-screen
        flex items-center
        pt-28 pb-20
        px-4 md:px-8
        "
      >
        <div
          className="
          max-w-7xl mx-auto
          grid lg:grid-cols-2
          gap-14
          items-center
          "
        >
          {/* LEFT */}
          <div>
            <div
              className="
              inline-flex items-center gap-2
              rounded-full
              border border-yellow-500/20
              bg-white/80
              px-4 py-2
              text-sm
              text-yellow-700
              shadow-sm
              "
            >
              <Sparkles size={15} />

              Premium Biriyani Experience
            </div>

            <h1
              className="
              mt-6
              text-5xl md:text-7xl
              leading-tight
              font-semibold
              "
            >
              Luxury Taste
              <br />

              <span className="text-[#D4AF37]">
                In Every Spoon
              </span>
            </h1>

            <p
              className="
              mt-7
              max-w-xl
              text-neutral-600
              text-lg
              leading-relaxed
              "
            >
              Crafted with premium spices and rich aroma,
              TAMOOH delivers a royal biriyani experience
              designed for modern luxury kitchens.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/cart">
                <button
                  className="
                  flex items-center gap-2
                  rounded-full
                  bg-[#D4AF37]
                  px-8 py-4
                  text-white
                  shadow-[0_10px_30px_rgba(212,175,55,0.35)]
                  transition hover:scale-[1.03]
                  "
                >
                  Buy Now

                  <ArrowRight size={18} />
                </button>
              </Link>

              <button
                className="
                rounded-full
                border border-yellow-500/20
                bg-white
                px-8 py-4
                hover:border-yellow-600
                transition
                "
              >
                Explore Products
              </button>
            </div>

            {/* FEATURES */}
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <ShieldCheck
                  size={18}
                  className="text-green-600"
                />

                Premium Quality
              </div>

              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Truck
                  size={18}
                  className="text-yellow-700"
                />

                Fast Delivery
              </div>

              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Star
                  size={18}
                  className="text-yellow-500"
                />

                Trusted Flavor
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
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

            <div
              className="
              relative
              rounded-[40px]
              border border-yellow-500/10
              bg-white/70
              p-5
              shadow-[0_20px_60px_rgba(212,175,55,0.18)]
              backdrop-blur-xl
              "
            >
              <Image
                src="/9D2F3332-C688-4224-83F8-94CAE44E9F91.png"
                alt="Tamooh Product"
                width={520}
                height={520}
                className="
                object-contain
                drop-shadow-2xl
                "
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section
        id="products"
        className="
        py-24
        px-4 md:px-8
        "
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="
              text-yellow-600
              uppercase
              tracking-[4px]
              text-sm
              "
            >
              Product Collection
            </p>

            <h2
              className="
              mt-3
              text-4xl md:text-5xl
              font-semibold
              "
            >
              Choose Your Pack
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SINGLE */}
            <div
              className="
              group
              rounded-[35px]
              border border-yellow-500/10
              bg-white/80
              p-6
              shadow-[0_10px_40px_rgba(212,175,55,0.08)]
              transition duration-300
              hover:-translate-y-2
              "
            >
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
                  width={230}
                  height={230}
                  className="
                  object-contain
                  transition
                  duration-300
                  group-hover:scale-105
                  "
                />
              </div>

              <div className="mt-6">
                <p className="text-yellow-600 text-sm tracking-[3px] uppercase">
                  Single Pack
                </p>

                <h3 className="text-3xl font-semibold mt-2">
                  ₹199
                </h3>

                <p className="mt-3 text-neutral-600 leading-relaxed">
                  Perfect for small families and personal use
                  with premium authentic flavor.
                </p>

                <button
                  className="
                  mt-6
                  w-full
                  rounded-full
                  bg-[#D4AF37]
                  py-4
                  text-white
                  transition
                  hover:scale-[1.02]
                  "
                >
                  Buy Single Pack
                </button>
              </div>
            </div>

            {/* BULK */}
            <div
              className="
              group
              rounded-[35px]
              border border-yellow-500/10
              bg-white/80
              p-6
              shadow-[0_10px_40px_rgba(212,175,55,0.08)]
              transition duration-300
              hover:-translate-y-2
              "
            >
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
                  width={230}
                  height={230}
                  className="
                  object-contain
                  transition
                  duration-300
                  group-hover:scale-105
                  "
                />
              </div>

              <div className="mt-6">
                <p className="text-yellow-600 text-sm tracking-[3px] uppercase">
                  Bulk Pack
                </p>

                <h3 className="text-3xl font-semibold mt-2">
                  ₹999
                </h3>

                <p className="mt-3 text-neutral-600 leading-relaxed">
                  Ideal for restaurants, catering and large
                  scale premium cooking requirements.
                </p>

                <button
                  className="
                  mt-6
                  w-full
                  rounded-full
                  bg-[#D4AF37]
                  py-4
                  text-white
                  transition
                  hover:scale-[1.02]
                  "
                >
                  Buy Bulk Pack
                </button>
              </div>
            </div>

            {/* OFFER */}
            <div
              className="
              group
              rounded-[35px]
              border border-yellow-500/10
              bg-white/80
              p-6
              shadow-[0_10px_40px_rgba(212,175,55,0.08)]
              transition duration-300
              hover:-translate-y-2
              "
            >
              <div
                className="
                relative
                rounded-[30px]
                bg-[#f8f3e8]
                p-6
                flex justify-center
                "
              >
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
                  width={230}
                  height={230}
                  className="
                  object-contain
                  transition
                  duration-300
                  group-hover:scale-105
                  "
                />
              </div>

              <div className="mt-6">
                <p className="text-yellow-600 text-sm tracking-[3px] uppercase">
                  Offer Pack
                </p>

                <h3 className="text-3xl font-semibold mt-2">
                  ₹499
                </h3>

                <p className="mt-3 text-neutral-600 leading-relaxed">
                  Special combo offer with premium savings and
                  exclusive festive packaging.
                </p>

                <button
                  className="
                  mt-6
                  w-full
                  rounded-full
                  bg-[#D4AF37]
                  py-4
                  text-white
                  transition
                  hover:scale-[1.02]
                  "
                >
                  Grab Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        className="
        py-24
        px-4 md:px-8
        bg-white
        "
      >
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="
            text-yellow-600
            uppercase
            tracking-[4px]
            text-sm
            "
          >
            Our Story
          </p>

          <h2
            className="
            mt-4
            text-4xl md:text-5xl
            font-semibold
            "
          >
            Tradition Meets Luxury
          </h2>

          <p
            className="
            mt-8
            text-lg
            text-neutral-600
            leading-relaxed
            "
          >
            TAMOOH was created to redefine instant biriyani
            experiences through premium spices, rich aroma,
            elegant packaging and authentic traditional taste.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="
        py-24
        px-4 md:px-8
        "
      >
        <div
          className="
          max-w-5xl mx-auto
          rounded-[40px]
          bg-[#D4AF37]
          p-10 md:p-16
          text-center
          text-white
          "
        >
          <p className="uppercase tracking-[4px] text-sm">
            Contact TAMOOH
          </p>

          <h2
            className="
            mt-4
            text-4xl md:text-5xl
            font-semibold
            "
          >
            Let's Build Premium Taste
          </h2>

          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            Connect with us for orders, distribution,
            partnerships and premium biriyani experiences.
          </p>

          <button
            className="
            mt-10
            rounded-full
            bg-white
            px-8 py-4
            text-black
            font-medium
            transition
            hover:scale-[1.03]
            "
          >
            Contact Now
          </button>
        </div>
      </section>
    </main>
  );
}
