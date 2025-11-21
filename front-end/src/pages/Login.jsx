import React from 'react'
import { useState } from 'react';
import { Link, Navigate} from "react-router-dom"
import axios from "axios";


const Login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();
        if (email && password) {
            try {
                const { data: userDoc } = await axios.post("/users/login", {
                    email,
                    password,
                });

                setUser(userDoc)
                setRedirect(true)
            } catch (erro) {
                console.error("Erro no login:", erro);
                alert("Email ou senha incorretos!");
            }
        } else {
            alert("Você precisa preencher o email e a senha!");
        }
    };

    if (redirect) return <Navigate to="/" />;

    return (
            <section className='flex items-center'>
                <div className='mx-auto flex max-w-96 flex-col items-center gap-4 w-full'>
                    <h1 className='text-3xl font-bold'>Faça seu login</h1>

                    <form className='flex w-full flex-col gap-2' onSubmit={handleSubmit}>
                        <input type="email" 
                        placeholder='Digite seu e-mail' 
                        className='w-full rounded-full border border-gray-300 px-4 py-2' 
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            }}
                        />
                        <input type="password" 
                        placeholder='Digite sua senha' 
                        className='w-full rounded-full border border-gray-300 px-4 py-2'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        />
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
