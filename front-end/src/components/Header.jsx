import React from 'react';

const Header = () => {
    return (
        <header className='shadow-md'>
            <div className='flex items-center justify-between px-4 py-4 sm:px-8 max-w-7xl mx-auto'>
                <div className='flex items-center space-x-2 min-w-0'>
                    <img
                        className='h-10 w-auto shrink-0'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
                        alt="Logo do projeto"
                    />
                    <p className='text-lg font-bold text-primary-green truncate max-w-[120px] sm:max-w-none'>
                        .fullstackproject
                    </p>
                </div>

                <div className='hidden items-center border border-gray-300 pr-4 pl-6 py-2 rounded-full shadow-md lg:flex'>
                    <p className='pr-4 border-r border-r-gray-300'>Qualquer lugar</p>
                    <p className='px-4 border-r border-r-gray-300'>Qualquer semana</p>
                    <p className='px-4'>Hóspedes</p>
                    <div className='bg-primary-400 rounded-full p-2 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>

                <div className='flex items-center border border-gray-300 pr-4 pl-6 py-2 rounded-full shadow-md gap-2
                '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-600">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-gray-600">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                    </svg>
                    <p className='sm:max-w-none max-w-32 truncate'>Ricardo XYZ</p>
                </div>

            </div>
        </header>
    )
};

export default Header;
