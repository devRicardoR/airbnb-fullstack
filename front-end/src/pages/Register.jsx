import { useState } from 'react';
import { Link, Navigate} from "react-router-dom"
import axios from "axios";


const Register = ({ setUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
            if (name && email && password) {
                try {
                    const { data: userDoc } = await axios.post("/users", {
                        email,
                        password,
                        name,
                    });

                    setUser(userDoc)
                    setRedirect(true)
                } catch (error) {
                    alert(`Deu um erro ao tentar cadastrar o usuário: ${JSON.stringify(error)}`)
                }
            } else {
                alert("Você precisa preencher o email, o nome e a senha!");
            }
        };

    if (redirect) return <Navigate to="/" />;

    return (
            <section className='flex items-center'>
                <div className='mx-auto flex max-w-96 flex-col items-center gap-4 w-full'>
                    <h1 className='text-3xl font-bold'>Faça seu cadastro</h1>

                    <form className='flex w-full flex-col gap-2' onSubmit={handleSubmit}>
                        <input type="text" 
                        placeholder='Digite seu nome' 
                        className='w-full rounded-full border border-gray-300 px-4 py-2' 
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            }}
                        />
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
                        <button className='cursor-pointer w-full bg-primary-400 text-white font-bold rounded-full border border-gray-300 px-4 py-2'>
                            Registrar
                        </button>
                    </form>

                    <p>
                        Já tem uma conta? {" "}
                        <Link to='/login' className='underline font-semibold'>
                            Faça o login aqui!
                        </Link>
                    </p>

                </div>
            </section>
    )
}

export default Register;
