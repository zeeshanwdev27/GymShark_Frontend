import React, { useState } from "react";
import { Search, X, TrendingUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "motion/react";

function SearchBoxOverlay({ showSearch, setShowSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <AnimatePresence>
      {showSearch && (
        <div className="fixed inset-0 z-50">
          {/* Blur background */}
          <motion.div
            className="absolute inset-0 backdrop-blur-sm bg-black/20"
            onClick={() => setShowSearch(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          ></motion.div>

          {/* White search panel (25% height) */}
          <motion.div
            className="relative bg-white h-1/4 w-full shadow-lg flex flex-col gap-4 pt-5"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Search Box */}
            <div className="relative flex items-center w-full">
              <div
                className="mx-auto bg-gray-100 flex items-center w-1/2 max-w-sm rounded-sm px-4 py-3 shadow-sm p-2 gap-3 
                focus-within:ring-1 focus-within:ring-black  "
              >
                <Search className="w-5 h-5 text-gray-800 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="What are you looking for today?"
                  className="w-full text-sm outline-none"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="cursor-pointer rounded-full hover:bg-gray-100"
                  >
                    {" "}
                    <X className="w-5 h-5 text-gray-500" />{" "}
                  </button>
                )}
              </div>

              <button
                onClick={() => setShowSearch(false)}
                className="absolute right-12 cursor-pointer p-2"
              >
                <X className="w-8 h-8 text-black" />
              </button>
            </div>

            <Separator />

            {/* Trending Section */}
            <div className="flex flex-col justify-start gap-5 px-70">
              <h1 className="text-sm font-bold">TRENDING SEARCHES</h1>
              <div className="flex gap-3">
                <TrendingUp className="w-6 h-6 text-gray-800" />
                <div className="flex gap-2 flex-wrap">
                  <button className="bg-gray-100 p-1 px-2 text-[13px] font-bold rounded-sm cursor-pointer hover:bg-gray-200">
                    DIPPED WAISTBAND
                  </button>
                  <button className="bg-gray-100 p-1 px-2 text-[13px] font-bold rounded-sm cursor-pointer hover:bg-gray-200">
                    RUNNING
                  </button>
                  <button className="bg-gray-100 p-1 px-2 text-[13px] font-bold rounded-sm cursor-pointer hover:bg-gray-200">
                    PUMPER PANTS
                  </button>
                  <button className="bg-gray-100 p-1 px-2 text-[13px] font-bold rounded-sm cursor-pointer hover:bg-gray-200">
                    SHORTS
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default SearchBoxOverlay;
