import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import useImage from '../../hooks/useImage';
import { Link } from 'gatsby';
import Item from './carousel/item.component';

interface CategoryProps{
    title:string;
    category:string;
    img:string;
}

const Category:React.FC<CategoryProps> = ({title,category,img}) => {

  const [categoryImage,setCategoryImage] = useImage(img)
  const [product,setProduct] = useImage('product')


  const details = {
    title:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    prevPrice:599,
    price:499
  }


  return (
    <div className='home-category flex justify-between items-start my-4 px-12'>
      <div className="home-category-banner overflow-hidden relative top-0 left-0 w-[23%] h-[400px] flex flex-col justify-center items-center">
        {categoryImage && <GatsbyImage className='absolute top-0 left-0 h-[100%]' image={categoryImage.gatsbyImageData} alt='category-image' />}
        <div className="home-category-content -translate-x-[15%] text-center">
            <h3 className="text-2xl font-bold text-white z-50 relative top-0 left-0">{title}</h3>
            <Link to="/category-products" className='block italic hover:underline text-white relative top-0 left-0 z-50'>See All Products</Link>
        </div>
      </div>
      {Array.from(Array(4).keys()).map((k,i) => (product && <Item key={`home-category-item-${i}`} image={product.gatsbyImageData} details={details} />))}
    </div>
  )
}

export default Category
