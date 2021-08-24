import React from 'react'
import LatestRelease from './LatestRelease'
import ProphetCard from './ProphetCard'

function Home () {
  return (
    <>
      <div>
        <div className='flex justify-center pt-20'>
          <img className='w-32 h-auto'src='/images/praxisblack.png'></img>
          <h1 className='font-hero-font font-serif text-7xl pt-6'>Latest Release...</h1>
        </div>
        <LatestRelease />
        <ProphetCard />
      </div>
    </>
  )
}

export default Home
