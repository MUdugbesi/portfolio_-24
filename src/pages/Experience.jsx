import React from 'react'
import { MdOutlineWork } from 'react-icons/md';


const Experience = () => {
    return (
        <div className='mt-[120px] pb-[60px]' id='experience'>
            <p className='title' data-aos='fade-in'>
                Experience
            </p>
            <div className='relative h-auto after:content-[""] after:absolute after:top-0 after:h-full after:w-[2px] after:border-2 after:border-[white] font-IBM after:left-[-30px] ml-[30px] after:rounded-md'>
                <MdOutlineWork className='size-8 p-1 relative left-[-45px] top-[60px] text-[black] z-10 border-2 bg-[white] rounded-full' />
                <div className='experience' data-aos="fade-left" style={{ transition: '0.8s' }} >
                    <p className='text-sm text-[#ffffffb8] m-[20px_0px_5px]'>Udemy | January 2023 - September 2023
                    </p>
                    <p className='font-[900] text-[22px] uppercase m-[0px_0px_20px]'>Web Developer Bootcamp</p>
                    <p className='text-[] font-[500]'>Developed front-end user interfaces for complex web applications with HTML, CSS and JavaScript.
                        Utilized React frameworks to create interactive, responsive and user-friendly web designs.
                        Create a beautiful, responsive landing page for a startup.
                        Collaborated with web designers and back-end developer to ensure web application meets requirements
                        Implemented user authentication, API interaction including REST APIs.
                        Create single page applications with AJAX.
                        Recognise and prevent common security exploits like SQL-Injection & XSS.</p>
                </div>
                <MdOutlineWork className='size-8 p-1 relative left-[-45px] top-[60px] text-[black] z-10 border-2 bg-[white] rounded-full' />
                <div className='experience ' data-aos="fade-left" style={{ transition: '0.8s' }} data-aos-delay='300'>
                    <p className='text-sm text-[#ffffffb8] m-[20px_0px_5px]'>Codecademy | October 2023 - Present
                    </p>
                    <p className='font-[900] text-[22px] uppercase m-[0px_0px_20px]'>Front End Developer</p>
                    <p className='text-[] font-[500]'>Build a stylized and interactive website with HTML, CSS and JS.
                        Incorporating principles of web design, responsiveness, transitions, and animations.
                        Build interactive sites using JavaScript and host it on a remote GitHub repository.
                        Optimized webites for maximum speed and scalability, while also ensuring compatibility with various browsers and devices.
                        Implemented user authentication and API integration.
                        Developed and maintained resusabe code libraries, while keeping track of changes and their effects on existing functionality</p>
                </div>
                <MdOutlineWork className='size-8 p-1 relative left-[-45px] top-[60px] text-[black] z-10 border-2 bg-[white] rounded-full' />
                <div className='experience' data-aos="fade-left" style={{ transition: '0.8s' }} data-aos-delay='400'>
                    <p className='text-sm text-[#ffffffb8] m-[20px_0px_5px]'>HNG INTERNSHIP | October July 2024 - Present
                    </p>
                    <p className='font-[900] text-[22px] uppercase m-[0px_0px_20px]'>Front End Developer</p>
                    <p className='text-[] font-[500]'>Build a stylized and interactive website with HTML, CSS and JS.
                        Incorporating principles of web design, responsiveness, transitions, and animations.
                        Build interactive sites using JavaScript and host it on a remote GitHub repository.
                        Optimized webites for maximum speed and scalability, while also ensuring compatibility with various browsers and devices.
                        Implemented user authentication and API integration.
                        Developed and maintained resusabe code libraries, while keeping track of changes and their effects on existing functionality</p>
                </div>
            </div >
        </div >
    )
}

export default Experience;


