import React from 'react';

const ProductAmount = ({ customClassName, amount, currency }) => (
    <div className={customClassName}> 
        <span className="product-price">{amount}</span>
        <span className="product-currency currency">{currency}</span>
    </div>
);

export default ProductAmount;