import React from 'react'
import useImage from '../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import { GlobalComponents } from '../components/global'
import usePaths from '../hooks/usePaths'

const Catalog = () => {

  const [hero,setHero] = useImage('catalog-hero')
  const [paths,setPaths] = usePaths()


  return (
    <GlobalComponents.Layout className='catalog'>
      {hero && <GatsbyImage image={hero.gatsbyImageData} alt='hero' />}
      <GlobalComponents.Breadcrumb paths={[...paths]}/>
    </GlobalComponents.Layout>
  )
}

export default Catalog
