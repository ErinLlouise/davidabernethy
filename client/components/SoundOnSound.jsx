import React from 'react'
import FullReview from './FullReview'

function SoundOnSound () {
  return (
    <>
      <div>
        <img className=' w-96 h-auto pt-20'src='/images/sos.png'></img>
        <h1 className='font-hero-font font-serif text-3xl pt-10 pb-6'>A review from Gordon Reid</h1>
        <h4>Published April 2016</h4>
        <FullReview />
      </div>
    </>
  )
}

export default SoundOnSound
