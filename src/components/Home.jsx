import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';
import profileImage from '../assets/profile.jpg'; // Import the image

const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText((prevText) => prevText + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
				{/* Profile Image */}
				<div className="absolute top-32 z-10">
					<img src={profileImage} alt="Profile" className="w-40 h-40 rounded-full border-4 border-yellow-200"/>
				</div>
				<div className='pt-4 h-36 backdrop-blur-sm rounded-3xl z-0'>
					<h1 className='text-6xl sm:text-7xl font-extrabold mt-20'>
						Hi, I'm&nbsp;
						<span className='text-yellow-200 font-extrabold'>
							{text}
						</span>
					</h1>
					<p className='mt-3 text-xl'>A tech enthusiast blending creativity with code, shaping intuitive experiences,<br />
					 and capturing moments—one pixel at a time." 🚀💻📸</p>
				</div>  
			</div>
			<Footer/>
		</div>	
	);
}

export default Home;
