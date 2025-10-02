import React from "react";
import { EmojiEmotions, Label, Permedia, Room } from "@mui/icons-material"
import Image from "next/image";


export default function Share(){
    return(
        <div className="w-[100%] h-[170px] rounded-md shadow-md">
            <div className="p-[10px]"></div>
            <Image className="w-[50px] h-[50px] rounded-full object-cover mr-10"
            src="/assets/team/girl.png"
            alt="lady pics"
            width={50}
            height={50}
            />
            <input type="text" />
        </div>
    )
}