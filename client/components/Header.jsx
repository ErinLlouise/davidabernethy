import React from 'react'
import AboutButton from './buttons/AboutButton'
import BooksButton from './buttons/BooksButton'
import ContactButton from './buttons/ContactButton'
import HomeButton from './buttons/HomeButton'

function Header () {
  return (
    <>
      <AboutButton />
      <BooksButton />
      <ContactButton />
      <HomeButton />
    </>
  )
}

export default Header
