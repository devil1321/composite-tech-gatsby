import React from 'react'
import { GlobalComponents } from '../components/global'
import { DetailsComponents } from '../components/details'
import { HomeComponents } from '../components/home'

const Details:React.FC<any> = (props) => {
  console.log(props)
  return (
    <GlobalComponents.Layout className='details'>
      <DetailsComponents.ProductDetails />
      <DetailsComponents.Rest />
      <HomeComponents.CardsComponents.Cards />
    </GlobalComponents.Layout>
  )
}

export default Details