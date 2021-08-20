import React from 'react'
import { Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import IqBook from './IqBook'
import ProphetBook from './ProphetBook'

function App () {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/iq' component={IqBook} />
      <Route path='/prophet' component={ProphetBook} />
      <Footer />
    </>
  )
}

export default App
