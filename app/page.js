import Image from 'next/image'
import Footer from './_ui/components/Footer'

export default function Home() {
  return (
    <main className='w-full h-screen flex flex-col pb-4'>
      <div className='w-full h-[90%] bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url('/images/traced-brrrdan.jpeg')` }}></div>
      <div className='flex justify-center items-end mt-8'>
        <Footer />
      </div>
    </main>
  )
}
