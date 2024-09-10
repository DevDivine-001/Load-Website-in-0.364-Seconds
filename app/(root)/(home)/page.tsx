
import Filters from '@/components/ui/Filters'
import Header from '@/components/ui/Header'
import ResourceCard from '@/components/ui/ResourceCard'
import SearchForm from '@/components/ui/SearchForm'
import { getResources, getResourcesPlaylist } from '@/sanity/Schemas/actions'
import React from 'react'

export const revalidate = 10000

interface IProps {
  searchParams: {[ key: string] : string | undefined }
}


const page = async ({ 
  searchParams

}: IProps) => {
  const resources = await getResources({
    query: searchParams?.query || "",
    category: searchParams?.category ||
     "",
    page:"1" 
  })
  // console.log(resources)

  const resourcesPlaylist = await getResourcesPlaylist()
  // console.log(resourcesPlaylist)
  return (
    <main className='
    flex-center 
    paddings 
    mx-auto
    w-full
    max-w-screen-2xl
    flex-col
   '>
   <section className='
   nav-padding 
   w-full
   '>
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
        text-3xl
        '
        
        >
            JavaScript & TypeScript  Mastery Resources
        </h1>
    </div>
    <SearchForm/>
    </section>   
    <Filters/>
    {(searchParams?.query || searchParams?.category) && (
          <section className='flex-center  w-full flex-col sm:mt-20 '>
     < Header
     
     query={searchParams?.query || ''}
     category={searchParams?.category || ""}
     />
      <div className='flex w-full flex-wrap mt-7 gap-12 sm:justify-start'>
{resources?.length >0 ? (
          
          resources.map((resources:any) => (
            <ResourceCard
            key={resources._id}
            title={resources.title}
            id={resources._id}
            image={resources.image}
            downloadNumber={resources.views}
          downLoadLink={resources.downloadLink}
           
            />
          ))
        
    
):(
  <p className='body-regular text-white-400'>
    No resources found
  </p>
)}

      </div>
    </section>
    )}
    { resourcesPlaylist.map((item: any) =>(
      <section key={item._id} className='
      flex-center mt-6 w-full flex-col sm:mt-20'>
        <h1
        className='heading3 self-start
        text-white-800'>{item.title}</h1>
        <div
        className='mt-12 
        flex 
        w-full
        flex-wrap
        justify-center
        gap-16
        sm:justify-start
        '>
          {
            item.resources.map((resources:any)=>(
                 <ResourceCard
            key={resources._id}
            title={resources.title}
            id={resources._id}
            image={resources.image}
            downloadNumber={resources.views}
            downLoadLink={resources.downloadLink}
           
            />

            ))
          }
          
        </div>

      </section>
    ))}

    </main>
  )
}

export default page