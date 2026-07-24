import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/Cart/CartSlice";
import { nanoid } from "@reduxjs/toolkit";
import Overlay_Drawer from "../../Overlay_Drawer/Overlay_Drawer";

import { useSelector } from "react-redux";
import { fetchProducts } from "@/features/product/productSlice";



function New_In() {

  const { loading, error, products} = useSelector(state => state.product);
  const navigate = useNavigate()

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch()

  const [cardActive, setCardActive] = useState(false);
  const [cardData, setCardData] = useState({});



  const visibleSlides = 4;
  const maxIndex = products.length - visibleSlides;

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

    useEffect(() => {
      dispatch(fetchProducts({ page: 1, limit: 10 }));
    }, []);


  return (
    <>
      <div className="flex justify-between w-full px-5 lg:px-20 pb-5 pt-[40px]">

        <div className="flex gap-7 justify-between lg:justify-center items-center w-full lg:w-auto">
          <h1 className="text-2xl font-bold">NEW IN</h1>
          {/* <Link
            to={"#"}
            className="text-md underline relative top-[2px] font-bold hover:text-gray-700"
          >
            View All
          </Link> */}
        </div>

        <div className="hidden lg:flex gap-5 mr-5">
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
      {
          loading ? (
            <div className="flex items-center justify-center py-70 w-full">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-800 animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-3 h-3 rounded-full bg-gray-800 animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-3 h-3 rounded-full bg-gray-800 animate-bounce"></span>
              </div>
            </div>
      ):
        (
        <div className="flex justify-center w-full px-5 lg:px-14 pb-14">
        <Carousel opts={{ align: "start" }} className="w-full overflow-hidden">
          <CarouselContent>
            {products?.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
                <div className="p-1">
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2 ">
                    
                    {/* Product Image */}
                    <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden group">

                    {/* Front */}
                      <img src={item?.image[0]} alt={`${item.productName}_front`}
                        className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
                        onClick={()=> navigate(`/collections/product/${item.productId}`)}
                      />

                      {/* Back */}
                      <img src={item?.image[1]} alt={`${item.productName}back`}
                        className="hidden lg:block w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500 absolute top-0 left-0"
                        onClick={()=> navigate(`/collections/product/${item.productId}`)}
                      />

                      {/* Size Button Overlay */}
                      <div className="hidden lg:grid absolute bottom-0 left-0 w-full bg-gray-50 p-3  grid-cols-4 gap-2 opacity-0 
                      group-hover:opacity-100 transition duration-400">
                        {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => {
                          const isAvailable = item.sizes.includes(size);
                          return(
                          <button key={size}
                           disabled={!isAvailable}
                          onClick={()=> dispatch(addToCart({
                              id: nanoid(),
                              productId: item.productId,
                              image: item.image[0],
                              title: item.productName,
                              size: size,
                              color: item.color,
                              price: item.price,
                              unitPrice: item.price,
                              quantity: 1,
                          }))}
                          className={`px-0 py-2 text-sm border rounded transition ${isAvailable ? "cursor-pointer border-gray-300 bg-white hover:bg-black hover:text-white" : "cursor-not-allowed border-gray-200 bg-gray-200 text-gray-400"} `}
                          >
                            {size}
                          </button>
                        )})}
                      </div>


                      <div>

                      </div>
                      
                    </div>

                    {/* Product Info */}
                    <CardContent className="flex justify-between px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-md lg:text-sm font-semibold truncate"
                        onClick={() => {
                          if (window.innerWidth < 1024) {
                            setCardData(item);
                            setCardActive(true);
                          }}}
                          >
                          {item?.productName}
                        </h2>
                        <p className="text-sm text-gray-500">
                          {item?.category}
                        </p>
                        {/* <p className="text-sm text-gray-500">
                          {item.product_data[2]}
                        </p> */}
                        {/* Price & Rating */}
                        <p className="text-sm font-bold">
                          ${item?.price}
                        </p>
                      </div>

                      <div>
                        {/* <span className="text-[13px] font-bold ">
                          {item.product_rating}
                        </span> */}
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
        )
      }



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

export default New_In;
