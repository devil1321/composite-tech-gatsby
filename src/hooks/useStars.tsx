import React, { useEffect, useState } from 'react'

const useStars = (rating:number) => {
    
    
  const [transparent,setTransparent] = useState<string>('&#9734;')
  const [marked,setMarked] = useState<string>('&#9733;')
  const [html,setHTML] = useState<string>('')

  const handleStars = () =>{
    const left = 5 - rating
    let tmpHtml = ''
    for(let i = 0; i < rating; i++){
        tmpHtml += marked + ' '
    }
    for(let i = 0; i < left; i++){
        tmpHtml += transparent + ' '
    }
    tmpHtml += `<h3 class="font-bold italic">Reviews (${rating})</h3>`
    setHTML(tmpHtml)
  }

  useEffect(()=>{
    handleStars()
  },[rating])

  return [html,setHTML]
}

export default useStars
