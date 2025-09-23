import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

function Category_Section() {

    const categoryData = [
        {
            img: 'https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F3dhFGkq52XN6vIrsqk96r5%2Ff0f5673f0a3430943556b67c4dc88cc6%2FHeadless_Cards_-_23966863.png&w=1920&q=95',
            title: 'SHOP WOMEN',
        },
        {
        img: 'https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2FyYGz5a6NQyNrCNJtfsRhD%2Fe390f76105d3b2a1c4bbe1db0e2eddb9%2FHeadless_Cards_-_23966879.png&w=1920&q=95',
            title: 'SHOP MEN',
        },
        {
        img: 'https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F5ZC84b3mCkVrwfqlLcPAkQ%2Ff94f69a1093ff5a9f99fb2d40cec617c%2FHeadless_Cards_-_23629343.png&w=1920&q=95',
        title: 'SHOP ACCESSORIES',
        },
    ]


  return (
          <div className="flex justify-center w-full px-5 lg:px-14 pb-14 mt-5">
            <Carousel opts={{ align: "start" }} className="w-full overflow-hidden">
              <CarouselContent>
                {categoryData.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                        {/* Product Image */}
                        <div className=" w-full aspect-[3/4] overflow-hidden">
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
  )
}

export default Category_Section
