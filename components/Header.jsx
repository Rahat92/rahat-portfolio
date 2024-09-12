import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
// Components
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
            <Link href={'/'}>
                <h1 className='text-4xl font-semibold'>
                    Rahat<span className='text-accent'>.</span>
                    <button className = "bg-green-500 p-2 rounded-full inline-block">
                    <svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg"> <path fill="#444746" d="M1.4 14L2.38419e-07 12.6L5.6 7L2.38419e-07 1.4L1.4 -4.76837e-07L7 5.6L12.6 -4.76837e-07L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"></path> </svg>
                    </button>
                </h1>
            </Link>
            {/* Desktop nav & hire me button */}
            <div className="hidden xl:flex items-center gap-8">
              <Nav />
              <Link href={'/contact'}>
                <Button>Hire me</Button>
              </Link>
            </div>
            {/* Mobile nav */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header