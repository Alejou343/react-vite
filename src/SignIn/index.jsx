import React from 'react';
import { Layout } from '../Components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../Context';

const SignIn = () => {

    const context = React.useContext(ShoppingCartContext);
    const navigate = useNavigate();

    const login = (user, pass, e) => {
        e.preventDefault();
        const index = context.dataBase.findIndex(x => x.usuario === user);
        if (index === -1) {
            context.setMensaje('El usuario ingresado no existe');
        } else {
            if (context.dataBase[index].contrasena === pass) {
                context.setMensaje('');
                
                setTimeout(() => {
                    context.setActive(true);
                    context.setIndice(index);
                    navigate('/my-account');
                }, 2000);

            } else {
                context.setMensaje('Contraseña incorrecta');
            }
        }
        
    }

    return (
        <Layout>
            <h1 className="font-bold text-xl mb-4">Sign In</h1>
            <div className="flex flex-col">
                <form className="flex flex-col" onSubmit={(e) => login(context.username, context.password, e)}>
                    <input 
                    type="text" 
                    placeholder="Username" 
                    className="w-80 p-2 h-10 m-2 border border-gray-400 rounded-lg"
                    onChange = {(e) => context.setUsername(e.target.value)} 
                    />
                    <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-80 p-2 h-10 m-2 border border-gray-400 rounded-lg"
                    onChange = {(e) => context.setPassword(e.target.value)} 
                    />
                    <button type="submit" className="w-80 h-10 m-2 bg-black text-white rounded-lg font-bold">
                        Login
                    </button>
                </form>
                <Link to="/forgot-password">
                    <p className="text-center text-sm mt-2 mb-4">Forgot my password</p>
                </Link>
                <Link to="/sign-up">
                    <button className="w-80 h-10 m-2 bg-white text-gray-500 rounded-lg border font-bold border-gray-400">Sign Up</button>
                </Link>
            </div>

            <p className="text-red-500">{context.mensaje}</p>
        </Layout>
    );
}

export { SignIn };