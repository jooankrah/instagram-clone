import { useSession, signOut } from 'next-auth/react'
import React from 'react'

export default function MiniProfile() {
    const { data: session } = useSession()
    return (
        <div>
            <div className='flex items-center'>
                <div className='flex items-center flex-1'>
                    <div className='relative w-16 h-16 p-1 mr-3 cursor-pointer'>
                        <img
                            className='rounded-full'
                            src={session.user.image}
                        />
                    </div>
                    <div>
                        <p className='text-sm font-bold cursor-pointer'>theJooankrah</p>
                        <p className='text-sm text-gray-500 cursor-pointer'>{session.user.name}</p>
                    </div>
                </div>
                <div>
                    <button className='text-xs text-blue-400 font-medium' onClick={() => signOut()}>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    )
}
