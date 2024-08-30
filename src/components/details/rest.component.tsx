import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import useImage from '../../hooks/useImage'
import { Link } from 'gatsby'

const Rest = () => {

  const [feature,setFeature] = useImage('details-feature')
  const [support,setSupport] = useImage('details-support')
  const [logo_1,setLogo_1] = useImage('details-logo-1')
  const [logo_2,setLogo_2] = useImage('details-logo-2')
  const [logo_3,setLogo_3] = useImage('details-logo-3')
  const [logo_4,setLogo_4] = useImage('details-logo-4')




  return (
    <div className='details-rest'>
      {feature && <GatsbyImage image={feature.gatsbyImageData} alt='feature'/>}
      <div className='details-rest-support flex justify-center items-center'>
        <div className="details-rest-support-content">
            <Link to='#' className="block my-2 py-2 px-12 bg-gray-200 rounded-md">Product Support</Link>
            <Link to='#' className="block my-2 py-2 px-12 bg-gray-200 rounded-md">FAQ</Link>
            <Link to='#' className="block my-2 py-2 px-12 bg-gray-200 rounded-md">Our Buyer Guide</Link>
        </div>
        {support && <GatsbyImage image={support.gatsbyImageData} alt='feature'/>}
      </div>
      <div className="details-features mb-12 bg-neutral-900 text-white p-12 flex flex-wrap justify-center items-start">
        <h3 className="font-bold text-3xl w-[100%] text-center">Featues</h3>
        <p className="text-sm text-center mb-[100px] w-[100%]">The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
            <div className='details-logo w-1/5 text-center'>
                {logo_1 && <GatsbyImage image={logo_1.gatsbyImageData} alt='logo' />}
                <p className='mt-6 text-center text-gray-500'>Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
             </div>
            <div className='details-logo w-1/5 text-center'>
                {logo_2 && <GatsbyImage image={logo_2.gatsbyImageData} alt='logo' />}
                <p className='mt-6 text-center text-gray-500'>The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.</p>
            </div>
            <div className='details-logo w-1/5 text-center'>
                {logo_3 && <GatsbyImage image={logo_3.gatsbyImageData} alt='logo' />}
                <p className='mt-6 text-center text-gray-500'>Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD.</p>
            </div>
            <div className='details-logo w-1/5 text-center'>
                {logo_4 && <GatsbyImage image={logo_4.gatsbyImageData} alt='logo' />}
                <p className='mt-6 text-center text-gray-500'>Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.</p>
            </div>
        </div>
    </div>
  )
}

export default Rest
