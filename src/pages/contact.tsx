import React from 'react'
import { HomeComponents } from '../components/home'
import { GlobalComponents } from '../components/global'
import usePaths from '../hooks/usePaths'
import { ContactComponents } from '../components/contact'

const Contact = () => {

  const [paths,setPaths] = usePaths()

  return (
    <GlobalComponents.Layout className='contact'>
      <GlobalComponents.Breadcrumb paths={[...paths as string[]]}/>
      <ContactComponents.Form />
      <HomeComponents.CardsComponents.Cards />
    </GlobalComponents.Layout>
  )
}

export default Contact
