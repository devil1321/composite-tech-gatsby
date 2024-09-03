import React from 'react'
import useImage from '../../hooks/useImage';
import { GatsbyImage } from 'gatsby-plugin-image';

interface FeatureProps{
    icon:string;
    img:string;
    heading:string;
    paragraph:string;
    isLeft:boolean;
    isBlack:boolean;
}

const Feature:React.FC<FeatureProps> = ({icon,img,heading,paragraph,isLeft,isBlack}) => {

  const [iconImg,setIconImg] = useImage(icon)
  const [mainImage,setMainImage] = useImage(img)

  return (
    <div className={`about-feature py-2 md:p-10 flex flex-wrap md:flex-nowrap justify-center items-center ${isBlack ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {mainImage && <GatsbyImage className={`w-[100%] md:w-1/3 ${isLeft ? 'order-1':'order-2'}`} image={mainImage.gatsbyImageData} alt="feature-img" />}
      <div className={`about-feature-details mx-10 w-[100%] md:w-1/2 ${isLeft ? 'order-2' : 'order-1'}`}>
        <div className="about-feature-details-header">
            <div className='flex gap-5 items-center'>
                {iconImg && <GatsbyImage className="hidden md:visible" image={iconImg.gatsbyImageData} alt='icon-image'/>}
                <h2 className={`font-bold text-center md:text-left text-4xl md:text-5xl ${isBlack ? 'bg-black text-white' : 'bg-white text-black'}`}>{heading}</h2>
            </div>
            <p className={`text-sm py-10 max-w-[600px] p-0 ${isLeft ? 'md:pr-10' : 'md:pl-10'} ${isBlack ? 'bg-black text-white' : 'bg-white text-black'} `}>{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Feature
