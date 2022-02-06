import Image from 'next/image'
import React, { useState } from 'react'
import { BadgeCheckIcon, HomeIcon, SearchIcon } from '@heroicons/react/solid'
import { HeartIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon, XIcon } from '@heroicons/react/outline'
import { useLayer, Arrow } from "react-laag";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Header() {
    const { data: session } = useSession()
    const router = useRouter()
    const [isOpen, setOpen] = useState(false);
    const { renderLayer, triggerProps, layerProps, arrowProps } =
        useLayer({
            isOpen,
            placement: "bottom-center",
            triggerOffset: 13,
            arrowOffset: 10,
            // onDisappear: (disappearType) => {
            //     if (disappearType === "full") {
            //         setOpen(false);
            //     }
            // },
            onOutsideClick: () => setOpen(false)
        });

    return (
        <div className='shadow-sm bg-white border-b sticky top-0 z-50 pt-4 pb-4 md:pt-0 md:pb-0'>
            <div className='flex justify-between bg-white max-w-4xl mx-5 xl:mx-auto'>
                {/**left */}
                <>
                    <div className='relative inline-grid w-20 md:w-24'>
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
                        placeholder='search'
                        autoComplete='false'
                        {...triggerProps}
                        onFocus={() => setOpen(!isOpen)}
                    />
                    {
                        isOpen &&
                        renderLayer(
                            <div className="z-50 w-screen max-w-md px-4" {...layerProps}>
                                <Arrow {...arrowProps} size={10} roundness={0} />
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="bg-white p-7 min-h-[20rem]">
                                        <a
                                            href=''
                                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className='w-full'>
                                                <div className='flex items-center'>
                                                    <div className='flex items-center flex-1'>
                                                        <div className='relative w-16 h-16 p-1 mr-3 cursor-pointer'>
                                                            <img
                                                                className='rounded-full'
                                                                src={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'}
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className='flex items-center text-sm font-bold cursor-pointer'>Jonathan Nsiah{" "}<BadgeCheckIcon className='h-4 text-blue-600 ml-2' /></p>
                                                            <p className='text-sm text-gray-500 cursor-pointer'>Jonathan Nsiah</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {/* <button className='text-xs text-blue-400 font-medium'>
                                                            Sign Out
                                                        </button> */}
                                                        <XIcon className='h-6 text-gray-600' />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {/**right */}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon className='navIcons' onClick={() => router.push('/')} />
                    <div className='inline-flex relative cursor-pointer'>
                        <PaperAirplaneIcon className='navIcons rotate-45' />
                        <div className='absolute -top-2 -right-1 text-xs animate-pulse bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white'>3</div>
                    </div>
                    <PlusCircleIcon className='navIcons' />
                    <UserGroupIcon className='navIcons' />
                    <HeartIcon className='navIcons' />
                    <div className='relative w-7 h-7 cursor-pointer hover:scale-125 transition-all duration-150 ease-out' onClick={() => signOut()}>
                        <img
                            className='rounded-full'
                            src={session.user.image}
                            alt={session.user.name}
                            layout='fill'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
