import React from 'react';

const QuantityInput = props => {
    const {
        quantity,
        onChageQuantity,
        increaseQuantity,
        decreaseQuantity,
    } = props;

    return (
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
};

export default QuantityInput;