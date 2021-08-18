import React from 'react'
import IqSeeMoreButton from './buttons/IqSeeMoreButton'

function LatestRelease () {
  return (
    <>
      <div className='grid justify-center grid-flow-col grid-cols-12 grid-rows-12 gap-4x'>
        <h1 className='col-start-5 col-span-6 font-hero-font font-serif text-7xl pt-20'>David Abernethy</h1>
        <div className='col-start-3 col-span-8 bg-transparent rounded-md shadow-lg mt-20'>
          <h1 className='col-start-4 col-span-3 row-start-3 font-hero-font font-serif text-4xl p-10'>IQ and the Y2K</h1>
          <div className='flex'>
            <img className='w-96 h-auto pl-10 pb-10'src='/images/IQ.jpg'></img>
            <div className='pl-4 pr-10'>
              <p>
                IQ was a rev from Sirius C Major. In his search for a star-translayer
                and some Y2K to power his spaceship, he ended up on Earth. There he met
                university students, George, Charley and Steve, and eccentric homeless
                character, Madison. The gang tried to help IQ with his mission, but their
                earthly priorities tended to hinder rather than help him. Things become
                really crazy when the FBI get involved.
              </p>
              <IqSeeMoreButton />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestRelease
