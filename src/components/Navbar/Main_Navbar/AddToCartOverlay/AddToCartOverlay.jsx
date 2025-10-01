import React, { useState } from "react";
import { X, ShoppingBag, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

function AddToCartOverlay({ addToCart, setAddToCart }) {
  const [iconActive, setIconActive] = useState(true);

  return (
    <AnimatePresence>
      {addToCart && (
        <div className="fixed inset-0 z-[9999]">
          {/* Blur background */}
          <motion.div
            className="absolute inset-0 backdrop-blur-xs bg-black/75"
            onClick={() => setAddToCart(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Right side sliding panel */}
          <motion.div
            className="absolute right-0 top-0 h-full w-[500px] bg-white shadow-lg flex flex-col px-7 py-7"
            initial={{ x: "100%" }} // start off-screen (to the right)
            animate={{ x: 0 }} // slide into place
            exit={{ x: "100%" }} // slide out to right
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Header */}
            <div className="flex justify-between w-full items-center">
              <h2 className="text-md font-bold truncate">
                {iconActive ? "YOUR BAG" : "WISHLIST"}
              </h2>

              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center  bg-gray-100 rounded-full cursor-pointer">
                  <div
                    onClick={() => setIconActive(!iconActive)}
                    className={`${
                      iconActive
                        ? "bg-black text-white"
                        : "text-black bg-gray-100 "
                    } px-5 py-2 rounded-full`}
                  >
                    <ShoppingBag className="w-4.5 h-5" strokeWidth={1.5} />
                  </div>

                  <div
                    onClick={() => setIconActive(!iconActive)}
                    className={`${
                      iconActive
                        ? "text-black bg-gray-100 "
                        : "bg-black text-white"
                    } px-5 py-2 rounded-full`}
                  >
                    <Heart className="w-4.5 h-5" strokeWidth={1.5} />
                  </div>
                </div>

                <button
                  onClick={() => setAddToCart(false)}
                  className="cursor-pointer"
                >
                  <X className="w-7 h-7  text-black" strokeWidth={1.4} />
                </button>
              </div>
            </div>

            {/* Body */}

            {/* AddToCart */}
            {iconActive && (
              <div className="min-h-screen flex flex-col justify-center gap-5 items-center w-full pb-30">
                <img
                  src="https://res.cloudinary.com/dzhovcqy3/image/upload/f_png/v1759315915/empty-bag_womwcc"
                  alt="empty-trash"
                />

                <div className="flex flex-col gap-2 w-full justify-center items-center">
                  <h2 className="text-lg font-bold truncate">
                    YOUR BAG IS EMPTY
                  </h2>
                  <p className="text-sm text-gray-700 truncate">
                    There are no products in your bag
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 w-full justify-center items-center">
                  <Button className="h-auto w-1/2 py-3 text-sm font-bold cursor-pointer rounded-4xl">
                    SHOP MENS
                  </Button>
                  <Button className="h-auto w-1/2 py-3 text-sm font-bold cursor-pointer rounded-4xl">
                    SHOP WOMENS
                  </Button>
                </div>
              </div>
            )}

            {/* WISHLIST */}
            <div className="min-h-screen flex flex-col justify-center gap-7 items-center w-full pb-30">
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="flex gap-3 items-center">
                  <Heart className="w-6 h-6 fill-black" stroke="none" />
                  <h2 className="text-lg font-bold truncate">
                    SAVE TO WISHLIST
                  </h2>
                </div>

                <p className="text-[16px] text-black text-balance text-center px-10">
                  Ever wish you could save all your fave fits & accessories in
                  one place to come back to later? Almost like a ✨ wishlist ✨.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 w-full justify-center items-center">
                <Button className="h-auto w-1/2 py-3 text-sm font-bold cursor-pointer rounded-4xl">
                  CREATE ACCOUNT
                </Button>
                <Button
                  className="bg-gray-300 hover:bg-gray-300 hover:opacity-80 text-black h-auto w-1/2 py-3 text-sm font-bold cursor-pointer rounded-4xl"
                >
                  LOGIN
                </Button>
              </div>
            </div>



          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default AddToCartOverlay;
