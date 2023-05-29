import React from 'react';
import { Layout } from '../Components/Layout';
import { ShoppingCartContext } from '../Context';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {

    const context = React.useContext(ShoppingCartContext);
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <ArrowLeftIcon className="text-black-500 h-20 w-80 cursor-pointer flex items-center" 
                onClick = {() => navigate('/sign-in')}
                />
                <p>We sent you a temporal password to adress</p>
            </div>
        </Layout>
    );
}

export { Forgot };