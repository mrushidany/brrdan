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

  return (
    <div className='w-full h-screen bg-black-default flex items-center justify-center'>
      <div className='flex flex-col gap-10 text-yellow-100'>
        <h1 className='text-5xl font-extrabold text-center'>BRRDAN &nbsp;<span className='italic'>!!</span></h1>
        <ul className='flex flex-row gap-20 text-xl uppercase'>
            {tabList?.map((item, index) => (
                <li className={`cursor-pointer ${tab[item.tab] ? 'underline tracking-wider': ''}`} key={index} onClick={() => handleActiveTab(item.tab)}>{item.name}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}
