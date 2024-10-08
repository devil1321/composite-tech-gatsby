import React from 'react'
import useImage from '../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import { GlobalComponents } from '../components/global'
import usePaths from '../hooks/usePaths'
import { CatalogComponents } from '../components/catalog'

const Catalog = () => {

  const [hero,setHero] = useImage('catalog-hero')
  const [paths,setPaths] = usePaths()


  return (
    <GlobalComponents.Layout className='catalog'>
      {hero && <GatsbyImage image={hero.gatsbyImageData} alt='hero' />}
      <GlobalComponents.Breadcrumb paths={[...paths as string[]]}/>
      <h1 className="px-12 font-bold text-5xl">MSI PS Series(20)</h1>
      <CatalogComponents.Nav />
      <CatalogComponents.Filters />
      <div className="catalog-main mb-[100px] flex flex-wrap md:flex-nowrap justify-center md:justify-between items-start">
        <div className='w-[100%] md:w-1/5'>
          <CatalogComponents.FilterComponents.Filters />
        </div>
        <div className='w-[100%] mt-2 translate-x-[10%] md:translate-x-0 md:w-4/5'>
          <CatalogComponents.Products />
        </div>
      </div>
    </GlobalComponents.Layout>
  )
}

export default Catalog
