import React from 'react';
import ProductItem from './AddtoCart/addtocart';
import CardIcon from "./Carticon/carticon"

const productList = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
];

const ProductList = () => {
    return (

        <div className="product-list">
            <CardIcon />
            {productList.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
