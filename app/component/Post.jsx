'use client';

import React from 'react';
import { MoreVert } from '@mui/icons-material';
import { useState } from 'react';
import { Users } from "../../dummyData";
import Image from "next/image";

export default function Post({post}){

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] =useState(false);
    const likeHandler =() => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }
    return(
        <>
            <div className='post w-[100%] rounded:md hover:scale-[1.025]'>User Posts</div>
            <div className='p-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Image src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
                        alt='user picture'
                        width={32}
                        height={32}
                        className='w-[32px] h-[32px] rounded-full object-cover mr-[10px]'    
                        />
                        <span className='text-[15px] font-semibold mx-[10px]'>
                            {Users.filter((u) => u.id === post.userId)[0].username}{" "}

                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}