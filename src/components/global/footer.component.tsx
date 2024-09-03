import { Link } from 'gatsby'
import React from 'react'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Footer = () => {

  const [facebook,setFacebook] = useImage('facebook-icon')
  const [instagram,setInstagram] = useImage('instagram-icon')
  const [payments,setPayments] = useImage('payment')

  return (
    <div className='footer text-white p-2 md:px-[150px] py-[50px] bg-black'>
      <div className="footer-header flex gap-5 md:gap-0 flex-wrap md:flex-nowrap justify-between items-center">
        <div className="footer-col w-1/2">
            <h2 className="text-4xl my-2">Sign Up To Our Newsletter.</h2>
            <p>Be the first to hear about the latest offers.</p>
        </div>
        <div className="footer-col w-[100%] md:w-1/2 text-right">
            <form action="">
                <input type="text" className="w-[100%] md:w-[60%] p-2 border-[1px] border-gray-400 bg-transparent" placeholder='Your Email' />
                <button className="block w-[100%] md:w-fit px-6 py-2 border-[1px] border-blue-400 bg-blue-400 text-white rounded-full my-2 md:my-0 md:ml-2">Subscribe</button>
            </form>
        </div>
      </div>
      <div className="footer-content my-12 flex flex-wrap md:flex-nowrap justify-between items-start">
        <div className="footer-col">
            <h3 className="text-md mb-6 font-bold">Information</h3>  
            <Link className='block text-sm hover:underline' to="#">About Us</Link>    
            <Link className='block text-sm hover:underline' to="#">About Zip</Link>    
            <Link className='block text-sm hover:underline' to="#">Privacy Policy</Link>    
            <Link className='block text-sm hover:underline' to="#">Search</Link>    
            <Link className='block text-sm hover:underline' to="#">Terms</Link>    
            <Link className='block text-sm hover:underline' to="#">Orders and Returns</Link>    
            <Link className='block text-sm hover:underline' to="#">Contact Us</Link>    
            <Link className='block text-sm hover:underline' to="#">Advanced Search</Link>    
            <Link className='block text-sm hover:underline' to="#">Newsletter Subscription</Link>    
        </div>
        <div className="footer-col w-1/2 md:w-fit">
            <h3 className="text-md font-bold mb-6">PC Parts</h3>
            <Link className='block text-sm hover:underline' to="#">CPUS</Link>    
            <Link className='block text-sm hover:underline' to="#">Add On Cards</Link>    
            <Link className='block text-sm hover:underline' to="#">Hard Drives (Internal)</Link>    
            <Link className='block text-sm hover:underline' to="#">Graphic Cards</Link>    
            <Link className='block text-sm hover:underline' to="#">Keyboards / Mice</Link>    
            <Link className='block text-sm hover:underline' to="#">Cases / Power Supplies / Cooling</Link>    
            <Link className='block text-sm hover:underline' to="#">RAM (Memory)</Link>    
            <Link className='block text-sm hover:underline' to="#">Software</Link>    
            <Link className='block text-sm hover:underline' to="#">Speakers / Headsets</Link>    
            <Link className='block text-sm hover:underline' to="#">Motherboards</Link>    
        </div>
        <div className="footer-col">
            <h3 className="text-md font-bold mb-6">Desktop PCs</h3>
            <Link className='block text-sm hover:underline' to="#">Custom PCs</Link>    
            <Link className='block text-sm hover:underline' to="#">Servers</Link>    
            <Link className='block text-sm hover:underline' to="#">MSI All-In-One PCs</Link>    
            <Link className='block text-sm hover:underline' to="#">HP/Compaq PCs</Link>    
            <Link className='block text-sm hover:underline' to="#">ASUS PCs</Link>    
            <Link className='block text-sm hover:underline' to="#">Tecs PCs</Link>    
        </div>
        <div className="footer-col">
            <h3 className="text-md mb-6 font-bold">Laptops</h3>
            <Link className='block text-sm hover:underline' to="#">Everyday Use Notebooks</Link>    
            <Link className='block text-sm hover:underline' to="#">MSI Workstation Series</Link>    
            <Link className='block text-sm hover:underline' to="#">MSI Prestige Series</Link>    
            <Link className='block text-sm hover:underline' to="#">Tablets and Pads</Link>    
            <Link className='block text-sm hover:underline' to="#">Netbooks</Link>    
            <Link className='block text-sm hover:underline' to="#">Infinity Gaming Notebooks</Link> 
        </div>
        <div className="footer-col">
            <h3 className="text-md mb-6 font-bold">Address</h3>
            <Link className='block text-sm hover:underline' to="#">Address: 1234 Street Adress City Address, 1234</Link>    
            <Link className='block text-sm hover:underline' to="#">Phones: (00) 1234 5678</Link>    
            <Link className='block text-sm hover:underline' to="#">We are open: Monday-Thursday: 9:00 AM - 5:30 PM</Link>    
            <Link className='block text-sm hover:underline' to="#">Friday: 9:00 AM - 6:00 PM</Link>    
            <Link className='block text-sm hover:underline' to="#">Saturday: 11:00 AM - 5:00 PM</Link>    
            <Link className='block text-sm hover:underline' to="#">E-mail: shop@email.com</Link>    
        </div>
      </div>
      <div className='footer-foot text-gray-400 flex flex-wrap md:flex-nowrap justify-between items-center py-2 border-t-[1px] border-gray-600'>
        <div className="footer-col">
            {facebook && <GatsbyImage image={facebook.gatsbyImageData} alt="facebook" />}
            {instagram && <GatsbyImage image={instagram.gatsbyImageData} alt="instagram" />}
        </div>
        <div className="footer-col ml-[80px]">
            {payments && <GatsbyImage image={payments.gatsbyImageData} alt="payments" />}
        </div>
        <div className="footer-col">
            Copyright © 2020 Shop Pty. Ltd.
        </div>
      </div>
    </div>
  )
}

export default Footer
