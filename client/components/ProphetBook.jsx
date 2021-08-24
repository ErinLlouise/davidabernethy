import React from 'react'
import ProphetSideContent from './ProphetSideContent'

function ProphetBook () {
  return (
    <>
      <div>
        <div className='grid justify-center grid-flow-col grid-cols-12 grid-rows-12 gap-4x'>
          <div className='col-start-3 col-span-8'>
            <h1 className='font-hero-font font-serif text-5xl pt-20 pb-10'>The Prophet from Silicon Valley: The Complete Story of Sequential Circuits</h1>
            <p className='bg-transparent mt-4 mb-10'>
            One of the great American synthesizer companies, founded and led by San
            Francisco electronics and computer graduate, Dave Smith, Sequential
            Circuits Inc. paved the way for music of the future. Smith brought easy,
            affordable and powerful polyphonic synthesis to all levels of music
            production in the form of the ground-breaking Prophet-5 synthesizer.
              <br></br>
              <br></br>
            Released in 1978, the Prophet led the new wave movement into the next
            decade, creating a sonically exciting soundtrack to eighties culture.
            The Prophet expanded the pallette of all music genres and was embraced
            by professionals and amateurs alike.
            </p>
          </div>
          <div className='col-start-3 col-span-8'>
            <ProphetSideContent />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProphetBook
