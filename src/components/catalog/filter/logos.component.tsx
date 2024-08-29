import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import useImage from '../../../hooks/useImage';

const Logos:React.FC<{ className?:string,innerClassName?:string; }> = ({className,innerClassName}) => {

  const [logos,setLogos] = useState<any[]>([])

  const [logo_1,setLogo_1] = useImage('home-logo-1')
  const [logo_2,setLogo_2] = useImage('home-logo-2')
  const [logo_3,setLogo_3] = useImage('home-logo-3')
  const [logo_4,setLogo_4] = useImage('home-logo-4')
  const [logo_5,setLogo_5] = useImage('home-logo-5')
  const [logo_6,setLogo_6] = useImage('home-logo-6')
  const [logo_7,setLogo_7] = useImage('home-logo-7')

  return (
    <div className={`catalog-logos-wrapper w-[100%] ${className}`}>
      <div className={`catalog-logos transition-all my-12 flex justify-center items-center ${innerClassName}`}>
        {Array.from(Array(7).keys()).map((k,i) => (eval('logo_' + (i + 1)) && <GatsbyImage key={`home-logo-${i}`} image={eval('logo_' + (i + 1)).gatsbyImageData} alt={`logo-${i}`}/>))}
      </div>
    </div>
  )
}

export default Logos
