import React from 'react';

const ShoppingCartContext = React.createContext();

const ShoppingCartProvider = ({ children }) => {

    //Counter to Shopping cart
    const [counter, setCounter] = React.useState(0);

    //Open/Close Product detail
    const [openDetail, setOpenDetail] = React.useState(false);

    //Open/Close ShoppingCart

    const [openCart, setOpenCart] = React.useState(false);

    //Fetch items from API
    const [items, setItems] = React.useState(null);

    //Product to show in Product Detail
    const [productShow, setProductShow] = React.useState(null);

    //Products on Shopping cart

    const [cartProducts, setCartProducts] = React.useState([]);

    const [valor, setValor] = React.useState('');

    const [order, setOrder] = React.useState([]);

    // Login 

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [mensaje, setMensaje] = React.useState('');

    // Sign up 

    const [newUsername, setNewUsername] = React.useState('');
    const [newEmail, setNewEmail] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [dataBase, setDataBase] = React.useState([]);

    // Login user

    const [active, setActive] = React.useState(false);
    const [indice, setIndice] = React.useState(-1);
    
    React.useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    const abrirModal = (ID) => {
        setOpenDetail(true)
        const index = items.findIndex(x => x.id === ID)
        return setProductShow(items[index])
    }

    const removeItem = (ID) => {
        const index = cartProducts.findIndex(x => x.id === ID)
        const newItems = [...cartProducts]
        newItems.splice(index, 1)
        setCartProducts(newItems)
        setCounter(cartProducts.length - 1)
    }

    const things = {
        counter, 
        items,
        openDetail, 
        productShow,
        cartProducts,
        openCart, 
        valor,
        order,
        username,
        password,
        mensaje,
        newUsername,
        newEmail,
        newPassword,
        dataBase,
        active,
        indice,
        setIndice,
        setActive,
        setDataBase,
        setNewPassword,
        setNewEmail,
        setNewUsername,
        setMensaje,
        setPassword,
        setUsername, 
        setOrder,
        setValor, 
        setOpenCart,
        setCounter, 
        setItems,
        setOpenDetail,
        abrirModal, 
        setCartProducts,
        removeItem
    }

    return (
        <ShoppingCartContext.Provider value = {things}>
            { children }
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }