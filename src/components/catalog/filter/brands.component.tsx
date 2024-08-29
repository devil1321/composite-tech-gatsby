import React from 'react'
import Logos from './logos.component'

const Brands = () => {
  return (
    <div className='catalog-brands'>
      <h2 className="font-bold text-5xl text-center">Brands</h2>
      <button className="font-bold my-2 mx-auto block px-12 hover:bg-gray-400 hover:text-white transition-all py-2 rounded-full bg-white text-gray-400 border-[3px] border-gray-400">All Brands</button>
      <Logos innerClassName='flex-wrap' />
    </div>
  )
}

export default Brands
