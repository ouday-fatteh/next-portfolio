import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import hero from "../../public/dev-ed-wave.png";

const Hero = () => {
    return (
        <div className=''>
            <div className="text-center p-10 ">
                <h2 className="text-5xl py-2 dark:text-teal-400 transition ease-in-out delay-150 text-teal-600 font-medium md:text-6xl">Ouday Fatteh</h2>
                <h3 className="text-2xl py-2 md:text-xl dark:text-white transition ease-in-out delay-150">Fullstack Web Developer</h3>
                <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400 transition ease-in-out delay-150">Freelancer providing services for programming</p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white transition ease-in-out delay-150">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
                <Image src={hero} alt="" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default Hero