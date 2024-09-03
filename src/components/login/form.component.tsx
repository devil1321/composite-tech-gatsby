import React from 'react'

const Form = () => {
  return (
    <div className='login-form w-[100%] md:ml-auto p-4 md:px-12 md:w-1/2'>
      <h3 className="font-bold text-md">Registered Customers</h3>
      <p className="text-sm my-2">If you have an account, sign in with your email address.</p>
      <form action="" className='block'>
        <div className="form-field my-2">
            <label htmlFor="" className='block'>Email:</label>
            <input type="email" name="email" className='border-[1px] border-gray-400 px-2 py-1 w-[100%] md:w-[60%]' placeholder='Enter Your Email' />
        </div>
        <div className="form-field my-2">
            <label htmlFor="" className='block'>Password:</label>
            <input type="password" name="password" className='border-[1px] border-gray-400 px-2 py-1 w-[100%] md:w-[60%]' placeholder='Enter Your Email' />
        </div>
      </form>
    </div>
  )
}

export default Form
