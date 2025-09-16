import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Top_Nav from "./Top_Navbar/Top_Nav";
import Main_Navbar from "./Main_Navbar/Main_Navbar";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.5;
      setIsScrolled(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top_Nav*/}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <Top_Nav />
      </motion.div>

      {/* Main_Navbar*/}
      <motion.div
        initial={false}
        animate={{ top: isScrolled ? 0 : 48 }} 
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-0 w-full z-50"
      >
        <Main_Navbar />
      </motion.div>
    </>
  );
}

export default Navbar;
