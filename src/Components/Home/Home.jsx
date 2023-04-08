import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';


const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleAddToCart = (tshirt) => {
        const exists = cart.find(ts => ts._id === tshirt._id)
        if (exists) {
            toast.error('This shirt already added!');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            toast.success('Successfully added!');
        }
    }

    const handleRemoveToCart = (id) => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tShirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveToCart={handleRemoveToCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;