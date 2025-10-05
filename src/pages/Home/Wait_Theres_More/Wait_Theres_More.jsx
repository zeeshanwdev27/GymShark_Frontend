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

function Wait_Theres_More() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState("GUIDES");

  const crouselData = {
    GUIDES: [
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F6b4Oh5nYDM6bNsoAGgPDcE%2F0036a7146d2743c0dfbe2566fe31e550%2FHeadless_Cards_-_23702641.png&w=1920&q=95",
        title: "What Length Gym Shorts Should I Be Wearing?",
        description: "Find the best short length for your height, style, and activity with our detailed guide.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F2Szp4Ab3a88hpco3BrBJT9%2Fec872929f785b6a7f5a854272f177a00%2FHeadless_Cards_-_23624372__1_.png&w=1920&q=95",
        title: "LEGGINGS GUIDE",
        description: "Stop looking; start finding the leggings you've been looking for. However you train, whatever your look, we’ve got a match.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F3J6UPQQdrkOkrAarafJwB3%2F77b7b947e0efcdd1a028436e6f9237c7%2FHeadless_Cards_-_23624472.png&w=1920&q=95",
        title: "SPORTS BRA GUIDE",
        description: "Find the one with high, medium & light-support sports bras more trustworthy & reliable than your ex.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F4Kxi4Any1cGNngKyuaFyPQ%2F0f334ca13b4ac06d24e92d0213dd1b7d%2FHeadless_Cards_-_23699712__1_.png&w=1920&q=95",
        title: "MEN’S SHORTS GUIDE",
        description: "Everything you need to know about the best gym shorts in the game, from repping, to running, to rest day.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F2YLVaAlSmanHDauj43sFNK%2Fbbbebda0ab970338a33f3e98bfcffe0f%2FHeadless_Cards_-_23699743.png&w=1920&q=95",
        title: "What To Wear To The Gym",
        description: "Let’s go back to basics. Smash your workout with the right gym essentials and outfit ideas for every activity.",
      },
    ],
    TRENDING: [
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F36Fpt8YzPvefY2hSzhoPHW%2Fd6ef6fe89199f6748caf82555350d6a4%2FHeadless_Cards_-_23702947.png&w=1920&q=95",
        title: "How To Style Your Bodysuit | 5 Bodysuit Outfit Ideas For Summer",
        description: "Sleek, simple and comfy, bodysuits are the perfect addition to your summer wardrobe. Learn how to style yours.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F2mhE1P0yx2LADkPladWggH%2F62d2973fc62e7f6b18d5e1d2f649e096%2FHeadless_Cards_-_23703713.png&w=1920&q=95",
        title: "Does Cardio Kill Gains? We Break It Down.",
        description: "Is cardio the enemy of muscle growth, or have we been avoiding the treadmill for no good reason? We uncover the truth.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F1hH3t47FDdyZnORnGUBMeB%2F50cc54866f41182b4fa408f51c678a19%2FHeadless_Cards_-_23703903.png&w=1920&q=95",
        title: "The Best Tank Tops For Men - Bicep Baring & Breathable",
        description: "After a new tank top to see you through summer training? Breathable, sweat-wicking, stylish, check out our best.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F6C9e81yUM6HtpCIeMfyHLO%2F0097fa97b5a534e282451cbad990f261%2FHeadless_Cards_-_23703957__3_.png&w=1920&q=95",
        title: "Strength Training For Runners",
        description: "Run faster, longer, and injury-free by adding these essential strength exercises designed specifically for runners.",
      },
    ],
    TRAINING: [
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F6ivVtQB27DLDKPNKifUZYC%2F739f80ffdcd6f51d5fba0622f28b0e4a%2FHeadless_Cards_-_23708288.png&w=1920&q=95",
        title: "Crush Your Core: Kettlebell Edition",
        description: "Looking to switch up your ab workout routine? Give these kettlebell core exercises a try to sculpt, strengthen, and define.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FZyVmqFeXodDCYSw42LnNs%2F9b4429552a69e052514dddd69d0a12c4%2FHeadless_Cards_-_23708279.png&w=1920&q=95",
        title: "Level Up Your Sled Push",
        description: "Discover the best sled push technique and exercises to build strength to tackle this Hyrox station with ease.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F6SjSDcMjk1grrUINBLL0Lb%2Fd8e78ec684bac6175c0439f3a22e2d89%2FHeadless_Cards_-_23708314.png&w=1920&q=95",
        title: "Leg Day Dumbbell Essentials",
        description: "Craving that leg day burn? Try these 10 dumbbell exercises for serious gains.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F5AsKgwlkLjG6BuxWZPbzfU%2F4d86b99f7b1a888a84219b10743b7719%2FHeadless_Cards_-_22813543.png&w=1920&q=95",
        title: "Interval Running: The Ultimate Hack To Run Faster",
        description: "Want to run faster and chase a new PB? Interval running is what you need: run hard, recover fast and repeat.",
      },
    ],
    APPS: [
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FhuD13luglKvZRI2lxF9dC%2Fb84a93ed06f00bf6584b4a56edab9a52%2Fshop_app.jpg&w=1920&q=95",
        title: "BEST OF GYMSHARK ANYTIME, ANYWHERE",
        description: "Get the Gymshark app for on-the-go shopping, exclusive drops and Gymshark Regent St. access.",
      },
      {
        img: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F2xY8QOIvihVabnqhv0Ah4T%2F30aa79073d81c8511b1b01eb14355967%2Ftrain_app.jpg&w=1920&q=95",
        title: "TAKE PROGRESS PERSONALLY WITH THE TRAINING APP",
        description: "Train like an athlete or personalise your own training plan. Then go make some progress. Oh, and it’s 100% free.",
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
      <div className="w-full pb-5">
        <h1 className="text-2xl font-bold pb-5 px-5 lg:px-15">WAIT THERE’S MORE…</h1>

        <div className="flex justify-between px-5 lg:px-20">
          <div className="flex gap-7 justify-center items-center">
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  setSelectedCategory("GUIDES");
                  setCurrentIndex(0);
                }}
                className={`font-bold text-[15px] rounded-2xl py-4 px-2 md:py-5 md:px-3 cursor-pointer ${
                  selectedCategory === "GUIDES"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-100"
                }`}
              >
                GUIDES
              </Button>

              <Button
                onClick={() => {
                  setSelectedCategory("TRENDING");
                  setCurrentIndex(0);
                }}
                className={`font-bold text-[15px] rounded-2xl py-4 px-2 md:py-5 md:px-3 cursor-pointer ${
                  selectedCategory === "TRENDING"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-100"
                }`}
              >
                TRENDING
              </Button>

              <Button
                onClick={() => {
                  setSelectedCategory("TRAINING");
                  setCurrentIndex(0);
                }}
                className={`font-bold text-[15px] rounded-2xl py-4 px-2 md:py-5 md:px-3 cursor-pointer ${
                  selectedCategory === "TRAINING"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-100"
                }`}
              >
                TRAINING
              </Button>

              <Button
                onClick={() => {
                  setSelectedCategory("APPS");
                  setCurrentIndex(0);
                }}
                className={`font-bold text-[15px] rounded-2xl py-4 px-2 md:py-5 md:px-3 cursor-pointer ${
                  selectedCategory === "APPS"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-100"
                }`}
              >
                APPS
              </Button>
            </div>
          </div>

          {/* RIght Left BTN */}
          {activeData.length > 4  && (


          <div className="hidden lg-flex gap-5 mr-5 mt-2">
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
          )}
        </div>
      </div>

      {/* Crousel */}
      <div className="flex justify-center w-full px-5 lg:px-14 pb-14">
        <Carousel opts={{ align: "start" }} className="w-full overflow-hidden">
          <CarouselContent>
            {activeData.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
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
                        {/* Description */}
                        <p className="text-sm text-gray-500">
                          {item.description}
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

export default Wait_Theres_More;
