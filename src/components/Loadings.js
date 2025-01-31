import React from 'react'

export default function Loadings() {
  return (
    <div className='flex relative justify-center item-center mb-4'>
      <div className="bg-gray-200 w-80 h-72 rounded ms-4">

        {/* image loading  */}
        <div className="bg-gray-400 w-full h-40 animate-pulse"></div>

        {/* category, brands  */}
        <div className="flex justify-evenly py-2 animate-pulse">
          <div className="bg-gray-400 w-20 h-6 rounded"></div>
          <div className="bg-gray-400 w-20 h-6 rounded"></div>
          <div className="bg-gray-400 w-20 h-6 rounded"></div>
        </div>

        {/* description section  */}
        <div className="px-4 mt-2 ">
          <div className="bg-gray-400 w-1/2 h-4 rounded animate-pulse"></div>
          <div className="bg-gray-400 w-52 h-4 my-2 rounded"></div>
          <div className="bg-gray-400 w-60 h-4 my-2 rounded"></div>
        </div>
      </div>
    </div>
  )
}
