import React from 'react'

const Form = () => {
  return (
    <div className='login-form ml-auto px-12 w-1/2'>
      <h3 className="font-bold text-md">Registered Customers</h3>
      <p className="text-sm my-2">If you have an account, sign in with your email address.</p>
      <form action="" className='block'>
        <div className="form-field my-2">
            <label htmlFor="" className='block'>Email:</label>
            <input type="email" name="email" className='border-[1px] border-gray-400 px-2 py-1 w-[60%]' placeholder='Enter Your Email' />
        </div>
        <div className="form-field my-2">
            <label htmlFor="" className='block'>Password:</label>
            <input type="password" name="password" className='border-[1px] border-gray-400 px-2 py-1 w-[60%]' placeholder='Enter Your Email' />
        </div>
      </form>
    </div>
  )
}

export default Form
