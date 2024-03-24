'use client';

import { useParams, } from 'next/navigation'
import dynamic from 'next/dynamic';



const Records = ()=>{
  const router =  useParams<{ username: string; }>();
  


  return(

  
<h1>hello {router.username}</h1>
  );

}

export default dynamic(()=> Promise.resolve(Records))

