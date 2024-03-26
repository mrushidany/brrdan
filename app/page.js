import Footer from './_ui/components/Footer'

export default function Home() {
  return (
    <main className='w-full h-screen flex flex-col pb-4 bg-black-default'>
      <div className='w-full h-full lg:h-[90%] bg-cover lg:bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url('/images/traced-brrrdan.jpeg')` }}></div>
      <div className='flex justify-center items-end mt-4 lg:mt-8'>
        <Footer />
      </div>
    </main>
  )
}
