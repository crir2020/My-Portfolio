
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Snap Shot' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title=='Co People' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'DDos Attack Detection and Prevention in Vehicular Network',
        description:'SDN networks (Software Defined Networking ) are exposed to new security threats and attacks, especially Distributed Denial of Service (DDoS) attacks. For this aim, I have proposed a model able to detect and mitigate attacks automatically in SDN networks using Machine Learning (ML)',
        image: {vpn},
        git:'https://github.com/crir2020/DDos-Attack-Detection-and-Prevention-in-Vehicular-Network/tree/main',
        technologies:['ML' ,'Vagrant' , 'Python']
    },
    {
        title:'Customer Churn Prediction',
        description:'Churn - the phenomenon of customers discontinuing their relationship with a business wIn the highly competitive telecom industry, understanding and predicting customer churn is crucial for business success. By identifying customers at risk of leaving, companies can proactively engage with them and improve customer retention',
        image: {copeople},
        git:"https://github.com/crir2020/Customer-Churn-Prediction",
        technologies:[ 'AI','NLP', 'Jupyter']
    },
    {
        title:'Online Examination System',
        description:'It is a website which helps Students of a institution to give their respective exams smoothly and securely',
        image: {copeople},
        git:"https://github.com/crir2020/Online-Examination-system",
        technologies:[ 'PHP', 'MySql']
    },
    {
        title:'Virtual Study Environment Application',
        description:'Designed an interactive study platform used by 200+ students for collaborative learning.',
        image: {copeople},
        git:"https://github.com/crir2020/Vitual-Study-Environment-",
        technologies:[ 'App Developement','Flutter', 'Dart', 'FireBase']
    },
    {
        title:'Cricket Ball Aerodynamics Website',
        description:'A comprehensive and detailed analysis of the scientific principles of aerodynamics which contribute to the mid air movement of the cricket ball illustrated through videos and other features.',
        image: {copeople},
        git:"https://github.com/crir2020/Cricket-Ball-Aerodynamics",
        technologies:[ 'JavaScript ','HTML', 'tailwind CSS']
    },
   
    {
        title:'Resume Screener App',
        description:'Elevate your job search with ease. Upload resumes in PDF, JPG, or PNG formats, and our smart algorithm analyzes your skills, suggesting ideal positions instantly. User-friendly, secure, and empowering, it streamlines your journey to the perfect job. Uncover opportunities effortlessly with CareerFit Scanner - your personalized career guide.',
        image: {copeople},
        git:"https://github.com/crir2020/Resume-Screener-App",
        technologies:[ 'AI','NLP', 'Jupyter']
    },
]

export default Projects