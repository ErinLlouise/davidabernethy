import React from 'react'
import { Link } from 'react-router-dom'

function ContactButton () {
  return (
    <div>
      <Link to='/contact'>
        <button className="pl-4 pr-4">contact</button>
      </Link>
    </div>
  )
}

export default ContactButton
