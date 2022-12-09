import React from 'react'
import './header.css'
import NavItem from './components/NavItem'
const Header = () => {
  return (
    <div>
      <nav className='nav-bar'>
        <NavItem title="Home"/>
        <NavItem title="Syd Story"/>
        <NavItem title="Tutu Story"/>
        <NavItem title="About us"/>

      </nav>
    </div>
  )
} 
export default Header;