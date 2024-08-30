import React from 'react'
import { GlobalComponents } from '../components/global'
import { CatalogComponents } from '../components/catalog'
import usePaths from '../hooks/usePaths'

const Cart = () => {

  const [paths,setPaths] = usePaths()

  return (
    <GlobalComponents.Layout className='cart'>
      <GlobalComponents.Breadcrumb paths={[...paths as string[]]}/>
      <h1 className="px-12 font-bold text-5xl">MSI PS Series(20)</h1>
      <CatalogComponents.Nav />
      <CatalogComponents.Filters />
      <div className="cataglog-main mb-[100px] flex justify-start items-start">
        <div className='w-1/5'>
          <CatalogComponents.FilterComponents.Filters />
        </div>
        <div className='w-4/5'>
        {Array.from(Array(12).keys()).map((k,i) => <GlobalComponents.ProductHorizonal key={`cart-item-${i}`} img={'product'} />)}
        </div>
      </div>
    </GlobalComponents.Layout>
  )
}

export default Cart
