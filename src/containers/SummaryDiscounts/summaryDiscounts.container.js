import React from 'react';

import SummaryListComponent from '../../components/SummaryList/summaryList.component';

const SummaryDiscountItems = ({
    label,
    discount
}) => <li key={label}><span>{label}</span><span>{discount}</span></li>

const SummaryDiscountsContainer = ({
    summaryDiscounts = [
        {
            label: '2x1 Mug offer',
            discount: '-10€'
        },
        {
            label: 'x3 Shirt offer',
            discount: '-3€'
        },
        {
            label: 'Promo code',
            discount: '0€'
        },
    ],
}) => {
    return (
        <SummaryListComponent
            listClassName="summary-discounts"
            wrapperClassName="wrapper-half border"
            title="Discounts"
        >
            {summaryDiscounts.map(
                (discountProps) => SummaryDiscountItems(discountProps))
            }
        </SummaryListComponent>
    )
};

export default SummaryDiscountsContainer;