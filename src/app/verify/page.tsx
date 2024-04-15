
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Home() {
  return (
   <>
   <head>
    <title>Email Verification</title>
   </head>
   <body>
   <div className="flex h-screen justify-center items-center">
   <div className="flex flex-col h-screen justify-center items-start">
   <div className="p-5 ">
   <div className="md:mb-5  text-black font-black text-4xl w-full flex justify-center items-center">
   Email Verification

   </div>
   <div >

   <div className="md:flex justify-center items-center p-5 text-center">
   Keep this window open and in a new tab open the link we just sent to  <Button variant='link' className="p-1 font-semibold">asdfb​@gamil​.com </Button>(undo) with security code:
    </div>
    <div className="mt-3 w-full flex justify-center items-center ">
    <Link href="/username/"><Button className="" type="submit" variant='outline' >Random</Button></Link>
    </div>
    
   </div>
   
   </div>
   
   </div>
   
   </div>
   </body>
   
   </>
  )
}
