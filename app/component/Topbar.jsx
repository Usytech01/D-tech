import Link from 'next/link'
import React from 'react'
import image from 'next/link'
import {Person, Search, Chat, Notifications} from '@mui/icons-material'
import Image from 'next/image'



export default function Topbar() {
  return (
    <header className='w-full h-[65px] bg-[#1877F2]'>
      <nav className="flex justify-between h-full w-full px-4 sm:p-6 items-center text-white">
        <Link href="/">
          <h1>DIO</h1>
        </Link>
        <div className="w-[30vw]">
          <div className="flex h-[40px] rounded-full bg-white px-4 items-center justify-center ">
            <Search className='text-black mr-2'/>
            <input type="text" placeholder='Search for friends, posts and videos' 
            className='h-full px-2 w-full focus:outline-none text-black bg-transparent'/>
          </div>
        </div>
        <div className='flex gap-6'>
          <div className='flex gap-4 items-center'>
            <Link href='/'>
            <h2>HOME</h2>
            </Link>
            <Link href='/profile'>
            <h2>PROFILE</h2>
            </Link>
            <div className='flex gap-3 items-center text-white'>
              <div className='relative cursor-pointer'>
                <Person sx={({fontSize: 30})}/>
                <span className='text-xs flex items-center justify-center absolute bg-[red] w-[15px] rounded-full -top-[5px] -right-[5px]'>2</span>
              </div>
              <div className='relative cursor-pointer'>
                <Chat/>
                <span className='text-xs flex items-center justify-center absolute bg-[red] w-[15px] rounded-full -top-[5px] -right-[5px]'>5</span>
              </div>
              <div className='relative cursor-pointer'>
                <Notifications/>
                <span className='text-xs flex items-center justify-center absolute bg-[red] w-[15px] rounded-full -top-[5px] -right-[5px]'>4</span>
              </div>
              <Link href="/profile">
              <Image src="/assets/team/girl.png" alt="profile logo" width={32} height={32} className='rounded-full object-cover ml-2'/>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
