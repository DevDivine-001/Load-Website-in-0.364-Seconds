import React from 'react'
import {
  Card,
  CardContent,
 
  CardHeader,
  CardTitle
} from "../ui/card"; // Update this to match the correct path
import Link from 'next/link';
import Image from 'next/image';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props{
    id: string,
    title: string
    image?: string,
    downloadNumber?: number
    downLoadLink: string
}

const ResourceCard = ({ id,title, image, downloadNumber, downLoadLink }: Props) => {
  return (
    <Card className='
     w-full
     max-w-fit 
     border-0 
     flex-col
     flex
     gap-2.5
     !bg-transparent 
     sm:max-w-[356px]'>
<Link href={downLoadLink}
target='_blank'
>
<CardHeader className='
     flex-center
     flex-col
     gap-1
     !p-0
     '>
    <div
    className='
    h-fit 
    w-[350px]
    max-sm:w-full'>
    <Image
    src={`${image}`}
    className='h-[450px] 
    max-md:h-full rounded-md object-cover'
    height={384}
    width={440}
    alt={title}
    />

    </div>
    <CardTitle className='
    text-white
    paragraph-semibold
    line-clamp-1
    w-full
    text-balance'>{title}</CardTitle>
   

</CardHeader>
</Link>
<CardContent className='"
flex-between
p-0'>
<div className='
flex-center
body-medium
gap-1.5
text-white'>
    <Image
    src="downloads.svg"
    width={20}
    height={20}
    alt='download'

    />
    {`${downloadNumber}`}
</div>
<Link
href={downLoadLink}
target='_blank'
className='flex-center
text-gradient_purple-blue
body-semibold
gap-1.5'>
    <button>Download Now</button>
    <Image
    src="/arrow-blue.svg"
    width={13}
    height={10}
    alt='arrow'/>
</Link>
</CardContent>
    </Card>
  )
}

export default ResourceCard