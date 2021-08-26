import React, { useState } from 'react'
import { images } from './CarouselData'

function Deck () {
  const [currentImage, setCurrentImage] = useState(0)
  return (
    <>
      <div className='flex w-full'>
        <div className='float-left'>
          <button onClick={() => {
            console.log('this has been clicked')
            currentImage > 0 && setCurrentImage(currentImage - 1)
          }}
          >back</button>
        </div>
        <img
          src={images[currentImage].imageUrl}
          // style={{ mainImage: `url(${images[currentImage].imageUrl})` }}
        >
        </img>
        <div className='float-right'>
          <button onClick={() => {
            console.log('this has been clicked')
            currentImage < images.length - 1 && setCurrentImage(currentImage + 1)
          }}
          >forward</button>
        </div>
      </div>
    </>
  )
}

export default Deck
