import React from 'react';

import MainTitleComponent from '../MainTitle/mainTitle.component';
import SummaryItems from '../../containers/SummaryItems/summaryItems.container';
import SummaryDiscounts from '../../containers/SummaryDiscounts/summaryDiscounts.container';

const orderSummaryComponent = props => {
    return (
        <aside className="summary">
            <MainTitleComponent>Order Summary</MainTitleComponent>
            <SummaryItems />
            <SummaryDiscounts />
            
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