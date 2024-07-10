import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../pages';

const RootLayout = () => {
    return (
        <div className='flex w-full'>
            <div className='w-[15%]'>
                <Header />
            </div>
            <div className='w-[70%] mx-auto h-[200vh]'>
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout