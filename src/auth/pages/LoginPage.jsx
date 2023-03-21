import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const LoginPage = () => {

    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const onLogin = () => { 
        
        const lastPath = localStorage.getItem('lastPath') || '/'

        login('Dani')
        navigate(lastPath, { replace: true })

        // Navigate to the last page
        // window.history.back()
    }

    return (
        <main className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-center text-3xl'>LoginPage</h1>

            <button
                onClick={onLogin}
                className='bg-slate-400 px-4 py-2 rounded mt-4 hover:bg-slate-300 transition' >
                Login
            </button>
        </main>
    )
}

export default LoginPage