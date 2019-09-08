import React, { useGlobal, Fragment } from 'reactn';

import ProductListComponent from '../../components/ProductList/productList.component';

const ProductsListContainer = () => {
    const [productList] = useGlobal('productList');

    return (
        <Fragment>
            <ProductListComponent productList={productList} />
        </Fragment>
    );
};

export default ProductsListContainer;