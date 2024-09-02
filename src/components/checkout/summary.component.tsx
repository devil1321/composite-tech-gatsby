import React from 'react'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Summary = () => {

  const [product,setProduct] = useImage('product')

  return (
    <div className='checkout-summary'>
      <h3 className="font-bold text-3xl py-[15px] border-b-[1px] border-gray-300">Order Summary</h3>
      <div className="checkout-summary-item my-2 flex items-center">
        {product && <GatsbyImage image={product.gatsbyImageData} alt='product-image' />}
        <div className="ml-2">
            <h3 className="text-sm font-bold">MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...</h3>
            <div className="text-sm flex gap-3">
                <p>Qty 1</p>
                <p className="font-bold">$3,799.00</p>
            </div>
        </div>
      </div>
      <div className="checkout-summary-item my-2 flex items-center">
        {product && <GatsbyImage image={product.gatsbyImageData} alt='product-image' />}
        <div className="ml-2">
            <h3 className="text-sm font-bold">MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...</h3>
            <div className="text-sm flex gap-3">
                <p>Qty 1</p>
                <p className="font-bold">$3,799.00</p>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default Summary
