import React from 'react'

function IqBook () {
  return (
    <>
      <div>
        <h1 className='flex justify-center font-hero-font font-serif text-7xl pt-20'>IQ and the Y2K</h1>
        <div className='grid justify-center grid-flow-col grid-cols-12 grid-rows-12 gap-4x'>
          <p className='col-start-4 col-span-6 bg-transparent mt-16 mb-10'>
            IQ was a rev from Sirius C Major. In his search for a star-translayer
            and some Y2K to power his spaceship, he ended up on Earth. There he met
            university students, George, Charley and Steve, and eccentric homeless
            character, Madison. The gang tried to help IQ with his mission, but their
            earthly priorities tended to hinder rather than help him. Things become
            really crazy when the FBI get involved.
          </p>
          <div className='col-start-4 col-span-6'>
            <div className='flex'>
              <figure>
                <img className='w-96 h-auto pb-4'src='/images/IQ.jpg'></img>
                <figcaption className='text-xs'>ISBN 978-0-473-55188-9</figcaption>
              </figure>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default IqBook
