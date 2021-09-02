import React from 'react'
import { Link } from 'react-router-dom'

function IqSeeMoreButton () {
  return (
    <>
      <div className='rounded p-2 border-2 border-black text-black hover:bg-yellow-500 transition ease-out duration-500 font-serif'>
        <Link to='/iq'>
          <button>See more</button>
        </Link>
      </div>
    </>
  )
}

export default IqSeeMoreButton
