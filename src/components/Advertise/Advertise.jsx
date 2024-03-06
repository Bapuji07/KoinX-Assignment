import React from 'react'
import TrendingCoins from '../Trending Coins/TrendingCoins';

const Advertise = () => {
  return (
    <div className='flex flex-col w-full  lg:w-1/3 lg:top-20  lg:right-0 lg:absolute '>
      <div className='bg-blue-700 text-white p-12 text-center md:p-4 mt-16 mb-5 rounded-3xl ' style={{ padding: '48px' }}>
        <h2 className='text-3xl font-bold'>Get Started with KoinX for FREE</h2>
        <p className='p-5 text-md'>With our range of features that you can equip for free,KoinX allows you to be more educated and aware of your tax reports.</p>
        <img src="https://cdn.sendsteps.com/website/Talking_v4_1024x687_427319766d.png" alt="" className='mx-auto h-40 w-56 ' />
        <button className='border-2 bg-white text-black px-4 py-2 mt-5 rounded-xl font-bold'>Get Started for Free <i className="bi bi-arrow-right"></i> </button>
      </div>
      <TrendingCoins />
    </div>
  )
}

export default Advertise;