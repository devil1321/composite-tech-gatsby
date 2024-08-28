import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Logos = () => {

  const [logos,setLogos] = useState<any[]>([])

  const [logo_1,setLogo_1] = useImage('home-logo-1')
  const [logo_2,setLogo_2] = useImage('home-logo-2')
  const [logo_3,setLogo_3] = useImage('home-logo-3')
  const [logo_4,setLogo_4] = useImage('home-logo-4')
  const [logo_5,setLogo_5] = useImage('home-logo-5')
  const [logo_6,setLogo_6] = useImage('home-logo-6')
  const [logo_7,setLogo_7] = useImage('home-logo-7')

  const handleLogos = () =>{
    const tmpLogos = Array.from(Array(7).keys())
    setLogos([...tmpLogos,...tmpLogos])
  }

  useEffect(()=>{
    handleLogos()
  },[logo_1])

  return (
    <div className="home-logos-wrapper w-[100vw] overflow-x-hidden">
      <div className='home-logos transition-all w-max my-12 flex justify-between items-center'>
        {logos.map((k,i) => (eval('logo_' + (k + 1)) && <GatsbyImage key={`home-logo-${i}`} className='min-w-[calc(100% / 7)] mx-[30px]' image={eval('logo_' + (k + 1)).gatsbyImageData} alt={`logo-${k}`}/>))}
      </div>
    </div>
  )
}

export default Logos
