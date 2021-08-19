import React from 'react'
import { Link } from 'react-router-dom'

function ProphetSeeMoreButton () {
  return (
    <>
      <Link to='/prophet'>
        <button className='m-auto text-black hover:text-yellow-500 transition ease-out duration-500 font-serif'>see more</button>
      </Link>
    </>
  )
}

export default ProphetSeeMoreButton
