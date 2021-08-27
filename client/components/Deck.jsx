import React, { useState } from 'react'
import { images } from './CarouselData'

function Deck () {
  const [currentImage, setCurrentImage] = useState(0)
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex m-20'>
          <div className='m-10 align-middle'>
            <button onClick={() => {
              currentImage > 0 && setCurrentImage(currentImage - 1)
            }}
            >back</button>
          </div>
          <img
            className='rounded shadow-lg h-96'
            src={images[currentImage].imageUrl}
          >
          </img>
          <div className='m-10 align-middle'>
            <button onClick={() => {
              currentImage < images.length - 1 && setCurrentImage(currentImage + 1)
            }}
            >forward</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Deck
