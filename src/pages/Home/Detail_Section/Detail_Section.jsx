import React from "react";
import { Separator } from "@/components/ui/separator";

function Detail_Section() {
  const category_Links = {
    Women_Leggings: [
      {
        title: "WOMEN'S LEGGING'S",
        category: [
          "Gym Leggings",
          "Leggings With Pockets",
          "High Waisted Leggings",
          "Scrunch Bum Leggings",
          "Black Leggings",
          "Flare Leggings",
          "Seamless Leggings",
        ],
      },
    ],
    Women_Gymwear: [
      {
        title: "WOMEN'S GYMWEAR",
        category: [
          "Women's Gym Wear",
          "Womens Gym Shorts",
          "Running Shorts",
          "Sports Bras",
          "High Impact Sports Bras",
          "Black Sports Bras",
          "Matching Sets",
          "Loungewear",
        ],
      },
    ],
    Men_Gymwear: [
      {
        title: "MEN'S GYMWEAR",
        category: [
          "Men's Gymwear",
          "Mens Gym Shorts",
          "Shorts with Pockets",
          "Men's Running Shorts",
          "Gym Shirts",
          "Sleeveless T-Shirts",
          "Gym Stringers",
          "Men's Baselayers",
        ],
      },
    ],
    Accessories: [
      {
        title: "ACCESSORIES",
        category: [
          "Women's Underwear",
          "Men's Underwear",
          "Workout Bags",
          "Duffel Bags",
          "Gym Socks",
          "Crew Socks",
          "Caps",
          "Beanies",
        ],
      },
    ],
  };

  return (
    <div className="w-full px-14 pt-10 pb-20">
      <div className="grid grid-cols-4 gap-2 mb-20">
        {Object.values(category_Links).map((section, sectionIndex) =>
          section.map((item, index) => (
            <div key={`${sectionIndex}-${index}`}>
              <h2 className="text-lg font-bold mb-4 truncate">{item.title}</h2>
              <ul className="flex flex-col gap-1 text-black text-sm font-medium">
                {item.category.map((cat, catIndex) => (
                  <li
                    key={catIndex}
                    className="cursor-pointer text-gray-800 hover:text-black"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>

      <Separator className="w-full" />

      <div className="mt-10 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold mb-1">WORKOUT CLOTHES & GYM CLOTHES</h1>
          <p className="text-[14px]">
            Workout Clothes designed to help you become your personal best.
            Because when it comes to performing at your max, there should be no
            obstacles – least of all your workout clothes.
          </p>
          <p className="text-[14px] ">
            Functional and comfortable, we create workout clothing you'll sweat
            in. Since 2012, we've designed and created the workout clothes we
            want to wear, because training and its people are what we know best.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold  mb-1">GYM CLOTHES BUILT IN THE WEIGHT ROOM</h1>
          <p className="text-[14px]">
            Our legacy was built in the weight room. Gymshark was founded with a
            love for training and that passion continues into all our gym
            clothes today. You'll find the latest innovation in gym clothing and
            accessories to help you perform at your best and recover in style.
          </p>
          <p className="text-[14px]">
            Our <b>Men's Workout Clothes</b> feature sweat wicking <b>workout shirts</b> and 
            <b> tank tops, gym shorts, sweatpants</b> and more. Whilst our Women's
            Workout Clothes are designed for a range of movements and feature
            sophisticated seamless technology, clever contouring and durable,
            quick-dry sweat wicking fabrics on leggings, sports bras and more.
          </p>
          <p className="text-[14px]">
            An obsession with lifting is what started this brand, and we haven't
            forgotten our roots. Our <b>Women's</b> and <b>Men's Bodybuilding</b> clothes
            feature classic styles, with modern cuts and innovative fabrics to
            help you raise the bar.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold  mb-1">ACTIVEWEAR & ATLEISURE</h1>
          <p className="text-[14px]">
            We create the tools that help everyone become their personal best –
            no matter the sport. Our range of Activewear is designed to give you
            the support you need to perform at your best, whether that's on the
            track, on the gym floor or in the studio.
          </p>
          <p className="text-[14px]">
            Whilst our <b>men's</b> and <b>women's athleisure</b> elevates your workouts with
            the most comfortable gym hoodies, the most supportive gym leggings
            and the most innovatively designed workout shirts that are made to
            move when it matters most.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold  mb-1">MORE THEN YOUR BEST WORKOUT CLOTHING</h1>
          <p className="text-[14px]">
            The Gymshark community is devoted to unlocking potential through
            conditioning and the things we do today to prepare for tomorrow.
            It's every setback, step-up and milestone along the way.
            Game-changing workout clothing, running clothes and loungewear
            essentials. It's not just in the designs, it's in the people who
            wear them.
          </p>
          <p className="text-[15px] text-gray-800">
            Looking for more inspiration? Discover our latest tips, stories, and
            training insights on <b>Gymshark Central</b> – your next step towards
            becoming your personal best.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail_Section;
