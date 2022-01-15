import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutMe() {

    return(
        <div className='bg-gray-800'>
            <Header />
            <div className='mx-3'>     
                <div className='max-w-7xl my-9 mx-auto px-2 sm:px-6 lg:px-8 pt-6 pb-9 bg-gray-900 rounded-md'>
                    <h1 className='text-3xl font-bold text-[#fbff00]'>About Me</h1>
                    <hr className='border-amber-300 my-4'></hr>
                    <div className='md:grid md:grid-cols-2 gap-4'>
                        <div className='bg-gray-800 rounded-md px-5 py-5 mx-5 my-5'>
                            <h1 className='text-2xl font-bold text-green-400'>Education</h1>
                            <p className='text-xl font-bold pt-4 text-slate-300'>California State University</p>
                            <p className='text-xl font-bold pt-4 text-slate-300'>Bachelors of Science, Computer Science</p>
                        </div>
                        <div className='bg-gray-800 rounded-md px-5 py-5 mx-5 my-5'>
                            <h1 className='text-2xl font-bold text-green-400'>Skills</h1>
                            <div className='grid grid-cols-2'>
                                <p className='text-xl font-bold pt-4 text-slate-300'>JavaScript</p>
                                <p className='text-xl font-bold pt-4 text-slate-300'>NodeJS</p>
                                <p className='text-xl font-bold pt-4 text-slate-300'>Python</p>
                                <p className='text-xl font-bold pt-4 text-slate-300'>C++</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-md px-5 py-5 mx-5 my-5'>
                        <h1 className='text-2xl font-bold text-green-400'>Work Experience</h1>
                        <div className='columns-2'>
                            <p className='text-xl font-bold pt-4 text-slate-300'>Life Science Outsourcing | Brea, CA</p>
                            <p className='text-xl font-bold pt-4 text-slate-300 float-right'>July 2021 - Current</p>
                        </div>
                        <p className='text-xl font-bold pt-4 text-slate-300'>CRM Coordinator</p>
                        <p className='text-xl pt-4 text-slate-300'>- Developed and deployed a webpage that routes Instagram users to company blogposts and other social accounts. </p>
                        <p className='text-xl pt-4 text-slate-300'>- Assisted in system administration including data management, analysis, reporting, and procedure development. </p>
                        <p className='text-xl pt-4 text-slate-300'>- Customized cloud solutions and services to fit the needs of employees using HubSpot CRM and Monday.com.</p>
                        <p className='text-xl pt-4 text-slate-300'>- Developed accurate sales reporting by pulling data from our CRM and presented using Microsoft Power BI.</p>
                        <p className='text-xl pt-4 text-slate-300'>- Deployed business automation to assign new leads from websites to sales representatives using HubSpot.</p>
                        <p className='text-xl pt-4 text-slate-300'>- Customized cloud solutions and services to fit the needs of employees using HubSpot CRM and Monday.com.</p>
                        <p className='text-xl pt-4 text-slate-300'>- Collaborated with creative teams and marketing managers to ensure assets and copy are delivered within deadlines.</p>
                        <br />
                        <div className='columns-2'>
                            <p className='text-xl font-bold pt-4 text-slate-300'>Life Science Outsourcing | Brea, CA</p>
                            <p className='text-xl font-bold pt-4 text-slate-300 float-right'>September 2019 - July 2021</p>
                        </div>
                        <p className='text-xl font-bold pt-4 text-slate-300'>IT Support Specialist</p>
                        <p className='text-xl  pt-4 text-slate-300'>- Provided excellent onsite hardware and software support / troubleshooting with a positive customer service attitude.</p>
                        <p className='text-xl  pt-4 text-slate-300'>- Deployed and configured office equipment such as network printers, network equipment, and user workstations.</p>
                        <p className='text-xl  pt-4 text-slate-300'>- Initialized Windows Server 2019 testing environments to preform installation qualification on new software.</p>
                        <p className='text-xl  pt-4 text-slate-300'>- Created and managed user profiles, security groups, and computers on Windows Active Directory.  </p>
                        <p className='text-xl  pt-4 text-slate-300'>- Assisted in developing documentation to accelerate routine tasks and streamline common computer issues.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}



