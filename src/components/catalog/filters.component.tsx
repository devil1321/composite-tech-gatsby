import React from 'react'

const Filters = () => {

  const filtersTmp = ['Custom PC`s','HP/Compaq']

  const renderFilters = () =>{
    const rendered = filtersTmp.map(f => <div className='bg-blue-300 w-max p-2 rounded-md font-bold text-white'>{f}</div>)
    rendered.push(<div className='w-max cursor-pointer bg-red-400 font-bold text-white p-2 rounded-md hover:bg-red-600'>Clear All</div>)
    return rendered
  }

  return (
    <div className='catalog-filters py-4 p-2 md:px-12 flex justify-start items-center'>
      <button className="py-2 font-bold bg-transparent">Filters</button>
      <div className='ml-2 md:ml-12 flex gap-2 md:gap-5'>
        {renderFilters()}
      </div>
    </div>
  )
}

export default Filters
