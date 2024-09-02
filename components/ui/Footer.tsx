import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' text-white flex-center w-full border-t border-black-200 py-7 bottom-0 '>
        <nav className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16 max-md:flex-col max-md:gap-3'>
             <p className='max-md:text-center'>Copyright ©️ 2024 TS Mastery Pro | All Rights Reserved</p>
          
   <div className='flex gap-x-9'>
          <Link href="/terms-of-use">Terms & Conditions</Link> 
          <Link href="/privacy-policy">Privacy Policy</Link> 
       </div>

        </nav>
      
    </footer>
  )
}

export default Footer

