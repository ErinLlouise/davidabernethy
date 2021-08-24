import React from 'react'

function IqBook () {
  return (
    <>
      <div>
        <div className='grid justify-center grid-flow-col grid-cols-12 grid-rows-12 gap-4x'>
          <div className='col-start-3 col-span-8'>
            <h1 className='font-hero-font font-serif text-5xl pt-20 pb-10'>IQ and the Y2K</h1>
            <p className='bg-transparent mt-4 mb-10'>
            IQ was a rev from Sirius C Major. In his search
            for a star-translayer and some Y2K to power his
            spaceship, he ended up on Earth. There he met university
            students, George, Charley and Steve, and eccentric
            homeless character, Madison. The gang tried to help
            IQ with his mission, but their earthly priorities
            tended to hinder rather than help him. Things become
            really crazy when the FBI get involved.
            </p>
          </div>
          <div className='col-start-3 col-span-8'>
            <div className='flex'>
              <figure>
                <img className='w-96 h-auto pb-4'src='/images/IQ.jpg'></img>
                <figcaption className='text-xs pb-20'>ISBN 978-0-473-55188-9</figcaption>
              </figure>
              <p className='pl-10 mb-4'>
                <em>
                    IQ and the Y2K, available in:
                  <br></br>
                  <br></br>
                        Paperback (203 x 127 x 12.5mm HWD)
                  <br></br>
                    Kindle ebook
                  <br></br>
                  <br></br>
                    Buy on <a className='m-auto pt-10 underline'href='https://www.amazon.com/IQ-Y2K-David-Abernethy/dp/0473551888'>Amazon</a> here
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IqBook
