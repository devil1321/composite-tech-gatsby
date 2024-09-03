import { GatsbyImage } from 'gatsby-plugin-image'
import React, { MutableRefObject } from 'react'
import useStars from '../../hooks/useStars';
import useImage from '../../hooks/useImage';

const ProductHorizonal:React.FC<{itemRef?:MutableRefObject<HTMLDivElement>; img:string}> = ({itemRef,img}) => {
    
    const [stars,setStars] = useStars(4)
    const [image,setImage] = useImage(img)

    const details = {
        title:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
        prevPrice:599,
        price:499
      }

    return (
      <div ref={itemRef} className='product-horizontal my-2 bg-gray-100 p-5 cursor-pointer transition-all rounded-md hover:shadow-lg hover:shadow-gray-300 w-[100%] md:w-[80%] flex justify-start items-center mx-[30px]'>
        {image && <GatsbyImage className="mr-5" image={image.gatsbyImageData} alt="product-image" />}
        <div className='product-horizontal-content w-[100%] pr-[30px] md:pr-[200px]'>
            <div className="product-horizontal-stars text-yellow-400 text-sm flex justify-between items-center" dangerouslySetInnerHTML={{__html:stars}}></div>
                <h3 className="font-bold my-2 text-md">{details.title}</h3>
                <div className="product-horizontal-price flex justify-between items-center">
                <h3 className="font-bold text-md text-red-400 line-through">{details.prevPrice}$</h3>
                <h3 className="font-bold text-md text-green-400">{details.price}$</h3>
            </div>
            <button className="block w-[100%] py-2 my-2 rounded-full transition-all border-[3px] border-green-300 hover:bg-green-300 hover:text-white font-bold">Buy</button>
        </div>
      </div>  
    )
}

export default ProductHorizonal
