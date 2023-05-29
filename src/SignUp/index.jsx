import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../Components/Layout';
import { ShoppingCartContext } from '../Context';

const SignUp = () => {

    const context = React.useContext(ShoppingCartContext);
    const navigate = useNavigate();

    const createNewUser = (user, mail, password, e) => {
        e.preventDefault();
        context.dataBase.push({usuario: user, email: mail, contrasena: password})
        context.setDataBase([...context.dataBase]);
        navigate('/sign-in');
        console.log(context.dataBase)
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
        </Layout>
    );
}

export  { SignUp };