"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // LOAD FROM LOCALSTORAGE
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD ITEM
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + (product.qty || 1) }
            : item
        );
      }

      return [...prev, { ...product, qty: product.qty || 1 }];
    });
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // UPDATE QTY
  const updateQty = (id, qty) => {
    if (qty < 1) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// SAFE HOOK (prevents crash)
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
