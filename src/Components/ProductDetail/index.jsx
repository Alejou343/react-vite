import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context/index.jsx';

const ProductDetail = () => {

    const context = React.useContext(ShoppingCartContext)
    
    return (
        <aside className="flex p-2 flex-col fixed right-0 border overflow-y-auto bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]">
            <div className = "flex justify-between items-center p-2">
                <h2 className = "font-medium text-xl">Detail</h2>
                <div onClick = {() => context.setOpenDetail(false)}> 
                    <ArrowLeftIcon className="text-black-500 h-6 w-6 cursor-pointer" />
                </div>
            </div>
            <img className= "flex mx-auto w-full h-auto object-cover rounded-lg" src={context.productShow.images[0]} alt="" />
            <div className="flex justify-between items-center p-1">
                <h1 className="font-bold">{context.productShow.title}</h1>
                <p className = "font-bold">${context.productShow.price}</p>
            </div>
            <p> {context.productShow.description}.</p>
        </aside>
    );
}

export { ProductDetail };