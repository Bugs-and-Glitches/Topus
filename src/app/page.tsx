
import { Button } from "@/components/ui/button"
import Link from "next/link"
import NavigationMenuDemo from "./components/navmenu"

export default function Home() {
  return (
   <>
   <div className="flex justify-center items-center">

<div className="border-2 w-screen flex justify-between items-center">

<div className="m-5 flex">
  <div className="text-2xl font-bold mr-5">Topus</div>
  <NavigationMenuDemo/>
</div>
<div className="p-5">
 <Link href='/contact/' className="m-1"><Button variant='link' className="text-zinc-500" >Contact </Button></Link>
 <Link href='/signin/' className="m-1"><Button  variant='outline'>Sign In </Button></Link>
 <Link href='/signup/' className="m-1"><Button variant='default'>Sign Up </Button></Link>
</div>

</div>

   </div>
   </>
  )
}
