import React, { useEffect, useState } from "react";
import {
  X,
  ShoppingBag,
  Heart,
  TriangleAlert,
  Plus,
  Minus,
  CircleAlert,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {incQuantity, decQuantity, removeToCart} from '../../../../features/Cart/CartSlice'


function AddToCartOverlay({ addToCart, setAddToCart }) {

  const items = useSelector((state) => state.carts);
  const [iconActive, setIconActive] = useState(true);
  const dispatch = useDispatch()

  const subTotal = items.reduce((sum, item)=> sum + item.price, 0)
  const shippingPrice = 5
  const total = subTotal + shippingPrice

  useEffect(() => {
    if (addToCart) {
      setIconActive(true);
    }
  }, [addToCart]);

  return (
    <AnimatePresence>
      {addToCart && (
        <div className="fixed inset-0 z-[9999]">
          {/* Blur background */}
          <motion.div
            className="absolute inset-0 backdrop-blur-xs bg-black/75"
            onClick={() => setAddToCart(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Right side sliding panel */}
          <motion.div
            className="absolute right-0 top-0 h-full w-[500px] bg-white shadow-lg flex flex-col "
            initial={{ x: "100%" }} // start off-screen (to the right)
            animate={{ x: 0 }} // slide into place
            exit={{ x: "100%" }} // slide out to right
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Header */}

            <div className="px-7 py-7 flex justify-between w-full items-center">
              <h2 className="text-md font-bold truncate">
                {iconActive ? "YOUR BAG" : "WISHLIST"}
              </h2>

              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center  bg-gray-100 rounded-full cursor-pointer">
                  <div
                    onClick={() => setIconActive(!iconActive)}
                    className={`${
                      iconActive
                        ? "bg-black text-white"
                        : "text-black bg-gray-100 "
                    } px-5 py-2 rounded-full`}
                  >
                    <ShoppingBag className="w-4.5 h-5" strokeWidth={1.5} />
                  </div>

                  <div
                    onClick={() => setIconActive(!iconActive)}
                    className={`${
                      iconActive
                        ? "text-black bg-gray-100 "
                        : "bg-black text-white"
                    } px-5 py-2 rounded-full`}
                  >
                    <Heart className="w-4.5 h-5" strokeWidth={1.5} />
                  </div>
                </div>

                <button
                  onClick={() => setAddToCart(false)}
                  className="cursor-pointer"
                >
                  <X className="w-7 h-7  text-black" strokeWidth={1.4} />
                </button>
              </div>
            </div>

            {/*** Body ***/}

            {/* AddToCart */}
            {iconActive &&
              (items.length > 0 ? (

               <div className="flex flex-col overflow-y-auto">
                  <div className="flex flex-col gap-45">
                    {/* ALERT + ITEMS */}
                    <div className="px-7 py-7 flex flex-col gap-5">
                      <div className="bg-gray-100 p-3 px-4 flex gap-2 justify-center">
                        <TriangleAlert className="w-6 h-5" />
                        <p className="text-[14px]">
                          <span className="font-bold">
                            Your items aren’t reserved
                          </span>
                          , checkout quickly to make sure you don’t miss out.
                        </p>
                      </div>

                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="grid grid-cols-[19%_79%] w-full gap-3"
                        >
                          <img
                            className="w-19 h-21"
                            src={item.image}
                            alt={item.title}
                          />
                          <div className="flex flex-col justify-between">
                            
                             
                              <p className="text-[13.1px] truncate">
                                {item.title}
                              </p>
                              <p className="text-[13.1px] truncate opacity-60">
                                {item.size}
                              </p>
                             
                            
                            <div className="w-full flex justify-between items-center">
                              <p className="text-[13.1px] font-semibold truncate">
                                ${item.price}
                              </p>
                              <div className="flex gap-3 items-center">
                                <Button
                                  onClick={()=> {
                                    if (item && item.quantity > 1) {
                                      dispatch(decQuantity(item.id))
                                    }else{
                                      dispatch(removeToCart(item.id))
                                    }
                                  }
                                  }
                                  variant="ghost"
                                  size="icon"
                                  className="size-8 cursor-pointer hover:bg-white"
                                >
                                  <Minus strokeWidth={1.3} />
                                </Button>
                                <p>{item.quantity}</p>
                                <Button
                                  onClick={()=>dispatch(incQuantity(item.id))}
                                  variant="ghost"
                                  size="icon"
                                  className="size-8 cursor-pointer hover:bg-white"
                                >
                                  <Plus strokeWidth={1.3} />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* DISCOUNT + SUMMARY */}
                    <div className="bg-gray-100">

                      <div className="px-7 py-7 flex flex-col gap-10 ">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-[13.5px] font-bold pb-1">
                          DISCOUNT CODE
                        </h2>
                        <div className="flex items-center gap-2 w-full">
                          <Input
                            className="w-full py-6.5 px-3 bg-white text-4xl"
                            placeholder="Enter Code"
                          />
                          <Button className="w-[28%] py-6.5 px-7 rounded-4xl text-md font-bold cursor-pointer">
                            APPLY
                          </Button>
                        </div>
                        <div className="flex gap-1.5 items-center">
                          <CircleAlert
                            className="w-3.5 h-3.5"
                            strokeWidth={2}
                          />
                          <p className="text-xs opacity-70">
                            Gift Card codes can be applied at checkout.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <h2 className="text-[13.5px] font-bold pb-1">
                          ORDER SUMMARY
                        </h2>
                        <div className="w-full flex justify-between">
                          <p className="text-[14px]">Sub Total</p>
                          <p className="text-[14px]">${subTotal.toFixed(2)}</p>
                        </div>
                        <div className="w-full flex justify-between">
                          <p className="text-[14px]">Estimated Shipping</p>
                          <p className="text-[14px]">${shippingPrice.toFixed(2)}</p>
                        </div>
                        <div className="w-full flex justify-between">
                          <p className="font-bold text-[14px]">Total</p>
                          <p className="font-bold text-[14px]">${total.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>

                    </div>

                  </div>

                    {/* Checkout */}
                    <div className="sticky flex flex-col gap-5 bottom-0 w-full shadow-xl z-50 bg-white py-5 px-5">

                        <Button className="w-full rounded-2xl py-6 font-bold text-md cursor-pointer"><ShoppingBag/>CHECKOUT SECURELY</Button>

                        <div className="flex justify-center items-center gap-2">
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/5PrfyA9tb7E5sX4VJOvUXU/5c7d1da15bcb3ea9bc846698b14da4c0/visa-card.svg"
              alt="visa_card"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/LwfpWwq8TXIansB91xPmD/d20403df94193ad356b8ea0a2df4e9f1/mastercard-card.svg"
              alt="mastercard"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/7shmU9DfzLDbUk4b6obKoX/d3dd37478163f60363dc9c982b6fd56e/amex-card.svg"
              alt="americanexpress"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/30jtAlNtcunM6pu0L8Xar/f528a13df611d9585b73a36fe35b8797/paypal-card.svg"
              alt="paypal"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/5AUy4FwF2qwCL5Xog760Xf/1839c30ce2dbe6b7119f4dab3f15920b/applepay-card.svg"
              alt="applepay"
            />
</div>

                    </div>
                </div>

               


              ) : (
                <div className="min-h-screen flex flex-col justify-center gap-5 items-center w-full pb-30">
                  <img
                    src="https://res.cloudinary.com/dzhovcqy3/image/upload/f_png/v1759315915/empty-bag_womwcc"
                    alt="empty-trash"
                  />

                  <div className="flex flex-col gap-2 w-full justify-center items-center">
                    <h2 className="text-lg font-bold truncate">
                      YOUR BAG IS EMPTY
                    </h2>
                    <p className="text-sm text-gray-700 truncate">
                      There are no products in your bag
                    </p>
                  </div>

                  <div className="flex flex-col gap-2.5 w-full justify-center items-center">
                    <Button className="h-auto w-1/2 py-3 text-sm font-bold cursor-pointer rounded-4xl">
                      SHOP MENS
                    </Button>
                    <Button className="h-auto w-1/2 py-3 text-sm font-bold cursor-pointer rounded-4xl">
                      SHOP WOMENS
                    </Button>
                  </div>
                </div>
              ))}

            {/* WISHLIST */}
            {!iconActive && (
              <div className="min-h-screen flex flex-col justify-center gap-7 items-center w-full pb-30">
                <div className="flex flex-col gap-3 justify-center items-center">
                  <div className="flex gap-3 items-center">
                    <Heart className="w-6 h-6 fill-black" stroke="none" />
                    <h2 className="text-lg font-bold truncate">
                      SAVE TO WISHLIST
                    </h2>
                  </div>

                  <p className="text-[16px] text-black text-balance text-center px-10">
                    Ever wish you could save all your fave fits & accessories in
                    one place to come back to later? Almost like a ✨ wishlist
                    ✨.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 w-full justify-center items-center">
                  <Button className="h-auto w-1/2 py-3 text-sm font-bold cursor-pointer rounded-4xl">
                    CREATE ACCOUNT
                  </Button>
                  <Button className="bg-gray-300 hover:bg-gray-300 hover:opacity-80 text-black h-auto w-1/2 py-3 text-sm font-bold cursor-pointer rounded-4xl">
                    LOGIN
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default AddToCartOverlay;
