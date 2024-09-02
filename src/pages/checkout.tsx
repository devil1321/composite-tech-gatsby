import React from 'react'
import { GlobalComponents } from '../components/global'
import { ShippingComponents } from '../components/shipping'
import usePaths from '../hooks/usePaths'
import { HomeComponents } from '../components/home'

const Checkout = () => {

  const [paths,setPaths] = usePaths()

  return (
    <GlobalComponents.Layout className='checkout'>
      <GlobalComponents.Breadcrumb paths={[...paths as string[]]}/>
      <div className="checkout-main px-12 pb-[100px] flex jusitfy-between items-start">
      </div>
      <HomeComponents.CardsComponents.Cards />
    </GlobalComponents.Layout>
  )
}

export default Checkout
