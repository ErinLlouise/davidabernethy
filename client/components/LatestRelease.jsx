import React from 'react'
import IqSeeMoreButton from './buttons/IqSeeMoreButton'
import { Link } from 'react-router-dom'

function LatestRelease () {
  return (
    <>
      <div className='grid justify-center grid-flow-col grid-cols-12 grid-rows-12 gap-4x'>
        <div className='col-start-3 col-span-8 bg-transparent rounded-md shadow-lg mt-4'>
          <h1 className='col-start-4 col-span-3 row-start-3 font-hero-font font-serif text-4xl pt-6 pl-10'>IQ and the Y2K</h1>
          <Link to='/about' >
            <h1 className='col-start-4 col-span-3 row-start-3 font-hero-font font-serif text-xl pt-4 pl-10 pb-8 underline'>David A</h1>
          </Link>
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
              <div className='mt-4'>
                <IqSeeMoreButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestRelease
