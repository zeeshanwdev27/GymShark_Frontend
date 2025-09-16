import React, { useState, useEffect } from "react";
import { Heart, ShoppingBag, User, Search } from "lucide-react";
import logo from "../../../assets/Gymshark/logo.avif";
import Menu from "./Menu/Menu";
import SearchBoxOverlay from "./SearchBoxOverlay/SearchBoxOverlay";

function Main_Navbar() {
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
    <div className="flex justify-between items-center py-4 px-12 bg-white shadow w-full">

      <div className="grid grid-cols-4 gap-1">
        {/* Menu */}
        <Menu />

        {/* Logo */}
        <img src={logo} className="w-25 h-full col-end-5" alt="GYMSHARK_LOGO" />
      </div>

      <ul className="flex justify-center items-center gap-8">
        {/* SearchBox */}
        <li>
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
        <li className="cursor-pointer hover-lift">
          <Heart className="w-5 h-6 cursor-pointer" strokeWidth={1.5} />
        </li>
        <li className="cursor-pointer hover-lift">
          <User className="w-5 h-6 cursor-pointer" strokeWidth={1.5} />
        </li>
        <li className="cursor-pointer hover-lift">
          <ShoppingBag className="w-5 h-6 cursor-pointer" strokeWidth={1.5} />
        </li>
      </ul>

      {/* SearchBox Overlay */}'
      <SearchBoxOverlay showSearch={showSearch} setShowSearch={setShowSearch} />
      
    </div>
  );
}

export default Main_Navbar;
