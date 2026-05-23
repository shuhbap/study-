"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  MapPin,
} from "lucide-react";

export default function Cart() {
  const [qty, setQty] = useState(1);

  const productPrice = 199;

  // LOCATION
  const [location, setLocation] = useState("Kerala");

  // SHIPPING
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

  // RAZORPAY LOAD
  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadRazorpay();
  }, []);

  // PAYMENT
  const handlePayment = async () => {
    const options = {
      key: "RAZORPAY_KEY_ID", // replace
      amount: total * 100,
      currency: "INR",
      name: "TAMOOH",
      description: "Premium Biriyani Masala",
      image: "/logo.jpg",

      handler: function (response) {
        alert(
          `Payment Successful\nPayment ID: ${response.razorpay_payment_id}`
        );
      },

      prefill: {
        name: "Customer",
        email: "customer@gmail.com",
        contact: "9999999999",
      },

      notes: {
        address: "Premium Spice Order",
      },

      theme: {
        color: "#D4AF37",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] pt-24 pb-14 px-3 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-8 md:mb-12">
          <p className="text-yellow-600 tracking-[3px] uppercase text-xs md:text-sm">
            Premium Checkout
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 mt-2">
            Your Cart
          </h1>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-[1.4fr_0.75fr] gap-6">
          {/* LEFT */}
          <div className="space-y-5">
            {/* ITEM */}
            <div
              className="
              rounded-[28px]
              border border-yellow-500/20
              bg-white/80
              backdrop-blur-xl
              p-4 md:p-6
              shadow-[0_10px_40px_rgba(212,175,55,0.08)]
              "
            >
              <div className="flex flex-col sm:flex-row gap-5">
                {/* IMAGE */}
                <div
                  className="
                  relative
                  w-full
                  sm:w-[170px]
                  h-[190px]
                  sm:h-[170px]
                  overflow-hidden
                  rounded-[22px]
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
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-yellow-600 tracking-[2px] uppercase text-[10px] md:text-xs">
                        Tamooh Signature
                      </p>

                      <h2 className="text-2xl md:text-3xl font-semibold mt-1">
                        Instant Biriyani Masala
                      </h2>

                      <p className="mt-3 text-sm md:text-base text-neutral-500 leading-relaxed max-w-lg">
                        Crafted with premium spices and rich aroma
                        for a luxury dining experience.
                      </p>
                    </div>

                    {/* DELETE */}
                    <button
                      className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full border border-red-200
                      hover:bg-red-50 transition
                      "
                    >
                      <Trash2
                        size={16}
                        className="text-red-500"
                      />
                    </button>
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                    {/* QUANTITY */}
                    <div
                      className="
                      flex items-center gap-4
                      rounded-full
                      border border-yellow-500/20
                      px-4 py-2
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
                          size={16}
                          className="text-yellow-700"
                        />
                      </button>

                      <span className="font-medium text-base">
                        {qty}
                      </span>

                      <button
                        onClick={() =>
                          setQty((prev) => prev + 1)
                        }
                      >
                        <Plus
                          size={16}
                          className="text-yellow-700"
                        />
                      </button>
                    </div>

                    {/* PRICE */}
                    <div className="text-left sm:text-right">
                      <p className="text-sm text-neutral-500">
                        Total Price
                      </p>

                      <h3 className="text-3xl font-semibold text-yellow-600 mt-1">
                        ₹{subtotal}
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
            rounded-[28px]
            border border-yellow-500/20
            bg-white/80
            backdrop-blur-xl
            p-5 md:p-7
            shadow-[0_10px_40px_rgba(212,175,55,0.08)]
            sticky top-24
            "
          >
            <p className="text-yellow-600 tracking-[3px] uppercase text-xs md:text-sm">
              Order Summary
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mt-2">
              Checkout
            </h2>

            {/* LOCATION */}
            <div className="mt-7">
              <label className="text-sm text-neutral-500 mb-2 block">
                Shipping Location
              </label>

              <div className="relative">
                <MapPin
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-700"
                />

                <select
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                  className="
                  w-full
                  rounded-2xl
                  border border-yellow-500/20
                  bg-[#faf7f2]
                  py-3 pl-11 pr-4
                  outline-none
                  text-sm
                  "
                >
                  <option value="Kerala">Kerala</option>
                  <option value="TamilNadu">
                    Tamil Nadu
                  </option>
                  <option value="Karnataka">
                    Karnataka
                  </option>
                  <option value="Default">
                    Other States
                  </option>
                </select>
              </div>
            </div>

            {/* SUMMARY */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-neutral-500 text-sm">
                  Subtotal
                </p>

                <p className="font-medium">
                  ₹{subtotal}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-neutral-500 text-sm">
                  Shipping
                </p>

                <p className="font-medium">
                  ₹{shipping}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-neutral-500 text-sm">
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
                  ₹{total}
                </h3>
              </div>
            </div>

            {/* PAYMENT BUTTON */}
            <button
              onClick={handlePayment}
              className="
              mt-8
              flex w-full items-center justify-center gap-3
              rounded-full
              bg-[#D4AF37]
              px-5 py-4
              text-white
              text-base md:text-lg
              shadow-[0_10px_30px_rgba(212,175,55,0.35)]
              transition duration-300
              hover:scale-[1.01]
              active:scale-[0.98]
              "
            >
              Continue To Payment

              <ArrowRight size={18} />
            </button>

            {/* SECURE */}
            <p className="mt-5 text-center text-xs md:text-sm text-neutral-500">
              Secure payment powered by Razorpay
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
