import React from 'react'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import usePaths from '../../hooks/usePaths'
import { GlobalComponents } from '../global'
import { Link } from 'gatsby'

const ProductDetails = () => {

  const [main,setMain] = useImage('details')
  const [paths,setPaths] = usePaths()

  return (
    <div className='details-product'>
      <GlobalComponents.Breadcrumb paths={[...paths as string[]]}/>
      <div className='flex justify-center items-center'>
        <div className="details-product-content w-1/2">
          <h1 className="font-bold text-5xl my-6">MSI MPG Trident 3</h1>
          <Link to="#" className='underline text-blue-400'>Be the first to review this product</Link>
          <ul className='list-disc my-5'>
            <li>Intel Core i7-10700F</li>
            <li>Intel H410</li>
            <li>WHITE</li>
            <li>NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6</li>
            <li>SO-DIMM 16GB (16GB x 1) DDR4 2666MHz</li>
            <li>2 total slots (64GB Max)</li>
            <li>512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM</li>
            <li>Gaming Keyboard GK30 + Gaming Mouse GM11</li>
            <li>3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)</li>
            <li>Intel WGI219Vethernet (10/100/1000M)</li>
            <li>AX200 (WIFI 6)+BT5.1</li>
            <li>PSU 330W</li>
            <li>Fan Cooler</li>
          </ul>
        </div>
        {main && <GatsbyImage image={main.gatsbyImageData} alt='product-image'/>}
        </div>
    </div>
  )
}

export default ProductDetails
