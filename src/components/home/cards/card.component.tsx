import React from 'react'
import useImage from '../../../hooks/useImage';
import { GatsbyImage } from 'gatsby-plugin-image';

interface CardProps{
  img:string;
  title:string;
  paragraph:string;
}

const Card:React.FC<CardProps> = ({img,title,paragraph}) => {

  const [icon,setIcon] = useImage(img)

  return (
    <div className='home-card max-w-[280px] flex flex-col justify-center items-center'>
      {icon && <GatsbyImage image={icon.gatsbyImageData} alt='icon' />}
      <h3 className="font-bold text-md my-2">{title}</h3>
      <p className="text-md my-2 text-gray-400 text-center">{paragraph}</p>
    </div>
  )
}

export default Card
