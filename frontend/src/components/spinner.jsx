import React from 'react'

const spinner = () => {
  return (
    <div className="flex justify-center align-center">
      <div className='animate-ping w-16 h-16 m-8 rounded-full bg-sky-600'></div>
    </div>
  )
}

export default spinner