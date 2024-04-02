'use client'

import Link from 'next/link'
import Footer from './_ui/components/Footer'
import { useState } from 'react'
import Image from 'next/image'
import gun from '../public/images/gunny.png'

export default function Home() {
  const [pop, setPop] = useState(false)
  return (
    <main className='w-full h-screen flex flex-col pb-4 bg-black-default relative'>
      <button onClick={() => setPop(true)} className='w-full h-full lg:h-[90%] bg-cover lg:bg-contain bg-center bg-no-repeat cursor-pointer' style={{ backgroundImage: `url('/images/traced-brrrdan.jpeg')` }}></button>
      <div className='flex justify-center items-end mt-4 lg:mt-8'>
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
