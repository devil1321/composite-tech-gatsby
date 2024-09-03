import React from 'react'

const Header = () => {
  return (
    <div className='shipping-header border-b-[1px] border-gray-300 py-[25px] w-[100%] md:w-2/3'>
        <h1 className="text-5xl font-bold">Shipping</h1>
        <div className="shipping-header-menu mt-5 flex justify-between items-center">
            <h3 className="font-bold text-md md:pr-[200px]">Item</h3>
            <h3 className="font-bold text-md">Price</h3>
            <h3 className="font-bold text-md">Qty</h3>
            <h3 className="font-bold text-md">Subtotal</h3>
        </div>
    </div>
  )
}

export default Header
