import React, { useState, useGlobal } from 'reactn';

import ProductItemComponent from '../../components/ProductItem/productItem.component';
import ProductModalContainer from '../ProductModal/productModal.container';

export const ProductsItemContainer = ({ product }) => {
    const { thumbnail, description, code, price, type } = product;

    const [quantity, setQuantity] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);

    const [currency] = useGlobal('currency');
    const [checkout] = useGlobal('checkout');
    const [, setCostWithoutDiscount] = useGlobal('costWithoutDiscount');
    const [, setCostWithDiscount] = useGlobal('costWithDiscount');
    const [, setTotalItems] = useGlobal('totalItems');
    const [, setScannedProducts] = useGlobal('scannedProducts');
    const [modalComponentList, setModalComponentList] = useGlobal('modalComponentList');
    const [, setProductSelected] = useGlobal('productSelected');


    const calculateTotalProduct = quantity => {
        const newTotalProduct = quantity * price;
        setTotalProduct(newTotalProduct);
    };

    const handleNewQuantity = value => {
        const newQuantity = value || checkout.getScannedProduct(type).quantity;
        setQuantity(newQuantity);
        calculateTotalProduct(newQuantity);
        setCostWithoutDiscount(checkout.totalWithoutDiscount);
        setTotalItems(checkout.totalItems);
        setScannedProducts(checkout.scannedProducts);
        setCostWithDiscount(checkout.total());
    }

    const handleChangeQuantity = event => {
        event.preventDefault();
        const newQuantity = Number(event.target.value);
        checkout.clearScannedProduct(type);
        checkout.scanTimes(newQuantity, type);
        handleNewQuantity(newQuantity);
    }

    const handleIncreaseQuantity = event => {
        event.preventDefault();
        checkout.scan(type);
        handleNewQuantity();
    }
    
    const handleDecreaseQuantity = event => {
        event.preventDefault();
        if (event.target.value === 0)
            return;
        checkout.unscan(type);
        handleNewQuantity();
    }

    const handleClickDetails = event => {
        event.preventDefault();
        setProductSelected(product);
        setModalComponentList([
            ProductModalContainer,
            ...modalComponentList,
        ]);
    }

    return (
        <ProductItemComponent
            thumbnail={thumbnail}
            description={description}
            code={code}
            price={price}
            currency={currency}
            quantity={quantity}
            onChageQuantity={handleChangeQuantity}
            increaseQuantity={handleIncreaseQuantity}
            decreaseQuantity={handleDecreaseQuantity}
            totalProduct={totalProduct}
            onClickDetails={handleClickDetails}
        />
    );
};

export default ProductsItemContainer;