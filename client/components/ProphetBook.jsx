import React from 'react'

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
            <div className='flex'>
              <figure>
                <img className='w-96 h-auto pb-4'src='/images/prophet.jpg'></img>
                <figcaption className='text-xs pb-20'>ISBN 978-1-512-19832-4</figcaption>
              </figure>
              <div className='pl-10'>
                <p>
                  Sequential Circuits went on to create innovative
                  <br></br>
                  concepts and products such as programmable
                  <br></br>
                   effects, MIDI, multitimbrality, high quality
                  <br></br>
                   sampling, workstation and MPC systems and many
                  <br></br>
                  more. Today, the Prophet-5 is very much sought-after
                  <br></br>
                  as one of those truly iconic classic musical instruments.
                  <br></br>
                </p>
                <p className='pt-6'>
                Featuring many exclusive and highly entertaining and
                  <br></br>
                informative stories from ex-Sequential staff, music
                  <br></br>
                 industry moguls, and famous keyboard players.
                </p>
                <p className='pt-6 mb-4'>
                  <em>
                    IQ and the Y2K, available in:
                    <br></br>
                    <br></br>
                    Paperback (203 x 127 x 12.5mm HWD)
                    <br></br>
                    Kindle ebook
                    <br></br>
                  </em>
                </p>
                <a className='m-auto pt-10'href='https://www.amazon.com/IQ-Y2K-David-Abernethy/dp/0473551888'>Amazon</a>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProphetBook
