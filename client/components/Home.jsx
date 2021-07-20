import React from 'react'
import LatestRelease from './LatestRelease'
import ProphetCard from './ProphetCard'

function Home () {
  return (
    <>
      <div>
        <h1 className='flex justify-center mt-8 mb-8 p-8 font-serif text-6xl'>David Abernethy</h1>
        <LatestRelease />
        <h1 className='flex justify-center mt-8 mb-8 p-8 font-serif text-6xl'>Also by David Abernethy</h1>
        <ProphetCard />
      </div>
    </>
  )
}

export default Home
