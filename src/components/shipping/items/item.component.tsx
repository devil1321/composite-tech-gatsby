import React from 'react'
import useImage from '../../../hooks/useImage';
import { GatsbyImage } from 'gatsby-plugin-image';

interface ItemProps{
    img:string;
    details:string;
    price:number;
    quantity:number;
}

const Item:React.FC<ItemProps> = ({img,details,price,quantity}) => {

  const [image,setImage] = useImage(img)

  return (
    <div className='shipping-item flex gap-2 my-2 md:gap-0 justify-start items-center'>
      {image && <GatsbyImage className='mr-4' image={image.gatsbyImageData} alt='item-image'/>}
      <p className="text-sm md:w-[17%]">{details}</p>
      <p className="tex-md font-bold md:ml-[1.5%]">{price}$</p>
      <p className="tex-md font-bold md:ml-[13%]">{quantity}</p>
      <p className="tex-md font-bold md:ml-[15%]">{quantity * price}$</p>
    </div>
  )
}

export default Item
