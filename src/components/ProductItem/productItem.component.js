import React from 'react';

import ProductDetais from '../ProductDetails/productDetails.component';
import QuantityInputComponent from '../QuantityInput/quantityInput.component';
import ProductAmountComponent from '../ProductAmount/productAmount.component';

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