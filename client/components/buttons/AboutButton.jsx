import React from 'react'
import { Link } from 'react-router-dom'

function AboutButton () {
  return (
    <div>
      <Link to='/about'>
        <button className="pr-4">about</button>
      </Link>
    </div>
  )
}

export default AboutButton
