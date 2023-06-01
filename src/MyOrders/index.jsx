import React from 'react';
import { Layout } from '../Components/Layout';
import { ShoppingCartContext } from '../Context';
import { Orderes } from '../Components/Orderes';
import { Link, useNavigate } from 'react-router-dom';

const MyOrders = () => {

    const context = React.useContext(ShoppingCartContext);
    const navigate = useNavigate();

    return (
        <Layout>
            <h1 className="mb-4 font-bold">
                My Orders
            </h1>
            {context.order.map((x, i) => 
            <Link key={i} to={`/my-orders/${x.id - 1}`}>
                <Orderes 
                    key={x.id}
                    purchase={x.id} 
                    total={x.totalPrice} 
                    quantity={x.totalProducts} 
                    date={x.date}
                />
            </Link>
            )}
        </Layout>
    );
}

export { MyOrders };
