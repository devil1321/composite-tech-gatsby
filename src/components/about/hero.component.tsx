import React from 'react'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Hero = () => {

  const [image,setImage] = useImage('about-hero')

  return (
    <div className='about-hero h-[100vh] bg-black text-white flex flex-wrap md:flex-nowrap justify-center items-center'>
      <div className="about-hero-details w-[100%] md:w-1/2 p-5">
        <h1 className='text-5xl'>A Family That Keeps On Growing</h1>
        <p className="text-md my-2">We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.</p>
        <p className="text-md my-2">Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term succes</p>
      </div>
      {image && <GatsbyImage className='md:w-fit' image={image.gatsbyImageData} alt="hero-image" />}
    </div>
  )
}

export default Hero
