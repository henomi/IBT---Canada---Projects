import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080f24] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Restaurant Information */}
          <div className="space-y-4">
            <Link href="/" className="inline-block text-2xl font-extrabold tracking-tight text-[#39ff88] transition hover:text-white">
              Adis<span className="text-white"> Eatery</span>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-slate-400">
              Discover the taste of Ethiopia. Enjoy traditional flavors,
              freshly prepared meals, and a dining experience made with care.
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="text-[#39ff88]">✦</span>
              <span>Authentic Ethiopian flavors</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-5 text-lg font-bold text-white">
              Quick Links
            </h2>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/" className="transition hover:text-[#39ff88]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="transition hover:text-[#39ff88]">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-[#39ff88]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-[#39ff88]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/cart" className="transition hover:text-[#39ff88]">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="mb-5 text-lg font-bold text-white">
              Get in Touch
            </h2>

            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#39ff88]">✉</span>
                <div>
                  <p className="mb-1 font-medium text-slate-200">Email</p>
                  <a href="mailto:info@adiseatery.com" className="break-all transition hover:text-[#39ff88]">
                    info@adiseatery.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#39ff88]">☎</span>
                <div>
                  <p className="mb-1 font-medium text-slate-200">Phone</p>
                  <a href="tel:+251900000000" className="transition hover:text-[#39ff88]">
                    +251 900 000 000
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#39ff88]">⌖</span>
                <div>
                  <p className="mb-1 font-medium text-slate-200">Location</p>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h2 className="mb-5 text-lg font-bold text-white">
              Opening Hours
            </h2>

            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center justify-between gap-3">
                <span>Monday – Friday</span>
                <span className="whitespace-nowrap text-slate-200">9 AM – 9 PM</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Saturday</span>
                <span className="whitespace-nowrap text-slate-200">9 AM – 10 PM</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Sunday</span>
                <span className="whitespace-nowrap text-slate-200">10 AM – 8 PM</span>
              </li>
            </ul>

            <p className="mt-5 rounded-lg border border-[#39ff88]/20 bg-[#39ff88]/5 px-3 py-2 text-xs leading-5 text-slate-300">
              Hours may vary on holidays.
            </p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            © {currentYear} Adis Eatery. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 sm:text-sm">
            <Link href="/privacy" className="transition hover:text-[#39ff88]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-[#39ff88]">
              Terms & Conditions
            </Link>
          </div>

          <p className="text-xs text-slate-500">
            Made with <span className="text-[#39ff88]">♥</span> in Ethiopia
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;