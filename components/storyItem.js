import Image from 'next/image'
import React from 'react'

export default function StoryItem(props) {
    return (
        <div className='flex flex-col justify-center items-center mb-2'>
            <div className='relative w-16 h-16 '>
                <img
                    className='p-[1px] border-2 rounded-full border-pink-500'
                    src={props.image}
                />
            </div>
            <p className='text-sm w-12 truncate'>{props.name}</p>
        </div>
    )
}
