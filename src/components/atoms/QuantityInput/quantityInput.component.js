import React from 'react';
import PropTypes from 'prop-types';

const QuantityInput = ({
    quantity,
    onChageQuantity,
    increaseQuantity,
    decreaseQuantity,
}) => (
    <div className="col-quantity">
        <button className="count" onClick={decreaseQuantity}>-</button>
        <input
            type="text"
            className="product-quantity"
            value={quantity}
            onChange={onChageQuantity}
        />
        <button className="count" onClick={increaseQuantity}>+</button>
    </div>
);

export default QuantityInput;

QuantityInput.propTypes = {
    quantity: PropTypes.number.isRequired,
    onChageQuantity: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
};