import Link from 'next/link'
import React from 'react'
import {Search} from '@mui/icons-material'



export default function Topbar() {
  return (
    <header className='w-full h-[65px] bg-[#1877F2]'>
      <nav className="flex justify-between text-white">
        <Link href="/">
          <h2>Dio</h2>
        </Link>
        <div className="w-[30vw] bg-white px-4 items-center">
          <div className="flex h-[40px]">
            <Search className='text-black'/>
          </div>
        </div>
      </nav>
    </header>
  )
}
