import Filters from '@/components/Filters'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getResources } from '@/sanity/actions'
import React from 'react'


const page = async () => {
  const resources = await getResources({
    query: "",
    category: "",
    page:"1" 
  })
  console.log(resources)
  return (
    <main className='rrr
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
        text-3xl'
        >
            JavaScript & TypeScript  Mastery Resources
        </h1>
    </div>
    <SearchForm/>
    </section>   
    <Filters/>
    <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
      Header
      <div className='mt-12 flex w-full flex-warp justify-center gap-16 sm:mt-20'>
{resources?.length >0 ? (
          
          resources.map((resources:any) => (
            <ResourceCard
            key={resources._id}
            title={resources.title}
            id={resources._id}
            image={resources.image}
            downloadNumber={resources.views}
            slug={resources._id}
            />
          ))
        
    
):(
  <p className='body-regular text-white-400'>
    No resources found
  </p>
)}

      </div>
    </section>
    </main>
  )
}

export default page