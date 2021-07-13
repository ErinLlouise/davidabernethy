import React from 'react'
import { Link } from 'react-router-dom'

function AboutButton () {
  return (
    <div>
      <Link to='/about'>
        <button className="pr-4 text-white hover:text-yellow-500 transition ease-out duration-500">about</button>
      </Link>
    </div>
  )
}

export default AboutButton
