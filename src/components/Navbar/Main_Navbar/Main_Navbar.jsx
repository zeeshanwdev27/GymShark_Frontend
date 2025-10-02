import React, { useState, useEffect } from "react";
import {
  Heart,
  ShoppingBag,
  User,
  Search,
  Menu as MenuIcon,
} from "lucide-react";
import Menu from "./Menu/Menu";
import { motion } from "motion/react";
import SearchBoxOverlay from "./SearchBoxOverlay/SearchBoxOverlay";
import HamburgerOverlay from "./HamburgerOverlay/HamburgerOverlay";
import AddToCartOverlay from "./AddToCartOverlay/AddToCartOverlay";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Main_Navbar({ isScrolled }) {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [addToCart, setAddToCart] = useState(false);

  // Scroll Hide
  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSearch]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  useEffect(() => {
    if (addToCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [addToCart]);

  // Timer For ToolTip Popup
  const [tooltipOpen, setTooltipOpen] = useState(false);
  useEffect(() => {
    let openTimer,closeTimer;
      openTimer = setTimeout(() => {
        setTooltipOpen(true);
      closeTimer = setTimeout(() => {
        setTooltipOpen(false);
      }, 3500); 
      }, 3000); 

  return () => {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
  };
  }, []);

  return (
    <div className="bg-white shadow w-full">
      {/* Top Row */}
      <div className="flex justify-between items-center py-7 px-7 lg:py-4 lg:px-12 ">
        <div className="flex items-center">
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <Menu />
          </div>

          {/* Mobile Hamburger */}
          <button className="block lg:hidden">
            <MenuIcon
              className="w-6 h-6"
              strokeWidth={1.5}
              onClick={() => setShowMenu(true)}
            />
          </button>
        </div>

        {/* Logo */}
        <Link to="/">
          <img
            src='https://res.cloudinary.com/dzhovcqy3/image/upload/v1759396434/GYMSHARK_LOGO_m4qppa.avif'
            className="h-5 pl-10 md:pl-23 lg:pl-45 lg:pr-0 object-contain cursor-pointer"
            alt="GYMSHARK_LOGO"
          />
        </Link>

        {/* Right Icons */}
        <ul className="flex justify-center items-center md:gap-8 gap-6">
          {/* Desktop SearchBox */}
          <li className="hidden lg:block">
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

          {/* Heart Icons */}
          <li className="hidden md:block cursor-pointer hover-lift">
            <Heart className="w-5 h-6 cursor-pointer" strokeWidth={1.5} />
          </li>

          {/* User Icons */}
          <li className="cursor-pointer">
            <Tooltip
              open={addToCart ? false : tooltipOpen}
              onOpenChange={() => {}} // prevent reopening on hover
            >
              <TooltipTrigger asChild>
                <User
                  className="w-5 h-6 cursor-pointer transform transition duration-300 lg:hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </TooltipTrigger>

              <TooltipContent
                side="bottom"
                align="end"
                alignOffset={-15}
                sideOffset={-5}
              >
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <p className="text-sm">
                    Sign in to get exclusive rewards & benefits <br />
                    New Customer?{" "}
                    <span className="underline font-bold">Create account</span>
                  </p>
                </motion.div>
              </TooltipContent>
            </Tooltip>
          </li>

          {/* Shopping Icons */}
          <li className="cursor-pointer">
            <ShoppingBag
              className="w-5 h-6 cursor-pointer transform transition duration-300 lg:hover:-translate-y-1"
              strokeWidth={1.5}
              onClick={() => setAddToCart(true)}
            />
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
        className="overflow-hidden lg:hidden px-4"
      >
        <div className="lg:hidden block pb-5 px-4">
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

      {/* Hamburger_Menu Overlay */}
      <HamburgerOverlay
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setShowSearch={setShowSearch}
      />

      {/* AddToCart Overlay */}
      <AddToCartOverlay addToCart={addToCart} setAddToCart={setAddToCart} />
    </div>
  );
}

export default Main_Navbar;
