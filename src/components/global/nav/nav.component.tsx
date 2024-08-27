import React from 'react'
import Header from './header.component'
import Main from './main.component'
import Search from './search.component'

const Nav = () => {
  return (
    <div className='nav relative w-[100vw] top-0 left-0'>
      <Header />
      <Main />
      <Search />
    </div>
  )
}

export default Nav
