import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { useDispatch } from "react-redux";
import Overlay_Drawer from "../Overlay_Drawer/Overlay_Drawer";
import { fetchProducts } from "@/features/product/productSlice";

import Products_Sidebar from "@/components/Products_Sidebar.jsx";
import Products_Cards from "@/components/Products_Cards.jsx";

function Men_Section() {

  const dispatch = useDispatch();

  const [cardActive, setCardActive] = useState(false);
  const [cardData, setCardData] = useState({});

  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const gender = "Men"

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    setPage(1);
    dispatch(fetchProducts({ page: 1, limit: 10, gender, category }));
  }, [category]);


  
  return (
    <>

      {/* First ROw */}
      <div className="flex flex-col gap-10 lg:gap-15 px-5 lg:px-10 mt-19 md:mt-19 lg:mt-0 py-7">

        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold text-gray-800 truncate">MENS</p>
          <h1 className="text-[30px] lg:text-[44px] font-bold truncate">LAST CHANCE TO BUY</h1>
          <p className="text-md lg:text-xl text-gray-800 leading-snug text-balance max-w-[55rem]">
            The only thing better than finding new workout clothes you love, is
            when they're on sale. Rn you've got the chance to pick up some of
            your go-to styles for up to 50% off in the Last Chance Sale.
          </p>
        </div>

        {/* Top-Cards */}
        <div className="w-full">
          <Carousel opts={{ align: "start" }} className="w-full overflow-hidden">
            <CarouselContent>

              {/* View All */}
              <CarouselItem key="VIEW ALL" className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img onClick={()=> setCategory("")} src="/Mens_Category/img1.avif" alt="VIEW ALL" className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"/>
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

              {/* T-SHIRTS & TOPS */}
              <CarouselItem key="SHOP T-SHIRTS & TOPS" className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img onClick={()=> setCategory("T-Shirts & Tops")} src="/Mens_Category/img2.avif" className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"/>
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


              {/* SHORTS */}
              <CarouselItem key="SHOP SHORTS" className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img onClick={()=> setCategory("Shorts")} src="/Mens_Category/img3.avif" alt="SHOP SHORTS" className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"/>
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

              {/* BOTTOMS */}
              <CarouselItem key="SHOP BOTTOMS" className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img onClick={()=> setCategory("Pants")} src="/Mens_Category/img4.avif" alt="SHOP BOTTOMS" className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"/>
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

              {/* TANKS */}
              <CarouselItem key="SHOP TANKS" className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img onClick={()=> setCategory("Tank Tops")} src="/Mens_Category/img5.avif"/>
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

              {/* HOODIES & SWEATSHIRTS */}
              <CarouselItem key="SHOP HOODIES & SWEATSHIRTS" className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Product Image */}
                    <div className=" w-full aspect-[3/3.7] overflow-hidden">
                      <img
                        onClick={()=> setCategory("Hoodies & Sweatshirts")}
                        src="/Mens_Category/img6.avif"
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
      <div className="flex gap-12 w-full px-5 lg:px-10 py-8 mb-19">

        {/* sidebar */}
        <Products_Sidebar/>

        {/* card's*/}
        <Products_Cards category={category} gender={gender} page={page} setPage={setPage} setCardData={setCardData} setCardActive={setCardActive}/>

      </div>


      {/* Overlay */}
      {cardActive && ( <Overlay_Drawer cardActive={cardActive} setCardActive={setCardActive} cardData={cardData} setCardData={setCardData}/>)}

    </>
  );
}

export default Men_Section;
