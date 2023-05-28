import React from 'react';
import { Layout } from '../Components/Layout';
import { Card } from '../Components/Card';
import { ProductDetail } from '../Components/ProductDetail/index.jsx';
import { ShoppingCartContext } from '../Context';
import { ShoppingCart } from '../Components/ShoppingCart';
import { useLocation } from 'react-router-dom';

const Home = () => {

    const context = React.useContext(ShoppingCartContext);
    const [text, setText] = React.useState('');
    const location = useLocation();

    if (location.pathname.slice(1) === 'all' || location.pathname.slice(1) === '') {
        var filtro = context.items;
    } else {
        var filtro = context.items?.filter(x => x.category.name.toLowerCase() === location.pathname.slice(1));
    }

    const busqueda = filtro?.filter(x => x.title.toLowerCase().includes(text.toLowerCase())) || filtro;

    const auxiliar = () => {
        if (busqueda?.length === 0) {
            return (
                <div className="text-red-500">
                    No matches for '{text || location.pathname.slice(1)}' 
                </div>
            )
        } else {
            return (
                busqueda?.map(x => <Card key = {x.id} id = {x.id} title = {x.title} price = {x.price}  image = {x.images} category = {x.category.name}/>)
            )
        }
    }
    
    return (
        <Layout>
            <div>
                <input className="mb-6 w-80 border-2 border-blue-200 rounded-lg text-center focus:outline-none" type="text" placeholder='Search Item'
                onChange = {(e) => setText(e.target.value)}/>
            </div>
            <div className = 'grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
                {auxiliar()}
            </div>
            {context.openDetail && <ProductDetail />}
            {context.openCart && <ShoppingCart />}
        </Layout>
    );
}

export  { Home };
