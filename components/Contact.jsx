import React from 'react';
import { hireMeParag } from "../language.js";

const Contact = ({ language }) => {
    return (
        <div className='py-10 '>
            <h1 className='dark:text-white text-2xl transition ease-in-out delay-150'>{language === 'en' ? hireMeParag.english : hireMeParag.french}</h1>
            <p className='dark:text-white transition ease-in-out delay-150'>+216 56 090 266</p>
            <p className='dark:text-white transition ease-in-out delay-150'>oudayfatteh007@gmail.com</p>
        </div>
    )
}

export default Contact