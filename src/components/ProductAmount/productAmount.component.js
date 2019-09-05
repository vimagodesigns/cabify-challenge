import React from 'react';

const ProductAmount = props => {
    const {
        customClassName,
        amount,
        currency,
    } = props;

    return (
        <div className={customClassName}> 
            <span className="product-price">{amount}</span>
            <span className="product-currency currency">{currency}</span>
        </div>
    );
};

export default ProductAmount;