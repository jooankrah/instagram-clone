import React from 'react';
import { getProviders, signIn } from "next-auth/react"
import { FcGoogle } from 'react-icons/fc'


export default function Login({ providers }) {
    const { google } = { ...providers }
    return (

        <div className='grid h-screen place-content-center mx-auto md:grid-cols-2  md:max-w-3xl lg:max-w-4xl'>
            <div className='hidden md:inline-grid col-span-1'>
                <img
                    src='/Insta-Background.png'
                />
            </div>
            <div className='col-span-1 pt-6 max-w-[22rem]'>
                <div className='pt-4 px-4 pb-2 flex flex-col justify-center items-center border-[1px] border-gray-300'>
                    <img
                        className='mt-8'
                        src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'
                    />
                    <form className='p-5 w-full space-y-2'>
                        <input
                            className='p-2 w-full bg-gray-50 border border-gray-400 ring-0 text-xs focus:ring-0 focus:outline-none '
                            placeholder='Phone Number, usersname or email address'
                        />
                        <input
                            className='!mb-3 p-2 w-full bg-gray-50 border border-gray-400 ring-0 text-xs focus:ring-0 focus:outline-none '
                            type='password'
                            placeholder='Password'
                        />
                        <button
                            className='bg-blue-400 w-full p-1 rounded-lg text-white text-base font-medium'
                        >
                            Log In
                        </button>
                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-gray-400">OR</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div className='space-y-4'>
                            <p className='flex justify-center items-center space-x-2 cursor-pointer' onClick={() => signIn(google?.id, { callbackUrl: '/' })}>
                                <FcGoogle size={'20px'} />
                                <span className='text-blue-600 font-semibold'>Log In with Google</span>
                            </p>
                            <p className='text-xs text-blue-700 text-center'>
                                Forgotten your password?
                            </p>
                        </div>
                    </form>
                </div>
                <div className='mt-2 p-5 flex flex-col justify-center items-center border-2 border-gray-30'>
                    <p className='text-sm'>Don't have an account? <span className='text-blue-600 text-sm font-semibold cursor-pointer'>Sign Up</span></p>
                </div>
                <p className='mt-4 text-center'>Get the app.</p>
                <div className='flex justify-center items-center mt-3 space-x-2'>
                    <img
                        src='/get-appstore.png'
                        width={'120px'}
                    />
                    <img
                        src='/get-playstore.png'
                        width={'120px'}
                    />
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    console.log('providers:', providers)
    return {
        props: { providers },
    }
}