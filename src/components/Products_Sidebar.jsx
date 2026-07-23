import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

function Products_Sidebar() {
  return (
        <div className="hidden lg:block w-1/5 sticky top-20 self-start h-fit">

          <Accordion type="single" collapsible className="w-full" defaultValue="item-2">

            <AccordionItem value="item-1" className="py-4 pb-7">
              <div className="flex items-center justify-between w-full">
                <h3 className="font-bold truncate text-[15px]">FILTER & SORT</h3>
                <Button variant="ghost" className="h-auto px-2 py-1 text-sm hover:bg-white cursor-pointer text-gray-400 opacity-70">
                  Clear All
                </Button>
              </div>
            </AccordionItem>

            <AccordionItem value="item-2" className="py-2">
              <AccordionTrigger className="font-bold truncate text-[15px] cursor-pointer hover:no-underline">SORT BY</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <RadioGroup defaultValue="option-three" className="flex flex-col gap-5 py-2">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="option-one" id="option-one" className="w-5 h-5 border-gray-300 hover:shadow-md cursor-pointer"/>
                    <Label htmlFor="option-one" className="font-normal text-[15px] truncate cursor-pointer">
                      Price: Low to High
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="option-two" id="option-two" className="w-5 h-5 border-gray-300 hover:shadow-md cursor-pointer"/>
                    <Label htmlFor="option-two" className="font-normal text-[15px] truncate cursor-pointer">
                      Price: High to Low
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="option-three" id="option-three" className="w-5 h-5 border-gray-300 hover:shadow-md cursor-pointer"/>
                    <Label htmlFor="option-three" className="font-normal text-[15px] truncate cursor-pointer">
                      Relevance
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="option-four" id="option-four" className="w-5 h-5 border-gray-300 hover:shadow-md cursor-pointer"/>
                    <Label htmlFor="option-four" className="font-normal text-[15px] truncate cursor-pointer">
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
  )
}

export default Products_Sidebar
