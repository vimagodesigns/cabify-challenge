import React, { useGlobal } from 'reactn';
import ProductModalComponent from '../../components/ProductModal/productModal.component';

const ProductModalContainer = ({ closeModal }) => {

    const [productSelected, setProductSelected] = useGlobal('productSelected');
    const [currency] = useGlobal('currency');
    const [checkout] = useGlobal('checkout');

    const [, setCostWithoutDiscount] = useGlobal('costWithoutDiscount');
    const [, setCostWithDiscount] = useGlobal('costWithDiscount');
    const [, setTotalItems] = useGlobal('totalItems');
    const [, setScannedProducts] = useGlobal('scannedProducts');

    const handleCloseModal = event => {
        event.preventDefault();
        closeModal();
        setProductSelected({})
    }
    
    const handleCheckout = event => {
        event.preventDefault();
        checkout.scan(productSelected.type)
        closeModal();

        // TODO This is exactly the same code than product item container, I would like to do an utils
        // but useGlobal is from hooks and it should be in a react component to work
        setCostWithoutDiscount(checkout.totalWithoutDiscount);
        setTotalItems(checkout.totalItems);
        setScannedProducts(checkout.scannedProducts);
        setCostWithDiscount(checkout.total());
    }

    return (
        <ProductModalComponent
            closeModal={handleCloseModal}
            handleCheckout={handleCheckout}
            currency={currency}
            img={productSelected.img}
            description={productSelected.description}
            fullDescription={productSelected.fullDescription}
            code={productSelected.code}
            price={productSelected.price}
        />
    );
};

export default ProductModalContainer;