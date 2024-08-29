import React, { MutableRefObject, useRef, useState } from 'react'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Nav = () => {

  const [chevronDown,setChevronDown] = useImage('chevron-down')
  const [menu,setMenu] = useImage('menu-icon')
  const [hamburger,setHamburger] = useImage('hamburger-icon')

  const itemsMenuRef = useRef() as MutableRefObject<HTMLDivElement>
  const positionMenuRef = useRef() as MutableRefObject<HTMLDivElement>
  const [isClosing,setIsClosing] = useState<boolean>(false)

  const handleMenu = (e:any,ref:MutableRefObject<HTMLDivElement>) =>{
    e.stopPropagation()
    if(!ref.current.classList.contains('--open')){
      if(!isClosing){
        ref.current.classList.add('--open')
        ref.current.classList.remove('hidden')
        setTimeout(() => {
          ref.current.classList.remove('opacity-0')
          ref.current.classList.remove('translate-y-6')
        }, 1);
      }
    }else{
      ref.current.classList.add('opacity-0')
      ref.current.classList.add('translate-y-6')
      setIsClosing(true)
      setTimeout(() => {
        ref.current.classList.remove('--open')
        ref.current.classList.add('hidden')
        setIsClosing(false)
      }, 700);
    }
  }

  return (
    <div className='catalog-nav flex justify-between items-center p-12'>
        <div>&lt; Back</div>
        <p className="text-sm text-gray-500">items 1-35 of 61</p>
        <div className="catalog-nav-menus flex gap-3">
          <div onClick={(e)=>handleMenu(e,positionMenuRef)}  className="catalog-position relative top-0 left-0">
            <div className='catalog-current-position flex items-center cursor-pointer border-[1px] border-neutral-400 px-5 py-2'>
              <span className='text-gray-500 text-md'>Sort By:</span>
              <span className='font-bold text-md ml-2'>Position</span>
              {chevronDown && <GatsbyImage className='ml-5' image={chevronDown.gatsbyImageData} alt="chevron-down" />}
            </div>
            <div ref={positionMenuRef} className="catalog-position-menu transition-all hidden opacity-0 translate-y-6 z-50 bg-white border-[1px] w-[100%] border-neutral-400 absolute top-10 left-1/2 -translate-x-1/2">
              <div className="p-2 cursor-pointer hover:bg-neutral-600">Position</div>
              <div className="p-2 cursor-pointer hover:bg-neutral-600">Position</div>
              <div className="p-2 cursor-pointer hover:bg-neutral-600">Position</div>
              <div className="p-2 cursor-pointer hover:bg-neutral-600">Position</div>
            </div>
          </div>
          <div onClick={(e)=>handleMenu(e,itemsMenuRef)} className="catalog-itemscursor-pointer relative top-0 left-0">
            <div className='catalog-current-items border-[1px] border-neutral-400  flex items-center  px-5 py-2'>
              <span className='text-gray-500 text-md'>Show:</span>
              <span className='font-bold text-md ml-2'>35 per page</span>
              {chevronDown && <GatsbyImage className='ml-5' image={chevronDown.gatsbyImageData} alt="chevron-down" />}
            </div>
            <div ref={itemsMenuRef} className="catalog-items-menu transition-all hidden opacity-0 translate-y-6 bg-white z-50 w-[100%] absolute top-10 left-1/2 -translate-x-1/2 border-[1px] border-neutral-400">
              <div className="p-2 cursor-pointer hover:bg-neutral-600">Position</div>
              <div className="p-2 cursor-pointer hover:bg-neutral-600">Position</div>
              <div className="p-2 cursor-pointer hover:bg-neutral-600">Position</div>
              <div className="p-2 cursor-pointer hover:bg-neutral-600">Position</div>
            </div>
          </div>
          {menu && <GatsbyImage image={menu.gatsbyImageData} alt="menu-icon" />}
          {hamburger && <GatsbyImage image={hamburger.gatsbyImageData} alt="hamburger-icon" />}
        </div>
    </div>
  )
}

export default Nav
