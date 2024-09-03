import React, { useState } from 'react'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Summary = () => {

  const [chevron,setChevron] = useImage('chevron-down')
  const [isTax,setIsTax] = useState<boolean>(false)
  const [isDiscount,setIsDiscount] = useState<boolean>(false)

  return (
    <div className='shipping-summary pt-[100px] w-[100%] md:w-1/3'>
        <h3 className="font-bold text-md">Summary</h3>
        <div onClick={()=>setIsTax(!isTax)} className="shipping-accordion-header my-2 flex justify-between items-center">
            <h3 className="text-md hover:text-gray-500 transition-all cursor-pointer">Estimate Shipping and Tax</h3>
            {chevron && <GatsbyImage image={chevron.gatsbyImageData} alt='chevron-icon' />}
        </div>
        {isTax && 
            <div className='shipping-accordion-content'>
                <p className="text-sm text-gray-400">Enter your destination to get a shipping estimate.</p>
            </div>}
            <div onClick={()=>setIsDiscount(!isDiscount)} className="shipping-accordion-header border-b-[1px] border-gray-300 py-2 flex justify-between items-center">
            <h3 className="text-md hover:text-gray-500 transition-all cursor-pointer">Apply Discount Code</h3>
            {chevron && <GatsbyImage image={chevron.gatsbyImageData} alt='chevron-icon' />}
        </div>
        {isDiscount && 
            <div className='shipping-accordion-content'>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur velit fuga excepturi vitae ullam quod non nam, deleniti obcaecati aperiam?</p>
            </div>}
        <div className="shipping-summary-items my-2">
            <div className="shipping-summary-item my-2 flex justify-between items-center">
                <h3 className="font-bold text-md">Subtotal</h3> 
                <h3 className="font-bold text-md">$13,047.00</h3>
            </div>
            <div className="shipping-summary-item my-2 flex justify-between items-center">
                <h3 className="font-bold text-md">Shpipping</h3> 
                <h3 className="font-bold text-md">$21.00</h3>
            </div>
            <div className="shipping-summary-item my-2 flex justify-between items-center">
                <h3 className="font-bold text-md">Tax</h3> 
                <h3 className="font-bold text-md">$1.91</h3>
            </div>
            <div className="shipping-summary-item my-2 flex justify-between items-center">
                <h3 className="font-bold text-md">GST(10%)</h3> 
                <h3 className="font-bold text-md">$1.91</h3>
            </div>
            <div className="shipping-summary-item my-2 flex justify-between items-center">
                <h3 className="font-bold text-md">Order Total</h3> 
                <h3 className="font-bold text-md">$13,068.00</h3>
            </div>
        </div>
        <button className="w-[100%] py-2 bg-blue-400 rounded-full text-white hover:bg-blue-700 transition-all font-bold">Proceed to Checkout</button>
        <button className="w-[100%] py-2 bg-blue-700 mt-2 hover:bg-blue-900 rounded-full text-white font-bold transition-all">Paypal</button>
    </div>
  )
}

export default Summary
