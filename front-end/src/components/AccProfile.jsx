import React from 'react'

const AccProfile = () => {
    return (
        <div>
            <div className='flex flex-col items-center gap-2'>
                <p>Logado como Ricardo (ricardo.ricardo.com)</p>
                <button className='bg-primary-400 min-w-32 rounded-full px-4 py-2 transition text-white cursor-pointer'>
                Sair
                </button>
            </div>
        </div>
    )
};

export default AccProfile;
