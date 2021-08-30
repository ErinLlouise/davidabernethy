import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton () {
  return (
    <div>
      <Link to='/'>
        <img className='items-center mt-4 mb-4 transform sm:h-16 sm:w-auto sm:m-2 md:h-20 md:w-auto md:m-4 lg:h-24 lg:w-auto hover:transition duration-500 hover:scale-105'src='/images/praxiswhite.png'></img>
      </Link>
    </div>
  )
}

export default HomeButton
