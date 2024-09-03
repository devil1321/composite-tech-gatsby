import React, { useState } from 'react'

const Form = () => {

  const [isMenu,setIsMenu] = useState<boolean>(false)

  return (
    <div className='checkout-form w-[100%] md:w-2/3'>
      <div className="checkout-form-header flex gap-5">
        <h1 className='text-5xl font-bold'>Checkout</h1>
        <button className='px-12 py-2 rounded-full border-[3px] border-blue-500 bg-white text-blue-500'>Sign In</button>
      </div>
      <div className="checkout-form-inner-header py-[15px] border-b-[1px] border-gray-300">
        <h3 className="font-bold text-md">Shipping Address</h3>
      </div>
      <div className="checkout-form">
        <form action="">
            <div className="checkout-form-field my-2">
                <label htmlFor="" className="block">Email:</label>
                <input type="email" className='w-[100%] md:w-[60%] border-[1px] border-gray-300 px-2 py-1' />
            </div>
            <p className="text-sm my-2 py-[25px] border-b-[1px] border-gray-300 text-gray-300">You can create an account after checkout.</p>
            <div className="checkout-form-field my-2">
                <label htmlFor="" className="block">First Name:</label>
                <input type="text" className='w-[100%] md:w-[60%] border-[1px] border-gray-300 px-2 py-1' />
            </div>
            <div className="checkout-form-field my-2">
                <label htmlFor="" className="block">Last Name:</label>
                <input type="text" className='w-[100%] md:w-[60%] border-[1px] border-gray-300 px-2 py-1' />
            </div>
            <div className="checkout-form-field my-2">
                <label htmlFor="" className="block">Company:</label>
                <input type="text" className='w-[100%] md:w-[60%] border-[1px] border-gray-300 px-2 py-1' />
            </div>
            <div className="checkout-form-field my-2">
                <label htmlFor="" className="block">Street Address:</label>
                <input type="text" className='my-1 w-[100%] md:w-[60%] border-[1px] border-gray-300 px-2 py-1' />
                <input type="text" className='my-1 w-[100%] md:w-[60%] border-[1px] border-gray-300 px-2 py-1' />
            </div>
            <div className="checkout-form-field my-2">
                <label htmlFor="" className="block">Zip/Postal Code:</label>
                <input type="text" className='w-[100%] md:w-[60%] border-[1px] border-gray-300 px-2 py-1' />
            </div>
            <div className="checkout-country-menu-wrapper w-[100%] md:w-[60%]">
                <div onClick={()=>setIsMenu(!isMenu)} className="checkout-country p-2 border-[1px] border-gray-300">USA</div>
                {isMenu && 
                    <div className='checkout-country-menu p-2 border-[1px] border-gray-300'>
                        <div className='hover:bg-gray-300  cursor-pointer p-2 border-[1px] border-gray-300 my-1'>USA</div>
                        <div className='hover:bg-gray-300  cursor-pointer p-2 border-[1px] border-gray-300 my-1'>PL</div>
                        <div className='hover:bg-gray-300  cursor-pointer p-2 border-[1px] border-gray-300 my-1'>USA</div>
                    </div>}
            </div>
            <div className="checkout-form-field my-2">
                <label htmlFor="" className="block">Phone Number:</label>
                <input type="text" className='w-[100%] md:w-[60%] border-[1px] border-gray-300 px-2 py-1' />
            </div>
            <div className="checkout-form-radios">
                <div className="checkout-radio-wrapper flex justify-between">
                    <div className="checkout-form-radio">
                        <input checked type="radio" name="rate" id="" />
                        <label htmlFor="" className='ml-2 text-gray-500'>Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</label>
                    </div>
                    <h3>$21.00</h3>
                </div>
                <div className="checkout-radio-wrapper flex justify-between">
                    <div className="checkout-form-radio">
                        <input type="radio" name="rate" id="" />
                        <label htmlFor="" className='ml-2 text-gray-500'>1234 Street Adress City Address, 1234</label>
                    </div>
                    <h3>$0.00</h3>
                </div>
            </div>
            <button className="bg-blue-500 rounded-full text-white px-12 mt-2 py-2 font-bold">Next</button>
        </form>
      </div>
    </div>
  )
}

export default Form
