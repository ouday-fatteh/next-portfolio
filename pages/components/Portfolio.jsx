import React from 'react'
import Image from 'next/image'
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';
import * as lang from "../../language.js";

const images = [{ src: web1, href: "" }, { src: web2, href: "" },
{ src: web3, href: "" }, { src: web4, href: "" }, { src: web5, href: "" }, { src: web6, href: "" },
]

const Portfolio = ({ language }) => {
    return (
        <>
            <div>
                <h3 className="text-3xl py-1 mt-20 dark:text-white transition ease-in-out delay-150">{language === 'en' ? lang.portfolioTitle.english : lang.portfolioTitle.french}</h3>
                <p className="text-medium py-5 leading-8 text-gray-800 transition ease-in-out delay-150 dark:text-gray-400">{language === 'en' ? lang.portfolioParag.english : lang.portfolioParag.french}</p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap mx-auto  overflow-hidden">
                {images.map((item, i) => {
                    return <div key={i} className="basis-1/3 flex-1  cursor-pointer justify-center items-center">{!item ? 'Loading Image ...' : <Image className="rounded-lg object-cover" width={'100%'} height={'50%'} layout="responsive" src={item.src} alt="" />}</div>
                })}


            </div>
        </>
    )
}

export default Portfolio