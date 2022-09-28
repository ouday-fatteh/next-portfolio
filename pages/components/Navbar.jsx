import React, { useState } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Navbar = ({ setDarkMode, darkMode }) => {
    const [isOverScroll, setIsOverScroll] = useState(false);

    if (typeof window !== 'undefined') {
        document.addEventListener('scroll', () => {
            const posY = document.documentElement.scrollTop;
            if (posY > 10) { setIsOverScroll(true); } else { setIsOverScroll(false); }
        })
    }

    return (
        <nav className={`fixed ${isOverScroll && 'bg-white border-b border-teal-800'} w-full z-10 ${isOverScroll ? 'py-5' : 'py-10'} px-10 md:px-20 lg:px-40 flex justify-between dark:bg-gray-900 transition ease-in-out delay-150`}>
            <h1 className="text-xl font-burtons dark:text-white transition ease-in-out delay-150">Ouday Fatteh</h1>
            <ul className="flex items-center">
                <li>{!darkMode ? <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl dark:text-white transition ease-in-out delay-150" /> : <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white transition ease-in-out delay-150" />}</li>
                <li><a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar