import React from 'react'
import Posts from './posts'
import Stories from './stories'

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
                {/**suggestions */}
            </section>
        </main>
    )
}
