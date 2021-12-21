import React from 'react'
import Stories from './stories'

export default function Feed() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
            <section className='col-span-2 bg-white mt-5'>
                {/**stories */}
                <Stories />
            </section>
            <section>
                {/** posts*/}
            </section>
            <section>
                {/**suggestions */}
            </section>
        </main>
    )
}
