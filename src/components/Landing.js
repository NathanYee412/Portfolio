export default function Landing() {
    
    return(
        <div className='flex bg-cover bg-slate-800 pl-8 pr-8'>
            <div className='flex container justify-center md:m-40'>
                <div className='md:grid md:grid-cols-2 md:gap-4 max-w-screen-xl'>
                    <div className='flex justify-center'>
                        <div className='text-center sm:text-left lg:text-left pl-8 pb-8 pr-8'>
                            <h1 className='tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-400 text-6xl sm:text-8xl md:text-9xl'>
                                <span className='block xl:inline'>Hello<br/>World!</span>
                            </h1>
                            <p className='animate-bounce text-lg md:text-3xl md:text-left lg:text-left text-[#575bfb]  pt-10'>Welcome to my personal<br/> portfolio site!</p>
                        </div>
                    </div>    
                    <div className='flex justify-center object-scale-down h-0 lg:h-auto lg:w-auto'>
                        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2046041-a08f-46bd-85d1-27ffbe7b4585/dbo9hr9-d1c0ac4a-669b-4ff3-b44b-6573079f1867.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyMDQ2MDQxLWEwOGYtNDZiZC04NWQxLTI3ZmZiZTdiNDU4NVwvZGJvOWhyOS1kMWMwYWM0YS02NjliLTRmZjMtYjQ0Yi02NTczMDc5ZjE4NjcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.owAgL46ZfcMrK0tJ36eAYrhsbo6uST416jtUB-K1SoE' alt='computer'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}