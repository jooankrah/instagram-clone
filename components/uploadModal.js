import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdOutlinePermMedia } from 'react-icons/md'

export default function UploadModal() {
    const [open, setOpen] = useState(true)

    const imgInputRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto " onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-70 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle sm:max-w-sm sm:w-full h-96">
                            <div className="bg-white px-4 pt-2 pb-1">
                                <div className="text-center sm:mt-0 sm:ml-4">
                                    <Dialog.Title as="h3" className="text-md text-center leading-6 font-medium text-gray-900">
                                        Create new post
                                    </Dialog.Title>
                                </div>
                            </div>
                            <hr />
                            <div className='relative top-10'>
                                <div className='flex flex-col items-center justify-center space-y-5 align-middle'>
                                    <MdOutlinePermMedia className='h-10 w-10 text-gray-600' />
                                    <p className='text-lg'>Drag photos and videos here</p>
                                    <input type={'file'} hidden ref={imgInputRef} />
                                    <button
                                        className='py-1 px-2 bg-blue-500 rounded-sm text-white border-none ring-0 outline-non hover:scale-105 transition-all ease-in-out duration-200'
                                        onClick={() => imgInputRef.current.click()}
                                    >Select From Computer</button>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
