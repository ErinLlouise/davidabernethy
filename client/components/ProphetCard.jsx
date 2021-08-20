import React from 'react'
import ProphetSeeMoreButton from './buttons/ProphetSeeMoreButton'

function ProphetCard () {
  return (
    <>
      <div className='grid justify-center grid-flow-col grid-cols-12 grid-rows-12 gap-4x pb-20'>
        <div className='col-start-3 col-span-8 bg-transparent rounded-md shadow-lg mt-20'>
          <h1 className='col-start-4 col-span-3 row-start-3 font-hero-font font-serif font-extralight text-xl pt-10 pl-10'>First Release</h1>
          <h1 className='col-start-4 col-span-3 row-start-3 font-hero-font font-serif text-4xl pl-10 pb-10 pt-6'>The Prophet from Silicon Valley – The complete story of Sequential Circuits</h1>
          <div className='flex'>
            <img className='w-96 h-auto pl-10 pb-10'src='/images/prophet.jpg'></img>
            <div className='pl-4 pr-10'>
              <p>
                One of the great American synthesizer companies, founded and led by San
                Francisco electronics and computer graduate, Dave Smith, Sequential Circuits
                Inc. paved the way for music of the future. Smith brought easy, affordable and
                powerful polyphonic synthesis to all levels of music production in the form of
                the ground-breaking Prophet-5 synthesizer.
              </p>
              <ProphetSeeMoreButton />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProphetCard
