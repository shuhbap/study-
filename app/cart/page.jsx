"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  MapPin,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";

export default function Cart() {
  const [qty, setQty] = useState(1);

  const [menuOpen, setMenuOpen] = useState(false);

  // PRICE
  const productPrice = 199;

  // SHIPPING LOCATION
  const [location, setLocation] = useState("Kerala");

  // SHIPPING RATE
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

    script.src =
      "https://checkout.razorpay.com/v1/checkout.js";

    script.async = true;

    document.body.appendChild(script);
  }, []);

  // PAYMENT
  const handlePayment = async () => {
    const options = {
      key: "RAZORPAY_KEY_ID", // replace with your key

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

      theme: {
        color: "#D4AF37",
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.open();
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* NAVBAR */}
      <header
        className="
        fixed top-0 left-0 z-50
        w-full
        border-b border-yellow-500/10
        bg-white/70
        backdrop-blur-xl
        "
      >
        <div
          className="
          max-w-7xl mx-auto
          px-4 md:px-8
          h-[78px]
          flex items-center justify-between
          "
        >
          {/* LOGO */}
          <Link href="/">
            <h1
              className="
              text-2xl md:text-3xl
              font-semibold
              tracking-wide
              text-yellow-700
              "
            >
              TAMOOH
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-neutral-700 hover:text-yellow-700 transition"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="text-neutral-700 hover:text-yellow-700 transition"
            >
              Shop
            </Link>

            <Link
              href="/about"
              className="text-neutral-700 hover:text-yellow-700 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-neutral-700 hover:text-yellow-700 transition"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            md:hidden
            flex items-center justify-center
            h-11 w-11
            rounded-full
            border border-yellow-500/20
            bg-white
            "
          >
            {menuOpen ? (
              <X
                size={20}
                className="text-yellow-700"
              />
            ) : (
              <Menu
                size={20}
                className="text-yellow-700"
              />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className="
            md:hidden
            border-t border-yellow-500/10
            bg-white
            px-6 py-6
            space-y-5
            "
          >
            <Link
              href="/"
              className="block text-neutral-700"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="block text-neutral-700"
            >
              Shop
            </Link>

            <Link
              href="/about"
              className="block text-neutral-700"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="block text-neutral-700"
            >
              Contact
            </Link>
          </div>
        )}
      </header>

      {/* MAIN */}
      <section className="pt-28 pb-14 px-3 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* TOP */}
          <div className="mb-8 md:mb-12">
            <p
              className="
              text-yellow-600
              tracking-[3px]
              uppercase
              text-xs md:text-sm
              "
            >
              Premium Checkout
            </p>

            <h1
              className="
              text-3xl md:text-5xl
              font-semibold
              text-neutral-900
              mt-2
              "
            >
              Your Cart
            </h1>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-[1.4fr_0.75fr] gap-6">
            {/* LEFT */}
            <div className="space-y-5">
              {/* CART ITEM */}
              <div
                className="
                rounded-[30px]
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
                        <p
                          className="
                          text-yellow-600
                          tracking-[2px]
                          uppercase
                          text-[10px] md:text-xs
                          "
                        >
                          Tamooh Signature
                        </p>

                        <h2
                          className="
                          text-2xl md:text-3xl
                          font-semibold
                          mt-1
                          "
                        >
                          Instant Biriyani Masala
                        </h2>

                        <p
                          className="
                          mt-3
                          text-sm md:text-base
                          text-neutral-500
                          leading-relaxed
                          max-w-lg
                          "
                        >
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
                    <div
                      className="
                      mt-7
                      flex flex-col sm:flex-row
                      sm:items-center sm:justify-between
                      gap-5
                      "
                    >
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

                        <h3
                          className="
                          text-3xl
                          font-semibold
                          text-yellow-600
                          mt-1
                          "
                        >
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
              rounded-[30px]
              border border-yellow-500/20
              bg-white/80
              backdrop-blur-xl
              p-5 md:p-7
              shadow-[0_10px_40px_rgba(212,175,55,0.08)]
              sticky top-24
              "
            >
              <p
                className="
                text-yellow-600
                tracking-[3px]
                uppercase
                text-xs md:text-sm
                "
              >
                Order Summary
              </p>

              <h2
                className="
                text-2xl md:text-3xl
                font-semibold
                mt-2
                "
              >
                Checkout
              </h2>

              {/* PAYMENT APPS */}
              <div className="mt-6">
                <p className="text-sm text-neutral-500 mb-3">
                  Secure Payments
                </p>

                <div
                  className="
                  flex flex-wrap items-center gap-3
                  rounded-2xl
                  border border-yellow-500/20
                  bg-[#faf7f2]
                  p-4
                  "
                >
                  {/* VISA */}
                  <div
                    className="
                    flex items-center justify-center
                    h-14 w-14
                    rounded-xl
                    bg-white
                    border border-yellow-500/10
                    shadow-sm
                    "
                  >
                    <Image
                      src="/payments/IMG_2402.jpeg"
                      alt="Visa"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>

                  {/* MASTERCARD */}
                  <div
                    className="
                    flex items-center justify-center
                    h-14 w-14
                    rounded-xl
                    bg-white
                    border border-yellow-500/10
                    shadow-sm
                    "
                  >
                    <Image
                      src="/payments/IMG_2403.jpeg"
                      alt="Mastercard"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>

                  {/* GPAY */}
                  <div
                    className="
                    flex items-center justify-center
                    h-14 w-14
                    rounded-xl
                    bg-white
                    border border-yellow-500/10
                    shadow-sm
                    "
                  >
                    <Image
                      src="/payments/IMG_2400.png"
                      alt="Google Pay"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>

                  {/* PHONEPE */}
                  <div
                    className="
                    flex items-center justify-center
                    h-14 w-14
                    rounded-xl
                    bg-white
                    border border-yellow-500/10
                    shadow-sm
                    "
                  >
                    <Image
                      src="/payments/IMG_2406.jpeg"
                      alt="PhonePe"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>

                  {/* PAYTM */}
                  <div
                    className="
                    flex items-center justify-center
                    h-14 w-14
                    rounded-xl
                    bg-white
                    border border-yellow-500/10
                    shadow-sm
                    "
                  >
                    <Image
                      src="/payments/IMG_2405.jpeg"
                      alt="Paytm"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>

                  {/* UPI */}
                  <div
                    className="
                    flex items-center justify-center
                    h-14 w-14
                    rounded-xl
                    bg-white
                    border border-yellow-500/10
                    shadow-sm
                    "
                  >
                    <Image
                      src="/payments/IMG_2404.jpeg"
                      alt="UPI"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* LOCATION */}
              <div className="mt-7">
                <label
                  className="
                  text-sm
                  text-neutral-500
                  mb-2 block
                  "
                >
                  Shipping Location
                </label>

                <div className="relative">
                  <MapPin
                    size={17}
                    className="
                    absolute
                    left-4 top-1/2
                    -translate-y-1/2
                    text-yellow-700
                    "
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
                    <option value="Kerala">
                      Kerala
                    </option>

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

                  <h3
                    className="
                    text-3xl
                    font-semibold
                    text-yellow-600
                    "
                  >
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
              <div
                className="
                mt-5
                flex items-center justify-center gap-2
                text-xs md:text-sm
                text-neutral-500
                "
              >
                <ShieldCheck
                  size={15}
                  className="text-green-600"
                />

                Secure payment powered by Razorpay
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
