import React from "react";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material"
import Image from "next/image";


export default function Share(){
    return(
        <div className=" share w-[100%] h-[170px] rounded-md shadow-md">
            <div className="p-[10px]"></div>
            <Image className="w-[50px] h-[50px] rounded-full object-cover mr-10"
            src="/assets/team/girl.png"
            alt="lady pics"
            width={50}
            height={50}
            />
            <input type="text" placeholder="what are you thinking?" className="focus:outline-none w-full font-semibold"/>
            <hr className="m-[20px] border-black"/>
            <div className="flex items-center px-6 gap-2">
                <label htmlFor="file" className="flex items-centermr-[15px] cursor-pointer">
                <PermMedia htmlColor="tomato" className="font-bold mr-3 "/>
                <span className="text-[i4px] font-bold">Photo or Video</span>
                <input type="text" />
                </label>
            </div>
        </div>
    )
}