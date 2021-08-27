import React, { useState } from 'react'
import { images } from './CarouselData'

function Deck () {
  const [currentImage, setCurrentImage] = useState(0)
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex m-20'>
          <div className='m-auto pr-6 align-middle cursor-pointer'
            onClick={() => {
              currentImage > 0 && setCurrentImage(currentImage - 1)
            }}>
            <img src='/images/backarrow.png'></img>
          </div>
          <img
            className='rounded shadow-lg h-96'
            src={images[currentImage].imageUrl}
          >
          </img>
          <div className='m-auto pl-6 align-middle cursor-pointer'
            onClick={() => {
              currentImage < images.length - 1 && setCurrentImage(currentImage + 1)
            }}>
            <img src='/images/forwardarrow.png'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Deck
