'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AboutMePage() {
    const router = useRouter()
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

    const store = [
        {
            name: 'Brrdan Mask',
            image: '/images/store/mask.jpg',
            price: 5000
        },
        {
            name: 'Brrdan Headset',
            image: '/images/store/headset.jpg',
            price: 50000
        },
        {
            name: 'Brrdan Crop Top',
            image: '/images/store/crop-top.jpg',
            price: 15000
        },
    ]

  return (
    <div className='w-full min-h-screen py-10 px-4 lg:py-0 lg:px-0 bg-black-default flex items-center justify-center'>
      <div className='flex flex-col gap-8 lg:gap-10 text-yellow-100'>
        <h1 className='text-2xl lg:text-5xl font-extrabold text-center cursor-pointer' onClick={() => router.push('/')}>BRRDAN &nbsp;<span className='italic'>!!</span></h1>
        <ul className='flex flex-row gap-8 lg:gap-20 text-xs lg:text-xl uppercase justify-center'>
            {tabList?.map((item, index) => (
                <li className={`cursor-pointer ${tab[item.tab] ? 'underline tracking-wider': ''}`} key={index} onClick={() => handleActiveTab(item.tab)}>{item.name}</li>
            ))}
        </ul>
        {tab.music && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {music?.map((item, index) => (
                    <div key={index} className={`w-full lg:w-[384px] h-auto flex flex-col gap-3 group hover:cursor-pointer hover:relative`}>
                        <div className='w-full h-[260px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${item.image})` }}></div>
                        <h4 className='font-bold text-lg lg:text-xl tracking-wider'>{item.title}</h4>
                        <div className='hidden group-hover:block group-hover:absolute bg-black-default w-full h-full bg-opacity-80 group-hover:transition-all ease-in-out duration-500'>
                            <div className='h-full flex items-center justify-center'>
                                <Link href={item.link} className='w-14 h-14 relative'>
                                    <svg class="w-full h-full text-[#F61C0D]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
        {tab.store && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {store?.map((item, index) => (
                    <div key={index} className={`w-full md:w-[354px] lg:w-[384px] h-[300px] md:h-[400px] lg:h-[500px] group hover:cursor-pointer hover:relative bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${item.image})` }}>
                        <div className='hidden group-hover:flex group-hover:absolute px-4 pb-4 items-end w-full h-full bg-black-default bg-opacity-80 transition-all ease-in-out duration-500'>
                            <div className='w-full flex flex-row justify-between items-end'>
                                <div className='flex flex-col gap-2'>
                                    <h3>{item.name}</h3>
                                    <h4>{item.price.toLocaleString()} /=</h4>
                                </div>
                                <div>
                                    <button className='w-auto h-auto px-2 py-1 md:px-4 md:py-2 flex items-center justify-center rounded-lg bg-yellow-default text-white-default text-xs md:text-base'>Buy Now</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        )}
        {tab.follow && (
            <ul className='w-full flex flex-row gap-2'>
                <li>
                    <Link href=''></Link>
                </li>
            </ul>
        )}
      </div>
    </div>
  )
}
