import React from 'react'
import { Link } from "react-router-dom"


const Login = () => {
    return (
            <section className='flex items-center'>
                <div className='mx-auto flex max-w-96 flex-col items-center gap-4 w-full'>
                    <h1 className='text-3xl font-bold'>Faça seu login</h1>

                    <form className='flex w-full flex-col gap-2'>
                        <input type="email" placeholder='Digite seu e-mail' className='w-full rounded-full border border-gray-300 px-4 py-2'/>
                        <input type="password" placeholder='Digite sua senha' className='w-full rounded-full border border-gray-300 px-4 py-2'/>
                        <button className='cursor-pointer w-full bg-primary-400 text-white font-bold rounded-full border border-gray-300 px-4 py-2'>Login</button>
                    </form>

                    <p>
                        Ainda não tem uma conta? 
                        <Link to='/register' className='underline font-semibold'></Link>
                    </p>

                </div>
            </section>
    )
}

export default Login
