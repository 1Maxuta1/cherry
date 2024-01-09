import React from 'react'
import MaxWidthWrapper from './MaxWidth'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'

const Navbar = () => {
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
            </div>
        </div>
    </MaxWidthWrapper>
    </header>
    </div>
  )
}

export default Navbar