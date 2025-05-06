import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ProductDetails({ match }) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/api/products/${match.params.id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [match.params.id]);

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}

export default ProductDetails;

