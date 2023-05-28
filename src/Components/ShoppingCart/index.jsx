import React from 'react';
import { ShoppingCartContext } from '../../Context/index.jsx';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { OrderCard } from '../OrderCard/index.jsx';

const ShoppingCart = () => {

    const context = React.useContext(ShoppingCartContext);
    const [message, setMessage] = React.useState(false);
    const navigate = useNavigate();
    const variable = context.cartProducts.map(x => x.price);

    const handleCheckout = () => {

        if (context.cartProducts.length > 0) {
            const dateNow = new Date();
            const orderToAdd = {
                id: context.order.length + 1,
                date: `${dateNow.getDate()} / ${dateNow.getMonth() + 1} / ${dateNow.getFullYear()}`,
                products: [...context.cartProducts],
                totalProducts: context.cartProducts.length,
                totalPrice: variable.length === 0 ? 0 : variable.reduce((a,b) => a+b)
            }
            context.setOrder([...context.order, orderToAdd])
            context.setCartProducts([])
            context.setCounter(0);
            context.setOpenCart(false);
            navigate(`/my-orders/last`)
        } else {
            setMessage(true)
        }

    }
    
    return (
        <aside className="flex p-2 z-10 flex-col fixed right-0 border overflow-y-auto overflow-x-hidden bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]">
            <div className = "flex justify-between items-center p-2">
                <h2 className = "font-medium text-xl">My Order</h2>
                <div
                onClick = {() => context.setOpenCart(false)}
                > <ArrowLeftIcon className="text-black-500 h-6 w-6 cursor-pointer" /> </div>
            </div>
            {context.cartProducts.map(x => 
            <OrderCard 
                key = {x.id} 
                id = {x.id} 
                title = {x.title} 
                images = {x.images[0]}
                price = {x.price}
            />
            )}
            <div>
                <p className="flex flex-col items-start justify-start my-4 ml-6">
                    <span>Cantidad: <b>{context.cartProducts.length}</b></span>
                    <span>Total: <b>{variable.length === 0 ? 0 : variable.reduce((a,b) => a+b)}</b></span>
                </p>
                <div className="bg-white w-full flex flex-col items-center justify-center">
                    {message && <p className='text-red-500 p-6 text-center'>You must add a product to be able to checkout</p>}
                    <button 
                    className="flex items-center justify-center bg-black text-white p-2 w-5/6 rounded-lg font-bold text-center"
                    onClick = {() => handleCheckout()}
                    >
                        CHECKOUT
                    </button>
                </div>
            </div>
        </aside>
    );
}

export { ShoppingCart };