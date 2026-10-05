
import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header>
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
           <Link href="/" className="text-white text-xl font-bold">Home
          </Link>
          <Link href="/menu" className="text-white text-xl font-bold">Menu
          </Link>
          <Link href="/cart" className="text-white text-xl font-bold">Cart
          </Link>
          <Link href="/checkout" className="text-white text-xl font-bold">Checkout
          </Link>
          <Link href="/order/history" className="text-white text-xl font-bold">Orders
          </Link>
        </nav>
      </div>
</header>
  )
}

export default Header;