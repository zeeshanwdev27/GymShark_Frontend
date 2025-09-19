import React, { useState, useEffect } from "react";
import {
  Heart,
  ShoppingBag,
  User,
  Search,
  Menu as MenuIcon,
} from "lucide-react";
import logo from "../../../assets/Gymshark/logo.avif";
import Menu from "./Menu/Menu";
import SearchBoxOverlay from "./SearchBoxOverlay/SearchBoxOverlay";
import { motion } from "motion/react";

function Main_Navbar({isScrolled}) {
  const [showSearch, setShowSearch] = useState(false);

  // Scroll Hide
  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSearch]);

  return (
    <div className="bg-white shadow w-full">
      {/* Top Row */}

      <div className="flex justify-between items-center py-7 px-7 md:py-4 md:px-12 ">
        <div className="flex items-center">
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <Menu />
          </div>
          {/* Mobile Hamburger */}
          <button className="block md:hidden">
            <MenuIcon className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

        {/* Logo */}
        <img
          src={logo}
          className="h-5  pl-10 md:ml-38 md:pr-0 object-contain"
          alt="GYMSHARK_LOGO"
        />

        {/* Right Icons */}
        <ul className="flex justify-center items-center md:gap-8 gap-6">
          {/* Desktop SearchBox */}
          <li className="hidden md:block">
            <div
              onClick={() => setShowSearch(true)}
              className="rounded-2xl bg-gray-100 hover:bg-white border border-transparent hover:border hover:border-gray-300 hover:cursor-pointer py-2 px-4 flex gap-3"
            >
              <Search className="w-5 h-6 cursor-pointer" strokeWidth="1.5" />
              <span className="text-gray-400 text-sm">
                What are you looking for to...
              </span>
            </div>
          </li>

          {/* Icons */}
          <li className="hidden md:block cursor-pointer hover-lift">
            <Heart className="w-5 h-6 cursor-pointer" strokeWidth={1.5} />
          </li>
          <li className="cursor-pointer hover-lift">
            <User className="w-5 h-6 cursor-pointer" strokeWidth={1.5} />
          </li>
          <li className="cursor-pointer hover-lift">
            <ShoppingBag className="w-5 h-6 cursor-pointer" strokeWidth={1.5} />
          </li>
        </ul>
      </div>

      {/* Mobile Search Bar */}
                 <motion.div
        initial={false}
        animate={{
          height: isScrolled ? 0 : "auto",
          opacity: isScrolled ? 0 : 1,
          marginBottom: isScrolled ? 0 : 20, // optional for spacing
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="overflow-hidden md:hidden px-4"
      >

      <div className="md:hidden block pb-5 px-4">
        <div
          onClick={() => setShowSearch(true)}
          className="rounded-4xl bg-gray-100 hover:bg-white border border-transparent hover:border hover:border-gray-300 hover:cursor-pointer py-3 px-4 flex gap-3"
        >
          <Search className="w-5 h-6 cursor-pointer" strokeWidth="1.5" />
          <span className="text-gray-400 text-sm">
            What are you looking for to...
          </span>
        </div>
      </div>

              
      </motion.div>

      {/* SearchBox Overlay */}
      <SearchBoxOverlay showSearch={showSearch} setShowSearch={setShowSearch} />
    </div>
  );
}

export default Main_Navbar;
