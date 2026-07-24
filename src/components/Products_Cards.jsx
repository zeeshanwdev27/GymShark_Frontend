import React from 'react'
import { useDispatch, useSelector  } from "react-redux";
import { fetchProducts } from "@/features/product/productSlice";
import { addToCart } from "@/features/Cart/CartSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';



function Products_Cards({ category, gender, page, setPage, setCardData, setCardActive }) {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { products, loading, error, hasMore, loadingMore } = useSelector(state => state.product);


    const loadMore = async () => {
      const nextPage = page + 1;
      await dispatch(fetchProducts({ page: nextPage, limit: 10, gender, category }));
      setPage(nextPage);
    };

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
          : error ? <span> {error}</span>
          : products.length === 0 ? (
          <p className="flex items-center justify-center w-full text-xl text-gray-500 font-semibold truncate">
           No products found.
          </p>
          ):
          (

          // ********Cards**************
          <div className="flex flex-col w-full gap-5">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full overflow-hidden">
          {products.map((item) => (
            <Card key={item.productId} className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[3/3.7] overflow-hidden group">

                <img src={item.image[0]} alt={`${item.productName}_front`} className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0" onClick={()=> navigate(`/collections/product/${item.productId}`)}/>
                <img src={item.image[1]} alt={`${item.productName}_back`} className="hidden lg:block w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500 absolute top-0 left-0" onClick={()=> navigate(`/collections/product/${item.productId}`)}/>

                {/* Size Button Overlay */}
                <div className="hidden lg:grid absolute bottom-0 left-0 w-full bg-gray-50 p-3  grid-cols-4 gap-2 opacity-0 group-hover:opacity-100 transition duration-400">
                  {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => {
                    const isAvailable = item.sizes.includes(size);
                    return (
                    <button key={size} disabled={!isAvailable}
                    onClick={() =>{
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
                            })
                          )
                        }}
                        className={`px-0 py-2 text-sm border rounded transition ${isAvailable ? 'cursor-pointer border-gray-300 bg-white hover:bg-black hover:text-white' : 'cursor-not-allowed border-gray-200 bg-gray-200 text-gray-400'} `}
                        >
                        {size}
                    </button>
                )})}
                </div>
              </div>

              {/* Product Info */}
              <CardContent className="flex justify-between px-0">

                <div className="flex flex-col gap-0.3">

                  <h2 className="text-md lg:text-sm font-semibold truncate" 
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      setCardData(item);
                      setCardActive(true);
                    }
                    }}>
                      {item.productName}
                   </h2>
                   
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-sm text-gray-500">{item.color}</p>
                  <p className="text-sm font-bold">${item.price}</p>
                </div>

                <div>
                  <span className="text-[13px] font-bold ">★5</span>
                </div>

              </CardContent>

            </Card>
          ))}
          </div>


          {/* LoadMore Button */}
          {
            hasMore &&(
              <button onClick={()=> loadMore() } disabled={loadingMore} className="p-2 w-fit px-10 mx-auto cursor-pointer bg-black/90 text-white hover:opacity-85">
                {loadingMore ? "Loading..." : "Load More"}
              </button>
            )
          }

          </div>

          )
        }
      
    </>
  )
}

export default Products_Cards
