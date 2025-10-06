import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Heart, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function HamburgerOverlay({ showMenu, setShowMenu, setShowSearch }) {
  const menus = {
    Women: {
      image: {
        title: "UP TO 50% OFF*",
        url: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FZHyBep8DNlBZwphlrVgMl%2F2ae5b441bee5fd033d7363889bfcd93d%2FWeb_Nav_-_24174098.png&w=1920&q=90",
      },
      sections: [
        {
          heading: "Trending",
          items: [
            "New Arrivals",
            "Best Sellers",
            "Dipped Waistband 🍑",
            "Everyday Seamless",
            "Adapt Animal",
            "Burgundy Gym Sets",
            "Seasonal Essentials",
            "Gymshark x R.A.D®",
          ],
        },
        {
          heading: "Leggings",
          items: [
            "All Leggings",
            "High-Waisted Leggings",
            "Scrunch Butt Leggings",
            "Black Leggings",
            "Flare Leggings",
            "Seamless Leggings",
            "Leggings With Pockets",
            "Tall Leggings",
          ],
        },
        {
          heading: "Products",
          items: [
            "All Products",
            "T-Shirts & Tops",
            "Sports Bras",
            "Shorts",
            "Joggers & Sweatpants",
            "Hoodies & Sweatshirts",
            "Jackets",
            "Sweatsuits",
            "Crop Tops",
            "Tank Tops",
            "Bodysuits",
            "Underwear & Basics",
          ],
        },
      ],
    },

    Men: {
      image: {
        title: "UP TO 50% OFF*",
        url: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F3wU3SLdfs2TwNBDWCRkbMj%2F7ed8952dd86605aa5de5bc5aa4485402%2FWeb_Nav_-_24172922.png&w=1920&q=90",
      },
      sections: [
        {
          heading: "Trending",
          items: [
            "New Arrivals",
            "Best Sellers",
            "Pumper Pants 🔥",
            "Power",
            "Hybrid Training",
            "Running",
            "Seasonal Essentials",
            "Gymshark x R.A.D®",
          ],
        },
        {
          heading: "T-Shirts & Tops",
          items: [
            "T-Shirts & Tops",
            "Compression Fit T-Shirts",
            "Muscle Fit Shirts",
            "Tank Tops",
            "Oversized T-Shirts",
            "Long Sleeve Tops",
            "Stringers",
            "Black T-Shirts",
          ],
        },
        {
          heading: "Products",
          items: [
            "All Products",
            "T-Shirts & Tops",
            "Shorts",
            "Joggers & Sweatpants",
            "Hoodies & Sweatshirts",
            "Tank Tops",
            "Underwear & Basics",
            "Base Layers",
            "Cargo Pants",
            "Jackets",
            "Sweatsuits",
          ],
        },
      ],
    },

    Accessories: {
      image: {
        title: "UP TO 50% OFF*",
        url: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F5KWrgkC6EgpQU9VErzjQXz%2F8694a11b084c74de10e2643856926e75%2FWeb_Nav_-_23713402.png&w=1920&q=90",
      },
      sections: [
        {
          heading: "Trending",
          items: [
            "All Accessories",
            "New Arrivals",
            "Best Sellers",
            "Seasonal Accessories",
            "Mini Bags",
            "All Bottles",
            "Gymshark x R.A.D®",
          ],
        },
        {
          heading: "Bags",
          items: [
            "All Bags",
            "Backpacks",
            "Duffle Bags",
            "Tote Bags",
            "Mini & Small Bags",
            "Bag Accessories",
          ],
        },
      ],
    },
  };

  const linksKeys = Object.keys(menus);
  const [selectedCategory, setSelectedCategory] = useState(linksKeys[0]);
  const { image, sections } = menus[selectedCategory];

  return (
    <AnimatePresence>
      {showMenu && (
        <div className="fixed inset-0 z-50">
          {/* Blur background */}
          <motion.div
            className="absolute inset-0 backdrop-blur-xs bg-black/75"
            onClick={() => setAddToCart(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            />
            {/* Left side sliding panel */}
          <motion.div
            className="relative bg-white h-screen w-full md:w-[500px] flex flex-col gap-3 pt-3 px-4 overflow-y-auto overscroll-contain"
            initial={{ x: "-100%", opacity: 0, scale: 0.95 }} 
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Top Icons */}
            <div className="flex justify-between items-center w-full pb-2">
              <button
                onClick={() => setShowMenu(false)}
                className="cursor-pointer p-2"
              >
                <X
                  className="w-8 h-8 text-black cursor-pointer"
                  strokeWidth={1}
                />
              </button>
              <div className="cursor-pointer">
                <Heart className="w-6 h-6 cursor-pointer" strokeWidth={1.5} />
              </div>
            </div>

            {/* Search Box */}
            <div className="w-full">
              <div className="pb-5">
                <div
                  onClick={() => {
                    setShowMenu(false);
                    setShowSearch(true);
                  }}
                  className="rounded-4xl bg-gray-100 hover:bg-white border border-transparent hover:border hover:border-gray-300 hover:cursor-pointer py-4 px-4 flex gap-3"
                >
                  <Search
                    className="w-5 h-6 cursor-pointer"
                    strokeWidth="1.5"
                  />
                  <span className="text-gray-400 text-sm">
                    What are you looking for today?
                  </span>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="px-1 w-full">
              <div className="flex flex-col gap-4">
                {/* Menu Keys */}
                <ul className="flex gap-6 text-sm font-semibold">
                  {linksKeys.map((link, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer ${
                        selectedCategory === link
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                      onClick={() => setSelectedCategory(link)} // 👈 update state
                    >
                      {link}
                    </li>
                  ))}
                </ul>

                {/* Show image */}
                <div className="relative mt-5">
                  <img
                    src={image.url}
                    alt={image.title}
                    className=" w-full rounded-sm h-60 md:h-[27rem] object-cover"
                  />
                  <p className="absolute bottom-3 left-5 font-bold text-lg text-white z-50">
                    {image.title}
                  </p>

                  {/* Overlay */}
                  <div
                    className="absolute 
                    bg-gradient-to-t from-black/65 to-transparent inset-x-0 bottom-0 h-2/3"
                  ></div>
                </div>

                {/* Menu Values */}
                <div>
                  <Accordion type="single" collapsible className="w-full">
                    {sections.map((section, sectionIndex) => (
                      <AccordionItem
                        key={sectionIndex}
                        value={`section-${sectionIndex}`}
                      >
                        <AccordionTrigger>{section.heading}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-3 text-[15px] text-gray-700">
                            {section.items.map((item, i) => (
                              <li
                                key={i}
                                className="cursor-pointer hover:text-black"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default HamburgerOverlay;
