import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='fixed text-white flex-center w-full border-b-2 border-black-200 py-7 top-0 z-50'>
        <nav className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
            <Link href="">
            <Image src="/jsm-logo.svg"
            width={55}
            height={40}
            alt='logo'/>
            </Link>
            <Image
            width={30}
            height={30}
            alt='Hamburger menu'
            src="/hamburger-menu.svg"
            className='block md:hidden'
            />

            <ul className='
            flex-center 
            gap-x-3 
            max-md:hidden 
            md:gap-x-10'>
            <li className='
            body-text 
            text-gradient_blue-purple
            !font-bold

                '>
            <Link href="https://www.jsmastery.pro/ultimate-next-course"
                    target='_blank'>
                        Next.js 13.4 Course
            </Link>

                </li>
            <li className='
            body-text
            !font-normal
                '>
            <Link href="https://www.jsmastery.pro/dev-career-accelerator"
                    target='_blank'>
                        Masterclass
            </Link>

                </li>
            </ul>


        </nav>
      
    </header>
  )
}

export default Navbar
