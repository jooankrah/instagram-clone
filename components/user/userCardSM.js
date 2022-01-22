import React from 'react'

export default function UserCardSM() {
    return (
        <div className='pl-2 pt-2'>
            <div className='flex items-center'>
                <div className='flex items-center flex-1'>
                    <div className='relative w-12 h-12 p-1 mr-3 cursor-pointer'>
                        <img
                            className='rounded-full'
                            src={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'}
                        />
                    </div>
                    <div>
                        <p className='text-sm font-bold cursor-pointer'>theJooankrah</p>
                        <p className='text-sm text-gray-500 cursor-pointer'>Suggested for you</p>
                    </div>
                </div>
                <div>
                    <button className='text-xs text-blue-400 font-medium'>
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}
