import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch  } from "react-redux";
import { toast } from 'sonner';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { clearCart } from '@/features/Cart/CartSlice';

function Checkout() {

    const baseURL= import.meta.env.VITE_API_URL;
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const items = useSelector((state) => state.carts.items);

    const [ paymentMethod, setPaymentMethod ] = useState('')
    const [formData, setFormData] = useState({fullName: '', phone: '', address: '', city: '', postalCode: '', country: ''})

    const subTotal = items.reduce((sum, item) => sum + item.price, 0);
    const shippingPrice = 5;
    const total = subTotal + shippingPrice;



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


     const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


const onSubmit = async (e) => {
    e.preventDefault();

    if (!paymentMethod) {
        toast.error('Please select a payment method');
        return;
    }

    if (items.length === 0) {
        toast.error('Your cart is empty');
        return;
    }

    const payload = {
        products: items.map((item) => ({
            product: item.productId,       
            size: item.size,
            color: item.color,
            quantity: item.quantity,
        })),
        shippingAddress: {
            fullName: formData.fullName,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            postalCode: formData.postalCode,
            country: formData.country,
        },
        paymentMethod, // "Cash on Delivery" | "Stripe"
    };

    try {
        const response = await axios.post(`${baseURL}/order/create-order`, payload, { withCredentials: true });

        if (response.data.checkoutUrl) {
            // Stripe flow — leave the SPA entirely
            window.location.href = response.data.checkoutUrl;
            return;
        }

        // COD flow
        dispatch(clearCart());
        toast.success('Order Created Successfully');
        navigate('/');

    } catch (error) {
        toast.error(error.response?.data?.message || error.message);
    }
};


  return (
    <div className='h-full lg:h-[90vh] py-20 lg:py-0 gap-10 lg:gap-0 w-full flex flex-col lg:flex-row divide-x divide-gray-300'>

        {/* Left */}
        <div className="order-2 lg:order-1 h-full w-full px-10 lg:pt-10">
            <div className='max-w-xl mx-auto flex flex-col gap-5'>


                <div className='flex flex-col gap-5'>

                <h2 className="text-2xl font-bold pb-1 truncate">Address</h2>
                
                <form id="checkout-form" onSubmit={onSubmit} className='grid grid-cols-2 gap-3 py-4'>
                    
                    <div className='col-span-2'>
                        <div className="relative  w-full">
                            <input type="text" name="fullName" value={formData.fullName} onChange={onChange} className="border-1 peer block w-full appearance-none rounded-md border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" " />
                            <label for="fullName" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Full Name </label>
                        </div>
                    </div>

                    <div className='col-span-2'>
                        <div className="relative  w-full">
                            <input type="number" name="phone" value={formData.phone} onChange={onChange} className="border-1 peer block w-full appearance-none rounded-md border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" " />
                            <label for="phone" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">Phone</label>
                        </div>
                    </div>


                    <div className='col-span-2'>
                        <div className="relative  w-full">
                            <input type="text" name="address" value={formData.address} onChange={onChange} className="border-1 peer block w-full appearance-none rounded-md border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" " />
                            <label for="address" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">address</label>
                        </div>
                    </div>


                    <div className='col-span-1'>
                        <div className="relative  w-full">
                            <input type="text" name="city" value={formData.city} onChange={onChange} className="border-1 peer block w-full appearance-none rounded-md border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" " />
                            <label for="city" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">City</label>
                        </div>
                    </div>


                    <div className='col-span-1'>
                        <div className="relative  w-full">
                            <input type="text" name="country" value={formData.country} onChange={onChange} className="border-1 peer block w-full appearance-none rounded-md border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" " />
                            <label for="country" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">Country</label>
                        </div>
                    </div>


                    <div className='col-span-2'>
                        <div className="relative  w-full">
                            <input type="text" name="postalCode" value={formData.postalCode} onChange={onChange} className="border-1 peer block w-full appearance-none rounded-md border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" " />
                            <label for="postalCode" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">postalCode</label>
                        </div>
                    </div>
                    
                    
                
                </form>

                </div>


                <div className='flex flex-col gap-5'>
                    <h2 className="text-2xl font-bold pb-1 truncate">Payment Method</h2>

                    <div className='flex gap-3 w-full'>
                        <div onClick={()=> setPaymentMethod("Cash on Delivery")} className={`${paymentMethod === 'Cash on Delivery' ? 'bg-black text-white': "bg-[#E6DFD3] text-black"} border-1 rounded-md w-fit px-5 py-1.5 text-md  hover:opacity-80  cursor-pointer`}>
                            <span className='text-sm'>Cash on Delivery</span>
                        </div>
                        <div onClick={()=> setPaymentMethod("Stripe")} className={`${paymentMethod === 'Stripe' ? 'bg-black text-white': "bg-[#390CED] text-white"} border-1 rounded-md w-fit px-5 py-1.5 text-md  hover:opacity-80  cursor-pointer`}>
                            <span className='text-sm'>Stripe</span>
                        </div>
                    </div>


                    <button type='submit' form="checkout-form" className="mt-5 lg:mt-10 shrink-0 inline-block w-full rounded-4xl bg-black hover:bg-black/80 cursor-pointer py-3 font-bold text-white text-md">Pay Now</button>

                </div>



                
            </div>
            
        </div>


        {/* Right */}
        <div className='order-1 lg:order-2 w-full h-full mx-auto px-10 bg-[#F5F5F5] py-10 lg:py-0 lg:pt-10'>
            
            <div className='max-w-lg flex flex-col gap-10'>

                {/* Products */}
                <div className='w-full flex flex-col gap-5'>
                {items.map((item) => (
                    <div key={item.id} className="flex w-full gap-5">


                        <div className='relative'>
                            <img className="w-18 h-15 border-3 border-white rounded-md" src={item.image} alt={item.title}/>
                            <div className='absolute -top-2 -right-2'>
                                <p className="text-xs text-white bg-black px-2 py-1 rounded-full">{item.quantity}</p>
                            </div>
                        </div>


                          <div className="flex flex-col w-full">
                            <div className='w-full flex justify-between'>
                                <p className="text-sm truncate">{item.title}</p>
                                <p className="text-[13.4px]">${item.price}.00</p>
                            </div>

                            <div className="flex items-center gap-2">
                              <p className="text-[13.1px] truncate opacity-60">{item.size}</p>
                              <p className="text-[13.1px] truncate opacity-60">{item.color}</p>
                            </div>
   
                          </div>

                        </div>
                      ))}
                
               </div>


               {/* Summary */}
               <div className="flex flex-col gap-5">
                
                <h2 className="text-[13.5px] font-bold pb-1">ORDER SUMMARY</h2>
                
                <div className="flex flex-col gap-3">
                    
                    <div className="w-full flex justify-between">
                        <p className="text-[14px]">Sub Total</p>
                        <p className="text-[14px]">${subTotal.toFixed(2)}</p>
                    </div>
                    
                    <div className="w-full flex justify-between">
                        <p className="text-[14px]">Estimated Shipping</p>
                        <p className="text-[14px]">${shippingPrice.toFixed(2)}</p>
                    </div>
                    
                    <div className="w-full flex justify-between">
                        <p className="font-bold text-[16px]">Total</p>
                        <p className="font-bold text-[16px]">${total.toFixed(2)}</p>
                    </div>
                    
                </div>

                </div>



            </div>

        </div>



        
    </div>
  )
}

export default Checkout
