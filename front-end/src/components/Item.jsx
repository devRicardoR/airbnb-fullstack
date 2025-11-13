import React from 'react'

const Item = () => {
    return (
        <a href='/' className='flex flex-col gap-2'>
            <img src="https://img.apresenta.me/M7ItVksvyNIzM7ZMszBMNkg0MTcxi89JLMhMzsssKtA3MDe3NDfRT8-LTMnJLE2yzVQzMjQ2tU0GAA.jpg" alt="Imagem da acomodação" className='aspect-square object-cover rounded-2xl'/>

            <div>
                <h3 className='text-xl font-semibold'>Casa de Praia</h3>
                <p className='truncate text-gray-600'>4 quartos, sala, cozinha, banheiro, piscina e área de lazer completa!</p>
            </div>

            <p><span className='font-semibold'>R$ 550</span> por noite</p>
        </a>
    )
};

export default Item;
