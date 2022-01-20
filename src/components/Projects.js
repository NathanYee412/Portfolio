import React from 'react';
import Card from './Card';
import ProjectData from './ProjectData';

export default function Projects() {

    return(
        <div className='bg-gray-800 px-3 py-3' id='projects'>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-6 pb-9 mb-10 bg-gray-900 rounded-md'>
                <div className='grid grid-cols-2'>
                    <h1 className='text-3xl font-bold text-[#fbff00]'>Recent Projects</h1>
                    <div>
                        <a href='https://github.com/NathanYee412' className='btn font-bold bg-green-400 pt-2 pl-2 pr-2 pb-2 mx-2 float-right rounded-md'>View Projects on GitHub</a>
                    </div>
                </div>
                <hr className="border-amber-300 my-4"></hr>           
                <div className='sm:grid sm:grid-cols-3 sm:gap-4'>
                    {ProjectData.slice(0,5).map((project) => {
                        return(
                            <Card projectName={project.projectName} description={project.description} tags={project.tags} link={project.link} img={project.img}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}