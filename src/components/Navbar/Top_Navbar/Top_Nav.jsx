import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";

function Top_Nav() {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const messages = [
    "Free standard shipping over $75 🚚",
    "15% student discount 🎓",
    "Refer a friend to earn $10 off 💸",
  ];

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => {
      setIsMounted(false);
      clearInterval(interval);
    };
  }, [messages.length]);

  if (!isMounted) return null;

  return (
    <div
      className="py-4 flex justify-center items-center bg-gray-100"
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className="text-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }} // Slightly shorter duration
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default Top_Nav;
