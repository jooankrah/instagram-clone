import React from 'react';
import { Popover, Transition } from '@headlessui/react'

function SearchPopover({ children }) {

    return (
        <div className="z-10 w-screen max-w-md px-4 transform -translate-x-1/2 sm:px-0">
            {children}
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    <a
                        href=''
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                                name
                            </p>
                            <p className="text-sm text-gray-500">
                                description
                            </p>
                        </div>
                    </a>
                </div>
                <div className="p-4 bg-gray-50">
                    <a
                        href="##"
                        className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                        <span className="flex items-center">
                            <span className="text-sm font-medium text-gray-900">
                                Documentation
                            </span>
                        </span>
                        <span className="block text-sm text-gray-500">
                            Start integrating products and tools
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SearchPopover;
