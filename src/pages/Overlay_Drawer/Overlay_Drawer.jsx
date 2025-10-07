import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Cart/CartSlice";
import { nanoid } from "@reduxjs/toolkit";

function Overlay_Drawer({ cardActive, setCardActive, cardData, setCardData }) {
  const dispatch = useDispatch();
  return (
    <>
      {cardActive && (
        <Drawer open={cardActive} onOpenChange={setCardActive}>
          <DrawerContent className="w-full">
            <DrawerHeader>
              <DrawerTitle>Quick Add</DrawerTitle>
            </DrawerHeader>

            <div className="grid grid-cols-3 gap-3 px-5 md:gap-5 md:px-15 py-5">
              {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                <Button
                  key={size}
                  className="px-2 py-6 w-full text-md"
                  onClick={() => {
                    dispatch(
                      addToCart({
                        id: nanoid(),
                        image: cardData.front_img,
                        title: cardData.product_data[0],
                        size: size,
                        sizeType: cardData.product_data[1],
                        color: cardData.product_data[2],
                        price: cardData.product_price,
                        unitPrice: cardData.product_price,
                        quantity: 1,
                      })
                    );
                    setCardData({})
                    setCardActive(false);
                  }}
                >
                  {size}
                </Button>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}

export default Overlay_Drawer;
