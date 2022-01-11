export default function Card(props) {

    return(
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img className='w-full' src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
            <div className='px-6 py-4 bg-slate-100'>
                <div className='font-bold text-xl mb-2'>{props.projectName}</div>
                <p className='text-gray-700 text-base'>
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