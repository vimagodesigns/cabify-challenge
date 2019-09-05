import React, { Component } from 'react';

import ProductItemComponent from '../../components/ProductItem/productItem.component';

class productsItemContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 0,
            totalProduct: 0,
        };

        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    handleQuantityChange = (event) => {
        event.preventDefault();

        const { itemProps: { price } } = this.props;
        
        const quantity = Number(event.target.value);
        const totalProduct = quantity * price; 
        this.setState({ quantity, totalProduct });
    }

    render() {
        const {
            itemProps: {
                img,
                description,
                code,
                price,
                currency,
            } = {},
        } = this.props;

        return (
            <ProductItemComponent
                img={img}
                description={description}
                code={code}
                price={price}
                currency={currency}
                quantity={this.state.quantity}
                onChageQuantity={this.handleQuantityChange}
                totalProduct={this.state.totalProduct}
            />
        );
    }
};

export default productsItemContainer;