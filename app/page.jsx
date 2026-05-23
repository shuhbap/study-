"use client";

import Link from "next/link";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

export default function Home() {

  // ADD TO CART
  const addToCart = () => {
    const product = {
      name: "Instant Biriyani Masala",
      price: 199,
      quantity: 1,
      image: "/logo.jpg",
    };

    localStorage.setItem(
      "cart",
      JSON.stringify(product)
    );

    alert("Added To Cart ✨");
  };

  // BUY NOW
  const buyNow = () => {
    addToCart();
    window.location.href = "/cart";
  };

  return (
    <>
      <Loader />

      {/* PREMIUM FONT */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Outfit', sans-serif;
        }

        .luxury-heading {
          font-family: 'Cinzel', serif;
        }
      `}</style>

      <main className="overflow-hidden">
        <Navbar />

        {/* HERO */}
        <section
          className="
          relative min-h-screen
          flex flex-col justify-center items-center
          text-center px-6
          bg-gradient-to-b from-white to-yellow-50
          "
        >

          {/* BACKGROUND GLOW */}
          <div
            className="
            absolute top-1/2 left-1/2
            h-[500px] w-[500px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-yellow-200/20
            blur-3xl
            "
          />

          {/* CONTENT */}
          <div className="relative z-10">

            <p
              className="
              mb-5 text-sm uppercase
              tracking-[6px]
              text-yellow-600
              "
            >
              Premium Collection
            </p>

            <h1
              className="
              luxury-heading
              text-5xl md:text-7xl
              font-semibold
              text-yellow-600
              leading-tight
              "
            >
              Luxury Taste.
              <br />
              Royal Aroma.
            </h1>

            <p
              className="
              mx-auto mt-8
              max-w-2xl
              text-lg leading-relaxed
              text-gray-600
              "
            >
              Premium instant biriyani masala crafted
              with elegant spices and unforgettable aroma.
            </p>

            {/* BUTTONS */}
            <div
              className="
              mt-10 flex flex-col sm:flex-row
              items-center justify-center gap-5
              "
            >

              {/* BUY NOW */}
              <button
                onClick={buyNow}
                className="
                group relative overflow-hidden
                rounded-full
                bg-[#D4AF37]
                px-10 py-4
                text-white text-lg
                shadow-[0_10px_30px_rgba(212,175,55,0.30)]
                transition duration-300
                hover:scale-105
                "
              >
                <span className="relative z-10">
                  Buy Now
                </span>

                <div
                  className="
                  absolute inset-0
                  translate-y-full
                  bg-black/10
                  transition duration-500
                  group-hover:translate-y-0
                  "
                />
              </button>

              {/* EXPLORE */}
              <a href="#product">
                <button
                  className="
                  rounded-full border
                  border-yellow-500/30
                  bg-white/70
                  px-10 py-4
                  text-lg text-yellow-700
                  backdrop-blur-xl
                  transition duration-300
                  hover:scale-105
                  hover:bg-yellow-50
                  "
                >
                  Explore
                </button>
              </a>
            </div>

            {/* PRODUCT IMAGE */}
            <div className="mt-16 flex justify-center">

              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop"
                alt="product"
                className="
                w-full max-w-md
                rounded-[40px]
                border border-yellow-500/20
                shadow-[0_20px_60px_rgba(212,175,55,0.15)]
                transition duration-500
                hover:scale-[1.02]
                "
              />
            </div>
          </div>
        </section>

        {/* PRODUCT */}
        <section
          id="product"
          className="py-28 px-6"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mb-20 text-center">

              <p
                className="
                uppercase tracking-[5px]
                text-yellow-600 text-sm
                "
              >
                Product Experience
              </p>

              <h2
                className="
                luxury-heading
                mt-4 text-5xl
                font-semibold text-neutral-900
                "
              >
                Crafted For Royal Kitchens
              </h2>
            </div>

            <div
              className="
              grid items-center
              gap-14 md:grid-cols-2
              "
            >

              {/* IMAGE */}
              <div className="relative">

                <div
                  className="
                  absolute inset-0
                  rounded-[40px]
                  bg-yellow-200/20 blur-3xl
                  "
                />

                <img
                  src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop"
                  alt="product"
                  className="
                  relative z-10
                  rounded-[40px]
                  border border-yellow-500/20
                  shadow-[0_20px_60px_rgba(212,175,55,0.15)]
                  "
                />
              </div>

              {/* CONTENT */}
              <div>

                <p
                  className="
                  uppercase tracking-[5px]
                  text-yellow-600 text-sm
                  "
                >
                  Signature Blend
                </p>

                <h3
                  className="
                  luxury-heading
                  mt-4 text-5xl
                  leading-tight
                  font-semibold
                  "
                >
                  Instant
                  <br />
                  Biriyani Masala
                </h3>

                <p
                  className="
                  mt-8 text-lg
                  leading-relaxed
                  text-neutral-600
                  "
                >
                  Crafted with handpicked premium spices
                  for rich aroma, royal flavor, and luxury
                  cooking experience.
                </p>

                {/* PRICE */}
                <div className="mt-10">
                  <h4
                    className="
                    text-5xl font-semibold
                    text-yellow-600
                    "
                  >
                    ₹199
                  </h4>
                </div>

                {/* BUTTONS */}
                <div
                  className="
                  mt-10 flex flex-col sm:flex-row
                  gap-5
                  "
                >

                  {/* ADD TO CART */}
                  <button
                    onClick={addToCart}
                    className="
                    rounded-full
                    bg-[#D4AF37]
                    px-10 py-4
                    text-lg text-white
                    shadow-[0_10px_30px_rgba(212,175,55,0.30)]
                    transition duration-300
                    hover:scale-105
                    "
                  >
                    Add To Cart
                  </button>

                  {/* GO TO CART */}
                  <Link href="/cart">
                    <button
                      className="
                      rounded-full border
                      border-yellow-500/30
                      bg-white
                      px-10 py-4
                      text-lg text-yellow-700
                      transition duration-300
                      hover:scale-105
                      hover:bg-yellow-50
                      "
                    >
                      Open Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
            }
