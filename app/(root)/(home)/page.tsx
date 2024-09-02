import SearchForm from '@/components/SearchForm'
import React from 'react'

const page = () => {
  return (
    <main className='
    flex-center 
    paddings 
    mx-auto
    w-full
    max-w-screen-2xl
    flex-col'>
   <section className='
   nav-padding 
   w-full'>
    <div className='
    flex-center
    relative
    min-h-[344px]
    w-full
    flex-col
    rounded-xl
    bg-banner
    bg-cover
    bg-center
    '>
        <h1 className='
        sm:heading1 
        heading2
        text-center
        text-white
        text-balance
        font-bold
        text-xl'
        >
            JavaScript & TypeScript  Mastery Resources
        </h1>
    </div>
    <SearchForm/>
    </section>   
    </main>
  )
}

export default page