import React from 'react'

interface ControlsProps{
    handleItem:(e:any) => void
}

const Controls:React.FC<ControlsProps> = ({handleItem}) => {
  return (
    <div className='home-reviews-controls z-50 absolute bottom-4 right-4 flex justify-end items-center gap-1 ml-auto w-[400px]'>
      <div data-id="0" onClick={(e)=>handleItem(e)} className="p-2 hover:bg-black transition-all cursor-pointer bg-black/50 rounded-full"></div>
      <div data-id="1" onClick={(e)=>handleItem(e)} className="p-2 hover:bg-black transition-all cursor-pointer bg-black/50 rounded-full"></div>
      <div data-id="2" onClick={(e)=>handleItem(e)} className="p-2 hover:bg-black transition-all cursor-pointer bg-black/50 rounded-full"></div>
      <div data-id="3" onClick={(e)=>handleItem(e)} className="p-2 hover:bg-black transition-all cursor-pointer bg-black/50 rounded-full"></div>
    </div>
  )
}

export default Controls
