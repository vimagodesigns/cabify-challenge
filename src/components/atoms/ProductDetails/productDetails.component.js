import React from 'react';

import './productDetails.css';

const ProductDetails = ({ thumbnail, description, code, onClickDetails }) => (
    <div className="col-product" onClick={onClickDetails}>
        <figure className="product-image">
            <img src={`img/${thumbnail}`} alt={description} />
            <div className="product-description">
                <h1>{description}</h1>
                <p className="product-code">Product code {code}</p>
                <p className="product-code click-info">Click for more details</p>
            </div>
        </figure>
    </div>
);

export default ProductDetails;