import React, { useContext } from 'react'
import Menu from './menu'
import Footer from './footer'

const Header = () => {
  return (
    <div className='container'>
      <header className='header'>
      <h1>FAST REACT PIZZA CO.</h1>
      </header>
        
        <Menu />
        <Footer/>
    </div>
  )
}

export default Header