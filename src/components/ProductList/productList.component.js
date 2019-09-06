import React, { useGlobal } from 'reactn';

import ProductItem from '../../containers/ProductItem/productItem.container';

const ProductsListComponent = () => {
    const [productList] = useGlobal('productList');

    const createProductItems = () => productList.map(
        (listItem) => <ProductItem itemProps={listItem} key={listItem.code} />
    );
    
    return (
        <ul className="products-list">
            {createProductItems()}
        </ul>
    );
};

export default ProductsListComponent;