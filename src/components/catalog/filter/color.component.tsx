import React, { useState } from 'react'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Color = () => {

  const [chevron,setChevron] = useImage('chevron-down')
  const [isColors,setIsColors] = useState<boolean>(false)

  return (
    <div className='catalog-colors cursor-pointer my-2 px-12'>
      <div onClick={()=>setIsColors(!isColors)} className="catalog-colors-header flex justify-between items-center">
        <h3 className="text-md font-bold">Colors</h3>
        {chevron && <GatsbyImage image={chevron.gatsbyImageData} alt="chevron-icon" />}  
      </div>   
      {isColors && 
        <div className='catalog-category-menu my-2 flex gap-3'>
            <div className="p-1 border-[1px] border-black rounded-full">
              <div className='p-2 rounded-full bg-red-400'></div>
            </div>
            <div className="p-1 border-[1px] border-black rounded-full">
              <div className='p-2 rounded-full bg-green-400'></div>
            </div>
        </div>
      }   
    </div>
  )
}

export default Color
