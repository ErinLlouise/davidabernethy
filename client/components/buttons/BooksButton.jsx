import React from 'react'
import { Link } from 'react-router-dom'

function BooksButton () {
  return (
    <div>
      <Link to='/books'>
        <button className="">books</button>
      </Link>
    </div>
  )
}

export default BooksButton
