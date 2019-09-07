import React from 'react';

import MainTitleComponent from '../MainTitle/mainTitle.component';
import SummaryItems from '../../containers/SummaryItems/summaryItems.container';

const orderSummaryComponent = props => {
    return (
        <aside className="summary">
            <MainTitleComponent>Order Summary</MainTitleComponent>
            <SummaryItems />

            <div className=" wrapper-half border">
                <h2>Discounts</h2>
                <ul className="summary-discounts">
                    <li><span>2x1 Mug offer</span><span>-10€</span></li>
                    <li><span>x3 Shirt offer</span><span>-3€</span></li>
                    <li><span>Promo code</span><span>0€</span></li>
                </ul>
            </div>
            <div className="summary-total wrapper">
                <ul>
                    <li>
                        <span className="summary-total-cost">Total cost</span>
                        <span className="summary-total-price">107€</span>
                    </li>
                </ul>
                <button type="submit">Checkout</button>
            </div>
        </aside>
    );
};

export default orderSummaryComponent;