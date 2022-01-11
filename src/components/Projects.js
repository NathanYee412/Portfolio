import Card from './Card';

export default function Projects() {

    return(
        <div className='bg-gray-800'>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-6 pb-9 bg-gray-900 rounded-md'>
                <h1 className='text-5xl font-bold text-[#fbff00] pb-10'>Projects</h1>
                <div className='columns-3'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}