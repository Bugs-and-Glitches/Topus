'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BellIcon, DashboardIcon, DashIcon, DiscordLogoIcon, GearIcon, GitHubLogoIcon, HamburgerMenuIcon, HomeIcon, LinkedInLogoIcon, MagicWandIcon, MagnifyingGlassIcon, MixIcon, RocketIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import { NavigationMenuIndicator, NavigationMenuViewport } from "@radix-ui/react-navigation-menu";
import Link from "next/link";


import React, { useEffect } from "react";
import { ModeToggle } from "../components/theme";

interface DashBoardLayoutProps {
    children: React.ReactNode
}


const DashBoardLayout: React.FC<DashBoardLayoutProps> = (props) => {



    return (
        <div>
            <div className="flex-col py-5 border-b-2">

                <div className=" flex px-5 items-center justify-between ">
                    <div className='flex justify-center items-center text-center'>
                        <Avatar className="md:w-10 md:h-10 mr-2 ">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>

                        </Avatar>
                        <div className='flex flex-col items-start'>
                            <p className="text-sm">iamprathameshmore </p>
                            <p className="text-[10px] text-zinc-400">Amravati </p>
                        </div>

                    </div>

                    <ScrollArea className="overflow-y-scroll no-scrollbar shadow-inner invisible md:visible " scrollHideDelay={1}>

                        <div className="flex justify-start items-center px-5 ">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem >
                                        <Link href="/docs/overview/" legacyBehavior passHref>

                                            <NavigationMenuLink className={navigationMenuTriggerStyle()} active>
                                                Overview
                                            </NavigationMenuLink>


                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link href="/docs/workflows/" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Workflows
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link href="/docs/activity/" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Activity
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                   
                                    <NavigationMenuItem>
                                        <Link href="/docs/settings" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Settings
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuIndicator />

                                </NavigationMenuList>

                            </NavigationMenu>
                            <ScrollBar orientation="horizontal" />
                        </div>
                    </ScrollArea>

                    <div className='flex'>
                        <Link href='/docs/'> <Button size='icon' variant='outline'><MagnifyingGlassIcon /></Button></Link>
                        <div className='m-1' />
                        <Link href='/docs/'> <Button size='icon' variant='outline'><BellIcon /></Button></Link>
                        <div className='m-1' />
                        <Sheet >
                   <SheetTrigger className="md:invisible visible">
                            <div className='md:invisible visible md:w-0 md:h-0 border p-2 md:p-0  rounded'>
                                <HamburgerMenuIcon className='w-4 h-4'/>
                            </div>
                            </SheetTrigger>
                            
                            <SheetContent className="flex-col flex justify-between ">
                                <SheetHeader className="text-start">
                                    <SheetTitle>Topus</SheetTitle>
                                    <SheetDescription>
                                        Make changes to your profile here. Click save when you&apos;re done.
                                    </SheetDescription>
                                    <div>
                                        <Link href='/iam/overview/'><Button variant='outline' className="w-full flex justify-start">Overview</Button></Link>
                                        <div className='m-1' />
                                        <Link href='/iam/workflows/'><Button variant='outline' className="w-full flex justify-start">WorkFflows</Button></Link>
                                        <div className='m-1' />
                                        <Link href='/iam/activity/'><Button  variant='outline' className="w-full flex justify-start">Activity</Button></Link>
                                        <div className='m-1' />
                                        <Link href='/iam/settings/'><Button variant='outline' className="w-full flex justify-start">Settings</Button></Link>
                                        
                                        
                                    </div>
                                </SheetHeader>
                                
                                <SheetFooter >
                                    <div className="flex justify-between">

                                        <div className="flex">
                                            <Button variant='ghost' size='icon'><GitHubLogoIcon className="w-5 h-5"/></Button>
                                            <div className='m-1' />
                                            <Button variant='ghost' size='icon'><LinkedInLogoIcon className="w-5 h-5"/></Button>
                                            <div className='m-1' />
                                            <Button variant='ghost' size='icon'><DiscordLogoIcon className="w-5 h-5"/></Button>
                                        </div>
                                        <div>
                                           <ModeToggle/>
                                        </div>
                                    </div>
                                    
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
            {/* <div>{props.children}</div> */}
            <div >{props.children}</div>
            <div>
            <div className="border-t-2"><div className="w-full p-5">
          <div className='flex justify-between items-center mb-3'>
           <div className="flex text-center  items-center text-sm "> <RocketIcon className='w-5 h-5'/><p className="text-zinc-500">&nbsp; ©&nbsp;2024 </p> </div>

            <p className="text-blue-600 font-semibold mr-3 sm:mr-5">Just make it Easy &bull;</p>
          </div>
                  <div className="p-2">
                  Built by shadcn. The source code is available on GitHub.



                  </div>

        </div></div>
            </div>
        </div>
    );
};

export default DashBoardLayout;