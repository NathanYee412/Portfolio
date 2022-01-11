import Card from '../components/Card';
import Header from '../components/Header';

export default function ProjectPage() {

    return(
        <div className='bg-gray-800'>
            <Header />
            <div className='max-w-7xl mx-auto mt-16 px-2 sm:px-6 lg:px-8 pt-6 pb-9 bg-gray-900 rounded-md'>
                <div className='columns-2'>
                    <h1 className='text-3xl font-bold text-[#fbff00]'>Projects</h1>
                </div>               
                <div className='sm:columns-3'>
                    <Card projectName='Portfolio Project' description='A static webpage project built with ReactJS and Tailwind CSS. This is the current webpage that you are viewing' tags={['ReactJS', 'JavaScript','TailwindCSS']}  link='https://www.google.com'/>
                    <Card projectName='Instagram Link Tree' description='Custom link tree built with ReactJS. Deployed with GitHub Pages with a custom domain setup with Godaddy.com' tags={['ReactJS', 'JavaScript']} link='https://www.google.com'/>
                    <Card projectName='Portfolio Project' description='A portfolio project built with ReactJS and Tailwind CSS. This is the current webpage that you are viewing' tags={['ReactJS', 'JavaScript','TailwindCSS. ']} link='https://www.google.com'/>
                </div>
                <div className='sm:columns-3'>
                    <Card projectName='Portfolio Project' description='A static webpage project built with ReactJS and Tailwind CSS. This is the current webpage that you are viewing' tags={['ReactJS', 'JavaScript','TailwindCSS']}  link='https://www.google.com'/>
                    <Card projectName='Instagram Link Tree' description='Custom link tree built with ReactJS. Deployed with GitHub Pages with a custom domain setup with Godaddy.com' tags={['ReactJS', 'JavaScript']} link='https://www.google.com'/>
                    <Card projectName='Portfolio Project' description='A portfolio project built with ReactJS and Tailwind CSS. This is the current webpage that you are viewing' tags={['ReactJS', 'JavaScript','TailwindCSS']} link='https://www.google.com'/>
                </div>
            </div>
        </div>
    );
}