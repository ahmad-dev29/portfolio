import React, { useState, useEffect } from 'react';
import video from './assets/background.mp4';
import logoo from './assets/logo.png';
import profileImg from './assets/WhatsApp Image 2025-06-25 at 11.43.32 PM.jpeg';

// ICONS
import { AiFillHtml5 } from 'react-icons/ai';
import {
    SiCss3, SiJavascript, SiTypescript, SiAngular, SiMui,
    SiBootstrap, SiTailwindcss, SiReact, SiGit
} from 'react-icons/si';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { MdOutlineSchool, MdMenuBook, MdOutlineContactPhone } from 'react-icons/md';

function Mainpage() {
    const colorClasses = [
        'bg-cyan-500', 'bg-purple-600', 'bg-pink-600', 'bg-indigo-500', 'bg-teal-600',
        'bg-blue-600', 'bg-emerald-500', 'bg-rose-600', 'bg-fuchsia-600', 'bg-sky-500',
        'bg-violet-500', 'bg-orange-500', 'bg-red-500', 'bg-amber-500', 'bg-lime-500'
    ];
    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prev) => (prev + 1) % colorClasses.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={video}
            ></video>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 w-[95%] mx-auto h-[90vh] mt-7 flex rounded-3xl bg-gradient-to-b from-[#1b1a2f] to-[#831f2f]">

                {/* Sidebar */}
                <div className="w-[70px] md:w-[240px] rounded-2xl bg-gradient-to-b from-[#1b1a2f] to-[#831f2f] text-white p-3 md:p-5 flex flex-col justify-between">
                    <div>
                        <h3 className="text-gray-300 mb-6 font-bold text-xl md:text-4xl hidden md:block">Categories</h3>
                        <ul className="space-y-4">
                            <li><a href="#about" className="flex items-center gap-2 hover:text-blue-400 transition"><MdMenuBook size={24} /><span className="hidden md:inline text-xl">About</span></a></li>
                            <li><a href="#skills" className="flex items-center gap-2 hover:text-blue-400 transition"><SiJavascript size={24} /><span className="hidden md:inline text-xl">Skills</span></a></li>
                            <li><a href="#projects" className="flex items-center gap-2 hover:text-blue-400 transition"><MdOutlineSchool size={24} /><span className="hidden md:inline text-xl">Projects</span></a></li>
                            <li><a href="#education" className="flex items-center gap-2 hover:text-blue-400 transition"><MdOutlineContactPhone size={24} /><span className="hidden md:inline text-xl">Educations</span></a></li>
                        </ul>

                        <h3 className="mt-10 text-gray-300 mb-4 font-bold text-xl md:text-4xl hidden md:block">Social Links</h3>
                        <ul className="space-y-4">
                            <li><a href="https://www.linkedin.com/in/ahmad-masood-624930288/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition"><FaLinkedin size={24} /><span className="hidden md:inline text-xl">LinkedIn</span></a></li>
                            <li><a href="https://github.com/ahmad-dev29/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition"><FaGithub size={24} /><span className="hidden md:inline text-xl">GitHub</span></a></li>
                            <li><a href="tel:+923324674660" className="flex items-center gap-2 hover:text-blue-400 transition"><FaPhone size={24} /><span className="hidden md:inline text-xl">Phone</span></a></li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 md:p-8 pt-6 overflow-auto scroll-smooth no-scrollbar">

                    {/* About Section */}
                    <h3 className="text-gray-300 mb-6 font-bold text-4xl" id='about'>About me</h3>
                    <div className={`${colorClasses[bgIndex]} transition-all duration-1000 rounded-3xl p-6 text-white flex flex-col md:flex-row gap-6 items-center md:justify-between shadow-lg`}>
                        <img
                            src={profileImg}
                            alt="profile"
                            className="w-32 aspect-square md:w-40 md:aspect-square object-cover rounded-full order-first md:order-last mx-auto mb-4 md:mb-0"
                        />

                        <div className="max-w-3xl text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-2">M Ahmad</h2>
                            <p>
                                Front-End Developer with hands-on experience in HTML, CSS, JavaScript, and React.
                                Proficient in building responsive, accessible user interfaces. Dedicated to crafting
                                clean, performant code and delivering seamless digital experiences.
                            </p>
                            <a
                                href="https://drive.google.com/file/d/14YL4KaPrZ0nQxkBUTkkn6yajrXTEdzkp/view?usp=sharing"
                                target="_blank"
                            >
                                <button className="mt-4 px-4 py-2 rounded-full bg-blue-700 hover:bg-blue-800">
                                    Download Resume
                                </button>
                            </a>
                        </div>
                    </div>


                    {/* Skills Section */}
                    <div id="skills" className="mt-10">
                        <h3 className="text-white text-2xl mb-4">My Skills</h3>
                        <div className="ml-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-white">
                            {[
                                { icon: <AiFillHtml5 size={40} className="text-orange-500" />, label: 'HTML' },
                                { icon: <SiCss3 size={40} className="text-blue-500" />, label: 'CSS/SCSS' },
                                { icon: <SiJavascript size={40} className="text-yellow-300" />, label: 'JavaScript' },
                                { icon: <SiReact size={40} className="text-cyan-400" />, label: 'React' },
                                { icon: <SiGit size={40} className="text-orange-600" />, label: 'Git' },
                                { icon: <SiMui size={40} className="text-indigo-400" />, label: 'MUI' },
                                { icon: <SiBootstrap size={40} className="text-purple-600" />, label: 'Bootstrap' },
                                { icon: <SiTailwindcss size={40} className="text-sky-400" />, label: 'Tailwind' },
                            ].map((skill, i) => (
                                <div key={i} className="group bg-black/30 p-4 rounded-xl flex flex-col items-center hover:bg-black/50 transition">
                                    {skill.icon}
                                    <span className="mt-2">{skill.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div id="education" className="mt-12">
                        <h3 className="text-white text-2xl mb-4">My Education</h3>
                        <div className="flex items-center justify-between bg-gradient-to-r from-[#5b1c26] via-[#311f39] to-[#2a2e5b] rounded-2xl p-6 shadow-lg text-white">
                            <div className="flex items-center space-x-4">
                                <img src={logoo} alt="University Logo" className="w-14 h-14 object-contain" />
                                <div>
                                    <h4 className="text-lg font-semibold">Bachelor of Computer Science</h4>
                                    <p className="text-sm text-gray-300">Virtual University of Pakistan</p>
                                </div>
                            </div>
                            <div className="text-right text-sm sm:text-base">2024 Oct – <span className="font-medium">present</span></div>
                        </div>
                    </div>

                    {/* Projects Placeholder */}
                    {/* Projects Section */}
                    <div id="projects" className="mt-12 text-white">
                        <h3 className="text-2xl mb-6">Projects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Project 1 */}
                            <div className="bg-black/30 rounded-xl p-6 shadow-md hover:bg-black/50 transition">
                                <h4 className="text-xl font-semibold mb-2">Limerick</h4>
                                <p className="text-sm text-gray-300 mb-4">

                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://limerick29.netlify.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 text-sm"
                                    >
                                        Live Demo
                                    </a>
                                    {/* <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-800 text-sm"
                >
                    Source Code
                </a> */}
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="bg-black/30 rounded-xl p-6 shadow-md hover:bg-black/50 transition">
                                <h4 className="text-xl font-semibold mb-2">Illdy</h4>
                                <p className="text-sm text-gray-300 mb-4">

                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://illdy29.netlify.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 text-sm"
                                    >
                                        Live Demo
                                    </a>
                                    {/* <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-800 text-sm"
                >
                    Source Code
                </a> */}
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="bg-black/30 rounded-xl p-6 shadow-md hover:bg-black/50 transition">
                                <h4 className="text-xl font-semibold mb-2">Kerri</h4>
                                <p className="text-sm text-gray-300 mb-4">

                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://kerri29.netlify.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 text-sm"
                                    >
                                        Live Demo
                                    </a>
                                    {/* <a
                    href="# "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-800 text-sm"
                >
                    Source Code
                </a> */}
                                </div>
                            </div>

                            {/* Project 4 */}
                            <div className="bg-black/30 rounded-xl p-6 shadow-md hover:bg-black/50 transition">
                                <h4 className="text-xl font-semibold mb-2">Alma </h4>
                                <p className="text-sm text-gray-300 mb-4">

                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://alma29.netlify.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 text-sm"
                                    >
                                        Live Demo
                                    </a>
                                    {/* <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-800 text-sm"
                >
                    Source Code
                </a> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Mainpage;
