import React, { MutableRefObject } from 'react'
import Item from './item.component'
import useImage from '../../../hooks/useImage'

const View:React.FC<{viewRef:MutableRefObject<HTMLDivElement>,itemRef:MutableRefObject<HTMLDivElement>}> = ({viewRef,itemRef}) => {

  const [product,setProduct] = useImage('product')

  const details = {
    title:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    prevPrice:599,
    price:499
  }

  return (
    <div ref={viewRef} className='carousel-view transition-all w-max flex justify-start items-center'>
      {product && <Item itemRef={itemRef} image={product.gatsbyImageData} details={details} />}
      {product && <Item itemRef={itemRef} image={product.gatsbyImageData} details={details} />}
      {product && <Item itemRef={itemRef} image={product.gatsbyImageData} details={details} />}
      {product && <Item itemRef={itemRef} image={product.gatsbyImageData} details={details} />}
      {product && <Item itemRef={itemRef} image={product.gatsbyImageData} details={details} />}
      {product && <Item itemRef={itemRef} image={product.gatsbyImageData} details={details} />}
      {product && <Item itemRef={itemRef} image={product.gatsbyImageData} details={details} />}
      {product && <Item itemRef={itemRef} image={product.gatsbyImageData} details={details} />}
      {product && <Item itemRef={itemRef} image={product.gatsbyImageData} details={details} />}
      {product && <Item itemRef={itemRef} image={product.gatsbyImageData} details={details} />}
    </div>
  )
}

export default View
