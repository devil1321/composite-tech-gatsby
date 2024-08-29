import React from 'react'
import Item from '../home/carousel/item.component'
import useImage from '../../hooks/useImage'

const Products = () => {

    const [product,setProduct] = useImage('product')

    const details = {
      title:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      prevPrice:599,
      price:499
    }
  

  return (
    <div className='flex flex-wrap justify-between items-start'>
       {Array.from(Array(12).keys()).map((k,i) => (product && <Item key={`home-category-item-${i}`} image={product.gatsbyImageData} details={details} />))}
    </div>
  )
}


export default Products
