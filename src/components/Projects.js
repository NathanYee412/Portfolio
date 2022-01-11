import React from 'react';
import Card from './Card';

export default function Projects() {

    return(
        <div className='bg-gray-800'>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-6 pb-9 bg-gray-900 rounded-md'>
                <div className='columns-2'>
                    <h1 className='text-3xl font-bold text-[#fbff00]'>Recent Projects</h1>
                    <button className='btn font-bold bg-[#fbff00] pt-2 pl-2 pr-2 pb-2 mx-2 float-right rounded-md'>View More</button>
                </div>               
                <div className='sm:columns-3'>
                    <Card projectName='Portfolio Project' description='A static webpage project built with ReactJS and Tailwind CSS. This is the current webpage that you are viewing' tags={['ReactJS', 'JavaScript','TailwindCSS']}/>
                    <Card projectName='Instagram Link Tree' description='Custom link tree built with ReactJS. Deployed with GitHub Pages with a custom domain setup with Godaddy.com' tags={['ReactJS', 'JavaScript']}/>
                    <Card projectName='Portfolio Project' description='A portfolio project built with ReactJS and Tailwind CSS' tags={['ReactJS', 'JavaScript','TailwindCSS']}/>
                </div>
            </div>
        </div>
    );
}