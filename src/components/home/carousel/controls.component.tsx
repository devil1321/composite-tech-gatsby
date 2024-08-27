import React from 'react'

interface ControlsProps{
    handlePrev:() => void
    handleNext:() => void
}

const Controls:React.FC<ControlsProps> = ({handlePrev,handleNext}) => {
  return (
    <div className="carousel-controls z-50 w-[100vw] absolute top-1/2 -translate-y-1/2 left-0 flex justify-between items-center px-8">
        <div onClick={()=>handlePrev()} className="carousel-prev bg-black/30 cursor-pointer text-white hover:bg-black/50 px-4 py-2 rounded-full font-bold">&lt;</div>
        <div onClick={()=>handleNext()} className="carousel-next bg-black/30 cursor-pointer text-white hover:bg-black/50 px-4 py-2 rounded-full font-bold">&gt;</div>
    </div>
  )
}
export default Controls