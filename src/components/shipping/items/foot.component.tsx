import React from 'react'

const Foot = () => {
  return (
    <div className='shipping-foot py-[25px] border-t-[1px] border-gray-300 w-2/3 flex justify-between items-center'>
      <div className="shipping-buttons w-max">
        <button className="px-4 py-1 transition-all hover:bg-black hover:text-white rounded-full border-[1px] border-gray-400 font-bold mr-2">Continue Shopping</button>
        <button className="px-4 py-1 transition-all hover:bg-white hover:text-black rounded-full border-[1px] border-neutral-400 bg-black text-white font-bold">Continue Shopping</button>
      </div>
      <button className="px-4 py-1 hover:bg-white hover:text-black transition-all rounded-full border-[1px] border-neutral-400 bg-black text-white font-bold">Update Shopping Cart</button>
    </div>
  )
}

export default Foot
