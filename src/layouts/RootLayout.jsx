import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../pages';

const RootLayout = () => {
    return (
        <div className='flex w-full relative overflow-hidden'>
            <div className='md:w-[25%] lg:w-[15%] max-sm:absolute max-sm:z-10'>
                <Header />
            </div>
            <div className='w-[90%] md:w-[70%] mx-auto h-[auto]'>
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout