'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { BellIcon, DashboardIcon, DashIcon, GearIcon, HamburgerMenuIcon, HomeIcon, MagicWandIcon, MixIcon, RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import React from "react";

interface DashBoardLayoutProps {
    children: React.ReactNode
}


const DashBoardLayout : React.FC<DashBoardLayoutProps> =(props) =>{
    
    return(
        <div>
            <div className="flex-col pt-5 pb-2 border-b-2">
            <div className="flex w-full  justify-between items-center px-5">
                <div className="flex justify-center items-center">
                    <Button size='icon' variant='ghost' ><RocketIcon className="w-5 h-5"/></Button>
                    <div className="m-1"/>
                    <p className="text-2xl font-black">Topus</p>
                </div>
                <div className="md:mb-5">
                <div className="flex visible md:invisible md:w-0 md:h-0"> 
                <Button  variant='outline' size='icon'  className=" rounded-full visible md:invisible"><BellIcon/></Button>
                    <div className="m-1 visible md:invisible"/>
                <Button  variant='outline' size='icon'   className=" rounded-full visible md:invisible"><HamburgerMenuIcon/></Button>
                    


                </div>
                <div className='md:flex invisible h-0 w-0 md:visible md:h-full md:w-full'>
                <Button  variant='outline' >Feedback</Button>
                    <div className="md:m-1"/>
                <Button  variant='link' >Changelog</Button>
                    <div className="md:m-1"/>
                <Button  variant='link' >Help</Button>
                    <div className="md:m-1"/>
                <Button  variant='link' >Docs</Button>
                    <div className="md:m-1"/>
                <Button  variant='outline' size='icon' className="rounded-full" ><BellIcon/></Button>
                    <div className="md:m-1"/>
                    <Avatar className="md:w-9 md:h-9">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"   />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
                </div>
                
                </div>
                 </div>
                 
                <ScrollArea className="overflow-y-scroll no-scrollbar" scrollHideDelay={1}>
                    
                <div className="flex justify-start items-center px-5 pt-2 ">
                <Button variant='ghost' className=" font-semibold">Overview</Button>
                    <div className="m-1"/>
                    <Link href='/iam/intergrations'><Button variant='ghost' className=" font-semibold">Integrations</Button></Link>
                    <div className="m-1"/>
                    <Link href='/iam/activity/'><Button variant='ghost' className=" font-semibold">Activity</Button></Link>
                    <div className="m-1"/>
                    <Button variant='ghost' className=" font-semibold">Usage</Button>
                    <div className="m-1"/>
                    <Button variant='ghost' className=" font-semibold">Monitoring</Button>
                    <div className="m-1"/>
                    <Button variant='ghost' className=" font-semibold">AI Integrations</Button>
                    <div className="m-1"/>
                    <Button variant='ghost' className=" font-semibold">Settings</Button>
                    <div className="m-1"/>
                    <ScrollBar orientation="horizontal"/>
                 </div>
                </ScrollArea>
            </div>
            {/* <div>{props.children}</div> */}
            <div >{props.children}</div>
        </div>
    );
};

export default DashBoardLayout;