import React from 'react'
import useImage from '../../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Main = () => {

  const [logo,setLogo] = useImage('nav-logo')

  return (
    <div className='nav-main px-12 py-4 flex flex-wrap justify-between items-center'>
      {logo && <GatsbyImage image={logo.gatsbyImageData} alt="nav-logo" />}
      <Link className="block hover:underline" to="/laptops">Laptops</Link>
      <Link className="block hover:underline" to="/desktop">Desktop PC`s</Link>
      <Link className="block hover:underline" to="/networking">Networking Devices</Link>
      <Link className="block hover:underline" to="/printers-scanners">Printers & Scanners </Link>
      <Link className="block hover:underline" to="/pc-parts">PC Parts</Link>
      <Link className="block hover:underline" to="/others">All Other Products</Link>
      <Link className="block hover:underline" to="/repairs">Repairs</Link>
      <Link className="block font-bold px-4 py-2 rounded-full transition-all hover:text-white hover:bg-blue-400 border-[3px] border-blue-400 text-blue-400" to="/out-deals">Our Deals</Link>
    </div>
  )
}

export default Main
