import React from 'react'
import { FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    return (
        <div className='mt-[120px] pb-[60px] font-Lato'>
            <p className='title'>Get in Touch</p>
            <p className='text-sm md:text-[18px] lg:w-[80%]'>Impressed with my work & skills? Want to work with me? You can reach out to me through the social media handles below or you can simply give me a call <FaPhone className='inline' /></p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-[40px] max-sm:w-[80%] mx-auto'>
                <div className='border-b-[#ea73737d] box md:flex-row h-[100px] justify-between items-center p-4' >
                    <MdEmail className='size-7 text-[#ea7373e7] hover:scale-[1.2] hover:cursor-pointer' />
                    <a href='mailto:udugbesimarves@gmail.com'>Udugbesimarves@gmail.com</a>
                </div>
                <div className='box border-b-[#5294b37d] md:flex-row h-[100px] justify-between items-center p-4' >
                    <FaGithub className='size-7 text-[#ea7373e7] hover:scale-[1.2] hover:cursor-pointer' />
                    <a href='mailto:udugbesimarves@gmail.com'>Udugbesimarves@gmail.com</a>
                </div>
                <div className='border-b-[#ea73737d] box md:flex-row h-[100px] justify-between items-center p-4' >
                    <FaLinkedin className='size-7 text-[#ea7373e7] hover:scale-[1.2] hover:cursor-pointer' />
                    <a href='mailto:udugbesimarves@gmail.com'>Udugbesimarves@gmail.com</a>
                </div>
                <div className='box border-b-[#5294b37d] md:flex-row h-[100px] justify-between items-center p-4' >
                    <FaWhatsapp className='size-7 text-[#ea7373e7] hover:scale-[1.2] hover:cursor-pointer' />
                    <a href='mailto:udugbesimarves@gmail.com'>+2348068616270</a>
                </div>
            </div>
        </div>
    )
}

export default Contact