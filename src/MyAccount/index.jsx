import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../Components/Layout';
import { ShoppingCartContext } from '../Context';

const MyAccount = () => {

    const navigate = useNavigate();
    const context = React.useContext(ShoppingCartContext)

    const logout = () => {
        setTimeout(() => {
            context.setActive(false);
            navigate('/');
        }, 2000);
    }

    return (
        <Layout>
            <h1 className="font-bold text-xl mb-4">My Account</h1>
            <div className="w-80 flex justify-between m-2">
                <label className="font-bold">Username:</label>
                <p className="h-10">{context.dataBase[context.indice].usuario}</p>
            </div>
            <div className="w-80 flex justify-between m-2">
                <label className="font-bold">Email adress:</label>
                <p className="h-10">{context.dataBase[context.indice].email}</p>
            </div>
            <button 
            className="w-80 h-10 m-2 bg-white text-gray-500 rounded-lg border font-bold border-gray-400"
            onClick={() => logout()}
            >
                Log Out
            </button>
        </Layout>
    );
}

export { MyAccount };