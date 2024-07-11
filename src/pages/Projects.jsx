import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='h-auto mt-[100px] pt-[20px] pb-[60px] font-IBM' data-aos="fade-right">
      <p className='title'>Projects</p>
      <p className='m[10px_0px]'> I have experience working on multiple projects, some of which I have highlighted below.</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[30px]'>
        <div className='project_box shadow-[#5294b37d]' data-aos='flip-right'>

        </div>
        <div className='project_box shadow-[#ea73737d]' data-aos='flip-left' data-aos-delay="500">

        </div>
        <div className='project_box shadow-[#5294b37d]' data-aos='flip-right' data-aos-delay="500">

        </div>
        <div className='project_box shadow-[#ea73737d]' data-aos='flip-left' data-aos-delay="1000">

        </div>

      </div>
    </div>
  )
}

export default Projects