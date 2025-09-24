import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

function Menu() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const menus = {
    Women: [
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
    Men: [
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
    Accessories: [
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
  };
  const links = Object.keys(menus);

  return (
    <ul className="flex justify-center items-center gap-6 relative">
      {links.map((link, index) => (
        <li
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`relative text-md transition-colors duration-200 
            ${
              hoveredIndex === index
                ? "text-black"
                : hoveredIndex !== null
                ? "text-gray-300"
                : "text-black"
            }`}
        >
          <p className="cursor-default">{link}</p>

          {/* underline Animate */}
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                key={`underline-${index}`}
                className="absolute left-0 h-[2px] bg-black"
                style={{ bottom: "-6px" }}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                key={`menu-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-6 bg-white shadow-lg rounded-b-md p-6 w-auto z-20"
              >
                <div className="flex gap-10">
                  {menus[link].map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="flex flex-col min-w-[180px]"
                    >
                      {section.heading && (
                        <h3 className="font-bold uppercase text-[13px] text-gray-300 border-b pb-1 mb-2">
                          {section.heading}
                        </h3>
                      )}

                      <ul className="flex flex-col gap-3 text-[15px] text-gray-700">
                        {section.items?.map((item, i) => (
                          <li
                            key={i}
                            className="cursor-pointer transition"
                            onMouseEnter={() =>
                              setHoveredSubItem(`${link}-${sectionIndex}-${i}`)
                            }
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <span className="relative inline-block hover:text-black">
                              {item}

                              {/* underline Animate */}
                              <AnimatePresence>
                                {hoveredSubItem ===
                                  `${link}-${sectionIndex}-${i}` && (
                                  <motion.div
                                    key={`underline-${link}-${sectionIndex}-${i}`}
                                    className="absolute left-0 bottom-[-4px] h-[2px] bg-black"
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "100%", opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      ease: "easeInOut",
                                    }}
                                  />
                                )}
                              </AnimatePresence>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
