import React, { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'
import View from './view.component'
import Controls from './controls.component'

const Carousel = () => {

  const [isClient,setIsClient] = useState<boolean>(false)
  const [count,setCount] = useState<number>(1) 
  const [max,setMax] = useState<number>(0)
  const viewRef = useRef() as MutableRefObject<HTMLDivElement>
  const itemRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleInitMax = () =>{
    if(typeof window !== 'undefined'){
        const items = document.querySelectorAll('.carousel-item')
        setMax(items.length - 4)
    }
  }
  
  const handlePrev = () =>{
    if(count > 1){
        setCount(count - 1)
    }else{
        setCount(max)
    }
  }
  const handleNext = () =>{
    if(count < max){
        setCount(count + 1)
    }else{
        setCount(0)
    }
  }
  const handleMove = () =>{
    viewRef.current.style.transform = `translateX(-${(itemRef?.current?.clientWidth + 30) * count}px)`
  }


  useEffect(()=>{
    handleInitMax()
    setIsClient(true)
  },[isClient])

  useEffect(()=>{
    handleMove()
  },[count])

  return (
    <div className='carousel w-[100vw] overflow-x-hidden  px-12 my-6 relative top-0 left-0'>
      <Controls 
        handlePrev={handlePrev}  
        handleNext={handleNext}     
        />
      <View viewRef={viewRef} itemRef={itemRef} />
    </div>
  )
}

export default Carousel
