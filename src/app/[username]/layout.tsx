'use client'
import next from "next";
 
import dynamic from 'next/dynamic'
import { Theme_Button } from "../components/Theme_Button";
import { Button } from "@/components/ui/button";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useParams } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
  } from "@/components/ui/context-menu"
  import * as React from "react"
import {
  CalendarIcon,
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  IconJarLogoIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
 
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
 
  
 function UserLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const router =  useParams<{ username: string; }>();
    const [open, setOpen] = React.useState(false)
 
    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open) => !open)
        }
      }
   
      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])
    return (
      <>
       <ContextMenu>
        <ContextMenuTrigger className="flex h-screen w-screen items-center justify-center ">
        <><div className="w-screen h-screen" >
    <ResizablePanelGroup
      direction="vertical"
      className=""
    >
      <ResizablePanel  maxSize={8} minSize={8}>
        <div className="flex items-center justify-center mt-2 sm:mt-0 ">
            <div className="fixed left-0 flex text-center ">
            <Avatar className="ml-5">
      <AvatarImage src="https://avatars.githubusercontent.com/u/91453437?v=4" alt="@shadcn" sizes="small"/>
      <AvatarFallback>Pm</AvatarFallback>
    </Avatar>
               <div className="pt-2 sm:pl-2 invisible sm:visible"> {router.username}</div>
               
            </div>
           <div className="p-2  invisible lg:visible">
           <Link href={`/${router.username}/actions`}><Button variant='link'>Actions</Button></Link> 
           <Link href={`/${router.username}/tasks`}><Button variant='link'>Tasks</Button></Link> 
           <Link href={`/${router.username}/records`}><Button variant='link'>Records</Button></Link> 
           <Link href={`/${router.username}/settings`}><Button variant='link'>Settings</Button></Link> 
           <Link href={`/${router.username}/help`}><Button variant='link'>Help</Button></Link> 
           {/* <Button variant='link'><a href="/tasks">Tasks</a></Button>  
           <Button variant='link'><a href="records">Records</a></Button>  
           <Button variant='link'><a href="settings">Settings</a></Button>  
           <Button variant='link'><a href="help">Help</a></Button>   */}
           </div>
          <div className="fixed right-5 flex">
          
          <Button variant='outline' size='default' className="mr-2 flex items-start justify-start invisible sm:visible"  >Search... <MagnifyingGlassIcon  className="ml-5 h-5 w-5"/></Button>
          {/* <Button variant='ghost' size='icon' className="mr-2"  ><MagnifyingGlassIcon  className="h-5 w-5"/></Button> */}
          <Button variant='ghost' size='icon' className="mr-2"  ><GitHubLogoIcon className="h-5 w-5"/></Button>
          <Button variant='ghost' size='icon' className="mr-2"  ><DiscordLogoIcon className="h-5 w-5"/></Button>
            <Theme_Button/>
          <div className='sm:hidden'>
          <Button variant='ghost' size='icon'><HamburgerMenuIcon className=" h-5  w-5"/></Button>
          </div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle disabled/>
      <ResizablePanel >
       <div className="p-1"> {children}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
    
    
      
    </div>
     
      <CommandDialog open={open} onOpenChange={setOpen} >
        <CommandInput placeholder="Type a command or search..." />
        
        <CommandList className='h-full no-scrollbar'>
       
         <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions"  >
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FaceIcon className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings" >
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
       
       
        </CommandList>
      </CommandDialog>
    </>
        
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem inset>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>
            Show Bookmarks Bar
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel inset>People</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
   
    
   
      </>
    )
  }

  export default dynamic(()=> Promise.resolve(UserLayout));