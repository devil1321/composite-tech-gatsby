import React from 'react'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Hero = () => {

  const [hero,setHero] = useImage('home-hero')

  return (
    <div className='w-[100vw] '>
      {hero && <GatsbyImage image={hero.gatsbyImageData} alt='hero' />}
    </div>
  )
}

export default Hero
