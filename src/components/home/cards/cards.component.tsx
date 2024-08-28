import React from 'react'
import Card from './card.component'

const Cards = () => {
  return (
    <div className='home-cards mb-[50px] flex justify-between items-start w-[70%] mx-auto'>
      <Card img="icon-1" title='Product Support' paragraph='Up to 3 years on-site warranty available for your peace of mind.' />
      <Card img="icon-2" title='Personal Account' paragraph='With big discounts, free delivery and a dedicated support specialist.' />
      <Card img="icon-3" title='Amazing Savings' paragraph='Up to 70% off new Products, you can be sure of the best price.' />
    </div>
  )
}

export default Cards
