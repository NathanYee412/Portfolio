export default function Footer() {

    return( 
        <div className='bg-gray-900 pt-9'>
            <div className='container sm:grid sm:grid-cols-2 max-w-7xl px-2 sm:px-6 lg:px-8 pt-4 pb-20'>
                <div>
                    <h1 className='text-3xl font-bold text-[#fbff00]'>Contact Information</h1>
                    <p className='text-white font-bold'>Nathan Yee</p>
                    <a className='text-white font-bold' href='mailto:yee-nathan@outlook.com'>yee-nathan@outlook.com</a>
                    <p className='text-white font-bold'>Irvine, CA 92606</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-[#fbff00]'>Social media</h1>
                    <a href='https://www.linkedin.com/in/nathanyee88/' className='text-white font-bold'>LinkedIn</a>
                    <a href='https://github.com/NathanYee412' className='text-white font-bold'>GitHub</a>
                </div>
            </div>
        </div>
    );
}