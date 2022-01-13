import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectData from '../components/ProjectData';

export default function ProjectPage() {

    return(
        <div className='bg-gray-800'>
            <Header />
            <div className='max-w-7xl mx-auto mt-16 px-2 sm:px-6 lg:px-8 pt-6 pb-9 bg-gray-900 rounded-md'>
                <div className='columns-2'>
                    <h1 className='text-3xl font-bold text-[#fbff00]'>Projects</h1>
                </div>               
                <div className='sm:grid sm:grid-cols-3 sm:gap-4'>
                    {ProjectData.map((project) => {
                        return(
                            <Card projectName={project.projectName} description={project.description} tags={project.tags} link={project.link} img={project.img}/>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}