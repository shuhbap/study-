"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";

import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
} from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <main className="min-h-screen bg-[#FAF7F2] pt-24 px-6">
      <Navbar />

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Cart
        </h1>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded-2xl mb-4"
            >
              <Image
                src={item.image}
                width={80}
                height={80}
                alt=""
              />

              <div className="flex-1">
                <h2>{item.name}</h2>

                <div className="flex items-center gap-3 mt-2">

                  <button
                    onClick={() =>
                      updateQty(item.id, item.qty - 1)
                    }
                  >
                    <Minus />
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() =>
                      updateQty(item.id, item.qty + 1)
                    }
                  >
                    <Plus />
                  </button>

                </div>
              </div>

              <p>₹{item.price * item.qty}</p>

              <button
                onClick={() => removeFromCart(item.id)}
              >
                <Trash2 />
              </button>
            </div>
          ))
        )}

        <h2 className="text-2xl mt-10">
          Total: ₹{subtotal}
        </h2>

      </div>
    </main>
  );
}
