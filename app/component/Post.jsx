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
            <div className='post w-[100%] rounded:md hover:scale-[1.025]'>
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
                        <span className='text-[12]'>{post.date}</span>
                    </div>
                    <div className=''>
                        <MoreVert/>
                    </div>
                </div>

                <div className='my-[20px]'>
                    <span>{post?.desc}</span>
                    <Image
                    className='w-[full] cursor-pointer max-h-[500px] mt-[20px] object-cover'
                    alt="lagos_rail"
                    src={post.photo}
                    width={500}
                    height={500}
                    />
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Image
                            className='cursor-pointer w-[24px] h-[24px] mr-[10px]'
                            src="/assets/team/like.png"
                            onClick={likeHandler}
                            alt="like_image"
                            width={40}
                            height={40}
                        />
                        <Image
                            className='cursor-pointer w-[24px] mr-[10px]'
                            src="/assets/team/heart.jpg"
                            onClick={likeHandler}
                            alt="like_image"
                            width={40}
                            height={40}
                        />
                        <span className='text-[15px]'>{like} people likes</span>
                    </div>

                    <div>
                        <span>{post.comment} comments</span>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
}