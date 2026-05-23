"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="
          fixed inset-0 z-[9999]
          flex items-center justify-center
          bg-[#FAF7F2]
          pointer-events-none
          "
        >
          <div className="flex flex-col items-center">
            {/* LOGO */}
            <motion.img
              src="/logo.jpg"
              alt="logo"
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              className="
              h-24 w-24
              rounded-full
              object-cover
              border border-yellow-500/40
              shadow-[0_10px_40px_rgba(212,175,55,0.25)]
              "
            />

            {/* BRAND */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className="
              mt-6
              text-4xl
              tracking-[6px]
              text-yellow-600
              font-semibold
              "
              style={{
                fontFamily: "serif",
              }}
            >
              TAMOOH
            </motion.h1>

            {/* GOLD LINE */}
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 120,
              }}
              transition={{
                delay: 1,
                duration: 1,
              }}
              className="
              mt-5
              h-[1px]
              bg-yellow-500
              "
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
