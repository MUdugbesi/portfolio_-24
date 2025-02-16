import React from 'react';
import { FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
	return (
		<div className='mt-[120px] pb-[60px] font-Lato' data-aos='fade-right'>
			<p className='title'>Get in Touch</p>
			<p className='text-sm md:text-[18px] lg:w-[90%] md:leading-6 lg:leading-8'>
				Impressed with my work & skills? Want to work with me? You can reach out
				to me through the social media handles below or you can simply give me a
				call <FaPhone className='inline' />
			</p>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-[40px] max-sm:w-[80%] mx-auto'>
				<div className='contact_box' data-aos='fade-right' data-aos-delay='500'>
					<MdEmail className='size-7 text-[#ea7373e7] hover:scale-[1.2] hover:cursor-pointer' />
					<a href='mailto:udugbesimarves@gmail.com' className='text-sm'>
						Udugbesimarves@gmail.com
					</a>
				</div>
				<div className='contact_box' data-aos='fade-left' data-aos-delay='600'>
					<FaGithub className='size-7 text-[#ea7373e7] hover:scale-[1.2] hover:cursor-pointer' />
					<a href='https://github.com/MUdugbesi' className='text-sm'>
						GitHub
					</a>
				</div>
				<div className='contact_box' data-aos='fade-right' data-aos-delay='800'>
					<FaLinkedin className='size-7 text-[#ea7373e7] hover:scale-[1.2] hover:cursor-pointer' />
					<a
						href='https://www.linkedin.com/in/marvelous-udugbesi-97739b328'
						className='text-sm'
					>
						LinkedIn
					</a>
				</div>
				<div className='contact_box' data-aos='fade-left' data-aos-delay='1000'>
					<FaWhatsapp className='size-7 text-[#ea7373e7] hover:scale-[1.2] hover:cursor-pointer' />
					<a href='tel:+447916257659' className='text-sm'>
						+44 791 625 7659
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
