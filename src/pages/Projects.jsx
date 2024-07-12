import React from 'react';
import SelahShop from '../assets/selah_shop.png';
import OpenAi from '../assets/open_ai.png';
import Jamming from '../assets/jamming.png'
import Alarodo from '../assets/alarodo.png'

const Projects = () => {
  return (
    <div id='projects' className='h-auto mt-[100px] pt-[20px] pb-[60px] font-IBM' data-aos="fade-right">
      <p className='title'>Projects</p>
      <p className='m[10px_0px]'> I have experience working on multiple projects, some of which I have highlighted below.</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[30px] h-auto'>
        <div className='project_box shadow-[#5294b37d]' data-aos='flip-right'>
          <img src={SelahShop} />
          <div className='p-4'>
            <h2 className='title mb-[20px] text-[20px] mt-[10px]'>E-Commerce shopping website</h2>
            <p className='font-Roboto'>This shopping website is designed to allow use navigate through each items in the shop - viewing its details, add desirable items to cart and a non-functional checkout process.</p>
          </div>

        </div>
        <div className='project_box shadow-[#ea73737d]' data-aos='flip-left' data-aos-delay="500">
          <img src={OpenAi} />
          <div className='p-4'>
            <h2 className='title mb-[20px] text-[20px] mt-[10px]'>Open Ai Clone design</h2>
            <p className='font-Roboto'>This static webpage is designed from a clone design introducing GPT-3 OpenaAi to users.</p>
          </div>
        </div>
        <div className='project_box shadow-[#5294b37d]' data-aos='flip-right' data-aos-delay="500">
          <img src={Jamming} />
          <div className='p-4'>
            <h2 className='title mb-[20px] text-[20px] mt-[10px]'>Jamming</h2>
            <p className='font-Roboto'>Jamming is a music app in progress - it allows users to login, search for music of interest, create a playlist which reflects on user's spotify account - It mainly utilizes spotify API</p>
          </div>
        </div>
        <div className='project_box shadow-[#ea73737d]' data-aos='flip-left' data-aos-delay="1000">
          <img src={Alarodo} />
          <div className='p-4'>
            <h2 className='title mb-[20px] text-[20px] mt-[10px]'>Simple Static Webpage - Alarodo</h2>
            <p className='font-Roboto'>Alarado is one of my first projects on this amazing journey as a developer - it reminds me of how much I have learnt and gained. It utilizes a dark and light mode feature for its content display. </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects