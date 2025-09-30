import React, { useState, useEffect } from "react";
import { Heart, Share, RulerDimensionLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FaPaypal } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";

import ZoomIn from "./ZoomIn/ZoomIn";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";

function Product() {
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

  const images = [
    {
      front:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/Varsity_Jersey_GS_Black_A1B5H-BB2J_066_1920x.jpg?v=1726043266",
      back: "https://cdn.shopify.com/s/files/1/0156/6146/files/VarsityJerseyGSBlackA1B5H-BB2Jmike0182_b9e41ef3-ad0c-4449-982a-1ec9041a9a6e_1920x.jpg?v=1726043266",
      full: "https://cdn.shopify.com/s/files/1/0156/6146/files/VarsityJerseyGSBlackA1B5H-BB2Jmike0180_6066a92a-1727-45d2-a811-4ed9a01963da_1920x.jpg?v=1726043266",
    },
  ];

  const slides = [
    {
      title: "Unlock Access To Exclusive Rewards & Benefits",
      subtitle: "Purchasing this product earns 232XP",
    },
    {
      title: "Standard Delivery (4-7 Working Days)",
      subtitle: "Free Standard Delivery for orders over $75",
    },
    {
      title: "Express Delivery (3 Working Days)",
      subtitle: "Express Delivery Available",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState();

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <div className="pb-20 w-full flex">
        {/* Colum 1 */}
        <div className="w-1/2 sticky top-20 self-start">
          <ScrollArea className="h-[80vh] w-full ">
            <div className="grid grid-cols-2 gap-1">
              {images.map((image, index) => (
                <React.Fragment key={index}>
                  <ZoomIn src={image.front} alt="img_front" />
                  <ZoomIn src={image.back} alt="img_back" />
                  <ZoomIn
                    src={image.full}
                    alt="img_full"
                    className="col-span-2"
                  />
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Colum 2 */}
        <div className="w-1/2 flex flex-col gap-8 items-center max-h-full py-15">
          {/* Info */}
          <div className="flex flex-col items-center gap-1.5">
            <p className="text-xs font-bold p-1 px-2 bg-gray-100 rounded-2xl mb-3">
              50% OFF | SAVE $29
            </p>
            <h2 className="text-xl font-mono font-bold truncate">
              SPORTS JERSEY
            </h2>
            <p className="text-sm text-gray-700 font-[15px] opacity-80">
              Oversized Fit
            </p>
            <p className="text-sm font-bold">$29</p>
          </div>

          {/* Icons */}
          <div className="flex justify-center items-center gap-6">
            <div className="p-1 px-5 bg-gray-100 rounded-2xl hover:bg-gray-200 transition duration-200 cursor-pointer">
              <span className="text-[13px] font-bold ">★3.9</span>
            </div>

            <div className="p-1 px-5 bg-gray-100 rounded-2xl hover:bg-gray-200 transition duration-200 cursor-pointer">
              <Heart className="w-5 h-6 cursor-pointer" strokeWidth={1.5} />
            </div>

            <div className="p-1 px-5 bg-gray-100 rounded-2xl hover:bg-gray-200 transition duration-200 cursor-pointer">
              <Share className="w-5 h-5 cursor-pointer" strokeWidth={1.5} />
            </div>
          </div>

          {/*Offer*/}
          <div className="w-100 bg-gray-100 rounded-md px-11 py-4 flex justify-center items-center mt-3">
            <div className="flex flex-col justify-center items-center gap-1.5 text-center">
              <h2 className="text-[15.5px] font-bold">
                UP TO 50% OFF LAST CHANCE LOOKS 💨
              </h2>
              <p className="text-[13px] leading-4.5">
                Time to pick up the gym kit you’ve been eyeing all season. Make
                it count. Selected styles only.{" "}
                <span className="font-bold underline cursor-pointer hover:opacity-80">
                  SHOP LAST CHANCE
                </span>
              </p>
            </div>
          </div>

          {/* small Img */}
          <div className="w-100 flex flex-col gap-2 justify-center items-center">
            <img
              className="w-13 h-15 border-2 border-black object-bottom"
              src="https://cdn.shopify.com/s/files/1/0156/6146/files/Varsity_Jersey_GS_Black_A1B5H-BB2J_066_1920x.jpg?v=1726043266"
              alt="img"
            />
            <p className="text-[13px] opacity-70">Black</p>
          </div>

          {/* CTA Div */}
          <div className="w-100 flex flex-col justify-center items-center gap-5">
            {/* Size Btns */}
            <div className="flex flex-col w-full gap-1">
              <div className="flex justify-between">
                <p className="opacity-70 text-[13px]">Select a size</p>
                <div className="flex justify-center gap-0.5 items-center">
                  <RulerDimensionLine className="w-4 h-4" />
                  <p className="text-[13px] font-bold underline cursor-pointer">
                    Size Guide
                  </p>
                </div>
              </div>

              <div className="border-2 gap-1 rounded-md border-gray-100 px-3 py-5 flex items-center justify-center">
                {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                  <Button
                    key={size}
                    variant="ghost"
                    className="min-w-[50px] h-12 text-xs hover:bg-black cursor-pointer 
                 text-black hover:text-white rounded-xs"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Add To Bad BTN */}
            <div className="w-100">
              <Button className="w-full text-sm  cursor-pointer rounded-full py-7">
                ADD TO BAG
              </Button>
            </div>
          </div>

          {/* Other Info */}
          <div className="w-100 flex flex-col gap-5">
            {/* Payment Info */}
            <div className="flex flex-col gap-3 w-full text-center">
              <div className="flex gap-1">
                <p className="text-[12px] opacity-70">
                  Pay in 4 interest-free payments on purchases of $30-$1,500.
                </p>

                <span className="text-[12px] cursor-pointer font-bold underline">
                  Learn more
                </span>
              </div>

              <div className="flex justify-center gap-1 items-center">
                <p className="text-xs opacity-70">
                  Also available at checkout:
                </p>
                <FaPaypal className="w-4 h-4 text-[#003087]" />
                <FaStripe className="w-8 h-8 text-[#635BFF]" />
              </div>
            </div>

            {/* Crousel */}
            <div className="w-full flex justify-between bg-gray-100 rounded-xs">
              <Carousel
                opts={{ align: "start" }}
                className="w-4/5 overflow-hidden"
                setApi={setApi}
              >
                <CarouselContent>
                  {slides.map((item, index) => (
                    <CarouselItem key={index} className="basis-1/1">
                      <Card className="bg-gray-100 overflow-hidden rounded-none shadow-none border-none transition py-6 px-5">
                        <CardContent className="px-0">
                          {/* Info Section */}
                          <div className="flex flex-col gap-1 text-xs">
                            <h3 className="text-xs font-bold underline">
                              {item.title}
                            </h3>
                            <p>{item.subtitle}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Dots */}
              <div className="w-1/5 flex gap-1 justify-center items-center">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`rounded-full w-2 h-2 ${
                      current === index ? "bg-black" : "bg-gray-400"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Accordion */}
            <div className="w-full mt-5">
              <Separator />

              <Sheet>
                <SheetTrigger className="w-full flex justify-between cursor-pointer mt-5">
                  <p className="text-[13px] font-bold truncate">DESCRIPTION</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 hover:bg-white cursor-pointer"
                  >
                    <ChevronRightIcon />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className="mt-5">
                    <SheetTitle className="text-[26px] font-bold truncate">
                      DESCRIPTION
                    </SheetTitle>
                    <SheetDescription>
                      <div className="flex flex-col gap-7 mt-5 text-black">
                        <div className="flex flex-col gap-3">
                          <p className="text-lg font-semibold">PHYSIQUE FIRST</p>
                          <p className="text-md">
                            Whether you’re layering up or down, these
                            physique-enhancing fits are the one.{" "}
                          </p> 
                        </div>

                        <ul className="list-disc pl-6 text-md">
                          <li>Ultra-tight compression fit top</li>
                          <li>
                            Enhance your physique with muscle-shaping seams
                          </li>
                          <li>
                            Sweat-wicking tech to keep you cool & dry when
                            working out
                          </li>
                          <li>Flatlock seams for reduced irritation</li>
                          <li>
                            Additional mesh panels to the seams for extra
                            stretch
                          </li>
                        </ul>

                        <div className="flex flex-col gap-3">
                          <p className="text-lg font-semibold">SIZE & FIT</p>
                          <ul className="list-disc pl-6 text-md">
                            <li>
                              Compression fit: ultra-tight fit, like a second
                              skin
                            </li>
                            <li>Regular length</li>
                            <li>Model is 5'11" and wears size M</li>
                          </ul>
                        </div>

                        <div className="flex flex-col gap-3">
                          <p className="text-lg font-semibold">MATERIALS & CARE</p>
                          <ul className="list-disc pl-6 text-md">
                            <li>Main: 84% Polyester, 16% Elastane</li>
                            <li>Mesh: 93% Polyester, 7% Elastane</li>
                          </ul>
                        </div>

                        <p>SKU: A2B4C-RB2R</p>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger className="w-full flex justify-between cursor-pointer mt-5">
                  <p className="text-[13px] font-bold truncate">DELIVERY & RETURN'S</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 hover:bg-white cursor-pointer"
                  >
                    <ChevronRightIcon />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className="mt-5">
                    <SheetTitle className="text-[26px] font-bold truncate">
                      Delivery & Returns
                    </SheetTitle>
                    <SheetDescription>

                      <div className="flex flex-col gap-8 mt-5 text-black">

                      <div className="flex flex-col gap-3">
                        <p className="text-lg font-semibold">Standard Shipping - $5 USD</p>
                        <ul className="list-disc pl-6 text-md">
                          <li>Estimated Delivery 4-7 working days. *Once your order has shipped.</li>
                          <li>Free Standard Delivery on orders $75</li>
                        </ul>
                      </div>

                       <div className="flex flex-col gap-3">
                        <p className="text-lg font-semibold">Express Shipping - $15 USD</p>
                        <ul className="list-disc pl-6 text-md">
                          <li>Estimated delivery 3 working days. *Once your order has shipped.</li>
                        </ul>
                      </div>

                      <div className="flex flex-col gap-3">
                        <p className="text-lg font-semibold">Returns</p>
                        <ul className="list-disc pl-6 text-md">
                          <li>Free 30-Day Return Policy, excluding final sale items, underwear, bottles, and swimwear.</li>
                        </ul>
                      </div>




                      </div>

                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* You Might Also Like */}
      <div className="w-full px-20 flex flex-col gap-8 mb-20">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[22px] font-bold truncate">YOU MIGHT LIKE</h1>
          <p className="text-sm">We think these products pair perfectly.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-full">
          {crouselData.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-none shadow-none border-none transition flex flex-col gap-2 py-0 mb-5"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden group">
                <img
                  src={item.front_img}
                  alt={item.product_data[0]}
                  className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
                />
                <img
                  src={item.back_img}
                  alt={`${item.product_data[0]} back`}
                  className="hidden lg:block w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500 absolute top-0 left-0"
                />

                {/* Size Button Overlay */}
                <div className="hidden lg:grid absolute bottom-0 left-0 w-full bg-gray-50 p-3 grid-cols-4 gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                    <button
                      key={size}
                      className="cursor-pointer py-2 text-sm border border-gray-300 rounded bg-white hover:bg-black hover:text-white transition"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <CardContent className="flex flex-col gap-1 px-1">
                <h2 className="text-base lg:text-sm font-semibold truncate">
                  {item.product_data[0]}
                </h2>
                {/* <p className="text-sm text-gray-500">
                    {item.product_data[1]}
                  </p> */}
                <p className="text-sm text-gray-500">{item.product_data[2]}</p>
                {/* Price */}
                <p className="text-sm font-bold">{item.product_price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
