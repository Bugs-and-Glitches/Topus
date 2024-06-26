
import { Button } from "@/components/ui/button"
import Link from "next/link"
import NavigationMenuDemo from "./components/navmenu"
import { GitHubLogoIcon, HamburgerMenuIcon, IconJarLogoIcon, MagnifyingGlassIcon, RocketIcon } from "@radix-ui/react-icons"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { CommandDialog } from "cmdk"
import { CommandDialogDemo } from "./components/search"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "./components/theme"


export default function Home() {
  return (
    <>
      <div className="w-screen overflow">

        <div className="invisible md:visible h-0 w-0 md:w-full md:h-full">
          <div className="flex justify-between items-center w-full p-5">
            <div className="flex items-center justify-center text-center">
              <div className="text-xl font-semibold flex justify-center items-center ">
                <RocketIcon className="h-5 w-5 mr-2" />Topus
              </div>
              <div className="flex items-center justify-center invisible md:visible h-0 w-0 md:w-full md:h-full">
                <div className="ml-1" />
                <Button variant='link'>Contact</Button>
                <div className="ml-1" />
                <Button variant='link'>Contact</Button>
                <div className="ml-1" />
                <Button variant='link'>Contact</Button>
                <div className="ml-1" />
                <Button variant='link'>Contact</Button>
                <div className="ml-1" />

              </div>


            </div>

            <div className="flex">
            <Link href='/contact/'><Button variant='link' size='sm'>contact</Button></Link>
              <div className="m-1" />
              <Link href='/signin/'><Button variant='outline' size='sm'>Sign In</Button></Link>
              <div className="m-1" />
              <Link href='/signup/'><Button variant='default' size='sm'>Sign Up</Button></Link>
            </div>
          </div>
        </div>




        <div className="p-5 lg:mx-32 md:mx-16">
        <ModeToggle/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint voluptatem maxime distinctio ipsum ad laborum, et praesentium inventore iusto blanditiis ipsa iste laudantium excepturi debitis, numquam laboriosam voluptatibus ullam accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nesciunt impedit officia enim sapiente ducimus autem sequi distinctio ullam facere cupiditate, molestiae sint eius dolorum. Tempora suscipit nesciunt id voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis ullam voluptatum quo eligendi. Eius illo corrupti enim, placeat eum beatae deserunt magni unde, dolores exercitationem accusantium veniam quidem laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorem minus repudiandae, a modi odit sapiente repellendus tempore ducimus laudantium, dignissimos porro, adipisci quia atque? Et sit ipsam consequatur consectetur.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint voluptatem maxime distinctio ipsum ad laborum, et praesentium inventore iusto blanditiis ipsa iste laudantium excepturi debitis, numquam laboriosam voluptatibus ullam accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nesciunt impedit officia enim sapiente ducimus autem sequi distinctio ullam facere cupiditate, molestiae sint eius dolorum. Tempora suscipit nesciunt id voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis ullam voluptatum quo eligendi. Eius illo corrupti enim, placeat eum beatae deserunt magni unde, dolores exercitationem accusantium veniam quidem laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorem minus repudiandae, a modi odit sapiente repellendus tempore ducimus laudantium, dignissimos porro, adipisci quia atque? Et sit ipsam consequatur consectetur.
        </div>
        
        <div className="border-t-2"><div className="w-full p-5">
          <div className='flex justify-between items-center mb-3'>
           <div className="flex text-center  items-center text-sm "> <RocketIcon className='w-5 h-5'/><p className="text-zinc-500">&nbsp; ©&nbsp;2024 </p> </div>

            <p className="text-blue-600 font-semibold mr-3 sm:mr-5">Just make it Easy &bull;</p>
          </div>
                  <div className="p-2">
                  Built by shadcn. The source code is available on GitHub.



                  </div>

        </div></div>
        <div className="mb-24" />







        <div className="fixed bottom-0 left-0 border-t-2 w-full justify-between items-center flex p-5 visible md:invisible bg-zinc-100 dark:bg-zinc-950 z-10  ">
          <div className=" text-xl font-semibold flex">
            <Button variant='link'  className="font-semibold"><RocketIcon className="h-5 w-5 mr-2" />Topus</Button>




          </div>
          <div className="pr-3 flex items-center">
            
          <Sheet >
  <SheetTrigger><div className="rounded-full bg-white dark:bg-black border-2 p-2"><MagnifyingGlassIcon className="w-5 h-5"/></div></SheetTrigger>
  <SheetContent className="w-full " side='top'>
    <SheetHeader>
    <p className="left-0 flex w-full font-semibold items-center"><MagnifyingGlassIcon className="w-5 h-5 mr-2"/>Serach</p>
    <p className="text-left text-sm">Make changes to your profile here. Click save when you&apos;re done.</p>
    <div><Input type="name" placeholder='Search...' /></div>
    </SheetHeader>
    
  </SheetContent>
</Sheet>

            <div className="m-1" />


            <Drawer>
              <DrawerTrigger>Menu</DrawerTrigger>
              <DrawerContent>
                <DrawerHeader >
                  <Link href='/signin/'> <Button variant='outline' className="w-full">Sign In</Button></Link>
                  <Link href='/signup/'> <Button className="w-full">Sign Up</Button></Link>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Blog&apos;s</AccordionTrigger>
                      <AccordionContent className="left-0">
                        <div className="flex-col flex justify-center items-start">

                          <div className="ml-0 flex ">
                            <Link href='/blogs/23bg/'><Button variant='link' className="text-zinc-400">23bg</Button></Link>
                          </div>
                          <div className="ml-0 flex ">
                            <Link href='/blogs/r&d/'><Button variant='link' className="text-zinc-400">Reserch and Devlopment</Button></Link>
                          </div>
                          


                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Solution&apos;s</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex-col flex justify-center items-start">

                          <div className="ml-0 flex ">
                          <Link href='/solutions/automation/'><Button variant='link' className="text-zinc-400">Automations</Button></Link>
                          </div>
                          <div className="ml-0 flex ">
                          <Link href='/solutions/intregrations/'><Button variant='link' className="text-zinc-400">Intregrations</Button></Link>
                          </div>


                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                    <div className="py-2 ml-1 flex justify-between"><Button variant='link' size='icon' className="text-sm">Theme</Button>
                    <ModeToggle /></div>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <div className="py-2 ml-1 flex">
                        <Link href='/pricing/'><Button variant='link' size='icon' className="text-sm">Pricing</Button></Link>
                        </div>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <div className="py-2 ml-2 flex"><Link href='/contact/'><Button variant='link' size='icon' className="text-sm">Contact</Button></Link></div>
                    </AccordionItem>
                  </Accordion>

                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <div className="flex justify-between items-center">
                      <div className=" text-xl font-semibold flex">
                        <Button variant='link' size="sm" className="font-semibold"><RocketIcon className="h-5 w-5 mr-2" />Topus</Button>




                      </div>
                      <Button variant="link">Cancel</Button>
                    </div>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

          </div>

        </div>

      </div>


    </>
  )
}
