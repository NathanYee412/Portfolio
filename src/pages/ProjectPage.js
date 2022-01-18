import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectData from '../components/ProjectData';

export default function ProjectPage() {

    return(
        <div className='bg-gray-800'>
            <Header />
            <div className='mx-3'>     
                <div className='max-w-7xl my-9 mx-auto px-2 sm:px-6 lg:px-8 pt-6 pb-9 bg-gray-900 rounded-md'>
                    <div>
                        <h1 className='text-3xl font-bold text-[#fbff00]'>Projects</h1>
                        <p className='text-2xl pt-4 text-slate-300'>Hello! Welcome to my project showcase. This is where you can find my recently created projects.</p>
                        <p className='text-2xl pb-4 text-slate-300'>The "View Project" button will either lead you to a hosted site or its GitHub repository.</p>
                    </div>
                    <hr className="border-amber-300 my-4"></hr>               
                    <div className='sm:grid sm:grid-cols-3 sm:gap-4'>
                        {ProjectData.map((project) => {
                            return(
                                <Card projectName={project.projectName} description={project.description} tags={project.tags} link={project.link} img={project.img}/>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}