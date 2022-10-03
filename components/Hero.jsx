import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';
import Image from 'next/image';
import hero from "../public/dev-ed-wave.png";
import * as lang from "../language.js";

const Hero = ({ language }) => {
    return (
        <div className='relative' >
            <div className="text-center p-10 z-10 ">
                <h2 className="text-5xl py-2 dark:text-teal-400 transition ease-in-out delay-150 text-teal-600 font-medium md:text-6xl">Ouday Fatteh</h2>
                <h3 className="text-2xl py-2 md:text-xl dark:text-white transition ease-in-out delay-150">{language === 'en' ? lang.heroSubtitle.english : lang.heroSubtitle.french}</h3>
                <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400 transition ease-in-out delay-150">{language === 'en' ? lang.heroSubParag.english : lang.heroSubParag.french}</p>
            </div>
            <div className="text-5xl z-10 flex justify-center gap-16 py-3 text-gray-600 dark:text-white transition ease-in-out delay-150">
                <a href='https://github.com/ouday-fatteh/' rel='noreferrer' target='_blank'><AiFillGithub /></a>
                <a href='https://www.linkedin.com/in/ouday-fatteh/' rel='noreferrer' target='_blank'><AiFillLinkedin /></a>
                <a href='https://www.facebook.com/idle.beez' rel='noreferrer' target='_blank'><AiFillFacebook /></a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b z-[1] from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
                <Image src={hero} alt="" layout="fill" objectFit="cover" />
            </div>
            <div className='absolute bg-gradient-radial dark:from-teal-400 from-teal-600 opacity-40 dark:opacity-75 to-transparent h-[500px] w-[500px] blur-3xl top-0 -translate-x-2/3 rounded-[9999px]'>
            </div>
            <div className='absolute bg-gradient-radial dark:from-teal-400 from-teal-600 opacity-40 dark:opacity-75 to-transparent h-[500px] w-[500px] blur-3xl top-96 right-0 translate-x-1/2  rounded-[9999px]'></div>
        </div>
    )
}

export default Hero