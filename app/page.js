import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-screen min-h-screen bg-black-default flex items-center justify-center'>
      <div className='flex flex-col gap-10'>
        <h1 className='text-yellow-100 text-5xl font-extrabold'>BRRDAN <span className='italic'>!!</span></h1>
      </div>
    </main>
  )
}
