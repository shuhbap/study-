"use client";

import Image from "next/image";
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight
} from "lucide-react";

export default function Cart() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] pt-32 px-4 md:px-10">

      {/* TOP */}
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-yellow-600 tracking-[4px] uppercase text-sm">
            Premium Checkout
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold text-neutral-900 mt-3">
            Your Cart
          </h1>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1.5fr_0.7fr] gap-8">

          {/* LEFT */}
          <div className="space-y-6">

            {/* CART ITEM */}
            <div
              className="
              rounded-[35px]
              border border-yellow-500/20
              bg-white/80
              backdrop-blur-xl
              p-5 md:p-7
              shadow-[0_10px_40px_rgba(212,175,55,0.10)]
              "
            >
              <div className="flex flex-col md:flex-row gap-6">

                {/* IMAGE */}
                <div
                  className="
                  relative
                  h-[260px]
                  md:h-[220px]
                  md:w-[220px]
                  overflow-hidden
                  rounded-[28px]
                  bg-[#f7f3ea]
                  "
                >
                  <Image
                    src="/logo.jpg"
                    alt="product"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex-1">

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-yellow-600 tracking-[3px] text-xs uppercase">
                        Tamooh Signature
                      </p>

                      <h2 className="text-3xl font-semibold mt-2">
                        Instant Biriyani Masala
                      </h2>

                      <p className="mt-4 text-neutral-500 leading-relaxed max-w-lg">
                        Crafted with premium spices and rich aroma
                        for a luxury dining experience.
                      </p>
                    </div>

                    {/* DELETE */}
                    <button
                      className="
                      flex h-12 w-12 items-center justify-center
                      rounded-full border border-red-200
                      transition hover:bg-red-50
                      "
                    >
                      <Trash2 size={18} className="text-red-500" />
                    </button>
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                    {/* QUANTITY */}
                    <div
                      className="
                      flex items-center gap-5
                      rounded-full
                      border border-yellow-500/20
                      px-5 py-3
                      w-fit
                      "
                    >
                      <button>
                        <Minus
                          size={18}
                          className="text-yellow-700"
                        />
                      </button>

                      <span className="text-lg font-medium">
                        1
                      </span>

                      <button>
                        <Plus
                          size={18}
                          className="text-yellow-700"
                        />
                      </button>
                    </div>

                    {/* PRICE */}
                    <div className="text-left md:text-right">
                      <p className="text-sm text-neutral-500">
                        Total Price
                      </p>

                      <h3 className="text-4xl font-semibold text-yellow-600 mt-1">
                        ₹199
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
            h-fit
            rounded-[35px]
            border border-yellow-500/20
            bg-white/80
            backdrop-blur-xl
            p-7
            shadow-[0_10px_40px_rgba(212,175,55,0.10)]
            sticky top-28
            "
          >
            <p className="text-yellow-600 tracking-[4px] uppercase text-sm">
              Order Summary
            </p>

            <h2 className="text-3xl font-semibold mt-3">
              Checkout
            </h2>

            {/* SUMMARY */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center justify-between">
                <p className="text-neutral-500">
                  Subtotal
                </p>

                <p className="font-medium">
                  ₹199
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-neutral-500">
                  Shipping
                </p>

                <p className="font-medium">
                  Free
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-neutral-500">
                  Tax
                </p>

                <p className="font-medium">
                  ₹0
                </p>
              </div>

              <div className="h-[1px] bg-yellow-100" />

              <div className="flex items-center justify-between">
                <p className="text-lg font-medium">
                  Total
                </p>

                <h3 className="text-3xl font-semibold text-yellow-600">
                  ₹199
                </h3>
              </div>
            </div>

            {/* BUTTON */}
            <button
              className="
              mt-10
              flex w-full items-center justify-center gap-3
              rounded-full
              bg-[#D4AF37]
              px-6 py-4
              text-white
              text-lg
              shadow-[0_10px_30px_rgba(212,175,55,0.35)]
              transition duration-300
              hover:scale-[1.02]
              "
            >
              Continue To Payment

              <ArrowRight size={20} />
            </button>

            {/* SECURE */}
            <p className="mt-6 text-center text-sm text-neutral-500">
              Secure payment powered by Razorpay
            </p>
          </div>
        </div>
      </div>
    </main>
  );
                }
