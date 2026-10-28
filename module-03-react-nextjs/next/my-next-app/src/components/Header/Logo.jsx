import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href ="/">
    <div className="flex items-center gap-x-2 text-lg font-extrabold tracking-[0.15em] text-[#39ff88] transition-colors duration-300 hover:text-white sm:gap-x-4 sm:text-xl">
      ADIS EATERY
    </div>
    </Link>
  )
}

export default Logo;