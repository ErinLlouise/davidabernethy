import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton () {
  return (
    <div>
      <Link to='/'>
        <img className='transform h-20 w-auto sm:h-14 sm:w-auto md:h-16 md:w-auto lg:h-24 lg:w-auto hover:transition duration-500 hover:scale-105 p-2'src='/images/praxiswhite.png'></img>
      </Link>
    </div>
  )
}

export default HomeButton
