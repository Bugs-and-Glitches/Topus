'use client';

import { useParams, usePathname } from 'next/navigation'
import dynamic from 'next/dynamic';



const Tasks = ()=>{
  const router =  usePathname();
  


  return(

  
<h1>hello {router}</h1>
  );

}

export default dynamic(()=> Promise.resolve(Tasks), , { ssr: true })

