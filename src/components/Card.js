export default function Card(props) {
        
    return(
        <div className='max-w-sm rounded overflow-hidden shadow-lg pt-3 gap-4'>
            <img className='w-full' alt='project' src={props.img} />
            <div className='px-6 py-4 bg-slate-100'>
                <div className='columns-2'>
                    <div className='font-bold text-xl mb-2'>{props.projectName}</div>
                    <a href={props.link} className='btn font-bold bg-green-400 px-2 py-2 mx-2 my-auto float-right rounded-md text-xs'>View Project</a>
                </div>
                <p className='text-gray-700 text-base pt-3'>
                    {props.description}
                </p>
            </div>
            <div className='px-6 pt-4 pb-2 bg-slate-100'>
                {props.tags.map((x) => {
                    return(<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{x}</span>);
                })}
            </div>
        </div>
    );
}