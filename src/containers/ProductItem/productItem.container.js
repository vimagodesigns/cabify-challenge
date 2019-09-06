import React, { useState, useGlobal } from 'reactn';

import ProductItemComponent from '../../components/ProductItem/productItem.component';

export const ProductsItemContainer = props => {
    const {
        itemProps: {
            img,
            description,
            code,
            price,
            currency,
            type,
        } = {},
    } = props;

    const [quantity, setQuantity] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [checkout] = useGlobal('checkout');

    const calculateTotalProduct = quantity => {
        const newTotalProduct = quantity * price;
        setTotalProduct(newTotalProduct);
    };

    const handleNewQuantity = (value) => {
        const newQuantity = value || checkout.getScannedProduct(type).quantity;
        setQuantity(newQuantity);
        calculateTotalProduct(newQuantity);
    }

    const handleQuantityChange = (event) => {
        event.preventDefault();
        const newQuantity = Number(event.target.value);
        handleNewQuantity(newQuantity);
        checkout.clearScannedProduct(type);
        checkout.scanTimes(newQuantity, type);

    }

    const handleIncreaseQuantity = (event) => {
        event.preventDefault();
        checkout.scan(type);
        handleNewQuantity();
    }
    
    const handleDecreaseQuantity = (event) => {
        event.preventDefault();
        checkout.unscan(type);
        handleNewQuantity();
    }

    return (
        <ProductItemComponent
            img={img}
            description={description}
            code={code}
            price={price}
            currency={currency}
            quantity={quantity}
            onChageQuantity={handleQuantityChange}
            increaseQuantity={handleIncreaseQuantity}
            decreaseQuantity={handleDecreaseQuantity}
            totalProduct={totalProduct}
        />
    );
};

export default ProductsItemContainer;