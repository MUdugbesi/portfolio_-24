import React from 'react';
import { SlGlobe } from "react-icons/sl";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2";

const About = () => {
    return (
        <>
            <div className='flex flex-col h-[auto] justify-between font-Lato pt-[50px] mb-[20px] w-full' id='about' data-aos='zoom-in'>
                <div>
                    <p className='font-[900] tracking-widest text-[#ffffffc8] uppercase text-[14px] mb-[50px]'>About Me</p>
                </div>
                <p className='tracking-wider mb-[30px]'>I'm Marvelous Udugbesi, a dedicated and passionate Full Stack Software Engineer and IT enthusiast with passion for crafting intuitive and visually appealing user interfaces and functionalities. With over three years of personal learning experience, I specialize in building efficient web applications using React.js and Next.js.</p>

                <p className='tracking-wider mb-[30px] ' data-aos='zoom-in' data-aos-delay='200'>
                    Currently, I work as an HNG Intern, where I develop sophisticated Web User Interfaces for the organisation and create in-house software to streamline operations and boost productivity working hands in hands with other professionals. I also mentor new developers, contributing to their growth and development.
                </p>

                <p className='tracking-wider' data-aos='zoom-in' data-aos-delay='400'>
                    Previously, I developed and managed a comprehensive web application that allows user to create, view and edit campgrounds around the world. This role deepened my expertise in both front-end and back-end technologies.
                </p>


            </div>

            <div className='about_grid' data-aos='fade-left' >

                <div className='border-b-[#ea73737d] box' >
                    <SlGlobe className='size-14 text-[#ea7373e7] hover:scale-[1.2] hover:cursor-pointer' />
                    <p>Full Stack Developement</p>
                </div>

                <div className='box border-b-[#5294b37d]'>
                    <AiFillThunderbolt className='size-14 text-[#5fb0d6]' />
                    <p>Performance Optimization</p>
                </div>
                <div className='border-b-[#ea73737d] box'>
                    <HiUserGroup className='size-14 text-[#ea7373ec]' />
                    <p>Mentor & Team Player</p>
                </div>

            </div>
        </>
    )
}

export default About