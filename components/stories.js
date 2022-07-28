import { useSession } from 'next-auth/react'
import React from 'react'
import StoryItem from './storyItem'

export default function Stories() {
    const { data: session } = useSession()
    return (
        <div className='flex flex-row items-start space-x-3 p-5 overflow-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-hide'>
            {session && <StoryItem image={session.user.image} name={session.user.name} />}
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my namesdggadgehterhr' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            {/* <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' />
            <StoryItem image={'https://pbs.twimg.com/profile_images/1296568929209458689/xLXGAOC1_400x400.jpg'} name='my name' /> */}
        </div>
    )
}
