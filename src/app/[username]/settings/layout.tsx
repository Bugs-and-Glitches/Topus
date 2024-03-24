'use client'
import next from "next";
 
import dynamic from 'next/dynamic'

 function SettingsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
   
    return (
      <>
      {children}
    
   
      </>
    )
  }

  export default dynamic(()=> Promise.resolve(SettingsLayout));