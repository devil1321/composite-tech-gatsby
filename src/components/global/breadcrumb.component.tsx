import React from 'react'

interface BreadcrumbProps{
    paths:string[]
}

const Breadcrumb:React.FC<BreadcrumbProps> = ({paths}) => {
  return (
    <div className='breadcrumb p-12 font-bold'>
      {paths.map((p,i) =>{
        if(i === paths.length - 1 && paths.length >= 1){
            return <div>{p}</div>
        }else if(i === paths.length - 1 && paths.length >= 2){
            return <div className='text-gray-400'>{p}</div>
        } else {
            return <div>{p}<span className='ml-2'>&gt;</span></div>
        }
      })} 
    </div>
  )
}

export default Breadcrumb
