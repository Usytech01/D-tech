import React from 'react';
import Share from './component/Share'
import {Posts} from "../dummyData"
import Post from "./component/Post"

export default function Feed() {
  return (
    <div className='md:[75vw] lg:w-]35vw] px-5 py-6'>
      <Share/>
      {Posts.map(p => (
        <Post key={p.id} post={p}/>
      ))}
    </div>
  );
}
