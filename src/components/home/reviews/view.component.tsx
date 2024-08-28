import React, { MutableRefObject } from 'react'
import Item from './item.component'

interface ViewProps{
  itemRef:MutableRefObject<HTMLDivElement>
  viewRef:MutableRefObject<HTMLDivElement>
}

const View:React.FC<ViewProps> = ({itemRef,viewRef}) => {
  return (
    <div ref={viewRef} className='home-reviews-view transition-all flex justify-start items-center'>
      {Array.from(Array(4).keys()).map((k,i) => <Item key={`home-reviews-item-key-${i}`} itemRef={itemRef} count={i + 1} />)}
     
    </div>
  )
}

export default View
