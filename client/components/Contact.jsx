import React from 'react'
import CopyToboard from './CopyToBoard'

function Contact () {
  return (
    <>
      <div className='min-h-screen'>
        <h1 className='flex justify-center font-hero-font font-serif text-6xl mt-20 mb-24'>Get in touch</h1>
        <div className='flex justify-center space-x-6 mb-20'>
          <figure>
            <a href='https://www.linkedin.com/in/david-abernethy-b9716042/'>
              <img className='cursor-pointer transform hover:scale-105 duration-500 h-44 w-auto'src='/images/linkedin.png'></img>
              <figcaption className='mt-4 text-xs flex justify-center'>Connect with David on LinkedIn</figcaption>
            </a>
          </figure>
          <figure>
            <a to=''>
              <img className='cursor-pointer transform hover:scale-105 duration-500 h-40 w-auto'src='/images/fb.png'></img>
              <figcaption className='mt-8 text-xs flex justify-center'>Follow Praxis Books on Facebook</figcaption>
            </a>
          </figure>
          <CopyToboard />
        </div>

      </div>
    </>
  )
}

export default Contact
