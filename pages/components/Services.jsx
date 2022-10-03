import React from 'react';
import * as lang from "../../language.js";
const Services = ({ language }) => {
    return (
        <div>
            <div>
                <h3 className="text-3xl py-1 mt-20 dark:text-white transition ease-in-out delay-150">{language === 'en' ? lang.servicesParag.english : lang.servicesParag.french}</h3>
                <p className="text-medium py-5 leading-8 text-gray-800 dark:text-gray-400 transition ease-in-out delay-150">{language === 'en' ? lang.servicesSubParag.english : lang.servicesSubParag.french}</p>
            </div>
        </div>
    )
}

export default Services