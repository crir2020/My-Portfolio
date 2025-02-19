import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👋 Hey there! I'm Chirag Raj 🚀<br />

I'm a Software Engineer in the making 🎯, passionate about App Developement, DevOps, and AI/ML 💡. I love blending creativity with C++, DSA, and Web Development to build sleek, efficient, and user-friendly applications.
              <br />
              Currently pursuing my B.Tech at IIIT Raichur 🎓, I've gained hands-on experience through internships, projects, and leadership roles—including my time as the Cultural Secretary 🏆.<br />
              ✍️ Beyond coding, I enjoy organizing events, designing intuitive interfaces, exploring cloud technologies, and capturing moments through photography 📸. Check out my shots on  <a className=' text-purple-300 hover:text-purple-400 duration-300' href="https://www.instagram.com/crir_810j/" target='_blank'>Instagram!</a>, where I delve into the intricacies of software development and technology trends.
              On a different note,  It's not just a hobby; It's a way of telling me that everyything is simple don't make it complex.🌟📷</p>

            <ButtonLink
              url='https://drive.google.com/file/d/19VgwmzuTNjx5sD0iOow1ZY0ZOj3llanG/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;