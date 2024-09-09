'use client'
import Image from "next/image"
import { Input } from "@/components/ui/input"
import {useEffect, useState} from "react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { formUrlQuery } from "@/sanity/Schemas/utils"



const SearchForm = () => {

  const [search, setSearch ] =useState("")
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()


  useEffect(() =>{
    const delayDebounceFn = setTimeout(() =>{
      // console.log(search)
      console.log(pathname)
      let newUrl = ''
      if(search){
       newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: search
        })
      }else{
        newUrl = formUrlQuery({
          params: searchParams.toString(), 
          keysToRemove: ['query'], 
          })
      }

      router.push(newUrl, {scroll: false})
    }, 100)

    return () => clearTimeout(delayDebounceFn)
  }, [search])

  return (
    <form className="
    flex-center mx-auto
    xl:mt-[-45px]
    w-[full]
 max-sm:mt-[-45px]
    sm:px-5">
        <label htmlFor="
        "
        className="flex-center
        relative w-[95%] max-xl:max-w-5xl
        
        max-sm:w-[93%]">
            <Image
            src="/magnifying-glass.svg"
            alt="Search icon"
            className="
            absolute 
            left-8"
            height={32}
            width={32}
            />
            <Input
            className="
            base-regular
            h-fit
            border-0
            bg-black-400 py-6
            pl-20 pr-8
            text-white-800
            !ring-0
            !ring-offset-0
            placeholder:text-white-800"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>

        </label>
    </form>
  )
}

export default SearchForm