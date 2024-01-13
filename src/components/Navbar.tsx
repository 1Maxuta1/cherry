import React from 'react'
import MaxWidthWrapper from './MaxWidth'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'
import Basket from './Basket'

const Navbar = () => {
  const user = null
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-12'>
    <header className='relative bg-rose-300'>
    <MaxWidthWrapper>
        <div className='border-b border-gray-300'>
            <div className='flex h-16 items-center'>
{/* TODO: Mobile navigation */}
            <div className='ml-4 flex lg:ml-0'>
                <Link href='/'>
                 <Image src="/cherry-logo.jpg" alt="logo" width={60} height={60}></Image>
                </Link>
            </div>
            <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
              <NavItems/>
            </div>
            <div className='ml-auto flex items-center'>
              <div className='lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
               {user ? null : (<Link href='/signin' className={buttonVariants({})}>Sign in</Link>)}
               {user ? null : <span className='h-6 w-px bg-gray-200' aria-hidden="true"/>}
               {user ? <p></p> : <Link href="signup" className={buttonVariants({})}>Create an account</Link>}
               {user ? <span className='h-6 w-px bg-gray-200' aria-hidden="true"/> : null}
               <div className='ml-4 flow-root lg:ml-6'>
                <Basket/>
               </div>
              </div>
            </div>
            </div>
        </div>
    </MaxWidthWrapper>
    </header>
    </div>
  )
}

export default Navbar