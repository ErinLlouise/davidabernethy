import React from 'react'
import { Route } from 'react-router-dom'
import About from './About'
import Books from './Books'
import Contact from './Contact'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'

function App () {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path ='/books' component={Books} />
      <Footer />
    </>
  )
}

export default App
