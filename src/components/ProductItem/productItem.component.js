import React from 'react';

const productsItemComponent = props => {
    const {
        img,
        description,
        code,
        price,
        currency,
        quantity,
        totalProduct,
        onChageQuantity,
    } = props;

    return (
        <li className="product row">
            <div className="col-product">
                <figure className="product-image">
                    <img src={`img/${img}`} alt={description} />
                    <div className="product-description">
                        <h1>{description}</h1>
                        <p className="product-code">Product code {code}</p>
                    </div>
                </figure>
            </div>

            {/* Componetn quantity */}
            <div className="col-quantity">
                <button className="count">-</button>
                <input
                    type="text"
                    className="product-quantity"
                    defaultValue={quantity}
                    onInput={onChageQuantity}
                />
                <button className="count">+</button>
            </div>
            {/* END Componetn quantity */}

            <div className="col-price">
                <span className="product-price">{price}</span>
                <span className="product-currency currency">{currency}</span>
            </div>

            {/* producto total (container) */}
            <div className="col-total"> 
                <span className="product-price">{totalProduct}</span>
                <span className="product-currency currency">€</span>
            </div>
        </li>
    );
};

export default productsItemComponent;