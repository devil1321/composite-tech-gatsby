import React from 'react'
import { NavComponents } from './nav'

const Layout:React.FC<{ children:React.ReactNode,className:string }> = ({children,className}) => {
  return (
    <div className={`container ${className}`}>
      <NavComponents.Nav />
      {children}
    </div>
  )
}

export default Layout
