import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../components/ui/card"; // Update this to match the correct path
import Link from 'next/link';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props{
    id?: String
    title: string
    image?: string,
    downloadNumber?: number
    slug?: string
}

const ResourceCard = ({id, title, image, downloadNumber, slug }: Props) => {
  return (
    <Card className='
     w-full
     max-w-fit 
     border-0 
     !bg-transparent 
     sm:max-w-[356px]'>
<Link href={`/resource`}>
<CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card CardDescription</CardDescription>

</CardHeader>
</Link>
<CardContent>
    <p>CardContent</p>
</CardContent>
<CardFooter>
    <p>CardFooter</p>
</CardFooter>

    </Card>
  )
}

export default ResourceCard