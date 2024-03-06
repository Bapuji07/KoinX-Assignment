import { useState } from 'react'
import Header from './components/Header/Header'
import Chart from './components/Chart/Chart'
import Advertise from './components/Advertise/Advertise'
import Overview from './components/Overview/Overview'
import YouMayAlsoLike from './components/You may also like/YouMayAlsoLike'


function App() {
  return (
    <div className='bg-gray-100'>
      <Header />
      <Chart />
      <Overview />
      <YouMayAlsoLike />
      <YouMayAlsoLike />
      <Advertise />

    </div>
  )
}

export default App
