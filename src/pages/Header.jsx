import React from 'react';
import ProfileImg from '../assets/IMG_PROFILE.jpg'

const Header = () => {
    return (
        <div className='header' data-aos='fade-up'>
            <div className='w-[80%] h-full mx-auto pt-[50px]'>
                <img src={ProfileImg} alt='profilePic' className='rounded-full hover:scale-[1.05] hover:cursor-pointer transition-all ease-linear duration-300 hover:shadow-md hover:shadow-[#000]' />
                <h1 className='uppercase text-center mt-5 font-[600] text-[white] '>Marvelous Udugbesi</h1>
                <p className='text-[#ffffff] text-center'>Full Stack Developer</p>
                <ul className='ul'>
                    <a href='#home' className='nav-item'>Home</a>
                    <a href='#about' className='nav-item'>About</a>
                    <a href='#skills' className='nav-item'>Skills</a>
                    <a href='#experience' className='nav-item'>Experience</a>
                    <a href='#projects' className='nav-item'>Projects</a>
                    <a href='#contact' className='nav-item'>Contact</a>
                </ul>
            </div>
        </div>
    )
}

export default Header