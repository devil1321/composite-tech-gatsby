import React, { useState } from 'react'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Menu = () => {

  const [chevron,setChevron] = useImage('chevron-down')
  const [isMenu,setIsMenu] = useState<boolean>(false)

  return (
    <div className='catalog-manu cursor-pointer my-2 px-12'>
      <div onClick={()=>setIsMenu(!isMenu)} className="catalog-menu-header flex justify-between items-center">
        <h3 className="text-md font-bold">Filters</h3>
        {chevron && <GatsbyImage image={chevron.gatsbyImageData} alt="chevron-icon" />}  
      </div>   
      {isMenu && 
        <div className='catalog-menu my-2'>
           menu
           <button className="px-6 py-2 rounded-full bg-blue-300 font-bold text-white">Apply Filters (2)</button>
        </div>
      }   
    </div>
  )
}

export default Menu
