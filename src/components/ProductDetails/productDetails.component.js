import React from 'react';

const ProductDetails = props => {
    const {
        img,
        description,
        code,
    } = props;

    return (
        <div className="col-product">
            <figure className="product-image">
                <img src={`img/${img}`} alt={description} />
                <div className="product-description">
                    <h1>{description}</h1>
                    <p className="product-code">Product code {code}</p>
                </div>
            </figure>
        </div>
    );
};

export default ProductDetails;