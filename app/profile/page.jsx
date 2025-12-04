import React from 'react';
import Image from 'next/image';
import Topbar from '../component/Topbar';
import Sidebar from '../component/sidebar/Sidebar';
import Rightbar from '../component/Rightbar';
import Feed from '../Feed';


export default function page() {
  return (
    <>
    <Topbar />
    <div className="flex">
      <div className="hidden sm:block md:[25vw]">
        <Sidebar />
      </div>
      <div className="w-[100vw]">
        <div className="w-[100vw] md-[75vw]">
          <div className="h-[320px] w-full relative">
            <div className="w-[100vw] md:w-[75] h-[250px] relative">
              <Image src="/assets/team/avatar.jpg " layout='fill' className='object-fit' alt="pix"/>
            </div>
            <Image
            className='w-[160px] h-[160px] object-cover rounded-full absolute top-[160px] left-0 right-0 border-4 border-white m-auto'
            src="/assets/team/girl.png"
            width={160}
            height={160}
            alt='pix'
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-[24px] font-semibold ">Clara Michael</h4>
            <span className="">Hello my friends Welcome {new Date().getFullYear()}</span>
          </div>
        </div>

        <div className="flex">
          <div className="w-[100vw] md:w-[45vw]">
            <Feed />
          </div>

          <div className="hidden md:block md:w-[30vw]">
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
