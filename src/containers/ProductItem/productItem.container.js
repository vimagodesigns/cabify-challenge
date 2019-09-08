import React, { useGlobal } from 'reactn';

import ProductItemComponent from '../../components/ProductItem/productItem.component';
import ProductModalContainer from '../ProductModal/productModal.container';

export const ProductsItemContainer = ({ product }) => {
    const { thumbnail, description, code, price, type } = product;

    const [currency] = useGlobal('currency');
    const [checkout] = useGlobal('checkout');
    const [, setCostWithoutDiscount] = useGlobal('costWithoutDiscount');
    const [, setCostWithDiscount] = useGlobal('costWithDiscount');
    const [, setTotalItems] = useGlobal('totalItems');
    const [scannedProducts, setScannedProducts] = useGlobal('scannedProducts');
    const [modalComponentList, setModalComponentList] = useGlobal('modalComponentList');
    const [, setProductSelected] = useGlobal('productSelected');


    const handleNewQuantity = () => {
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