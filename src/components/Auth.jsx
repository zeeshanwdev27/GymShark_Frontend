import React, { useState } from 'react'
import { useDispatch, useSelector  } from "react-redux";
import { signInUser, signUpUser } from "@/features/Auth/authSlice";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

function Auth() {

    const [action, setAction] = useState('Login')
    const [formData, setFormData] = useState({username: '', email: '', password: ''})

    const dispatch = useDispatch()
    const { loading, error } = useSelector((state) => state.user)
    const navigate = useNavigate()
    

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
      e.preventDefault()
      try {
        if (action === 'Signup') {
            await dispatch(signUpUser({ formData })).unwrap()
        } else {
            await dispatch(signInUser({ formData })).unwrap()
        }
        navigate('/')
    } catch (err) {
        toast.error(err?.message || "Something went wrong")

    }
  }


  return (
    <div class="flex h-screen w-screen items-center overflow-hidden px-2">

  <div class="relative flex w-96 flex-col rounded-lg  px-5 py-10 sm:mx-auto">
    {/* div class="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div> */}
    <div class="mx-auto mb-2 space-y-3 w-full flex flex-col justify-center items-center">
        <img src="/login_icon.png" alt="" className='h-25' />
      <h1 class="text-center text-[21px] font-bold text-black/90">{action === 'Signup' ? "GYMSHARK SIGNUP" : "GYMSHARK LOGIN" }</h1>
      <p class="text-center text-sm text-gray-700">{action === 'Signup' ? "One account, across all apps, just to make things a little easier." : "Shop your styles, save top picks to your wishlist, track those orders & train with us." }</p>
    </div>



    <form onSubmit={onSubmit} className='flex flex-col gap-3 py-4'>

    {action === 'Signup' && (
    <div>
      <div class="relative w-full">
        <input type="text" name="username" value={formData.username} onChange={onChange} class="border-1 peer block w-full appearance-none rounded-md border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" " />
        <label for="username" class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">User Name </label>
      </div>
    </div>
    )}

    <div>
      <div class="relative  w-full">
        <input type="email" name="email" value={formData.email} onChange={onChange} class="border-1 peer block w-full appearance-none rounded-md border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" " />
        <label for="email" class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Email </label>
      </div>
    </div>

    <div>
      <div class="relative  w-full">
        <input type="password" name="password" value={formData.password} onChange={onChange} class="border-1 peer block w-full appearance-none rounded-md border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" " />
        <label for="password" class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Password</label>
      </div>
    </div>

    <button class="mt-1 shrink-0 inline-block w-full rounded-4xl bg-black py-3 font-bold text-white text-lg">{action === 'Signup' ? "CREATE ACCOUNT" : "LOGIN" }</button>
   
    </form>

    {action === 'Login' ? (
        <p class="text-center text-gray-600 flex items-center gap-3 mx-auto">
            Don't have an account?
            <span onClick={()=> setAction('Signup')} class="whitespace-nowrap font-bold text-black underline cursor-pointer hover:opacity-80">Sign up</span>
        </p>
    ):(
        <p class="text-center text-gray-600 flex items-center gap-3 mx-auto">
            Already have an account? 
            <span onClick={()=> setAction('Login')} class="whitespace-nowrap font-bold text-black underline cursor-pointer hover:opacity-80">Log in</span>
        </p>
    )}




  </div>

    </div>
  )
}

export default Auth
