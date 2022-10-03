import React from 'react'
import Image from 'next/image';
import * as lang from "../language.js";
const Card = ({ image, language, num }) => {
    return (
        <div className="text-center hover:shadow-teal-800  shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 transition ease-in-out delay-150 ">
            <Image src={image} alt="" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white transition ease-in-out delay-150">{language === 'en' ? lang.cardsTitles[num].english : lang.cardsTitles[num].french}</h3>
            <p className="dark:text-white transition ease-in-out delay-150">{language === 'en' ? lang.cardsSub[num].english : lang.cardsSub[num].french}</p>
            <h4 className="py-4 text-teal-600">{language === 'en' ? lang.cardsSecTitle[num].english : lang.cardsSecTitle[num].french}</h4>
            <p className="text-gray-800 py-1 dark:text-gray-400 transition ease-in-out delay-150">{lang.cardsSubParag[num].english[0]}</p>
            <p className="text-gray-800 py-1 dark:text-gray-400 transition ease-in-out delay-150">{lang.cardsSubParag[num].english[1]}</p>
            <p className="text-gray-800 py-1 dark:text-gray-400 transition ease-in-out delay-150">{lang.cardsSubParag[num].english[2]}</p>

        </div>
    )
}

export default Card