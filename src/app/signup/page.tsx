
import { Button } from "@/components/ui/button"


import { Input } from "@/components/ui/input"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function Home() {
  return (
   <>
   <div className="flex h-screen justify-center items-center">
   <div className="flex flex-col h-screen justify-center items-start">
   <div className="p-5">
   <div className="mb-5 text-black font-black text-4xl">
   Create Your <br/>23bg Account

   </div>
   <div >
    <Input type="name" placeholder="Name" size={20} className="bg-zinc-100"/>
    <div className="m-2"/>
    <Input type="email" placeholder="Email" size={20} className="bg-zinc-100"/>
    
    <div className="mt-3">
    <Link href="/verify/"><Button type="submit">Sign Up</Button></Link>
    </div>


    <div className="mt-6 sm:flex text-zinc-500">
    By joining, you agree to our &nbsp; 
    <Link href="#" className="flex text-black font-semibold"><Button variant='link' className="p-0 sm:pb-3 pr-1" >Terms of Service<ExternalLinkIcon className="m-1"/></Button>
    </Link>
     and &nbsp; <Link href="#" className="flex text-black font-semibold"><Button variant='link' className="p-0 sm:pb-3 pr-1" >Privacy Policy<ExternalLinkIcon className="m-1"/></Button>
    </Link>
    </div>
   </div>
   
   </div>
   <div className="w-screen bg-zinc-100 fixed bottom-0 left-0 border-t-2 broder-rose-800">
    <div className="flex justify-center items-center p-5">
    Already have an account?<Link href="/signin/"><Button variant='link' className="p-1 font-semibold"> Sign In</Button></Link>
    </div>

   </div>
   </div>
   
   </div>
   
   </>
  )
}
