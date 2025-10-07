import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Cart/CartSlice";
import { nanoid } from "@reduxjs/toolkit";

import Overlay_Drawer from "../Overlay_Drawer/Overlay_Drawer";

function Women_Section() {
  const dispatch = useDispatch();
  const [cardActive, setCardActive] = useState(false);
  const [cardData, setCardData] = useState({});

  const femalesProducts = [
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-SoftSculptLimitedEditionHalterneckSleevelessTopWithShelfGSUnitGreenB4C6J_ECJF_1820_V2_640x.jpg?v=1759156453",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-SoftSculptLimitedEditionHalterneckSleevelessTopWithShelfGSUnitGreenB4C6J_ECJF_1841_V1b_640x.jpg?v=1759156453",
      product_data: [
        "Soft Sculpt Halterneck Tank With Shelf",
        "Compression Fit",
        "Unit Green",
      ],
      product_price: 48,
      product_rating: "4.9",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-SoftSculptCapSleeveBraletteGSUnitGreenB3B3A_ECJF_1372_V1a_640x.jpg?v=1758724171",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-SoftSculptCapSleeveBraletteGSUnitGreenB3B3A_ECJF_1383_V1a_640x.jpg?v=1758724174",
      product_data: [
        "Soft Sculpt Cap Sleeve Bralette",
        "Light Support",
        "Unit Green",
      ],
      product_price: 44,
      product_rating: "4.8",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-SoftSculptLimitedEditionHalterneckSleevelessTvopWithShelfGSHeavyBlueB4C6J_UCTN_0996_V2_640x.jpg?v=1759156730",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-SoftSculptLimitedEditionHalterneckSleevelessTvopWithShelfGSHeavyBlueB4C6J_UCTN_1008_V1b_640x.jpg?v=1759156730",
      product_data: [
        "Soft Sculpt Halterneck Tank With Shelf",
        "Compression Fit",
        "Heavy Blue",
      ],
      product_price: 48,
      product_rating: "4.8",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-SoftSculptShortSleeveTopGSRichMaroonB4C3B_NBZQ_2042_V1b_640x.jpg?v=1759152987",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-SoftSculptShortSleeveTopGSRichMaroonB4C3B_NBZQ_2052_V1_640x.jpg?v=1759152987",
      product_data: [
        "Soft Sculpt Short Sleeve Midi Top",
        "Compression Fit",
        "Rich Maroon",
      ],
      product_price: 44,
      product_rating: "3.7",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-SoftSculptShortSleeveTopGSBlackB4C3B_BB2J_2591_V1b_640x.jpg?v=1759154325",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-SoftSculptShortSleeveTopGSBlackB4C3B_BB2J_2602_V2_640x.jpg?v=1759154325",
      product_data: ["Soft Sculpt Short Sleeve Midi Top", "Slim Fit", "Black"],
      product_price: 44,
      product_rating: "4.8",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-BorgStatementJacketGSRichMaroonGSResetPinkGSOatWhiteB4B5Z_NC53_1610_V1_640x.jpg?v=1759505095",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-BorgStatementJacketGSRichMaroonGSResetPinkGSOatWhiteB4B5Z_NC53_1573_V1_640x.jpg?v=1759505095",
      product_data: [
        "Contrast Sherpa Jacket",
        "Compression Fit",
        "Rich Maroon/Reset Pink/Oat White",
      ],
      product_price: 78,
      product_rating: "4.9",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-StatementTrackPantGSRichMaroonGSResetPinkGSOatWhiteB2C6K_NC53_0761_V1a_640x.jpg?v=1759321637",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-StatementTrackPantGSRichMaroonGSResetPinkGSOatWhiteB2C6K_NC53_0769_V1a_640x.jpg?v=1759321637",
      product_data: [
        "Contrast Track Pant",
        "Oversized Fit",
        "Rich Maroon/Reset Pink/Oat White",
      ],
      product_price: 64,
      product_rating: "4.8",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-StatementTrackPantGSCamoBrownGSLinenBrownGSOatWhiteB2C6K_NC54_1173_V1a_640x.jpg?v=1759321772",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-StatementTrackPantGSCamoBrownGSLinenBrownGSOatWhiteB2C6K_NC54_1180_V1a_640x.jpg?v=1759321772",
      product_data: ["Contrast Track Pant", "Oversized Fit", "Camo Brown"],
      product_price: 64,
      product_rating: "4.4",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-BorgStatementJacketGSBlackGSGraphiteGreyGSOatWhiteB4B5Z_BDB9_1562_V1_1664x.jpg?v=1759505053",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-BorgStatementJacketGSBlackGSGraphiteGreyGSOatWhiteB4B5Z_BDB9_1527_V1_1664x.jpg?v=1759505053",
      product_data: [
        "Contrast Sherpa Jacket",
        "Oversized Fit",
        "Black/Graphite Grey/Oat White",
      ],
      product_price: 78,
      product_rating: "5",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-StatementTrackJacketGSBlackGSGraphiteGreyGSOatWhiteB4B6C_BDB9_1430_V1a_640x.jpg?v=1759321738",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-StatementTrackJacketGSBlackGSGraphiteGreyGSOatWhiteB4B6C_BDB9_1448_V1a_640x.jpg?v=1759321738",
      product_data: [
        "Contrast Woven Jacket",
        "Oversized Fit",
        "Black/Graphite Grey/Oat White",
      ],
      product_price: 70,
      product_rating: "4.9",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-StatementTrackPantGSBlackGSGraphiteGreyGSOatWhiteB2C6K_BDB9_1484_V1a_640x.jpg?v=1759321564",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-StatementTrackPantGSBlackGSGraphiteGreyGSOatWhiteB2C6K_BDB9_1496_V1a_640x.jpg?v=1759321564",
      product_data: [
        "Contrast Track Pant",
        "Oversized Fit",
        "Black/Graphite Grey/Oat White",
      ],
      product_price: 64,
      product_rating: "4.8",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamlessTankWithShelfBlackMarlB4C6D_BBF3_1428_V1_640x.jpg?v=1759424685",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamlessTankWithShelfBlackMarlB4C6D_BBF3_1455_V1_640x.jpg?v=1759424685",
      product_data: ["Vital Tank With Shelf", "Compression Fit", "Black Marl"],
      product_price: 44,
      product_rating: "4.7",
    },

    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamlessTankWithShelfGSHeavyBlueMarlB4C6D_UCW7_1267_V1_640x.jpg?v=1759423403",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamlessTankWithShelfGSHeavyBlueMarlB4C6D_UCW7_1280_V2_640x.jpg?v=1759423403",
      product_data: [
        "Vital Tank With Shelf",
        "Compression Fit",
        "Heavy Blue/ Marl",
      ],
      product_price: 29,
      product_rating: "4.8",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamlessTankWithShelfGSVintageRougePinkMarlB4C6D_KDFZ_1233_V2_640x.jpg?v=1759423285",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamlessTankWithShelfGSVintageRougePinkMarlB4C6D_KDFZ_1252_V1_640x.jpg?v=1759423285",
      product_data: [
        "Vital Tank With Shelf",
        "Compression Fit",
        "GS Vintage Rouge Pink",
      ],
      product_price: 44,
      product_rating: "5",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamlessTankWithShelfGSLiftGreenMarlB4C6D_EDC4_0336_V1a_640x.jpg?v=1759423247",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamlessTankWithShelfGSLiftGreenMarlB4C6D_EDC4_0353_V2_640x.jpg?v=1759423247",
      product_data: [
        "Vital Tank With Shelf",
        "Compression Fit",
        "GS Lift Green/ Marl",
      ],
      product_price: 44,
      product_rating: "4.8",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamless2_0NewSportsBraGSRichMaroonMarlB1C5G_NC65_0143_V1a_640x.jpg?v=1759424152",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-B1C5G_NC65_640x.jpg?v=1759424152",
      product_data: ["Vital Crop Top", "Light Support", "Rich Maroon/Marl"],
      product_price: 38,
      product_rating: "3.9",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamless2_0CropTopGSRichMaroonMarlB1A3D_NC65_0005_V1a_640x.jpg?v=1759406291",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamless2_0CropTopGSRichMaroonMarlB1A3D_NC65_0016_V1a_640x.jpg?v=1759406291",
      product_data: ["Vital Crop Top", "Compression Fit", "Rich Maroon/Marl"],
      product_price: 38,
      product_rating: "4.5",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamless2_0MidiZipUpJacketGSRichMaroonMarlB5A9Q_NC65_1173_V1a_640x.jpg?v=1759423542",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamless2_0MidiZipUpJacketGSRichMaroonMarlB5A9Q_NC65_1179_V1a_640x.jpg?v=1759423542",
      product_data: [
        "Vital Midi Zip Up Jacket",
        "Compression Fit",
        "Rich Maroon/Marl",
      ],
      product_price: 56,
      product_rating: "4.8",
    },
    {
      front_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-VitalSeamlessSportsBraAWGSRichMaroonMarlB3A4K_NC65_1097_V1a_640x.jpg?v=1759424384",
      back_img:
        "https://cdn.shopify.com/s/files/1/0156/6146/files/images-B3A4K_NC65_640x.jpg?v=1759424384",
      product_data: [
        "Vital V Neck Sports Bra",
        "Light Support",
        "Rich Maroon/Marl",
      ],
      product_price: 38,
      product_rating: "4.8",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* First ROw */}
      <div className="flex flex-col gap-10 lg:gap-15 px-5 lg:px-10 mt-19 md:mt-19 lg:mt-0 py-7">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold text-gray-800 truncate">WOMENS</p>
          <h1 className="text-[30px] lg:text-[44px] font-bold truncate">
            LAST CHANCE TO BUY
          </h1>
          <p className="text-md lg:text-xl text-gray-800 leading-snug text-balance max-w-[55rem]">
            The only thing better than finding new workout clothes you love, is
            when they're on sale. Rn you've got the chance to pick up some of
            your go-to styles for up to 50% off in the Last Chance Sale.
          </p>
        </div>

        <div className="w-full">
          <Carousel
            opts={{ align: "start" }}
            className="w-full overflow-hidden"
          >
            <CarouselContent>
              <CarouselItem
                key="VIEW ALL"
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img
                        src="https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F3aHT6rMMBDwnEd3HH4VUCq%2Fe41743a6d21615652f6f010f3a394176%2FMSS-Ecom-PLP_Link_Card_-_24190343.jpeg&w=1920&q=75"
                        alt="VIEW ALL"
                        className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"
                      />
                    </div>

                    {/* Card Info */}
                    <CardContent className="px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[13px] font-bold truncate">
                          VIEW ALL
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem
                key="SHOP LEGGINGS"
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img
                        src="https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F7jFj2FVK0r1WDzHK85uiXG%2F6f664b0d64491d3958902e0efedd7227%2FMSS-Ecom-PLP_Link_Card_-_24073557.jpeg&w=1920&q=75"
                        alt="SHOP LEGGINGS"
                        className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"
                      />
                    </div>

                    {/* Card Info */}
                    <CardContent className="px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[13px] font-bold truncate">
                          SHOP LEGGINGS
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem
                key="SHOP TOPS & T-SHIRTS"
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img
                        src="https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F4vhk2p6uEPTBw6w8oIT9HE%2F4cbbde9ca4f70a9000e39085aa5675ab%2FMSS-Ecom-PLP_Link_Card_-_24073695.jpeg&w=1920&q=75"
                        alt="SHOP TOPS & T-SHIRTS"
                        className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"
                      />
                    </div>

                    {/* Card Info */}
                    <CardContent className="px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[13px] font-bold truncate">
                          SHOP TOPS & T-SHIRTS
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem
                key="SHOP BOTTOMS"
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img
                        src="https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F2dFzNwZU0UmbQ8Qy433Aas%2F1c4c4f147916eea0985f6442b920edfc%2FMSS-Ecom-PLP_Link_Card_-_24074220.jpeg&w=1920&q=75"
                        alt="SHOP BOTTOMS"
                        className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"
                      />
                    </div>

                    {/* Card Info */}
                    <CardContent className="px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[13px] font-bold truncate">
                          SHOP BOTTOMS
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem
                key="SHOP SHORTS"
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img
                        src="https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FXode6CZULNOJOexJ8KviO%2Fccfb1a6d25aba31bc9eb15a8217557cf%2FMSS-Ecom-PLP_Link_Card_-_24074221.jpeg&w=1920&q=75"
                        alt="SHOP SHORTS"
                        className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"
                      />
                    </div>

                    {/* Card Info */}
                    <CardContent className="px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[13px] font-bold truncate">
                          SHOP SHORTS
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem
                key="SHOP SPORTS BRAS"
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img
                        src="https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F6EUiSnFNlaXeiTBjzpl0AG%2Fddfda3da46dbced19054eff29652fedb%2FMSS-Ecom-PLP_Link_Card_-_24074223.jpeg&w=1920&q=75"
                        alt="SHOP SPORTS BRAS"
                        className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"
                      />
                    </div>

                    {/* Card Info */}
                    <CardContent className="px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[13px] font-bold truncate">
                          SHOP SPORTS BRAS
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex gap-12 w-full px-5 lg:px-10 py-8 mb-19">
        {/* sidebar */}
        <div className="hidden lg:block w-1/5 sticky top-20 self-start h-fit">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-2"
          >
            <AccordionItem value="item-1" className="py-4 pb-7">
              <div className="flex items-center justify-between w-full">
                <h3 className="font-bold truncate text-[15px]">
                  FILTER & SORT
                </h3>
                <Button
                  variant="ghost"
                  className="h-auto px-2 py-1 text-sm hover:bg-white cursor-pointer text-gray-400 opacity-70"
                >
                  Clear All
                </Button>
              </div>
            </AccordionItem>

            <AccordionItem value="item-2" className="py-2">
              <AccordionTrigger className="font-bold truncate text-[15px] cursor-pointer hover:no-underline">
                SORT BY
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <RadioGroup
                  defaultValue="option-three"
                  className="flex flex-col gap-5 py-2"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="option-one"
                      id="option-one"
                      className="w-5 h-5 border-gray-300 hover:shadow-md cursor-pointer"
                    />
                    <Label
                      htmlFor="option-one"
                      className="font-normal text-[15px] truncate cursor-pointer"
                    >
                      Price: Low to High
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="option-two"
                      id="option-two"
                      className="w-5 h-5 border-gray-300 hover:shadow-md cursor-pointer"
                    />
                    <Label
                      htmlFor="option-two"
                      className="font-normal text-[15px] truncate cursor-pointer"
                    >
                      Price: High to Low
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="option-three"
                      id="option-three"
                      className="w-5 h-5 border-gray-300 hover:shadow-md cursor-pointer"
                    />
                    <Label
                      htmlFor="option-three"
                      className="font-normal text-[15px] truncate cursor-pointer"
                    >
                      Relevance
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="option-four"
                      id="option-four"
                      className="w-5 h-5 border-gray-300 hover:shadow-md cursor-pointer"
                    />
                    <Label
                      htmlFor="option-four"
                      className="font-normal text-[15px] truncate cursor-pointer"
                    >
                      Newest
                    </Label>
                  </div>
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="py-2">
              <AccordionTrigger className="font-bold truncate text-[15px] cursor-pointer hover:no-underline">
                PRODUCT TYPE
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 text-balance w-full">
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Shorts
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  T-Shirts & Tops
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Joggers & Sweatpants
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Hoodies & Sweatpants
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Tank & Tops
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="py-2">
              <AccordionTrigger className="font-bold truncate text-[15px] cursor-pointer hover:no-underline">
                SIZE
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-3 gap-2 text-balance w-full py-2">
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  XS
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  S
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  M
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  L
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  XL
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  XXL
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  3XL
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="py-2">
              <AccordionTrigger className="font-bold truncate text-[15px] cursor-pointer hover:no-underline">
                FEATURES
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 text-balance w-full">
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Pockets
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Adjustables Wasitbands
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Lightweight
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Sweat Wicking
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Breathable
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Seamless
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Reflective Branding
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Non Restrictive
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-2 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  Zip Pockets
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="py-2">
              <AccordionTrigger className="font-bold truncate text-[15px] cursor-pointer hover:no-underline">
                COLORS
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-2 py-7 text-balance w-full">
                <div className="flex justify-center items-center flex-col gap-3 mb-8">
                  <div className="rounded-full w-12 h-12 border bg-black hover:scale-90 transition-transform cursor-pointer"></div>
                  <Label
                    htmlFor="black"
                    className="font-normal text-[14px] truncate cursor-pointer"
                  >
                    Black
                  </Label>
                </div>

                <div className="flex justify-center items-center flex-col gap-3 mb-8">
                  <div className="rounded-full w-12 h-12 border bg-gray-500 hover:scale-90 transition-transform cursor-pointer"></div>
                  <Label
                    htmlFor="Grey"
                    className="font-normal text-[14px] truncate cursor-pointer"
                  >
                    Grey
                  </Label>
                </div>

                <div className="flex justify-center items-center flex-col gap-3 mb-8">
                  <div className="rounded-full w-12 h-12 border bg-blue-500 hover:scale-90 transition-transform cursor-pointer"></div>
                  <Label
                    htmlFor="Blue"
                    className="font-normal text-[14px] truncate cursor-pointer"
                  >
                    Blue
                  </Label>
                </div>

                <div className="flex justify-center items-center flex-col gap-3 mb-8">
                  <div className="rounded-full w-12 h-12 border bg-white hover:scale-90 transition-transform cursor-pointer"></div>
                  <Label
                    htmlFor="White"
                    className="font-normal text-[14px] truncate cursor-pointer"
                  >
                    White
                  </Label>
                </div>

                <div className="flex justify-center items-center flex-col gap-3 mb-8">
                  <div className="rounded-full w-12 h-12 border bg-green-700 hover:scale-90 transition-transform cursor-pointer"></div>
                  <Label
                    htmlFor="Green"
                    className="font-normal text-[14px] truncate cursor-pointer"
                  >
                    Green
                  </Label>
                </div>

                <div className="flex justify-center items-center flex-col gap-3 mb-8">
                  <div className="rounded-full w-12 h-12 border bg-amber-900 hover:scale-90 transition-transform cursor-pointer"></div>
                  <Label
                    htmlFor="Brown"
                    className="font-normal text-[14px] truncate cursor-pointer"
                  >
                    Brown
                  </Label>
                </div>

                <div className="flex justify-center items-center flex-col gap-3 mb-8">
                  <div className="rounded-full w-12 h-12 border bg-pink-400 hover:scale-90 transition-transform cursor-pointer"></div>
                  <Label
                    htmlFor="Pink"
                    className="font-normal text-[14px] truncate cursor-pointer"
                  >
                    Pink
                  </Label>
                </div>

                <div className="flex justify-center items-center flex-col gap-3 mb-8">
                  <div className="rounded-full w-12 h-12 border bg-purple-800 hover:scale-90 transition-transform cursor-pointer"></div>
                  <Label
                    htmlFor="Purple"
                    className="font-normal text-[14px] truncate cursor-pointer"
                  >
                    Purple
                  </Label>
                </div>

                <div className="flex justify-center items-center flex-col gap-3 mb-8">
                  <div className="rounded-full w-12 h-12 border bg-red-600 hover:scale-90 transition-transform cursor-pointer"></div>
                  <Label
                    htmlFor="Red"
                    className="font-normal text-[14px] truncate cursor-pointer"
                  >
                    Red
                  </Label>
                </div>

                <div className="flex justify-center items-center flex-col gap-3 mb-8">
                  <div className="rounded-full w-12 h-12 border bg-yellow-500 hover:scale-90 transition-transform cursor-pointer"></div>
                  <Label
                    htmlFor="Yellow"
                    className="font-normal text-[14px] truncate cursor-pointer"
                  >
                    Yellow
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="py-2">
              <AccordionTrigger className="font-bold truncate text-[15px] cursor-pointer hover:no-underline">
                DISCOUNT
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-2 gap-2 text-balance w-full py-2">
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-3 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  20%
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-3 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  30%
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-3 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  40%
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-3 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  50%
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-3 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  60%
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-3 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  70%
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="py-2">
              <AccordionTrigger className="font-bold truncate text-[15px] cursor-pointer hover:no-underline">
                PRICE
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-2 gap-2 text-balance w-full py-2">
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-3 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  $0 - $10
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-3 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  $10 - $20
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-3 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  $20 - $30
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-3 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  $40 - $50
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-3 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  $50 - $60
                </Button>
                <Button
                  variant="ghost"
                  className="hover:shadow-md truncate rounded-sm border h-auto px-2 py-3 text-[14px] opacity-70 font-medium  hover:bg-white cursor-pointer"
                >
                  $70 - $100
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* card's*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full overflow-hidden">
          {femalesProducts.map((item) => (
            <Card
              key={item.index}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setCardData(item);
                  setCardActive(true);
                }
              }}
              className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2 "
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[3/3.7] overflow-hidden group">
                <img
                  src={item.front_img}
                  alt={`${item.product_data[0]}_front`}
                  className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
                />
                <img
                  src={item.back_img}
                  alt={`${item.product_data[0]}_back`}
                  className="hidden lg:block w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500 absolute top-0 left-0"
                />

                {/* Size Button Overlay */}
                <div
                  className="hidden lg:grid absolute bottom-0 left-0 w-full bg-gray-50 p-3  grid-cols-4 gap-2 opacity-0 
                group-hover:opacity-100 transition duration-400"
                >
                  {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: nanoid(),
                            image: item.front_img,
                            title: item.product_data[0],
                            size: size,
                            sizeType: item.product_data[1],
                            color: item.product_data[2],
                            price: item.product_price,
                            unitPrice: item.product_price,
                            quantity: 1,
                          })
                        )
                      }
                      className="cursor-pointer px-0 py-2 text-sm border border-gray-300 rounded bg-white hover:bg-black hover:text-white transition"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <CardContent className="flex justify-between px-0">
                <div className="flex flex-col gap-0.3">
                  <h2 className="text-md lg:text-sm font-semibold truncate">
                    {item.product_data[0]}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {item.product_data[1]}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.product_data[2]}
                  </p>
                  {/* Price & Rating */}
                  <p className="text-sm font-bold">${item.product_price}</p>
                </div>

                <div>
                  <span className="text-[13px] font-bold ">
                    ★{item.product_rating}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {cardActive && (
        <Overlay_Drawer
          cardActive={cardActive}
          setCardActive={setCardActive}
          cardData={cardData}
          setCardData={setCardData}
        />
      )}
    </>
  );
}

export default Women_Section;
