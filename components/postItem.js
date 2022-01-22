import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon, SearchIcon } from '@heroicons/react/outline'
import React from 'react'

export default function PostItem(props) {
    return (
        <div className='bg-white my-6 border rounded-sm'>
            {/**head */}
            <div className='flex items-center p-5 '>
                <div className='relative w-10 h-10 p-1 mr-3 cursor-pointer'>
                    <img
                        className='p-[1px] border-2 rounded-full border-pink-500'
                        src={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'}
                    />
                </div>
                <div className='flex-1'>
                    <p className='text-sm font-bold cursor-pointer'>theJooankrah</p>
                    {true ? <p className='text-sm cursor-pointer'>Accra</p> : ''}
                </div>
                <DotsHorizontalIcon className='h-5' />
            </div>
            {/**body */}
            <div>
                <img
                    src='https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'
                    className='object-cover w-full'
                />
            </div>
            {/**buttons */}
            <div className='flex p-5 items-center'>
                <div className='space-x-4 flex-1'>
                    <HeartIcon className='postActionIcons' />
                    <ChatIcon className='postActionIcons' />
                    <PaperAirplaneIcon className='postActionIcons rotate-45' />
                </div>
                <BookmarkIcon className='postActionIcons' />
            </div>
            {/**caption */}
            <div className='p-5 -mt-5'>
                <p>{props.likes ? <span>100 likes</span> : 'Be the first to like this'}</p>
                <p className='w-1/4 truncate flex-1 space-x-1'>
                    <span className='font-bold text-sm'>theJooankrah</span>
                    <span className='text-sm'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </span>
                </p>
                <div className='flex space-x-2 w-4/5'>
                    <a className='text-blue-500' href='#'>#createtoshare</a>
                    <a className='text-blue-500' href='#'>#arsenal</a>
                    <a className='text-blue-500' href='#'>#AIFA </a>
                    <a className='text-blue-500' href='#'>#ghdev </a>
                </div>
            </div>
            {/**comments */}
            <div className='p-5 -mt-8'>
                {true && <a className='text-sm text-gray-500' href='#'>View all 215 comments </a>}
            </div>
            <div className='flex items-center p-5 -mt-10'>
                <p className='w-1/4 truncate flex-1 space-x-1'>
                    <span className='font-bold text-sm'>yaw_ashanti</span>
                    <span className='text-sm'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </span>
                </p>
                <HeartIcon className='h-4' />
            </div>
            <div className='flex items-center p-5 -mt-10'>
                <p className='w-1/4 truncate flex-1 space-x-1'>
                    <span className='font-bold text-sm'>arsenal </span>
                    <span className='text-sm'>
                        good job
                    </span>
                </p>
                <HeartIcon className='h-4' />
            </div>
            <div className='p-5 -mt-10'>
                <a className='uppercase text-[9px] text-gray-500 font-Montserrat' href='#'>17 HOURS AGO</a>
            </div>
            <hr />
            <div className='flex flex-row space-x-1 p-5 -mt-2 -mb-2'>
                <div className='inset-y-0 flex items-center pointer-events-none'>
                    <EmojiHappyIcon className='h-7 w-7 text-gray-700' />
                </div>
                <input
                    className='flex-1 bg-transparent sm:text-sm outline-none border-none focus:outline-none focus:ring-0'
                    type={'text'}
                    placeholder='Add a comment...'
                />
                <button className='font-normal text-blue-400'>Post</button>
            </div>
        </div>
    )
}
