import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function BackButton () {
  const history = useHistory()
  return (
    <>
      <Link className='flex justify-start sticky bottom-10'>
        <img className='transform sm:h-4 sm:w-auto md:h-8 md:w-auto lg:h-12 lg:w-auto hover:transition duration-500 hover:scale-125 h-20 w-auto p-2 opacity-60'src='/images/blackback.png' onClick={() => history.goBack()}></img>
      </Link>
    </>
  )
}

export default BackButton
