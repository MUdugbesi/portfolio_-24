import React, { useRef, useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import Typed from 'typed.js';


const Hero = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'React.js',
                'Front-End Web',
                'Back-End Web', 'Mobile'],
            typeSpeed: 80,
            backSpeed: 100,
            loop: true,
            startDelay: 500,
        })

        return () => {
            typed.destroy();
        }
    })


    return (

        <div className='pt-[50px]' id='home' data-aos='fade-right'>
            <h1 className='text-[50px] font-IBM font-[600] leading-[55px] mb-5 tracking-[0.08em]'>I am a <span ref={el} className='text-[#f2d326]'></span><br />
                Developer</h1>
            <p className='font-[lato] tracking-wide text-[#ffffffc9]'>My personal portfolio built with React.js <FaReact className='inline text-[#22b5ea] text-[25px]' /> and TailwindCSS <RiTailwindCssFill className='inline text-[#0e85d9] text-[25px]' /></p>
        </div>

    )
}

export default Hero