import React from 'react'
import { GlobalComponents } from '../components/global'
import { ShippingComponents } from '../components/shipping'
import usePaths from '../hooks/usePaths'
import { HomeComponents } from '../components/home'
import { CheckoutComponents } from '../components/checkout'

const Checkout = () => {

  const [paths,setPaths] = usePaths()

  return (
    <GlobalComponents.Layout className='checkout'>
      <GlobalComponents.Breadcrumb paths={[...paths as string[]]}/>
      <div className="checkout-main px-2 md:px-12 pb-[100px] flex flex-wrap md:flex-nowrap jusitfy-between items-start">
        <CheckoutComponents.Form />
        <div className="checkout-feature w-[100%] md:w-1/3 md:px-6">
          <CheckoutComponents.Steps />
          <CheckoutComponents.Summary />
        </div>
      </div>
      <HomeComponents.CardsComponents.Cards />
    </GlobalComponents.Layout>
  )
}

export default Checkout
