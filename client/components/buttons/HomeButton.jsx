import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton () {
  return (
    <div>
      <Link to='/'>
        <img className='h-16 w-auto'src='/images/praxiswhite.png'></img>
      </Link>
    </div>
  )
}

export default HomeButton
