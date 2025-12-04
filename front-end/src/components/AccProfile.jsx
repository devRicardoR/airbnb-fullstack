import React, { useState } from 'react';
import axios from "axios";

const AccProfile = ({ user, setUser }) => {
    const[redirect, setRedirect] = useState(false)

    const logout = async () => {
        try {
            const { data } = await axios.post("/user/logout")
            console.log(data)
            setUser(null)
            setRedirect(true)
        } catch (error) {
            alert(JSON.stringify(error))
        }
    }
    

    if(redirect) return <Navigate to="/" />

    if(!user) return <></>

    return (
        <div>
            <div className='flex flex-col items-center gap-2'>
                <p>Logado como {user.name} ({user.email})</p>
                <button onClick={logout} className='bg-primary-400 min-w-32 rounded-full px-4 py-2 transition text-white cursor-pointer'>
                Sair
                </button>
            </div>
        </div>
    )
};

export default AccProfile;
