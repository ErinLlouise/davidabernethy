import React from 'react'
import { Link } from 'react-router-dom'

function ProphetSeeMoreButton () {
  return (
    <>
      <Link to='/prophet'>
        <button className='rounded p-2 border-2 border-black text-black hover:bg-yellow-500 transition ease-out duration-500 font-serif'>See more</button>
      </Link>
    </>
  )
}

export default ProphetSeeMoreButton
