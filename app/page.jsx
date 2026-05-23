
import Navbar from "../components/Navbar";

export default function Home(){
  return(
    <main>
      <Navbar/>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-yellow-50">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-600 mb-6">
          Luxury Taste.
        </h1>
        <p className="max-w-xl text-lg text-gray-700 mb-8">
          Premium instant biriyani masala with royal flavor and elegant presentation.
        </p>

        <div className="flex gap-4">
          <button className="gold-btn">Buy Now</button>
          <button className="border border-yellow-500 px-6 py-3 rounded-full">
            Explore
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop"
          className="mt-12 rounded-3xl shadow-2xl max-w-md"
        />
      </section>

      <section id="product" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-600 mb-12">
          Product Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl"
          />

          <div>
            <h3 className="text-3xl font-bold mb-4">
              Instant Biriyani Masala
            </h3>

            <p className="text-gray-600 mb-6">
              Crafted with premium spices and rich aroma for luxury kitchens.
            </p>

            <div className="flex gap-4">
              <button className="gold-btn">Add To Cart</button>
              <button className="border border-yellow-500 px-6 py-3 rounded-full">
                Razorpay Checkout
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="py-24 bg-white px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-600 mb-6">
          Our Story
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600">
          Born from tradition and elevated with premium craftsmanship,
          Tamooh creates luxury food experiences for modern families.
        </p>
      </section>

      <section id="distributor" className="py-24 px-6 bg-yellow-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-600 mb-6">
            Become A Distributor
          </h2>

          <p className="text-gray-700 mb-10">
            Join our premium network and grow with a luxury food brand.
          </p>

          <form className="grid md:grid-cols-2 gap-4">
            <input placeholder="Your Name" className="p-4 rounded-xl border"/>
            <input placeholder="Shop Name" className="p-4 rounded-xl border"/>
            <input placeholder="Phone" className="p-4 rounded-xl border"/>
            <input placeholder="Location" className="p-4 rounded-xl border"/>
            <button className="gold-btn md:col-span-2">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-600 mb-6">
          Contact Us
        </h2>

        <p className="mb-8 text-gray-600">
          WhatsApp • Instagram • Email
        </p>

        <button className="gold-btn">
          Contact Now
        </button>
      </section>
    </main>
  )
}
