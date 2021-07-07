import React from 'react'
import AboutButton from './buttons/AboutButton'
import ContactButton from './buttons/ContactButton'
import HomeButton from './buttons/HomeButton'

function Header () {
  return (
    <>
      <div className='flex items-center justify-between p-8 shadow-lg'>
        <HomeButton />
        <div className='flex'>
          <AboutButton />
          <ContactButton />
        </div>
      </div>
    </>
  )
}

export default Header
