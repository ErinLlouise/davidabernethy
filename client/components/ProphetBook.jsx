import React from 'react'
import ProphetSideContent from './ProphetSideContent'
import YouTubeEmbed from './YouTubeEmbed'

function ProphetBook () {
  return (
    <>
      <div>
        <div className='grid justify-center grid-flow-col grid-cols-12 grid-rows-12 gap-4x'>
          <div className='col-start-3 col-span-8'>
            <h1 className='font-hero-font font-serif text-5xl pt-20 pb-10'>The Prophet from Silicon Valley: The Complete Story of Sequential Circuits</h1>
            <p className='bg-transparent mt-4 mb-10'>
            One of the great American synthesizer companies, founded and led by San
            Francisco electronics and computer graduate, Dave Smith, Sequential
            Circuits Inc. paved the way for music of the future. Smith brought easy,
            affordable and powerful polyphonic synthesis to all levels of music
            production in the form of the ground-breaking Prophet-5 synthesizer.
              <br></br>
              <br></br>
            Released in 1978, the Prophet led the new wave movement into the next
            decade, creating a sonically exciting soundtrack to eighties culture.
            The Prophet expanded the pallette of all music genres and was embraced
            by professionals and amateurs alike.
            </p>
          </div>
          <div className='col-start-3 col-span-8'>
            <ProphetSideContent />
          </div>
        </div>
        <div className='grid justify-center grid-flow-col grid-cols-12 grid-rows-12 gap-4x'>
          <h1 className='col-start-3 col-span-8 row-start-1 font-hero-font font-serif text-5xl pt-20 pb-10'>More on The Prophet from Silicon Valley...</h1>
          <h2 className='col-start-3 col-span-8 row-start-2'>Alex Ball describes the book as, &#34;a bible&#34; on the subject of Prophet Synthesizers in his YouTube video, The History of the Prophet Synthesizer</h2>
          <div className='col-start-4 col-span-6 row-start-3 row-span-2'>
            <YouTubeEmbed />
          </div>
          <p className='col-start-3 col-span-8 row-start-5 row-span-2'>
              Alex Ball is an award-winning media composer, producer and instrumentalist.
              By night, Alex explores his passion for synthesizers and the history of music
              technology, and has made documentaries covering the stories of the Roland
              Corporation, ARP Instruments, the Prophet Synthesizers, the Linn LM‑1 digital
              drum machine as well as breakdowns of iconic film scores such as Terminator 2,
              Escape From New York and Predator.
          </p>
        </div>
      </div>
    </>
  )
}

export default ProphetBook
