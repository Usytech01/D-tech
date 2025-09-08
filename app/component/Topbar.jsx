import Link from 'next/link'
import React from 'react'
import {Search} from '@mui/icons-material'



export default function Topbar() {
  return (
    <header className='w-full h-[65px] bg-[#1877F2]'>
      <nav className="flex justify-between h-full w-full px-4 sm:p-6 items-center text-white">
        <Link href="/">
          <h1>DIO</h1>
        </Link>
        <div className="w-[30vw] bg-white md:flex px-4 items-center rounded-full">
          <div className="flex h-[40px]">
            <Search className='text-black'/>
            <input type="text" placeholder='Search for friends, posts and videos' 
            className='h-full w-full focus:outline-none bg-transparent'/>
          </div>
        </div>
        <div className='flex gap-6'>
          <div className='flex gap-4 items-center'>
            <Link href='/'>
            <h2>HOME</h2>
            </Link>
            <Link href='/'>
            <h2>PROFILE</h2>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
