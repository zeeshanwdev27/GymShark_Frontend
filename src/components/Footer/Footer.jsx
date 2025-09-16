import React from 'react'

function Footer() {
  return (
    <div className='flex justify-evenly py-10 w-full border-t border-gray-200 shadow-sm z-50'>

        <h1 className='text-xl text-gray-700 font-bold'>Logo</h1>

        <ul className='flex flex-col gap-5'>
            <li className='text-lg text-black font-bold'>More Info</li>
            <li className='text-gray-600 font-bold hover:text-black text-md cursor-pointer'>Home</li>
            <li className='text-gray-600 font-bold hover:text-black text-md cursor-pointer'>About</li>
            <li className='text-gray-600 font-bold hover:text-black text-md cursor-pointer'>ContactUs</li>
        </ul>

        <ul className='flex flex-col gap-5'>
            <li className='text-lg text-black font-bold'>Follow Us</li>
            <li className='text-gray-600 font-bold hover:text-black text-md cursor-pointer'>logo2</li>
            <li className='text-gray-600 font-bold hover:text-black text-md cursor-pointer'>logo3</li>
            <li className='text-gray-600 font-bold hover:text-black text-md cursor-pointer'>logo4</li>
        </ul>
      
    </div>
  )
}

export default Footer
