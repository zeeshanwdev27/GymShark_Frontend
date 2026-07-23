import React, { useState, useEffect } from "react";
import { Heart, Share, RulerDimensionLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FaPaypal } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

import ZoomIn from "./ZoomIn/ZoomIn";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "@/features/product/productSlice";
import { addToCart } from "@/features/Cart/CartSlice";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from 'sonner';
import { fetchProducts } from "@/features/product/productSlice";


function Product() {

  const {productId} = useParams() 
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { product, loading, error, products} = useSelector(state => state.product);
  

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
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);


   useEffect(() => {
    dispatch( fetchSingleProduct({productId}) );
  }, [productId]);


useEffect(() => {
  if (!product?.gender || !product?.category) return;

  dispatch(
    fetchProducts({
      page: 1,
      limit: 5,
      gender: product.gender,
      category: product.category,
    })
  );
}, [product.gender, product.category, dispatch]);


useEffect(() => {
  console.log(products);
}, [products]);


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
    {
      loading ? (
            <div className="flex items-center justify-center py-70 w-full">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-800 animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-3 h-3 rounded-full bg-gray-800 animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-3 h-3 rounded-full bg-gray-800 animate-bounce"></span>
              </div>
            </div>
      )
      : (
      <>

      {/* Product */}
      <div className="pt-10 pb-15 lg:pt-0 w-full flex flex-col lg:flex-row">


        {/* Mobile */}
        <div className="lg:hidden">
          <Carousel className="w-full overflow-hidden">
            <CarouselContent>
              {product?.images?.map((image, index) => (
                <CarouselItem key={index} className="basis-1/1">
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition">
                    <CardContent className="px-0">
                      <img src={image.url} alt="img_front" className="h-full" />
                      </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Colum 1 - Images */}
        <div className="hidden lg:block w-1/2 sticky top-20 self-start">
          <ScrollArea className="h-[80vh] w-full ">
            <div className="grid grid-cols-2 gap-1">
              {product?.images?.map((image, index) => (
                <React.Fragment key={index}>
                  <ZoomIn src={image.url} alt="img_front" className={`${index === 2 ? "col-span-2" : 'col-span-1'}`} />
                  {/* <ZoomIn src={image.back} alt="img_back" />
                  <ZoomIn
                    src={image.full}
                    alt="img_full"
                    className="col-span-2"
                  /> */}
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Colum 2 - Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center max-h-full py-5 lg:py-15">

          {/* Info */}
          <div className="flex flex-col items-center gap-1.5">
            <p className="text-xs font-bold p-1 px-2 bg-gray-100 rounded-2xl mb-3">
              50% OFF | SAVE $29
            </p>
            <h2 className="text-xl font-mono font-bold truncate">
              {product?.productName}
            </h2>
            <p className="text-sm text-gray-700 font-[15px] opacity-80">
              {product?.tags[0]}
            </p>
            <p className="text-sm font-bold">${product?.price}</p>
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
          <div className="lg:w-100 bg-gray-100 rounded-md px-11 py-4 flex justify-center items-center mt-3">
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
          {/* <div className="w-100 flex flex-col gap-2 justify-center items-center">
            <img
              className="w-13 h-15 border-2 border-black object-bottom"
              src="https://cdn.shopify.com/s/files/1/0156/6146/files/Varsity_Jersey_GS_Black_A1B5H-BB2J_066_1920x.jpg?v=1726043266"
              alt="img"
            />
            <p className="text-[13px] opacity-70">Black</p>
          </div> */}

          <div className="w-full max-w-sm flex flex-wrap justify-center gap-4">
            {
              product?.colors?.map((color, index)=>{
                const isselectedColor = selectedColor === color
                return (
                <div className="flex justify-center items-center flex-col gap-3 mb-8" key={index}>
                  <div className="rounded-full w-12 h-12 border hover:scale-90 transition-transform cursor-pointer" style={{backgroundColor: color.toLowerCase()}} onClick={()=> setSelectedColor(color)}></div>
                  <Label htmlFor="Grey" className={`font-normal text-[14px] truncate cursor-pointer ${isselectedColor ? "font-bold" : ""} `}>{color}</Label>
                  </div>
                )
              }
            )}
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
                {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size, index) => {
                  const isAvailable = product.sizes.includes(size);
                  const isSelected = selectedSize === size
                  return (
                  <Button disabled={!isAvailable} key={index} onClick={()=> setSelectedSize(size)} variant="ghost" className={`min-w-[50px] h-12 text-xs rounded-xs ${isAvailable ? "hover:bg-black cursor-pointer text-black hover:text-white" : "text-stone-400"} ${isSelected ? "bg-black text-white": ""}`}>
                    {size}
                  </Button>
                  )
                })}
              </div>
            </div>

            {/* Add To Bad BTN */}
            <div className="w-100">
              <Button className="w-full text-sm  cursor-pointer rounded-full py-7" 
              onClick={() =>{
                if(!selectedColor) return toast.error("Please Select Any Color!")
                if(!selectedSize) return toast.error("Please Select Any Size!")
                dispatch(
                  addToCart({
                    id: nanoid(),
                    productId: product.productId,
                    image: product.images[0].url,
                    title: product.productName,
                    size: selectedSize,
                    color: selectedColor,
                    price: product.price,
                    unitPrice: product.price,
                    quantity: 1,
                  })
                )
                }}>
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
                      <div className="flex flex-col gap-7 mt-5 text-black w-full max-w-lg">
                        
                        <div className="flex flex-col gap-3">
                          <p className="text-md">{product?.description}</p> 
                        </div>

                        <p>SKU: {product?.productId}</p>

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
      <div className="w-full px-5 lg:px-15 flex flex-col gap-8 mb-20">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[22px] font-bold truncate">YOU MIGHT LIKE</h1>
          <p className="text-sm">We think these products pair perfectly.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-full">
          {products?.map((item, index) => (
            <Card key={index} className="overflow-hidden rounded-none shadow-none border-none transition flex flex-col gap-2 py-0 mb-5">
              {/* Product Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden group">
                <img src={item?.image[0]} alt={`${item.productName}_front`} className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"/>
                <img src={item?.image[1]} alt={`${item.productName}back`} className="hidden lg:block w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500 absolute top-0 left-0" onClick={()=> navigate(`/collections/product/${item.productId}`)}/>

                {/* Size Button Overlay */}
                <div className="hidden lg:grid absolute bottom-0 left-0 w-full bg-gray-50 p-3 grid-cols-4 gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => {
                    const isAvailable = item.sizes.includes(size);
                    return (
                      <button
                        key={size}
                        disabled={!isAvailable}
                        onClick={() => {
                          dispatch(
                            addToCart({
                              id: nanoid(),
                              productId: item.productId,
                              image: item.image[0],
                              title: item.productName,
                              size: size,
                              color: item.color,
                              price: item.price,
                              unitPrice: item.price,
                              quantity: 1,
                            }),
                          );
                        }}
                        className={`px-0 py-2 text-sm border rounded transition ${isAvailable ? "cursor-pointer border-gray-300 bg-white hover:bg-black hover:text-white" : "cursor-not-allowed border-gray-200 bg-gray-200 text-gray-400"} `}
                      >
                        {size}
                      </button>
                    );}
                  )}
                </div>
              </div>

              {/* Product Info */}
              <CardContent className="flex flex-col gap-1 px-1">
                <h2 className="text-base lg:text-sm font-semibold truncate">
                  {item?.productName}
                </h2>
                {/* <p className="text-sm text-gray-500">
                    {item.product_data[1]}
                  </p> */}
                <p className="text-sm text-gray-500">{item?.category}</p>
                {/* Price */}
                <p className="text-sm font-bold">${item?.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

     </>
      )
    }
    </>
  );
}

export default Product;
