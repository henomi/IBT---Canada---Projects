import React from 'react'
import Nav from './Nav';
import Logo from './Logo';
import AuthStatus from '../Auth/AuthStatus';

async function Header() {

  return (
    <header className="relative z-50 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0b132b] px-4 py-4 text-white shadow-lg shadow-black/10 sm:px-6 sm:py-5 lg:px-10">


      <Logo />
      <Nav />
      <AuthStatus />


</header>
  )
}

export default Header;