import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const OrderCard = (props) => {

    const { images, title, price, id } = props; 

    const context = React.useContext(ShoppingCartContext);

    return (
        <div className="flex justify-between items-center my-1">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img src={images} alt={title} className="w-full h-full rounded-lg object-cover" />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                <TrashIcon className="text-black-500 h-6 w-6 cursor-pointer" onClick = {() => context.removeItem(id)}/>
            </div>
        </div>
    );
}

export { OrderCard };