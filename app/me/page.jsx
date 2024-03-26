'use client'

import { useState } from 'react'

export default function AboutMePage() {
    const tabList = [
        {name: 'Music + Video', tab: 'music'},
        {name: 'Store', tab: 'store'},
        {name: 'Follow me', tab: 'follow'}
    ]

    const [ tab, setTab ] = useState({
        music: true,
        store: false,
        follow: false
    })

    const handleActiveTab = (activeTab) => {
        setTab((prev) => ({
            ...prev,
            music: false,
            store: false,
            follow: false,
            [activeTab]: true,
        }))
    }

    const music = [
        {
            title: 'Mr Brrdan ft Chino Kidd - Bata',
            image: '/images/music/bata.jpeg',
            link: 'https://www.youtube.com/watch?v=U0L4BULqK5g&pp=ygUGYnJyZGFu'
        },
        {
            title: 'Mr Brrdan - Slide',
            image: '/images/music/slide.jpeg',
            link: 'https://www.youtube.com/watch?v=poDR4RCjTFc'
        },
        {
            title: 'Mr Brrdan ft Gosby - X',
            image: '/images/music/x.webp',
            link: 'https://www.youtube.com/watch?v=PN7VPq9yFCY'
        },
        {
            title: 'Mr Brrdan - Mdogo Mdogo',
            image: '/images/music/mdogo.jpeg',
            link: 'https://www.youtube.com/watch?v=FDyOCdUR6JY'
        },
        {
            title: 'Mr Brrdan ft Countryboy - Burudani',
            image: '/images/music/burudani.png',
            link: 'https://www.youtube.com/watch?v=vXnHQhhgvdY'
        }
    ]

  return (
    <div className='w-full min-h-screen bg-black-default flex items-center justify-center'>
      <div className='flex flex-col gap-10 text-yellow-100'>
        <h1 className='text-5xl font-extrabold text-center'>BRRDAN &nbsp;<span className='italic'>!!</span></h1>
        <ul className='flex flex-row gap-20 text-xl uppercase justify-center'>
            {tabList?.map((item, index) => (
                <li className={`cursor-pointer ${tab[item.tab] ? 'underline tracking-wider': ''}`} key={index} onClick={() => handleActiveTab(item.tab)}>{item.name}</li>
            ))}
        </ul>
        {tab.music && (
            <div className='grid grid-cols-3 gap-6'>
                {music.map((item, index) => (
                    <div key={index} className={`w-[384px] h-auto flex flex-col gap-3`}>
                        <div className='w-full h-[260px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${item.image})` }}></div>
                        <h4 className='font-bold text-xl tracking-wider'>{item.title}</h4>
                    </div>
                ))}
            </div>
        )}
        
      </div>
    </div>
  )
}
