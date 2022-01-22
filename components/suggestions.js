import React from 'react'
import UserCardSM from './user/userCardSM'

export default function Suggestions() {
    return (
        <div>
            <div className='flex items-center'>
                <h4 className='flex-1 text-base text-gray-400 font-bold'>Suggestions for you</h4>
                <button className='text-sm font-medium'>See All</button>
            </div>
            <div>
                <UserCardSM />
                <UserCardSM />
                <UserCardSM />
                <UserCardSM />
                <UserCardSM />
            </div>
        </div>
    )
}
