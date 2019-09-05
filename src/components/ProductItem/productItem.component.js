import React from 'react';

import ProductDetais from '../ProductDetails/productDetails.component';
import QuantityInputComponent from '../QuantityInput/quantitiInput.component';
import ProductAmountComponent from '../ProductAmount/productAmount.component';

const ProductsItemComponent = props => {
    const {
        price,
        currency,
        totalProduct,
    } = props;

    const productDetailsProps = {
        img: props.img,
        description: props.description,
        code: props.code,
    };

    const quantityInputProps = {
        quantity: props.quantity,
        onChageQuantity: props.onChageQuantity,
        increaseQuantity: props.increaseQuantity,
        decreaseQuantity: props.decreaseQuantity,
    };

    return (
        <li className="product row">
            <ProductDetais {...productDetailsProps} />
            <QuantityInputComponent {...quantityInputProps} />
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
};

export default ProductsItemComponent;