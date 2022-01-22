import React from 'react'
import MiniProfile from './miniProfile'
import Posts from './posts'
import Stories from './stories'
import Suggestions from './suggestions'

export default function Feed() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-4xl mx-auto'>
            <section className='col-span-2 mt-10'>
                <div className='bg-white'>
                    {/**stories */}
                    <Stories />
                </div>
                <div className='mt-5'>
                    {/** posts*/}
                    <Posts />
                </div>
            </section>
            <section className='hidden md:inline-block col-span-1 pl-5 mt-5'>
                <div className='sticky top-[7.5rem] space-y-5'>
                    {/**Mini Profile */}
                    <MiniProfile />
                    {/**suggestions */}
                    <Suggestions />
                </div>
            </section>
        </main>
    )
}
