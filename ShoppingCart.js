import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ShoppingCart() {
    const [cart, setCart] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3001/api/cart')
            .then(response => {
                setCart(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        }, []);

        return (
            <div>
                <h1>Shopping Cart</h1>
                <ul>
                    {cart.items.map(item => (
                        <li key={item.id}>
                            {item.name} x {item.quantity}
                        </li>
                    ))}
                </ul>
                <p>Total: ${cart.total}</p>
            </div>
        );
    }

export default ShoppingCart;

