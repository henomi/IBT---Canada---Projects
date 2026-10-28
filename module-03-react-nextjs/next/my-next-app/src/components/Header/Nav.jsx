import React from 'react'
import Link from 'next/link';
// import SignOutButton from '../SignOutButton/SignOutButton';

const Nav = () => {
  return (
    <div><div>
        <nav className="flex flex-wrap items-center justify-center gap-2 rounded-xl bg-[#0b132b] p-2 sm:gap-3 sm:p-3 lg:gap-4">
           {/* <Link href="/" className="rounded-lg px-3 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#39ff88]/10 hover:text-[#39ff88] sm:px-4">
            Home
          </Link> */}
          <Link href="/menu" className="rounded-lg px-3 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#39ff88]/10 hover:text-[#39ff88] sm:px-4">
            Menu
          </Link>
          <Link href="/cart" className="rounded-lg px-3 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#39ff88]/10 hover:text-[#39ff88] sm:px-4">
            Cart
          </Link>
          <Link href="/checkout" className="rounded-lg px-3 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#39ff88]/10 hover:text-[#39ff88] sm:px-4">
            Checkout
          </Link>
          <Link href="/order" className="rounded-lg px-3 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#39ff88]/10 hover:text-[#39ff88] sm:px-4">
            Orders
          </Link>
          <Link href="/signin" className="rounded-lg px-3 py-2 text-sm font-semibold text-[#39ff88] transition duration-200 hover:bg-[#39ff88] hover:text-[#0b132b] sm:px-4">
            Sign In
          </Link>
          {/* <Link href="/admin" className="text-white">Admin
          </Link> */}
        </nav>

      </div></div>
  )
}

export default Nav