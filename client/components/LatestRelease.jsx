import React from 'react'

function LatestRelease () {
  return (
    <>
      <div className='flex flex-row justify-center bg-white rounded overflow-hidden shadow-lg ml-80 mr-80 p-8'>
        <div className='flex flex-col'>
          <img className='flex w-96' src='/images/IQ.jpg'></img>
          <h2>Latest Release</h2>
          <span>IQ and the Y2K</span>
          <p>
            IQ was a rev from Sirius C Major. In his search for a star-translayer
            and some Y2K to power his spaceship, he ended up on Earth. There he
            met university students, George, Charley and Steve, and eccentric
            homeless character, Madison. The gang tried to help IQ with his mission,
            but their earthly priorities tended to hinder rather than help him.
            Things become really crazy when the FBI get involved.
          </p>
        </div>
      </div>
    </>
  )
}

export default LatestRelease
