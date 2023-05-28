import React from 'react';
import { Layout } from '../Components/Layout';
import { ShoppingCartContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const OrderCard = (props) => {
    return (
    <div className="flex justify-between items-center my-1 w-80">
        <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img src={props.image} alt={props.title} className="w-full h-full rounded-lg object-cover" />
            </figure>
            <p className="text-sm font-light">{props.title}</p>
        </div>
        <div className="flex items-center gap-2">
            <p className="text-lg font-medium">${props.price}</p>
        </div>
    </div>
    )
}

const MyOrder = () => {

    const context = React.useContext(ShoppingCartContext);
    const navigate = useNavigate();
    const currentPath = window.location.pathname;
    let index = currentPath.substring(11);

    
    if (index === 'last') {
        index = context.order.length - 1;
    }

    return (
        <Layout>
            <div className="flex relative w-80 mb-3 cursor-pointer items-center justify-center" onClick={() => navigate('/my-orders')}>
                <ArrowLeftIcon className='w-6 h-6 absolute left-0'/>
                <h1 className="font-bold">
                    MyOrder
                </h1>
            </div>
            {context.order?.[index]?.products.map(x => 
            <OrderCard 
                key={x.id} 
                title={x.title} 
                image={x.images[0]} 
                price={x.price} 
            />)}
        </Layout>
    );
}

export { MyOrder };