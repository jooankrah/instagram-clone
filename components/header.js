import Image from 'next/image'
import React from 'react'
import { HomeIcon, MenuIcon, SearchIcon } from '@heroicons/react/solid'
import { HeartIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon } from '@heroicons/react/outline'
export default function Header() {
    return (
        <div className='shadow-sm bg-white border-b sticky top-0 z-50 pt-4 pb-4 md:pt-0 md:pb-0'>
            <div className='flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto'>
                {/**left */}
                <>
                    <div className='relative inline-grid w-24'>
                        <Image
                            src={'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'}
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                    {/* <div className='relative lg:hidden w-10 flex-shrink-0'>
                        <Image
                            src={'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'}
                            layout='fill'
                            objectFit='contain'
                        />
                    </div> */}
                </>
                {/**middle */}
                <div className='relative hidden md:inline-grid mt-1 p-2 rounded-sm '>
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                        <SearchIcon className='h-5 w-5 text-gray-500' />
                    </div>
                    <input
                        className='bg-gray-50 border-gray-300 block w-full pl-10 sm:text-sm focus:ring-black focus:border-black rounded-sm'
                        type={'text'}
                        placeholder='search' />
                </div>
                {/**right */}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon className='navIcons' />
                    <MenuIcon className='h-6 md:hidden' />
                    <div className='inline-flex relative cursor-pointer'>
                        <PaperAirplaneIcon className='navIcons rotate-45' />
                        <div className='absolute -top-2 -right-1 text-xs animate-pulse bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white'>3</div>
                    </div>
                    <PlusCircleIcon className='navIcons' />
                    <UserGroupIcon className='navIcons' />
                    <HeartIcon className='navIcons' />
                    <div className='relative w-7 h-7 cursor-pointer hover:scale-125 transition-all duration-150 ease-out'>
                        <Image
                            className='rounded-full'
                            src={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'}
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
