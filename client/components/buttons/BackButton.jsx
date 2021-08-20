import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function BackButton () {
  const history = useHistory()
  return (
    <>
      <Link>
        <img className='transform sm:h-6 sm:w-auto md:h-6 md:w-auto lg:h-8 lg:w-auto hover:transition duration-500 hover:scale-125 h-8 w-auto pl-2 pt-2 opacity-80'src='/images/back.png' onClick={() => history.goBack()}></img>
      </Link>
    </>
  )
}

export default BackButton
