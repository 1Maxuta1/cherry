"use client"
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { CiShoppingBasket } from "react-icons/ci";

const Basket = () => {
  return (
   <Sheet>
    <SheetTrigger className="group -m-2 flex items-center p-2"><CiShoppingBasket aria-hidden="true" className="h-8 w-8 flex-shrink-0 text-gray-400 group-hover:text-gray-500"/>
    <span className='ml-2 text-sm font-medium text-gray-600 group-hover:text-gray-800'>
      0
    </span>
    </SheetTrigger>
    <SheetContent className='flex flex-col w-full pr-0 sm:max-w-lg'></SheetContent>
    <SheetHeader className='space-y-2.5 pr-6'>
      <SheetTitle>Basket (0)</SheetTitle>
    </SheetHeader>
   </Sheet>
  )
}

export default Basket