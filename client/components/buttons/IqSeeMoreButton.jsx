import React from 'react'
import { Link } from 'react-router-dom'

function IqSeeMoreButton () {
  return (
    <>
      <div className='pr-2 text-black hover:text-yellow-500 transition ease-out duration-500 font-serif'>
        <Link to='/iq'>
          <button>see more</button>
        </Link>
      </div>
    </>
  )
}

export default IqSeeMoreButton
