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
                    <Card projectName='Portfolio Project' description='A static webpage project built with ReactJS and styled with Tailwind CSS. This is the current webpage that you are viewing' tags={['ReactJS', 'JavaScript','TailwindCSS']}  link='https://github.com/NathanYee412/Portfolio' img='https://i.imgur.com/2NrRwxX.png'/>
                    <Card projectName='Instagram Link Tree' description='Custom link tree built with ReactJS. Deployed with GitHub Pages with a custom domain setup with Godaddy.com' tags={['ReactJS', 'JavaScript']} link='https://lso.life/' img='https://i.imgur.com/Jhpbzc2.png'/>
                    <Card projectName='To-do List' description='A to-do list built with node.js and EJS templates' tags={['Node.js', 'JavaScript','EJS']} link='https://github.com/NathanYee412/EJS-To-Do-List-v1' img='https://i.imgur.com/A2YXyZW.png'/>
                </div>
                <div className='sm:columns-3'>
                    <Card projectName='Portfolio Project' description='A static webpage project built with ReactJS and styled with Tailwind CSS. This is the current webpage that you are viewing' tags={['ReactJS', 'JavaScript','TailwindCSS']}  link='https://github.com/NathanYee412/Portfolio' img='https://i.imgur.com/2NrRwxX.png'/>
                    <Card projectName='Instagram Link Tree' description='Custom link tree built with ReactJS. Deployed with GitHub Pages with a custom domain setup with Godaddy.com' tags={['ReactJS', 'JavaScript']} link='https://lso.life/' img='https://i.imgur.com/Jhpbzc2.png'/>
                    <Card projectName='To-do List' description='A to-do list built with node.js and EJS templates' tags={['Node.js', 'JavaScript','EJS']} link='https://github.com/NathanYee412/EJS-To-Do-List-v1' img='https://i.imgur.com/A2YXyZW.png'/>
                </div>
            </div>
        </div>
    );
}