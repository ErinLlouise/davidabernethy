import React from 'react'
import ProphetSeeMoreButton from './buttons/ProphetSeeMoreButton'

function ProphetCard () {
  return (
    <>
      <div className='flex flex-row justify-center bg-white rounded overflow-hidden shadow-lg ml-80 mr-80 p-8 mb-24'>
        <div className='flex flex-col'>
          <img className='flex w-96' src='/images/prophet.jpg'></img>
          <span>The Prophet from Silicon Valley</span>
          <span><em>The Complete Story of Sequential Circuits</em></span>
          <p>
            One of the great American synthesizer companies, founded and
            led by San Francisco electronics and computer graduate, Dave
            Smith, Sequential Circuits Inc. paved the way for music of the
            future.
            <br></br>
            Smith brought easy, affordable and powerful polyphonic synthesis
            to all levels of music production in the form of the ground-breaking
            Prophet-5 synthesizer. Released in 1978, the Prophet led the new wave
            movement into the next decade, creating a sonically exciting soundtrack
            to eighties culture.
          </p>
          <ProphetSeeMoreButton />
        </div>
      </div>
    </>
  )
}

export default ProphetCard
