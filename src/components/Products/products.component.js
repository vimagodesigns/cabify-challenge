import React from 'react';

import ProductListComponent from '../ProductList/productList.component';
import MainTitle from '../MainTitle/mainTitle.component';

const ProductsComponent = props => {
    const defaultMainTitle = 'Shopping cart';
    const defaultHeadTitles = {
        detailsText: 'Product details',
        quantityText: 'Quantity',
        priceText: 'price',
        totalText: 'total',
    };

    const {
        mainTitle = defaultMainTitle,
        tableHeadTitles: {
            detailsText,
            quantityText,
            priceText,
            totalText,
        } = defaultHeadTitles,
        productListElements,
    } = props;

    return (
        <section className="products">
            <MainTitle>{mainTitle}</MainTitle>
            <ul className="products-list tableHead">
                <li className="products-list-title row">
                    <div className="col-product">{detailsText}</div>
                    <div className="col-quantity">{quantityText}</div>
                    <div className="col-price">{priceText}</div>
                    <div className="col-total">{totalText}</div>
                </li>
            </ul>
            <ProductListComponent productListElements={productListElements} />
        </section>

    );
};

export default ProductsComponent;