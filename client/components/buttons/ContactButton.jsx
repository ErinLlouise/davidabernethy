import React from 'react'
import { Link } from 'react-router-dom'

function ContactButton () {
  return (
    <div>
      <Link to='/contact'>
        <button className="text-white hover:text-yellow-500 transition ease-out duration-500 px-3 py-2 rounded-md text-sm">Contact</button>
      </Link>
    </div>
  )
}

export default ContactButton
