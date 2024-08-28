import React from 'react'
import { NavComponents } from './nav'
import Footer from './footer.component'

const Layout:React.FC<{ children:React.ReactNode,className:string }> = ({children,className}) => {
  return (
    <div className={`container ${className}`}>
      <NavComponents.Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
