import React from 'react'
import { GlobalComponents } from '../components/global'
import { ShippingComponents } from '../components/shipping'
import usePaths from '../hooks/usePaths'
import { HomeComponents } from '../components/home'

const Shipping = () => {

  const [paths,setPaths] = usePaths()

  return (
    <GlobalComponents.Layout className='shipping'>
      <GlobalComponents.Breadcrumb paths={[...paths as string[]]}/>
      <div className="shipping-main px-12 pb-[100px] flex jusitfy-between items-start">
        <ShippingComponents.ItemsComponents.Items />
        <ShippingComponents.Summary />
      </div>
      <HomeComponents.CardsComponents.Cards />
    </GlobalComponents.Layout>
  )
}

export default Shipping
