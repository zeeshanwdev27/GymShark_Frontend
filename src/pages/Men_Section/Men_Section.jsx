import React from "react";
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

function Men_Section() {
  return (
    <>
      {/* First ROw */}
      <div className="flex flex-col gap-15 px-10 mt-19 md:mt-19 lg:mt-0 py-7">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold text-gray-800 truncate">MENS</p>
          <h1 className="text-[44px] font-bold truncate">LAST CHANCE TO BUY</h1>
          <p className="text-xl text-gray-800 leading-snug text-balance max-w-[55rem]">
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
                        src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F6rq58uycSL8Vnn74Yg1YBA%2F0cba1fa9a4d94d6c1e7a1a51adea84c6%2FMSS-Ecom-PLP_Link_Card_-_24190322.jpeg&w=1920&q=75"
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
                key="SHOP T-SHIRTS & TOPS"
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img
                        src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F5idqkRF5orYCHXz8oo6iqv%2F48b497961fa0c92772ff74daf7e32c88%2FMSS-Ecom-PLP_Link_Card_-_24074231.jpeg&w=1920&q=75"
                        alt="SHOP T-SHIRTS & TOPS"
                        className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"
                      />
                    </div>

                    {/* Card Info */}
                    <CardContent className="px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[13px] font-bold truncate">
                          SHOP T-SHIRTS & TOPS
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
                        src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FASiny9Qiafc2NKIggGdU7%2Fdc769f70065c9a8406effac3f350963f%2FMSS-Ecom-PLP_Link_Card_-_24074233.jpeg&w=1920&q=75"
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
                key="SHOP BOTTOMS"
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img
                        src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F3IafvakdalVZC9AiPWkCDF%2F1a32e2ce2d288adb82efc5c51c334a54%2FMSS-Ecom-PLP_Link_Card_-_24074237.jpeg&w=1920&q=75"
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
                key="SHOP TANKS"
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img
                        src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F5Od5Sw4EE9weqUve8jLM0b%2F1a9cc646cff7549889a919ff284bd587%2FMSS-Ecom-PLP_Link_Card_-_24074245.jpeg&w=1920&q=75"
                        alt="SHOP TANKS"
                        className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"
                      />
                    </div>

                    {/* Card Info */}
                    <CardContent className="px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[13px] font-bold truncate">
                          SHOP TANKS
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem
                key="SHOP HOODIES & SWEATSHIRTS"
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img
                        src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F3AeiF3bLWre98MKG90709E%2F485518e85fa4ea718a981f01c2df5ab9%2FMSS-Ecom-PLP_Link_Card_-_24074246.jpeg&w=1920&q=75"
                        alt="SHOP HOODIES & SWEATSHIRTS"
                        className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"
                      />
                    </div>

                    {/* Card Info */}
                    <CardContent className="px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[13px] font-bold truncate">
                          SHOP HOODIES & SWEATSHIRTS
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
      <div className="flex gap-12 w-full px-10 py-8 mb-19">
        {/* sidebar */}
        <div className="w-1/5 sticky top-20 self-start h-fit">
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
        <div className="grid grid-cols-4 gap-2 w-full overflow-hidden">
          
          <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2 ">
            {/* Product Image */}
            <div className="relative w-full aspect-[3/3.7] overflow-hidden group">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/Varsity_Jersey_GS_Black_A1B5H-BB2J_066_3840x.jpg?v=1726043266"
                alt="front_img"
                className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/VarsityJerseyGSBlackA1B5H-BB2Jmike0182_b9e41ef3-ad0c-4449-982a-1ec9041a9a6e_3840x.jpg?v=1726043266"
                alt="back_img"
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
                  Sport's Jersey
                </h2>
                <p className="text-sm text-gray-500">Oversized Fit</p>
                <p className="text-sm text-gray-500">Black</p>
                {/* Price & Rating */}
                <p className="text-sm font-bold">$28</p>
              </div>

              <div>
                <span className="text-[13px] font-bold ">★3.9</span>
              </div>
            </CardContent>
          </Card>

                    <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2 ">
            {/* Product Image */}
            <div className="relative w-full aspect-[3/3.7] overflow-hidden group">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/Varsity_Jersey_GS_Black_A1B5H-BB2J_066_3840x.jpg?v=1726043266"
                alt="front_img"
                className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/VarsityJerseyGSBlackA1B5H-BB2Jmike0182_b9e41ef3-ad0c-4449-982a-1ec9041a9a6e_3840x.jpg?v=1726043266"
                alt="back_img"
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
                  Sport's Jersey
                </h2>
                <p className="text-sm text-gray-500">Oversized Fit</p>
                <p className="text-sm text-gray-500">Black</p>
                {/* Price & Rating */}
                <p className="text-sm font-bold">$28</p>
              </div>

              <div>
                <span className="text-[13px] font-bold ">★3.9</span>
              </div>
            </CardContent>
          </Card>

                    <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2 ">
            {/* Product Image */}
            <div className="relative w-full aspect-[3/3.7] overflow-hidden group">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/Varsity_Jersey_GS_Black_A1B5H-BB2J_066_3840x.jpg?v=1726043266"
                alt="front_img"
                className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/VarsityJerseyGSBlackA1B5H-BB2Jmike0182_b9e41ef3-ad0c-4449-982a-1ec9041a9a6e_3840x.jpg?v=1726043266"
                alt="back_img"
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
                  Sport's Jersey
                </h2>
                <p className="text-sm text-gray-500">Oversized Fit</p>
                <p className="text-sm text-gray-500">Black</p>
                {/* Price & Rating */}
                <p className="text-sm font-bold">$28</p>
              </div>

              <div>
                <span className="text-[13px] font-bold ">★3.9</span>
              </div>
            </CardContent>
          </Card>

                    <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2 ">
            {/* Product Image */}
            <div className="relative w-full aspect-[3/3.7] overflow-hidden group">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/Varsity_Jersey_GS_Black_A1B5H-BB2J_066_3840x.jpg?v=1726043266"
                alt="front_img"
                className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/VarsityJerseyGSBlackA1B5H-BB2Jmike0182_b9e41ef3-ad0c-4449-982a-1ec9041a9a6e_3840x.jpg?v=1726043266"
                alt="back_img"
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
                  Sport's Jersey
                </h2>
                <p className="text-sm text-gray-500">Oversized Fit</p>
                <p className="text-sm text-gray-500">Black</p>
                {/* Price & Rating */}
                <p className="text-sm font-bold">$28</p>
              </div>

              <div>
                <span className="text-[13px] font-bold ">★3.9</span>
              </div>
            </CardContent>
          </Card>

                    <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2 ">
            {/* Product Image */}
            <div className="relative w-full aspect-[3/3.7] overflow-hidden group">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/Varsity_Jersey_GS_Black_A1B5H-BB2J_066_3840x.jpg?v=1726043266"
                alt="front_img"
                className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/VarsityJerseyGSBlackA1B5H-BB2Jmike0182_b9e41ef3-ad0c-4449-982a-1ec9041a9a6e_3840x.jpg?v=1726043266"
                alt="back_img"
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
                  Sport's Jersey
                </h2>
                <p className="text-sm text-gray-500">Oversized Fit</p>
                <p className="text-sm text-gray-500">Black</p>
                {/* Price & Rating */}
                <p className="text-sm font-bold">$28</p>
              </div>

              <div>
                <span className="text-[13px] font-bold ">★3.9</span>
              </div>
            </CardContent>
          </Card>

                    <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2 ">
            {/* Product Image */}
            <div className="relative w-full aspect-[3/3.7] overflow-hidden group">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/Varsity_Jersey_GS_Black_A1B5H-BB2J_066_3840x.jpg?v=1726043266"
                alt="front_img"
                className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/VarsityJerseyGSBlackA1B5H-BB2Jmike0182_b9e41ef3-ad0c-4449-982a-1ec9041a9a6e_3840x.jpg?v=1726043266"
                alt="back_img"
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
                  Sport's Jersey
                </h2>
                <p className="text-sm text-gray-500">Oversized Fit</p>
                <p className="text-sm text-gray-500">Black</p>
                {/* Price & Rating */}
                <p className="text-sm font-bold">$28</p>
              </div>

              <div>
                <span className="text-[13px] font-bold ">★3.9</span>
              </div>
            </CardContent>
          </Card>

                    <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2 ">
            {/* Product Image */}
            <div className="relative w-full aspect-[3/3.7] overflow-hidden group">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/Varsity_Jersey_GS_Black_A1B5H-BB2J_066_3840x.jpg?v=1726043266"
                alt="front_img"
                className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/VarsityJerseyGSBlackA1B5H-BB2Jmike0182_b9e41ef3-ad0c-4449-982a-1ec9041a9a6e_3840x.jpg?v=1726043266"
                alt="back_img"
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
                  Sport's Jersey
                </h2>
                <p className="text-sm text-gray-500">Oversized Fit</p>
                <p className="text-sm text-gray-500">Black</p>
                {/* Price & Rating */}
                <p className="text-sm font-bold">$28</p>
              </div>

              <div>
                <span className="text-[13px] font-bold ">★3.9</span>
              </div>
            </CardContent>
          </Card>

                    <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2 ">
            {/* Product Image */}
            <div className="relative w-full aspect-[3/3.7] overflow-hidden group">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/Varsity_Jersey_GS_Black_A1B5H-BB2J_066_3840x.jpg?v=1726043266"
                alt="front_img"
                className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/VarsityJerseyGSBlackA1B5H-BB2Jmike0182_b9e41ef3-ad0c-4449-982a-1ec9041a9a6e_3840x.jpg?v=1726043266"
                alt="back_img"
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
                  Sport's Jersey
                </h2>
                <p className="text-sm text-gray-500">Oversized Fit</p>
                <p className="text-sm text-gray-500">Black</p>
                {/* Price & Rating */}
                <p className="text-sm font-bold">$28</p>
              </div>

              <div>
                <span className="text-[13px] font-bold ">★3.9</span>
              </div>
            </CardContent>
          </Card>

                    <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2 ">
            {/* Product Image */}
            <div className="relative w-full aspect-[3/3.7] overflow-hidden group">
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/Varsity_Jersey_GS_Black_A1B5H-BB2J_066_3840x.jpg?v=1726043266"
                alt="front_img"
                className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/files/VarsityJerseyGSBlackA1B5H-BB2Jmike0182_b9e41ef3-ad0c-4449-982a-1ec9041a9a6e_3840x.jpg?v=1726043266"
                alt="back_img"
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
                  Sport's Jersey
                </h2>
                <p className="text-sm text-gray-500">Oversized Fit</p>
                <p className="text-sm text-gray-500">Black</p>
                {/* Price & Rating */}
                <p className="text-sm font-bold">$28</p>
              </div>

              <div>
                <span className="text-[13px] font-bold ">★3.9</span>
              </div>
            </CardContent>
          </Card>


        </div>
      </div>
    </>
  );
}

export default Men_Section;
