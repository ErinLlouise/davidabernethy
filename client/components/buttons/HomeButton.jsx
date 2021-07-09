import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton () {
  return (
    <div>
      <Link to='/'>
        <button className="pl-4">home</button>
      </Link>
    </div>
  )
}

export default HomeButton