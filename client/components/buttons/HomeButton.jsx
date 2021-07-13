import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton () {
  return (
    <div>
      <Link to='/'>
        <img className='w-20'src='/images/praxiswhite.png'></img>
      </Link>
    </div>
  )
}

export default HomeButton
