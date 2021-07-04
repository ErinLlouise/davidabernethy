import React from 'react'
import { Link } from 'react-router-dom'

function ContactButton () {
  return (
    <div>
      <Link to='/contact'>
        <button className="">contact</button>
      </Link>
    </div>
  )
}

export default ContactButton
