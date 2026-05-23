"use client";

import Navbar from "../components/Navbar";

export default function Home() {

  const addToCart = () => {
    alert("Added To Cart");
  };

  return (
    <main className="min-h-screen bg-white">

      <Navbar />

      {/* HERO */}
      <section
        className="
        min-h-screen
        flex flex-col
        justify-center items-center
        text-center
        px-6
        bg-gradient-to-b
        from-white
        to-yellow-50
        "
      >

        <h1
          className="
          text-5xl md:text-7xl
          font-bold
          text-yellow-600
          "
        >
          Luxury Taste
        </h1>

        <p
          className="
          mt-6
          max-w-2xl
          text-lg
          text-neutral-600
          "
        >
          Premium instant biriyani masala with royal flavor.
        </p>

        <div className="mt-8 flex gap-4">

          <button
            onClick={addToCart}
            className="
            rounded-full
            bg-yellow-500
            px-8 py-4
            text-white
            transition
            hover:scale-105
            "
          >
            Buy Now
          </button>

          <a
            href="#product"
            className="
            rounded-full
            border border-yellow-500
            px-8 py-4
            text-yellow-600
            "
          >
            Explore
          </a>

        </div>

      </section>

      {/* PRODUCT */}
      <section
        id="product"
        className="
        px-6 py-24
        max-w-6xl
        mx-auto
        "
      >

        <h2
          className="
          text-4xl
          font-bold
          text-center
          text-yellow-600
          "
        >
          Product Experience
        </h2>

        <div
          className="
          mt-16
          grid md:grid-cols-2
          gap-10
          items-center
          "
        >

          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop"
            alt="product"
            className="
            rounded-3xl
            shadow-2xl
            "
          />

          <div>

            <h3
              className="
              text-3xl
              font-bold
              text-neutral-800
              "
            >
              Instant Biriyani Masala
            </h3>

            <p
              className="
              mt-4
              text-neutral-600
              "
            >
              Crafted with premium spices and luxury aroma.
            </p>

            <button
              onClick={addToCart}
              className="
              mt-8
              rounded-full
              bg-yellow-500
              px-8 py-4
              text-white
              transition
              hover:scale-105
              "
            >
              Add To Cart
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}
