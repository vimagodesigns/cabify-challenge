import React from 'react';
import { expect } from 'chai';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductsList from '../ProductList/productList.container';
import { StateProvider } from '../../../stateManagment/state';
import ProductsItemComponent from '../../../components/molecules/ProductItem/productItem.component';
import { Checkout } from '../../../services/Checkout.class';
import { pricingRules } from '../../../config/pricingRules.config';
import { reducer } from '../../../reducers/checkout.reducer';

const checkout = new Checkout(pricingRules);
const productList = checkout.productList;
const initialState = {
    checkout,
    productList,
    costWithoutDiscount: 0,
    costWithDiscount: 0,
    totalItems: 0,
    currency: '€',
    scannedProducts: checkout.scannedProducts,
    modalList: [],
    productSelected: {},
};

describe('<ProductList />', function() {
    
    configure({adapter: new Adapter()});
    test('renders the .product-list ul', function() {
        const wrapper = mount(
            <StateProvider initialState={initialState} reducer={reducer}>
                <ProductsList productList={productList} />
            </StateProvider>
        );

        expect(wrapper.find('.products-list')).to.have.length(1);
    });

    test('renders as Product Item Compnent as product we have', function() {
        const wrapper = mount(
            <StateProvider initialState={initialState} reducer={reducer}>
                <ProductsList productList={productList} />
            </StateProvider>
        );
        
        const productLength = productList.length
        expect(wrapper.find(ProductsItemComponent)).to.have.length(productLength);
    });
});