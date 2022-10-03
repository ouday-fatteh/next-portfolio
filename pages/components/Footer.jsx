import React from 'react';
import { footerParag } from '../../language';

const Footer = ({ language }) => {
    return (
        <div className='w-full h-20 px-20 py-3 dark:text-white flex justify-center items-center dark:bg-gray-800 transition ease-in-out delay-150'>
            <h1 >{language === 'en' ? footerParag.english : footerParag.french}</h1>
        </div>
    )
}

export default Footer