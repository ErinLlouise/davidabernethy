import React from 'react'

function About () {
  return (
    <>
      <div className='grid grid-flow-col grid-cols-12 grid-rows-12 gap-4 pt-20'>
        <h1 className='col-start-3 col-span-4 row-start-1 font-hero-font font-serif text-7xl'>David Abernethy</h1>
        <div className='flex col-start-7 col-span-4 row-start-1 row-span-5'>
          <figure>
            <img className='z-0 rounded shadow transform w-auto h-96 sm:h-36 sm:w-auto md:h-60 md:w-auto lg:h-96 lg:w-auto hover:transition duration-500 hover:scale-105'src='/images/standing.jpg'></img>
            <figcaption className='text-xs pt-2'><em>David Abernethy (left), Dave Smith (right)</em></figcaption>
          </figure>
        </div>
        <h3 className='col-start-3 col-span-4 font-serif text-lg'><em>Author</em></h3>
        <p className='col-start-3 col-span-4 row-start-4 row-span-8'>
        David Abernethy is an electrical engineer/musician/writer/vintage
        synth fanatic from planet Earth. His first publication
          <em>The Prophet from Silicon Valley (2015)</em> was the result
        of many years of fanatical research. He now brings you something
        completely different - a sci-fi comedy in the form of the IQ series.
        First book out now, <em>IQ and the Y2K</em>.
        </p>
      </div>
      <div className='grid grid-flow-col grid-cols-12 grid-rows-12 gap-4 pt-20 pb-20'>
        <h1 className='col-start-3 col-span-4 row-start-1 font-hero-font font-serif text-7xl'>Praxis Books</h1>
        <div className='flex col-start-7 col-span-4 row-start-1 row-span-5'>
          <figure>
            <img className='rounded shadow transform w-auto h-96 sm:h-36 sm:w-auto md:h-60 md:w-auto lg:h-96 lg:w-auto hover:transition duration-500 hover:scale-105'src='/images/sitting.jpg'></img>
            <figcaption className='text-xs pt-2'><em>David Abernethy (left), Dave Smith (right)</em></figcaption>
          </figure>
        </div>
        <h3 className='col-start-3 col-span-4 font-serif text-lg'><em>Praxis Group International Ltd</em></h3>
        <p className='col-start-3 col-span-4 row-start-3 row-span-8 pt-6'>
              Praxis Books is a subsidiary of The Praxis Group International Ltd,
              an Auckland-based, New Zealand registered company. Praxis Books was
              formed in 2021, primarily for the distribution of the IQ series,
              produced by AM Publishing.
        </p>
      </div>
    </>
  )
}

export default About
