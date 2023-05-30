import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../Components/Layout';
import { ShoppingCartContext } from '../Context';

const SignUp = () => {

    const context = React.useContext(ShoppingCartContext);
    const navigate = useNavigate();

    if(context.active) {
        navigate('/my-account')
    }


    const createNewUser = (user, mail, password, e) => {
        e.preventDefault();
        const newUser = {usuario: user, email: mail, contrasena: password}
        if (context.dataBase.some(x => x.usuario === user) || context.dataBase.some(x => x.email === mail)) {
            context.setMensaje('This username or email is already used');
        } else {
            context.dataBase.push(newUser)
            context.setDataBase([...context.dataBase]);
            context.setMensaje('Usuario creado con éxito, bienvenido: ' + user);
            setTimeout(() => {
                navigate('/sign-in');
                context.setMensaje('');
            }, 2000);
        }
    }

    return (
        <Layout>
            <h1 className="font-bold text-xl mb-4">Sign Up</h1>
            <form onSubmit={(e) => createNewUser(context.newUsername, context.newEmail, context.newPassword, e)}>
                <div className="w-80 flex justify-between m-2 flex-col">
                    <label className="font-light text-sm">Your Username:</label>
                    <input 
                    type="text" 
                    className="border h-10 border-gray-400 rounded-lg p-2" 
                    placeholder="username123"
                    onChange = {(e) => context.setNewUsername(e.target.value)}
                    />
                </div>
                <div className="w-80 flex justify-between m-2 flex-col">
                    <label className="font-light text-sm">Your Email adress:</label>
                    <input 
                    type="text" 
                    className="border h-10 border-gray-400 rounded-lg p-2" 
                    placeholder="emailexample@gmail.com"
                    onChange = {(e) => context.setNewEmail(e.target.value)}
                    />
                </div>
                <div className="w-80 flex justify-between m-2 flex-col">
                    <label className="font-light text-sm">Your Password:</label>
                    <input 
                    type="password" 
                    className="border h-10 border-gray-400 rounded-lg p-2" 
                    placeholder="*******" 
                    onChange = {(e) => context.setNewPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="w-80 h-10 m-2 bg-black text-white rounded-lg font-bold">Create Account</button>
            </form>
            <p className="text-red-500">{context.mensaje}</p>
        </Layout>
    );
}

export  { SignUp };