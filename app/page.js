'use client'

import Link from 'next/link'
import Footer from './_ui/components/Footer'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import explosion from '../public/images/explosion.gif'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [pop, setPop] = useState(false)

  const router = useRouter()

  const navigate = () => {
    setPop(true)
  }

  useEffect(() => {
    if (pop) {
      const timeout = setTimeout(() => {
        router.push('/me')
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [pop, router])

  return (
    <main className='w-full h-screen flex flex-col gap-4 pb-4 bg-black-default relative'>
      <div className='w-full h-full lg:h-[90%] bg-cover lg:bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url('/images/traced-brrrdan.jpeg')` }}></div>
      <div className='flex justify-center -mt-4'>
        <div onClick={navigate} className='bg-cover bg-no-repeat w-48 h-32 cursor-pointer' style={{  backgroundImage: `url(/images/gunny.png)` }}></div>
      </div>
      <div className='flex justify-center items-end -mt-4'>
        <Footer />
      </div>
      {pop && (
        <>
          <div className='fixed w-full h-full bg-[#151515] inset-0 z-50 flex items-center justify-center'>
            <div>
                <Image src={explosion} />
            </div>
          </div>
        </>
      )}
    </main>
  )
}
