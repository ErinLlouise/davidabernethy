import React from 'react'
import AboutButton from './buttons/AboutButton'
import ContactButton from './buttons/ContactButton'
import HomeButton from './buttons/HomeButton'

function Header () {
  return (
    <>
      <div className='sticky top-0 flex items-center justify-between p-4 shadow-xl bg-black bg-opacity-90'>
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
