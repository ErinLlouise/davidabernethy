import React from 'react'
import { Link } from 'react-router-dom'

function AboutButton () {
  return (
    <div>
      <Link to='/about'>
        <button className="">about</button>
      </Link>
    </div>
  )
}

export default AboutButton
