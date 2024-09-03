import React from 'react'

const Customer = () => {
  return (
    <div className='login-customer w-[100%] p-4 md:p-0 md:first-line:w-1/3'>
      <h3 className="font-bold text-md">New Customer?</h3>
      <p className="text-sm my-2">Creating an account has many benefits: </p>
      <ul className='pl-4 list-disc'>
        <li>Check out faster</li>
        <li>Keep more than one address</li>
        <li>Track orders and more</li>
      </ul>
      <button className="py-2 px-6 rounded-full bg-blue-500 font-bold text-white mt-4">Create An Account</button>
    </div>
  )
}

export default Customer
