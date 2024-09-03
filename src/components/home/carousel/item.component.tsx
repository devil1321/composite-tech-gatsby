import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { MutableRefObject, useEffect } from 'react'
import useStars from '../../../hooks/useStars'

const Item:React.FC<{image:IGatsbyImageData,details:any,itemRef?:MutableRefObject<HTMLDivElement>}> = ({image,details,itemRef}) => {

  const [stars,setStars] = useStars(4)

  return (
    <div ref={itemRef} className='carousel-item min-w-[300px] max-w-[300px] md:max-w-[200px]  lg:max-w-[300px] w-[100%] mr-[30px]'>
      {image && <GatsbyImage className='block mx-auto' image={image} alt="product-image" />}
      <div className="carousel-item-stars text-yellow-400 text-sm flex justify-between items-center" dangerouslySetInnerHTML={{__html:stars}}></div>
      <h3 className="font-bold my-2 text-md">{details.title}</h3>
      <div className="carousel-item-price flex justify-between items-center">
        <h3 className="font-bold text-md text-red-400 line-through">{details.prevPrice}$</h3>
        <h3 className="font-bold text-md text-green-400">{details.price}$</h3>
      </div>
      <button className="block w-[100%] py-2 my-2 rounded-full transition-all border-[3px] border-green-300 hover:bg-green-300 hover:text-white font-bold">Buy</button>
    </div>  
  )
}

export default Item
