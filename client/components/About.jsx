import React from 'react'

function About () {
  return (
    <>
      <div className='grid grid-flow-col grid-cols-12 grid-rows-12 gap-4 pt-20'>
        <h1 className='col-start-3 col-span-4 row-start-1 font-hero-font font-serif text-7xl'>David Abernethy</h1>
        <div className='flex col-start-7 col-span-4 row-start-1 row-span-5'>
          {/* <img className='transform w-auto h-96 sm:h-36 sm:w-auto md:h-60 md:w-auto lg:h-96 lg:w-auto hover:transition duration-500 hover:scale-105'src='/images/home.jpg'></img> */}
        </div>
        <h3 className='col-start-3 col-span-4 font-serif text-lg'><em>Author</em></h3>
        <p className='col-start-3 col-span-4 row-start-4 row-span-8'>
          David Abernethy... Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Inventore,
          maiores nesciunt. Esse veritatis consequuntur, molestiae
          magni doloremque culpa omnis, voluptas, repellendus doloribus
          illo accusamus alias accusantium mollitia tempora perferendis
          impedit?
          <br></br>Inventore, maiores nesciunt. Esse veritatis consequuntur,
          molestiae magni doloremque culpa omnis, voluptas, repellendus
          doloribus illo accusamus alias accusantium mollitia tempora
          perferendis impedit?
          <br></br>
          Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Inventore,
          maiores nesciunt. Esse veritatis consequuntur, molestiae
          magni doloremque culpa omnis, voluptas, repellendus doloribus
          illo accusamus alias accusantium mollitia tempora perferendis
          impedit?
          <br></br>Inventore, maiores nesciunt. Esse veritatis consequuntur,
          molestiae magni doloremque culpa omnis, voluptas, repellendus
          doloribus illo accusamus alias accusantium mollitia tempora
          perferendis impedit?
        </p>
      </div>
      <div className='grid grid-flow-col grid-cols-12 grid-rows-12 gap-4 pt-20'>
        <h1 className='col-start-3 col-span-4 row-start-1 font-hero-font font-serif text-7xl'>Praxis Books</h1>
        <div className='flex col-start-7 col-span-4 row-start-1 row-span-5'>
          {/* <img className='transform w-auto h-96 sm:h-36 sm:w-auto md:h-60 md:w-auto lg:h-96 lg:w-auto hover:transition duration-500 hover:scale-105'src='/images/home.jpg'></img> */}
        </div>
        <p className='col-start-3 col-span-4 row-start-4 row-span-8'>
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
