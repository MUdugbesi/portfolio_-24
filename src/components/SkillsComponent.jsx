import React from 'react';
import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJs, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiFirebase, SiMongodb } from 'react-icons/si';

const SkillsComponent = () => {
    return (
        <div className='grid grid-cols-5 gap-5'>
            <div className='box_skill' data-aos='fade-up' data-aos-delay='100'>
                <div className='bg-[#ea7373ec] skill_icon work-info'>
                    <FaHtml5 className='size-20 p-2' />
                </div>
                <p className='font-[600] font-IBM'>HTML5</p>
            </div>

            <div className='box_skill' data-aos='fade-up' data-aos-delay='200'>
                <div className='bg-[#4d97e1] skill_icon'>
                    <FaCss3 className='size-20 p-2' />
                </div>
                <p className='font-[600] font-IBM'>CSS3</p>
            </div>


            <div className='box_skill' data-aos='fade-up' data-aos-delay='300'>
                <div className='bg-[#4d97e1] skill_icon'>
                    <FaReact className='size-20 p-2' />
                </div>
                <p className='font-[600] font-IBM'>React.js</p>
            </div>

            <div className='box_skill' data-aos='fade-up' data-aos-delay='400'>
                <div className='bg-[#f4db53] skill_icon'>
                    <IoLogoJavascript className='size-20 p-2' />
                </div>
                <p className='font-[600] font-IBM'>JavaScript</p>
            </div>
            <div className='box_skill' data-aos='fade-up' data-aos-delay='500'>
                <div className='bg-[#4d97e1] skill_icon'>
                    <RiTailwindCssFill className='size-20 p-2' />
                </div>
                <p className='font-[600] font-IBM'>JavaScript</p>
            </div>
            <div className='box_skill' data-aos='fade-up' data-aos-delay='600'>
                <div className='bg-[#47d159] skill_icon'>
                    <FaNodeJs className='size-20 p-2' />
                </div>
                <p className='font-[600] font-IBM'>Node.js</p>
            </div>
            <div className='box_skill' data-aos='fade-up' data-aos-delay='700'>
                <div className='bg-[#000000] skill_icon'>
                    <SiExpress className='size-20 p-2' />
                </div>
                <p className='font-[600] font-IBM'>Express.js</p>
            </div>
            <div className='box_skill' data-aos='fade-up' data-aos-delay='800'>
                <div className='bg-[#ea7373ec] skill_icon '>
                    <FiFigma className='size-20 p-2' />
                </div>
                <p className='font-[600] font-IBM'>Figma</p>
            </div>
            <div className='box_skill' data-aos='fade-up' data-aos-delay='900'>
                <div className='bg-[#f4db53] skill_icon'>
                    <SiFirebase className='size-20 p-2' />
                </div>
                <p className='font-[600] font-IBM'>Firebase</p>
            </div>
            <div className='box_skill' data-aos='fade-up' data-aos-delay='1000'>
                <div className='bg-[#47d159] skill_icon'>
                    <SiMongodb className='size-20 p-2' />
                </div>
                <p className='font-[600] font-IBM'>MongoDB</p>
            </div>
            <div className='box_skill' data-aos='fade-up' data-aos-delay='1100'>
                <div className='bg-[#fc0a02] skill_icon'>
                    <FaGitAlt className='size-20 p-2' />
                </div>
                <p className='font-[600] font-IBM uppercase'>Git</p>
            </div>
            <div className='box_skill' data-aos='fade-up' data-aos-delay='1200'>
                <div className='bg-[#000000] skill_icon'>
                    <FaGithub className='size-20 p-2' />
                </div>
                <p className='font-[600] font-IBM'>GitHub</p>
            </div>
        </div>
    )
}

export default SkillsComponent