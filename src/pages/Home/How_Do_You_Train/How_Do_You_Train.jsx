import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function How_Do_You_Train() {
    
  const [selectedCategory, setSelectedCategory] = useState("Women");
  const crouselData = {
    Women: [
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F2yDu0Juzb23krzFLtGsuB0%2F859015fda2e7c8b4d3ed7c74283700cc%2FHeadless_Cards_-_23965448.png&w=1920&q=95",
        title: "LIFTING",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F4skbb11vKjay5NmWpwYbSB%2Fb62fc03b65378dddd807a9cead2fe172%2FHeadless_Cards_-_22614710.png&w=1920&q=95",
        title: "RUNNING",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F69jPB0oAcvmxGfGMgAXY1h%2Fb7d0a51bca7b029995776fb22e6b7da9%2FHeadless_Cards_-_23966346.png&w=1920&q=95",
        title: "PILATES",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F61f4WygAU6zRzpSMCkAesm%2F1c223e3c15799051df54896033aaeb81%2FHeadless_Cards_-_23966358.png&w=1920&q=95",
        title: "HIIT",
      },
    ],
    Men: [
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F2mB380nggfLEq0fyoix0hk%2Fa40b432c8f3e9120036732b6efcc0bfd%2FHeadless_Cards_-_23968152.png&w=1920&q=95",
        title: "LIFTING",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F4zc2oSazptCnF4Ke5W3nmj%2F0c3d8624714f74fc9b50243adc1cfc65%2FHeadless_Cards_-_23968108.png&w=1920&q=95",
        title: "RUNNING",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FKki8kFtx6Bhm9Unix9u6d%2F3da517411f229a1c3d1b07572477b48c%2FHeadless_Cards_-_23968128.png&w=1920&q=95",
        title: "HIIT",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FhOKzmdnicQDkVHnB77h9p%2F7866f695832e2057219dea9b0eb7a65b%2FHeadless_Cards_-_23128334.png&w=1920&q=95",
        title: "REST DAY",
      },
    ],
  };

  const activeData = crouselData[selectedCategory];

  return (
    <>
      <div className="w-full pb-5 ">
        <h1 className="text-2xl font-bold pb-5 px-5 lg:px-15">How Do YOU TRAIN?</h1>
        <div className="flex justify-between px-5 lg:px-20">
          <div className="flex gap-7 justify-center items-center">
            <div className="flex gap-3">
              <Button
                className={`font-bold text-[15px] rounded-2xl py-5 px-3 cursor-pointer ${
                  selectedCategory === "Women"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory("Women")}
              >
                WOMEN
              </Button>
              <Button
                onClick={() => setSelectedCategory("Men")}
                className={`font-bold text-[15px] rounded-2xl py-5 px-3 cursor-pointer  ${
                  selectedCategory === "Men"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-100"
                }`}
              >
                Men
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full px-5 lg:px-14 pb-14">
        <Carousel opts={{ align: "start" }} className="w-full overflow-hidden">
          <CarouselContent>
            {activeData.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"
                      />
                    </div>

                    {/* Card Info */}
                    <CardContent className="px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-md font-bold truncate">
                          {item.title}
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}

export default How_Do_You_Train;
