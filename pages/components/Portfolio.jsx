import React from 'react'
import Image from 'next/image'
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';

const Portfolio = () => {
    return (
        <>
            <div>
                <h3 className="text-3xl py-1 mt-20 dark:text-white transition ease-in-out delay-150">Portfolio</h3>
                <p className="text-medium py-5 leading-8 text-gray-800 transition ease-in-out delay-150 dark:text-gray-400">I am <span className="text-teal-500">Ouday Fatteh</span> ,a fullstack MERN Developer,I have 3+ years of experience and willing to take your business to the top.</p>
                <p className="text-md py-2 leading-8 text-gray-800 transition ease-in-out delay-150 dark:text-gray-400">I offer a wide range of services,including<span className="text-teal-500"> full websites development</span> and <span className="text-teal-500">Web Design</span></p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap mx-auto">
                <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" src={web1} alt="" /></div>
                <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" src={web2} alt="" /></div>
                <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" src={web3} alt="" /></div>
                <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" src={web4} alt="" /></div>
                <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" src={web5} alt="" /></div>
                <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" src={web6} alt="" /></div>
            </div>
        </>
    )
}

export default Portfolio