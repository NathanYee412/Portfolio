import React from 'react';
import Card from './Card';

export default function Projects() {

    return(
        <div className='bg-gray-800'>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-6 pb-9 bg-gray-900 rounded-md'>
                <div className='grid grid-cols-2'>
                    <h1 className='text-3xl font-bold text-[#fbff00]'>Recent Projects</h1>
                    <div>
                        <a href='/projects' className='btn font-bold bg-[#fbff00] pt-2 pl-2 pr-2 pb-2 mx-2 float-right rounded-md'>View More</a>
                    </div>
                </div>               
                <div className='sm:grid sm:grid-cols-3 sm:gap-4'>
                    <Card projectName='Portfolio Project' description='A static webpage project built with ReactJS and styled with Tailwind CSS. This is the current webpage that you are viewing' tags={['ReactJS', 'JavaScript','TailwindCSS']}  link='https://github.com/NathanYee412/Portfolio' img='https://i.imgur.com/Kd9dUQy.png'/>
                    <Card projectName='Instagram Link Tree' description='Custom link tree built with ReactJS. Deployed with GitHub Pages with a custom domain setup with Godaddy.com' tags={['ReactJS', 'JavaScript']} link='https://lso.life/' img='https://i.imgur.com/Jhpbzc2.png'/>
                    <Card projectName='To-do List' description='A to-do list built with node.js and EJS templates' tags={['Node.js', 'JavaScript','EJS']} link='https://github.com/NathanYee412/EJS-To-Do-List-v1' img='https://i.imgur.com/A2YXyZW.png'/>
                </div>
            </div>
        </div>
    );
}