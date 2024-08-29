import React, { useState } from 'react'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Price = () => {

  const [chevron,setChevron] = useImage('chevron-down')
  const [isPriceMenu,setIsPriceMenu] = useState<boolean>(false)

  return (
    <div className='catalog-price cursor-pointer my-2 px-12'>
      <div onClick={()=>setIsPriceMenu(!isPriceMenu)} className="catalog-price-header flex justify-between items-center">
        <h3 className="text-md font-bold">Price</h3>
        {chevron && <GatsbyImage image={chevron.gatsbyImageData} alt="chevron-icon" />}  
      </div>   
      {isPriceMenu && 
        <div className='catalog-price-menu'>
          <ul className='list-none'>
            <li>
              <a href="#" className='text-gray-700 hover:text-gray-800'>Subcategory 1</a>
            </li>
            <li>
              <a href="#" className='text-gray-700 hover:text-gray-800'>Subcategory 2</a>
            </li>
            <li>
              <a href="#" className='text-gray-700 hover:text-gray-800'>Subcategory 3</a>
            </li>
          </ul>
        </div>
      }   
    </div>
  )
}

export default Price
