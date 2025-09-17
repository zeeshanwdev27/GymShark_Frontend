import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

function New_In() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const crouselData = [
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-TrainingStraightLegLeggingGSBlackB4B7Y_BB2J_3792_V1b_640x.jpg?v=1756280501",
      back_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-TrainingStraightLegLeggingGSBlackB4B7Y_BB2J_3794_V1b_640x.jpg?v=1756280501",
      product_data: ["Training Straight Leg Leggings", "Regular", "Black"],
      product_price: "US$14",
      product_rating: "★3.5",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-StraightLegPumperPantsGSBlackA4B8B_BB2J_0515_V1_ba0d1f4a-a076-4334-ba96-1aaa3c47088d_640x.jpg?v=1757337204",
      back_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-StraightLegPumperPantsGSBlackA4B8B_BB2J_0521_V1_9635a758-4192-4060-9481-ed2cb8103d40_640x.jpg?v=1757337205",
      product_data: ["Straight Leg Pumper Pants", "Oversized Fit", "Black"],
      product_price: "US$75",
      product_rating: "★5",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-CrestStraightLegJoggerGSArchiveBrownA5A1O_NBY8_1794_640x.jpg?v=1754643063",
      back_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-CrestStraightLegJoggerGSArchiveBrownA5A1O_NBY8_1796_640x.jpg?v=1754643063",
      product_data: ["Crest Straight Leg Joggers", "Regular", "Brown"],
      product_price: "US$55",
      product_rating: "★4.3",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-TrainingStraightLegLeggingGSCherryPurpleB4B7Y_PCDS_3787_V3_640x.jpg?v=1756280422",
      back_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-TrainingStraightLegLeggingGSCherryPurpleB4B7Y_PCDS_3789_V3_640x.jpg?v=1756280422",
      product_data: [
        "Training Straight Leg Leggings",
        "Regular",
        "Cherry Purple",
      ],
      product_price: "US$45",
      product_rating: "★3.5",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-EverydayWovenStraightLegJoggerGSBlackB4C1F_BB2J_0625_V1b_640x.jpg?v=1756241602",
      back_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-EverydayWovenStraightLegJoggerGSBlackB4C1F_BB2J_0641_V1b_640x.jpg?v=1756241602",
      product_data: ["Everyday Woven Straight Leg Joggers", "Regular", "Black"],
      product_price: "US$50",
      product_rating: "★3.9",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-Gym_KitTwist_front_StraightLegLeggingGSIronBlueB5B9O_UCTM_0583_V1b_640x.jpg?v=1755078230",
      back_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-Gym_KitTwist_front_StraightLegLeggingGSIronBlueB5B9O_UCTM_0588_V1b_640x.jpg?v=1755078230",
      product_data: [
        "Twist Front Straight Leg Leggings",
        "body fit",
        "Iron Blue",
      ],
      product_price: "US$65",
      product_rating: "★4.1",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-StraightLegPumperPantsRep_U_A0026GsSpicedBrownA4B8B_NC86_4379_V1_f3d97dad-d650-4484-bd70-9ceccd72c536_640x.jpg?v=1757337215",
      back_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-StraightLegPumperPantsRep_U_A0026GsSpicedBrownA4B8B_NC86_4382_V1_37066363-36fa-4b0a-9564-42eb1b5de8dd_640x.jpg?v=1757337215",
      product_data: [
        "Straight Leg Pumper Pants",
        "oversized fit",
        "Spiced Brown",
      ],
      product_price: "US$75",
      product_rating: "★5",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/GFXRestDay1StraightLegPantGSBlackA1C9G-BB2J-0499-0081_289befd8-3c4c-4ca3-b16d-17c46e93cb99_1920x.jpg?v=1746089232",
      back_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/GFXRestDay1StraightLegPantGSBlackA1C9G-BB2J-0502-0082_fb7717a1-317b-4686-8d39-c41e4519108e_1920x.jpg?v=1746089232",
      product_data: [
        "Lifting Essentials Straight Leg Pants",
        "Regular Fit",
        "Black",
      ],
      product_price: "US$75",
      product_rating: "★4.7",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/WristStrapsBlackI1A3Y-BBBB1199_640x.jpg?v=1722505039",
      back_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/WristStrapsBlackI1A3Y-BBBB.1020.143_640x.jpg?v=1722505039",
      product_data: ["Wrist Straps", "Double Pair", "Black"],
      product_price: "US$28",
      product_rating: "★4.5",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-GFXGlobalLiftingOversizedPantGSDeepPetrolBlueA5A8K_UDRL_0413_640x.jpg?v=1756730483",
      back_img:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-GFXGlobalLiftingOversizedPantGSDeepPetrolBlueA5A8K_UDRL_0416_640x.jpg?v=1756730483",
      product_data: [
        "Global Lifting Oversized Joggers",
        "Oversized Fsit",
        "Deep Petrol Blue",
      ],
      product_price: "US$70",
      product_rating: "★5",
    },
  ];

  const visibleSlides = 4;
  const maxIndex = crouselData.length - visibleSlides;

  const handlePrev = () => {
    if (currentIndex > 0) {
      prevRef.current?.click();
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      nextRef.current?.click();
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="flex justify-between w-full px-20 pb-5 pt-[40px]">
        <div className="flex gap-7 justify-center items-center">
          <h1 className="text-2xl font-bold">NEW IN</h1>
          <Link
            to={"#"}
            className="text-md underline relative top-[2px] font-bold hover:text-gray-700"
          >
            View All
          </Link>
        </div>

        <div className="flex gap-5 mr-5">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`border rounded-full p-1 ${
              currentIndex === 0
                ? "bg-gray-100 text-black"
                : "bg-black text-white"
            }`}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`border rounded-full p-1 ${
              currentIndex === maxIndex
                ? "bg-gray-100 text-black"
                : "bg-black text-white"
            }`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>


      {/* Crousel */}
      <div className="flex justify-center w-full px-14 pb-14">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {crouselData.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    
                    {/* Product Image */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden group">
                      <img
                        src={item.front_img}
                        alt={item.product_data[0]}
                        className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
                      />
                      <img
                        src={item.back_img}
                        alt={`${item.product_data[0]} back`}
                        className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500 absolute top-0 left-0"
                      />

                      {/* Size Button Overlay */}
                      <div className="absolute bottom-0 left-0 w-full bg-gray-50 p-3 grid grid-cols-4 gap-2 opacity-0 
                      group-hover:opacity-100 transition duration-400">
                        {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                          <button key={size}
                          className="cursor-pointer px-0 py-2 text-sm border border-gray-300 rounded bg-white hover:bg-black hover:text-white transition"
                          >
                            {size}
                          </button>
                          ))}
                      </div>
                      
                    </div>

                    {/* Product Info */}
                    <CardContent className="flex justify-between px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-sm font-semibold truncate">
                          {item.product_data[0]}
                        </h2>
                        <p className="text-sm text-gray-500">
                          {item.product_data[1]}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.product_data[2]}
                        </p>
                        {/* Price & Rating */}
                        <p className="text-sm font-bold">
                          {item.product_price}
                        </p>
                      </div>

                      <div>
                        <span className="text-[13px] font-bold ">
                          {item.product_rating}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious ref={prevRef} className="sr-only" />
          <CarouselNext ref={nextRef} className="sr-only" />
        </Carousel>
      </div>
    </>
  );
}

export default New_In;
