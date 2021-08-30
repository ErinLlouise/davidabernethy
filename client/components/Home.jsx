import React from 'react'
import ComingSoonCard from './ComingSoonCard'
import LatestRelease from './LatestRelease'
import ProphetCard from './ProphetCard'
import Deck from './Deck'

function Home () {
  return (
    <>
      <div>
        <div className='flex justify-center pt-12'>
          <img className='w-64 h-auto'src='/images/praxisblack.png'></img>
        </div>
        <LatestRelease />
        <ProphetCard />
        <ComingSoonCard />
        <Deck />
      </div>
    </>
  )
}

export default Home
