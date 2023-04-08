import React from 'react';
import './Cart.css'
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Theme } from 'emoji-picker-react';
const Cart = ({ cart, handleRemoveToCart }) => {
    let massage;
    if (cart.length == 0) {
        massage = <p>Please added some product!</p>
    } else {
        massage = <div>
            <h3>Wellcome</h3>
            <p>Thanks for added product</p>
        </div>
    }
    return (
        <div className='cart'>

            <h3>Order summary: {cart.length}</h3>
            {
                cart.length === 0 ? '1F612' : '128512'
            }
            <div >
                {
                    massage
                }
                {
                    cart.map(ts => <p className='item-name'>{ts.name} <button onClick={() => handleRemoveToCart(ts._id)}><XMarkIcon className="h-6 w-6 text-blue-500 style" /></button></p>)
                }

                {
                    cart.length === 2 && <p>Double Item</p>
                }
            </div>
        </div>
    );
};

export default Cart;