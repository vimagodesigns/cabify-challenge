import React from 'react';
import PropTypes from 'prop-types';

const ProductAmount = ({ customClassName, amount, currency }) => (
    <div className={customClassName}> 
        <span className="product-price">{amount}</span>
        <span className="product-currency currency">{currency}</span>
    </div>
);

export default ProductAmount;

ProductAmount.propTypes = {
    customClassName: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string.isRequired,
};

ProductAmount.defaultProps = {
    customClassName: undefined,
};