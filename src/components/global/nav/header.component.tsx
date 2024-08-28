import { Link } from 'gatsby'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import useImage from '../../../hooks/useImage'

const Header = () => {

  const [facebook,setFacebook] = useImage('facebook-icon')
  const [instagram,setInstagram] = useImage('instagram-icon')

  return (
    <div className='nav-header lg:px-12 bg-black text-white h-[35px] lg:flex lg:justify-between lg:items-center'>
        <div className="nav-date">
            <div className="nav-date-current">Mon-Thu:  9:00 AM - 5:30 PM</div>
            <div className="nav-date-menu"></div>
        </div>
        <div className="nav-content">       
        Visit our showroom in 1234 Street Adress City Address, 1234  <Link to='/contact' className='ml-2 underline'>Contact Us</Link>
        </div>
        <div className="nav-social flex justify-between items-center w-[17%]">
            <div className="nav-social-contact">Call Us: (00) 1234 5678</div>
            {facebook && <GatsbyImage image={facebook.gatsbyImageData} alt="facebook-icon" />}
            {instagram && <GatsbyImage image={instagram.gatsbyImageData} alt="instagram-icon" />}
        </div>
    </div>
  )
}

export default Header
