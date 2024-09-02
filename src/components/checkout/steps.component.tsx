import React from 'react'
import useImage from '../../hooks/useImage'
import { GatsbyImage } from 'gatsby-plugin-image'

const Steps = () => {

  const [step,setStep] = useImage('step')

  return (
    <>
    {step && <GatsbyImage image={step.gatsbyImageData} alt="image" />}
    </>
  )
}

export default Steps
