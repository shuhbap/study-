"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ShoppingBag
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // BODY SCROLL LOCK
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      {/* GOOGLE FONT */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap');

        .tamooh-logo {
          font-family: 'Cinzel', serif;
          letter-spacing: 3px;
        }

        .menu-link {
          position: relative;
          width: fit-content;
        }

        .menu-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 1px;
          background: #d4af37;
          transition: 0.4s;
        }

        .menu-link:hover::after {
          width: 100%;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mt-4 flex items-center justify-between rounded-full border border-yellow-500/30 bg-white/70 px-6 py-4 shadow-[0_8px_30px_rgba(212,175,55,0.10)] backdrop-blur-xl">

            {/* LOGO */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="logo"
                className="h-11 w-11 rounded-full object-cover border border-yellow-500/40 shadow-md"
              />

              <h1 className="tamooh-logo text-2xl md:text-3xl font-semibold text-yellow-600">
                TAMOOH
              </h1>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-neutral-700">
              <a href="#" className="menu-link transition hover:text-yellow-600">
                Home
              </a>

              <a
                href="#product"
                className="menu-link transition hover:text-yellow-600"
              >
                Product
              </a>

              <a
                href="#story"
                className="menu-link transition hover:text-yellow-600"
              >
                Story
              </a>

              <a
                href="#distributor"
                className="menu-link transition hover:text-yellow-600"
              >
                Distributor
              </a>

              <a
                href="#contact"
                className="menu-link transition hover:text-yellow-600"
              >
                Contact
              </a>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              {/* CART */}
              <button
                className="
                group relative flex h-12 w-12 items-center justify-center
                rounded-full border border-yellow-500/30
                bg-gradient-to-b from-white to-yellow-50
                shadow-[0_5px_20px_rgba(212,175,55,0.18)]
                transition duration-300
                hover:scale-105
                "
              >
                <ShoppingBag
                  size={20}
                  className="
                  text-yellow-600 transition
                  group-hover:scale-110
                  "
                />

                <div
                  className="
                  absolute inset-0 rounded-full
                  bg-yellow-400/10 blur-xl
                  opacity-0 transition
                  group-hover:opacity-100
                  "
                />
              </button>

              {/* HAMBURGER */}
              <button
                onClick={() => setOpen(true)}
                className="
                md:hidden group relative flex h-12 w-12 items-center justify-center
                rounded-full border border-yellow-500/30
                bg-gradient-to-b from-white to-yellow-50
                shadow-[0_5px_20px_rgba(212,175,55,0.18)]
                transition duration-300
                hover:scale-105
                "
              >
                <Menu
                  size={22}
                  className="
                  text-yellow-600 transition
                  group-hover:rotate-90
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MENU */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-[100]
          flex items-center justify-center
          bg-white/80 backdrop-blur-2xl
          transition-all duration-500

          ${open
            ? "opacity-100 visible"
            : "opacity-0 invisible"}
        `}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="
          absolute top-7 right-7
          flex h-12 w-12 items-center justify-center
          rounded-full border border-yellow-500/30
          bg-white shadow-lg
          "
        >
          <X size={24} className="text-yellow-600" />
        </button>

        {/* MENU CONTENT */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center gap-8"
        >
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="
            text-4xl font-light tracking-wide
            text-neutral-800 transition
            hover:scale-105 hover:text-yellow-600
            "
          >
            Home
          </a>

          <a
            href="#product"
            onClick={() => setOpen(false)}
            className="
            text-4xl font-light tracking-wide
            text-neutral-800 transition
            hover:scale-105 hover:text-yellow-600
            "
          >
            Product
          </a>

          <a
            href="#story"
            onClick={() => setOpen(false)}
            className="
            text-4xl font-light tracking-wide
            text-neutral-800 transition
            hover:scale-105 hover:text-yellow-600
            "
          >
            Story
          </a>

          <a
            href="#distributor"
            onClick={() => setOpen(false)}
            className="
            text-4xl font-light tracking-wide
            text-neutral-800 transition
            hover:scale-105 hover:text-yellow-600
            "
          >
            Distributor
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
            text-4xl font-light tracking-wide
            text-neutral-800 transition
            hover:scale-105 hover:text-yellow-600
            "
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
              }
