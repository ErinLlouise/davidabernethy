import React from 'react'
import { Link } from 'react-router-dom'

function ComingSoonCard () {
  return (
    <>
      <div className='grid justify-center grid-flow-col grid-cols-12 grid-rows-12 gap-4x mb-20'>
        <div className='col-start-3 col-span-8 bg-transparent rounded-md shadow-lg mt-4'>
          <h1 className='col-start-4 col-span-3 row-start-3 font-hero-font font-serif text-4xl pt-6 pl-10'>Coming Soon - IQ and the Y2K Part Two</h1>
          <Link to='/about' >
            <h1 className='col-start-4 col-span-3 row-start-3 font-hero-font font-serif text-xl pt-4 pl-10 pb-8 underline'>David A</h1>
          </Link>
          <div className='flex'>
            <img className='w-96 h-auto pl-10 pb-10'src='/images/comingsoon.jpeg'></img>
            <div className='pl-4 pr-10'>
              <p>
              What happened to Madison?
                <br></br>
              Will George and the gang meet up with IQ again?
                <br></br>
              Has the trail gone cold for the FBI?
                <br></br>
              Is any of this based on real life?
                <br></br>
                <br></br>
              Find out soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComingSoonCard
