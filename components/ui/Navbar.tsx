import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='fixed text-white flex-center w-full border-b-2 border-black-200 py-7 top-0 z-50'>
        <nav className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
            <Link href="">
            <Image src="/json-logo.svg"
            width={55}
            height={40}
            alt='logo'/>
            </Link>

        </nav>
      
    </header>
  )
}

export default Navbar
