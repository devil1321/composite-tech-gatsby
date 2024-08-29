import React from 'react'
import Category from './category.component'
import Price from './price.component'
import Color from './color.component'
import Menu from './menu.component'
import Brands from './brands.component'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Filter = () => {
  
  const [feature,setFeature] = useImage('catalog-feature')

  return (
    <div className='catalog-filters'>
      <button className="block mx-auto px-12 py-2 rounded-full bg-white border-[3px] border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white  transition-all font-bold">Clear Filters</button>
      <Category />
      <Price />
      <Color />
      <Menu />
      <Brands />
      {feature && <GatsbyImage className='mx-auto block w-[80%]' image={feature.gatsbyImageData} alt='feature' />}
    </div>
  )
}

export default Filter
