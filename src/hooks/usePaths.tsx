import React, { useEffect, useState } from 'react'
import { useLocation } from '@reach/router'


const usePaths = () => {

  const [paths,setPaths] = useState<string[]>([])
  const location = useLocation()
  const pathname = location.pathname

  const handlePaths = () =>{
    const tmpPaths = pathname.split('/').filter(p => p !== '' && p !== '/').map(p => {
        const letter = p[0].toLocaleUpperCase()
        const rest = p.slice(1,p.length)
        return letter + rest
    })
    setPaths(tmpPaths)
    console.log(tmpPaths)
  }

  useEffect(()=>{
    handlePaths()
  },[])

  return [paths,setPaths]
}

export default usePaths
