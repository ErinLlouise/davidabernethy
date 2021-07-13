import React from 'react'

function Home () {
  return (
    <>
      <div>
        <div className='flex justify-center m-10'>
          <h1>David Brian Abernethy</h1>
        </div>
        <div className='flex flex-row justify-centre bg-white rounded overflow-hidden shadow ml-80 mr-80 p-8'>
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

        <h1>Also by David Abernethy</h1>
        <div className='bg-white rounded overflow-hidden shadow'>
          <span>The Prophet from Silicon Valley</span>
          <span><em>The Complete Story of Sequential Circuits</em></span>
          <img className='flex w-96' src='/images/prophet.jpg'></img>
          <button className='bg-gray-100 rounded shadow-sm'>see more</button>
        </div>
      </div>
    </>
  )
}

export default Home
