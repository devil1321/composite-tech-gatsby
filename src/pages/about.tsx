import React from 'react'
import { GlobalComponents } from '../components/global'
import { AboutComponents } from '../components/about'
import { HomeComponents } from '../components/home'

const About = () => {
  return (
    <GlobalComponents.Layout className='about'>
      <div className="about-main mb-[50px]">
        <AboutComponents.Hero />
        <AboutComponents.Feature 
            icon="about-icon-1"
            img="about-feature-1"
            heading="Shop.com"
            paragraph="Shop.com is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service."
            isLeft={true}
            isBlack={false}
        />
        <AboutComponents.Feature 
            icon="about-icon-2"
            img="about-feature-2"
            heading="Now You're In Safe Hands"
            paragraph="Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.Performance compared to i7-9700. Specs varies by model."
            isLeft={false}
            isBlack={true}
        />
        <AboutComponents.Feature 
            icon="about-icon-3"
            img="about-feature-3"
            heading="The Highest Quality of Products"
            paragraph="We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals."
            isLeft={true}
            isBlack={false}
        />
        <AboutComponents.Feature 
            icon="about-icon-4"
            img="about-feature-4"
            heading="We Deliver to Any Regions"
            paragraph="We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be."
            isLeft={false}
            isBlack={true}
        />
      </div>
      <HomeComponents.CardsComponents.Cards />
    </GlobalComponents.Layout>
  )
}

export default About
