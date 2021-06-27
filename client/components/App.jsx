import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'

function App () {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home} />
    </>
  )
}

export default App
