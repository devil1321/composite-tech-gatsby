import React from 'react'
import { GlobalComponents } from '../components/global'
import { HomeComponents } from '../components/home'
import { LoginComponents } from '../components/login'

const Login = () => {
  return (
    <GlobalComponents.Layout className='login'>
      <div className="login-main py-[100px] flex justify-between items-start">
        <LoginComponents.Form />
        <LoginComponents.Customer />
      </div>
      <HomeComponents.CardsComponents.Cards />
    </GlobalComponents.Layout>
  )
}

export default Login
