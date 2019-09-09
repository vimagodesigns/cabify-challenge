import React from 'react';

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