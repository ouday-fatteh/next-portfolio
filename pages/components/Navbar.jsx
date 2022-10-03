import React, { useState } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { FaLanguage } from 'react-icons/fa';

const Navbar = ({ setDarkMode, darkMode, language, setLanguage }) => {
    const [isOverScroll, setIsOverScroll] = useState(false);

    if (typeof window !== 'undefined') {
        document.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 10) { setIsOverScroll(true); } else { setIsOverScroll(false); }
        })
    }

    const changeLanguage = () => {
        if (language === 'en') {
            setLanguage('fr')
        }
        else {
            setLanguage('en')
        }

    }

    return (
        <nav className={` fixed border-teal-400  dark:border-teal-800 ${isOverScroll && ' border-b dark:bg-gray-900 bg-white'} w-full z-10 px-10 md:px-20 lg:px-40  flex items-center justify-between transition-all ease-in-out delay-150`}>
            <span className={`flex transition-height duration-300 delay-0 ease-in-out items-center ${isOverScroll ? 'h-16' : 'h-28'}`}><h1 id="logo" className="font-burtons min-w-[70px] dark:text-white transition ease-in-out delay-150">Ouday Fatteh</h1></span>
            <ul className="flex items-center">
                <li className='mx-8 flex gap-3 items-center'><FaLanguage className='cursor-pointer text-3xl dark:text-white ' onClick={changeLanguage} /><span className='dark:text-white text-center'>{language.toUpperCase()}</span></li>
                <li>{!darkMode ? <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl dark:text-white transition ease-in-out delay-150" /> : <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white transition ease-in-out delay-150" />}</li>
                <li><a href="resume.pdf" download={true} className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar