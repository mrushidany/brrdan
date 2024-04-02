'use client'

import Link from 'next/link'
import Footer from './_ui/components/Footer'
import { useState } from 'react'
import Image from 'next/image'
import gun from '../public/images/gunny.png'

export default function Home() {
  const [pop, setPop] = useState(false)
  return (
    <main className='w-full h-screen flex flex-col gap-4 pb-4 bg-black-default relative'>
      <div className='w-full h-full lg:h-[90%] bg-cover lg:bg-contain bg-center bg-no-repeat cursor-pointer' style={{ backgroundImage: `url('/images/traced-brrrdan.jpeg')` }}></div>
      <div className='flex justify-center -mt-8'>
        <div className='bg-cover bg-no-repeat w-48 h-32' style={{  backgroundImage: `url(/images/gunny.png)` }}>
          
        </div>
      </div>
      <div className='flex justify-center items-end -mt-6'>
        <Footer />
      </div>
      {pop && (
        <>
          <div className='fixed w-full h-full bg-[#002339] opacity-95 inset-0 z-50 flex items-center justify-center'>
            <Link href='/me'>
              <Image src={gun} className='' />
            </Link>
          </div>
        </>
      )}
    </main>
  )
}
