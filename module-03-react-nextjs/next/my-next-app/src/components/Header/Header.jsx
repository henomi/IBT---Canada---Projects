
import React from 'react'
import Nav from './Nav';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-indigo-500 p-6 flex items-center justify-between">
      <Logo />
      <Nav />
      
</header>
  )
}

export default Header;