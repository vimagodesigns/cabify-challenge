import React from 'react';
import PropTypes from 'prop-types';

import ProductDetais from '../../atoms/ProductDetails/productDetails.component';
import QuantityInputComponent from '../../atoms/QuantityInput/quantityInput.component';
import ProductAmountComponent from '../../atoms/ProductAmount/productAmount.component';

const ProductsItemComponent = ({
    price,
    currency,
    totalProduct,
    thumbnail,
    description,
    code,
    onClickDetails,
    quantity,
    onChageQuantity,
    increaseQuantity,
    decreaseQuantity,
}) => (
    <li className="product row">
        <ProductDetais 
            thumbnail={thumbnail}
            description={description}
            code={code}
            onClickDetails={onClickDetails}
        />
        <QuantityInputComponent
            quantity={quantity}
            onChageQuantity={onChageQuantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
        />
        <ProductAmountComponent
            customClassName="col-price"
            amount={price}
            currency={currency}
        />
        <ProductAmountComponent
            customClassName="col-total"
            amount={totalProduct}
            currency={currency}
        />
    </li>
);

export default ProductsItemComponent;

ProductsItemComponent.propTypes = {
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    totalProduct: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    onClickDetails: PropTypes.func.isRequired,
    quantity: PropTypes.number.isRequired,
    onChageQuantity: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
};