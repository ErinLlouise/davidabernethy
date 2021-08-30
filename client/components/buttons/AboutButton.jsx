import React from 'react'
import { Link } from 'react-router-dom'

function AboutButton () {
  return (
    <div>
      <Link to='/about'>
        <button className="text-white hover:text-yellow-500 transition ease-out duration-500 px-3 py-2 rounded-md text-sm">About</button>
      </Link>
    </div>
  )
}

export default AboutButton
