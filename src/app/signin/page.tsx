
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { EnvelopeClosedIcon, ExternalLinkIcon, IconJarLogoIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons"
import { clsx } from 'clsx';
import Link from "next/link"

export default function Home() {
  return (
   <>
   <div className="flex h-screen justify-center items-center">
   <div className="flex flex-col  justify-center items-start">
   <div className="md:p-5">
   <div className="mb-5 text-black dark:text-white font-black text-4xl">
   Sign In to 23bg

   </div>
   <div >

    <Input type="email" placeholder="Email" size={20} className="bg-zinc-100 dark:bg-zinc-800"/>
    
    <div className="mt-3 ">
    <Link href='/verify/'><Button className="w-full" type="submit"><EnvelopeClosedIcon className="mr-3"/>Continue with Email</Button></Link>
    </div>
    <Separator className="my-4" />
    <div className="mt-3 ">
    <Button className="w-full" type="submit" variant='outline'><LockClosedIcon className="mr-3"/>Continue with SAML SSO</Button>
    </div>
    <div className="mt-3 ">
    <Button className="w-full" type="submit" variant='outline'><PersonIcon className="mr-3"/>Sign In with PassKey</Button>
    </div>
    
   </div>
   
   </div>
   <div className="w-screen bg-zinc-100  dark:bg-zinc-950 fixed bottom-0 left-0 border-t-2 broder-rose-800">
    <div className="flex justify-center items-center p-5">Don&apos;t have an account?<Link href="/signup/"><Button variant='link' className="p-1 font-semibold">Sign Up</Button></Link>
    </div>

   </div>
   </div>
   
   </div>
   
   </>
  )
}
