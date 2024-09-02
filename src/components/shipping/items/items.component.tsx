import React from 'react'
import Item from './item.component'
import Header from './header.component'
import Foot from './foot.component'

const Items = () => {
  return (
    <div className='shipping-items-wrapper w-[100%]'>
      <Header />
      <div className="shipping-items my-4">
        <Item
            img='product'
            details='MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty'
            price={100}
            quantity={3}
        />
        <Item
            img='product'
            details='MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty'
            price={100}
            quantity={3}
        />
        <Item
            img='product'
            details='MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty'
            price={100}
            quantity={3}
        />
      </div>
      <Foot />
    </div>
  )
}

export default Items 