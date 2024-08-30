import React from 'react'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Form = () => {

   const [address,setAddress] = useImage('location-icon')
   const [phone,setPhone] = useImage('phone-icon')
   const [clock,setClock] = useImage('clock-icon')
   const [email,setEmail] = useImage('email')

  return (
    <div className='contact-form px-12 mb-[100px]'>
      <h2 className="text-5xl font-bold">Contact Us</h2>
      <p className="text-sm my-2 text-gray-500">We love hearing from you, our Shop customers.</p>
      <p className="text-sm my-2 text-gray-500">Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
      <div className='flex justify-between items-start'>
      <form className='w-[60%]' action="">
        <div className="contact-form-fields flex justify-between items-center">
            <div className="contact-form-field w-[49%]">
                <label className='text-sm text-gray-400' htmlFor="">Your Name:</label>
                <input className='p-2 w-[100%] border-[1px] border-gray-400' type="text" placeholder='Enter Your Name'/>
            </div>
            <div className="contact-form-field w-[49%]">
                <label className='text-sm text-gray-400' htmlFor="">Your Email:</label>
                <input className='p-2 w-[100%] border-[1px] border-gray-400' type="text" placeholder='Enter Your Email'/>
            </div>
        </div>
        <div className="contact-form-field my-2 w-[49%]">
            <label className='text-sm text-gray-400' htmlFor="">Your Phone Number:</label>
            <input className='p-2 w-[100%] border-[1px] border-gray-400' type="text" placeholder='Enter Your Phone'/>
        </div>
        <div className="contact-form-field my-2 w-[49%]">
            <label className='text-sm text-gray-400' htmlFor="">What’s on your mind? *:</label>
            <textarea className='p-2 w-[100%] h-[200px] border-[1px] border-gray-400' placeholder='Jot us a note and we’ll get back to you as quickly as possible'></textarea>
        </div>
        <button className='text-white font-bold rounded-full bg-blue-600 px-12 py-2'>Submit</button>
        </form>
        <div className='contact-info w-1/3'> 
            <div className="contact-info-item flex justify-start items-center">
                {address && <GatsbyImage image={address.gatsbyImageData} alt='location-icon '/>}
                <div className='ml-2'>
                    <h3 className="text-md font-bold">Address:</h3>
                    <p className="text-sm text-gray-400">1234 Street Adress City Address, 1234</p>
                </div>
            </div>
            <div className="contact-info-item flex justify-start items-center">
                {phone && <GatsbyImage image={phone.gatsbyImageData} alt='phone-icon'/>}
                <div className='ml-2'>
                    <h3 className="text-md font-bold">Phone:</h3>
                    <p className="text-sm text-gray-400">(00)1234 5678</p>
                </div>
            </div>
            <div className="contact-info-item flex justify-start items-center">
                {clock && <GatsbyImage className='w-[50px]' image={clock.gatsbyImageData} alt='clock-icon'/>}
                <div className='ml-2'>
                    <h3 className="text-md font-bold">We are open:</h3>
                    <p className="text-sm text-gray-400 w-[50%]">Monday - Thursday: 9:00 AM - 5:30 PM Friday 9:00 AM - 6:00 PM Saturday: 11:00 AM - 5:00 PM</p>
                </div>
            </div>
            <div className="contact-info-item flex justify-start items-center">
                {email && <GatsbyImage image={email.gatsbyImageData} alt='email-icon'/>}
                <div className='ml-2'>
                    <h3 className="text-md font-bold">E-mail:</h3>
                    <Link to="#" className="underline text-blue-500">shop@email.com</Link>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Form
