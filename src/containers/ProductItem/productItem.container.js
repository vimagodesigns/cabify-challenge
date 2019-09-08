import React from 'react';

import ProductItemComponent from '../../components/ProductItem/productItem.component';
import ProductModalContainer from '../ProductModal/productModal.container';
import { useStateValue } from '../../stateManagment/state';
import { UPDATE_PRODUCTS, SELECT_PRODUCT, SET_MODAL_COMPONENT } from '../../reducers/checkout.reducer';

export const ProductsItemContainer = ({ product }) => {
    const { thumbnail, description, code, price, type } = product;

    const [
        {
            currency,
            checkout,
            scannedProducts,
        },
        dispatch
    ] = useStateValue();

    console.log('::: 1 :::', currency);
    console.log('::: 2 :::', checkout);
    console.log('::: 3 :::', scannedProducts);

    const handleNewQuantity = () => {
        dispatch({ type: UPDATE_PRODUCTS });
        // setCostWithoutDiscount(checkout.totalWithoutDiscount);
        // setTotalItems(checkout.totalItems);
        // setScannedProducts(checkout.scannedProducts);
        // setCostWithDiscount(checkout.total());
    }

    const handleChangeQuantity = event => {
        event.preventDefault();
        const newQuantity = Number(event.target.value);
        checkout.clearScannedProduct(type);
        checkout.scanTimes(newQuantity, type);
        handleNewQuantity();
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
        dispatch({ type: SELECT_PRODUCT, payload: product });
        // setProductSelected(product);
        dispatch({ type: SET_MODAL_COMPONENT, payload: ProductModalContainer });
        // setModalComponentList([
        //     ProductModalContainer,
        //     ...modalComponentList,
        // ]);
    }

    return (
        <ProductItemComponent
            thumbnail={thumbnail}
            description={description}
            code={code}
            price={price}
            currency={currency}
            quantity={scannedProducts[type].quantity}
            totalProduct={scannedProducts[type].costWithoutDiscount}
            onChageQuantity={handleChangeQuantity}
            increaseQuantity={handleIncreaseQuantity}
            decreaseQuantity={handleDecreaseQuantity}
            onClickDetails={handleClickDetails}
        />
    );
};

export default ProductsItemContainer;