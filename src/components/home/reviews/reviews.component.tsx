import React, { MutableRefObject, useEffect, useImperativeHandle, useRef, useState } from 'react'
import View from './view.component'
import Controls from './controls.component'

const Reviews = () => {

  const [interval,setIntervalVal] = useState<any>(null)
  const viewRef = useRef() as MutableRefObject<HTMLDivElement>
  const itemRef = useRef() as MutableRefObject<HTMLDivElement>


  const handleActivateLinks = (count?:number) =>{
    const links = document.querySelectorAll('.home-reviews-controls div')
    links.forEach(l => {
      l.classList.remove('bg-black')
      l.classList.add('bg-black/50')
    })
    if(count){  
      links[count].classList.remove('bg-black/50')
      links[count].classList.add('bg-black')
    }else{
      links[0].classList.remove('bg-black/50')
      links[0].classList.add('bg-black')
    }
  }
  const handleInterval = () =>{
    const move = itemRef.current.clientWidth + 47.5
    let count = 0
    handleActivateLinks(count)
    setIntervalVal(setInterval(()=>{
      handleActivateLinks(count)
      if(count < 3){
          viewRef.current.style.transform = `translateX(-${move * count}px)`
          count++
        }else{
          viewRef.current.style.transform = `translateX(-${move * count}px)`
          count = 0
        }
    },5000))
  }

  const handleItem = (e:any) =>{
    clearInterval(interval)
    if(typeof window !== 'undefined'){
      const index = Number(e.target.getAttribute('data-id'))
      handleActivateLinks(index)
      const move = itemRef.current.clientWidth + 47.5
      viewRef.current.style.transform = `translateX(-${move * index}px)`
    }
    setTimeout(() => {
      handleInterval()
    }, 10000);
  }

  useEffect(()=>{
    handleInterval()
  },[])


  return (
    <div className='home-reviews pt-6 pb-12 px-4 border-[3px] border-gray-400 rounded-md overflow-x-hidden my-[100px] w-[98%] md:w-[45%] mx-auto relative top-0 left-0'>
      <Controls handleItem={handleItem} />
      <View itemRef={itemRef} viewRef={viewRef} />
      <button className='home-reviews-controls z-50 absolute bottom-3 left-4 px-4 py-2 bg-blue-300 transition-all rounded-md text-white font-bold hover:bg-blue-600'>Post Review</button>
    </div>
  )
}

export default Reviews
