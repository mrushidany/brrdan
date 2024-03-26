import Image from 'next/image'
import Footer from './_ui/components/Footer'

export default function Home() {
  return (
    <main className='w-screen h-screen pb-10 bg-black-default flex flex-col'>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='flex flex-col'>
          <h1 className='text-yellow-100 text-5xl font-extrabold text-center'>BRRDAN <span className='italic'>!!</span></h1>
          <div className='w-[550px] h-[560px] bg-cover bg-center bg-no-repeat mt-10' style={{ backgroundImage: `url('/images/brrrdan.jpeg')` }}></div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Footer />
      </div>
    </main>
  )
}
