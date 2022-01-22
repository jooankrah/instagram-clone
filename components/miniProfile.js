import React from 'react'

export default function MiniProfile() {
    return (
        <div>
            <div className='flex items-center'>
                <div className='flex items-center flex-1'>
                    <div className='relative w-16 h-16 p-1 mr-3 cursor-pointer'>
                        <img
                            className='rounded-full'
                            src={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'}
                        />
                    </div>
                    <div>
                        <p className='text-sm font-bold cursor-pointer'>theJooankrah</p>
                        <p className='text-sm text-gray-500 cursor-pointer'>Jonathan Nsiah</p>
                    </div>
                </div>
                <div>
                    <button className='text-xs text-blue-400 font-medium'>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    )
}
