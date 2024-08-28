import React, { MutableRefObject } from 'react'

const Item:React.FC<{ itemRef:MutableRefObject<HTMLDivElement>,count:number}> = ({itemRef,count}) => {
  return (
    <div ref={itemRef} className='home-reviews-item mr-[47.5px] rounded-md min-w-[100%]'>
      <p className='text-justify p-5'>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
      <h3 className="font-bold text-right text-sm italic">- Tama Brown</h3>
    </div>
  ) 
}

export default Item
