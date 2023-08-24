import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto  mt-4 border-t-4'>
    <div className='flex items-center m-auto justify-center'>
      <AiOutlineMessage size={30} className='text-purple-500 mr-2' />
      <h1 className='text-xl font-bold italic text-gray-700'>BEACH APP</h1>
    </div>
  </div>
  )
}

export default Footer