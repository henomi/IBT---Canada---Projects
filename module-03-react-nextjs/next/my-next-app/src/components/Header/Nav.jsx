import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
    <div><div>
        <nav className="flex items-center gap-x-4 bg-indigo-500 p-6">
           <Link href="/" className="text-white hover:bg-indigo-400">Home
          </Link>
          <Link href="/menu" className="text-white hover:bg-indigo-400">Menu
          </Link>
          <Link href="/cart" className="text-white">Cart
          </Link>
          <Link href="/checkout" className="text-white">Checkout
          </Link>
          <Link href="/order/history" className="text-white">Orders
          </Link>
        </nav>
      </div></div>
  )
}

export default Nav