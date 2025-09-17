import React, { useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Popular_RightNow() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState("women");

  const crouselData = {
    women: [
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F6BTtCAARjgZ7c3dP5tGMcx%2F6bdd8fcc9cac4d239906726bd899c51c%2FHeadless_Cards_-_23915390.png&w=1920&q=95",
        product_title: "IT’S ALL ABOUT GLUTES",
        product_description:
          "You’ve trained. You’ve earned bragging rights. Boost your glutes in looks that lift, shape, hold & separate.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F38sd7A5eK09TzesH3pEOoZ%2F2c688a2adb979dee9a79c94b162406d2%2FHeadless_Cards_-_23941461.png&w=1920&q=95",
        product_title: "NEW SEASON = NEW SHORTS",
        product_description:
          "Let’s be honest, it’s always shorts season round here.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F3CJykV3qpjCVjEwgxnAKcQ%2Fb52946507c4b5b45d6665b565a96ee85%2FHeadless_Cards_-_23845192.png&w=1920&q=95",
        product_title: "Now live: The perfect lifter’s pants",
        product_description:
          "Loud & proud or quietly confident, the Pumper Pants have got a look for however you lift.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FJU7IlDxJ7JqQ80uZRHspe%2Fb14059948cd14922b216adba481958e7%2FHeadless_Cards_-_23941467.png&w=1920&q=95",
        product_title: "RUNNING",
        product_description:
          "Running stuff so good it’ll (almost) make you want to do cardio.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F7hNCztO63pHLBxnVgSPub2%2F9319e5c235e160bde4f87003831727d3%2FHeadless_Cards_-_23762336.png&w=1920&q=95",
        product_title: "Oversized Always Looks Cool",
        product_description: "If it's not oversized, we don't want it.",
      },
    ],
    men: [
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F1OvorVUUNjERAgPoeJVlZ9%2Fd93e204cafa1df3c2c3348bab00b8103%2FHeadless_Cards_-_24079854.png&w=1920&q=95",
        product_title: "WINTER ARC PREP",
        product_description:
          "No excuses here, we just show up. Grab the durable, cold weather essentials to keep you hitting the weight room, day in, day out.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F27hUh0rISSqYMadsPNwaHG%2F7ea80e1080a1f0fefe2bb02af6ca14f4%2FHeadless_Cards_-_23915427.png&w=1920&q=95",
        product_title: "1ST PLACE LOOKS FOR HYBRID TRAINING",
        product_description:
          "Light when lifting heavy, cool when running hot, this kit adapts as much as you do.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F7AnHrPxCN2MoDRPg2xWTWx%2F53bdda281b952774d9aa6a8123606980%2FHeadless_Cards_-_23935999.png&w=1920&q=95",
        product_title: "GYMSHARK X JAMES BEARDWELL",
        product_description:
          "The GEO Seamless T-shirt signature edition, by Athlete James Beardwell.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F5bpY9CNYHjC1ORKz2g4i8y%2Fd7e27dcffc1fc27b28dd2dca942e64ad%2FGSCC_RUNNING_CARD.png&w=1920&q=95",
        product_title: "RUNNING",
        product_description:
          "Running stuff so good it’ll (almost) make you want to do cardio.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F4CGqP2NhJIhirit7rn6OJ3%2F8e42f3d07bd59efee668306974714862%2FHeadless_Cards_-_23776110.png&w=1920&q=95",
        product_title: "GYM TOPS YOU’LL WANT TO LIVE IN",
        product_description: "For repping, running, resting, everything.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F6JhD5dQhcii0QBQK7npz6v%2F8f1797925a7d3c9a50371692469e756a%2FHeadless_Cards_-_23629149.png&w=1920&q=95",
        product_title: "OUTPERFORM IN POWER THIS SEASON",
        product_description: "It's the one you reach for time and time again.",
      },
    ],
  };

  const activeData = crouselData[selectedCategory];
  const visibleSlides = 4;
  const maxIndex = activeData.length - visibleSlides;

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
      <div className=" w-full  pb-5 ">
        <h1 className="text-2xl font-bold pb-5 px-15">POPULAR RIGHT NOW</h1>

        <div className="flex justify-between px-20">
          <div className="flex gap-7 justify-center items-center">
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  setSelectedCategory("women");
                  setCurrentIndex(0);
                }}
                className={`font-bold text-[15px] rounded-2xl py-5 px-3 cursor-pointer ${
                  selectedCategory === "women"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-100"
                }`}
              >
                WOMEN
              </Button>

              <Button
                onClick={() => {
                  setSelectedCategory("men");
                  setCurrentIndex(0);
                }}
                className={`font-bold text-[15px] rounded-2xl py-5 px-3 cursor-pointer ${
                  selectedCategory === "men"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-100"
                }`}
              >
                Men
              </Button>
            </div>
          </div>

          <div className="flex gap-5 mr-5 mt-2">
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
      </div>

      {/* Crousel */}
      <div className="flex justify-center w-full px-14 pb-14">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {activeData.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/4] overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.product_title}
                        className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"
                      />
                    </div>

                    {/* Card Info */}
                    <CardContent className="px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-md font-bold truncate">
                          {item.product_title}
                        </h2>
                        {/* Description */}
                        <p className="text-sm text-gray-500">
                          {item.product_description}
                        </p>
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

export default Popular_RightNow;
