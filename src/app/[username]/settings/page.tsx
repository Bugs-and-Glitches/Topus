
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <>
    <div className="h-40 border-b-2 w-full flex justify-start items-center">
      <p className="text-2xl font-semibold p-5 px-24">Settings</p>
    </div>

    <div className="md:flex md:justify-between md:items-start p-5 dark:bg-black">
    <div className=' md:w-[20%] p-5'>
      <div>
        <Input type='name' placeholder="Serach..."/>
        <div className="mt-2" />
        <Button className='w-full flex justify-start' variant='ghost'>General</Button>
        <div className="mt-2" />
        <Button className='w-full flex justify-start' variant='ghost'>General</Button>
        <div className="mt-2" />
        <Button className='w-full flex justify-start' variant='ghost'>General</Button>
        <div className="mt-2" />
        <Button className='w-full flex justify-start' variant='ghost'>General</Button>
        <div className="mt-2" />
        <Button className='w-full flex justify-start' variant='ghost'>General</Button>
        <div className="mt-2" />
        <Button className='w-full flex justify-start' variant='ghost'>General</Button>
        
        </div>
      </div>
      <div className="invisible h-0 w-0 md:visible md:w-[80%] md:h-full p-5">
      <ScrollArea  className="h-auto w-auto mr-5">
      <div className='md:p-5 md:flex-col md:justify-start md:items-center md:w-full md:h-full'>
     <div className="rounded-sm border-2 p-5 mr-10">
     <p className="mb-2">Team Name</p>
     <p className="mb-2">This is your team&apos;s visible name within Vercel. For example, the name of your company or department.</p>
     <Input type="name"   />

     </div>
     <div className="rounded-sm border-2 p-5 mb-2">
     <p className="mb-2">Team Name</p>
     <p className="mb-2">This is your team&apos;s visible name within Vercel. For example, the name of your company or department.</p>
     <Input type="name" className="w-64"  />

     </div>
     <div className="rounded-sm border-2 p-5 mb-2">
     <p className="mb-2">Team Name</p>
     <p className="mb-2">This is your team&apos;s visible name within Vercel. For example, the name of your company or department.</p>
     <Input type="name" className="w-64"  maxLength={10}/>

     </div>
     <div className="rounded-sm border-2 p-5 mb-2">
     <p className="mb-2">Team Name</p>
     <p className="mb-2">This is your team&apos;s visible name within Vercel. For example, the name of your company or department.</p>
     <Input type="name" className="w-64"  maxLength={10}/>

     </div>
     <div className="rounded-sm border-2 p-5 mb-2">
     <p className="mb-2">Team Name</p>
     <p className="mb-2">This is your team&apos;s visible name within Vercel. For example, the name of your company or department.</p>
     <Input type="name" className="w-64"  maxLength={10}/>

     </div>
     <div className="rounded-sm border-2 p-5 mb-2">
     <p className="mb-2">Team Name</p>
     <p className="mb-2">This is your team&apos;s visible name within Vercel. For example, the name of your company or department.</p>
     <Input type="name" className="w-64"  maxLength={10}/>

     </div>
     <div className="rounded-sm border-2 p-5 mb-2">
     <p className="mb-2">Team Name</p>
     <p className="mb-2">This is your team&apos;s visible name within Vercel. For example, the name of your company or department.</p>
     <Input type="name" className="w-64"  maxLength={10}/>

     </div>
     <div className="rounded-sm border-2 p-5 mb-2">
     <p className="mb-2">Team Name</p>
     <p className="mb-2">This is your team&apos;s visible name within Vercel. For example, the name of your company or department.</p>
     <Input type="name" className="w-64"  maxLength={10}/>

     </div>
     
    </div>
    <ScrollBar />
      </ScrollArea>
      </div>

    </div>

    </>
  );
}
