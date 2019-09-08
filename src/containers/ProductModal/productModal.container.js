import React, { useGlobal } from 'reactn';
import ProductModalComponent from '../../components/ProductModal/productModal.component';

const ProductModalContainer = ({ closeModal }) => {

    const [productSelected, setProductSelected] = useGlobal('productSelected');
    const [currency] = useGlobal('currency');

    const handleCloseModal = event => {
        event.preventDefault();
        closeModal();
        setProductSelected({})
    }

    return (
        <ProductModalComponent
            closeModal={handleCloseModal}
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