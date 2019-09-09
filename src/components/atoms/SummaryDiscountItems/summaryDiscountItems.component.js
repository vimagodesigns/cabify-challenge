import React from 'react';

const SummaryDiscountItemComponent = ({
    discountLabel,
    discount,
    getDiscountString,
}) => (
    <li>
        <span>{discountLabel}</span><span>{getDiscountString(discount)}</span>
    </li>
);

    export default SummaryDiscountItemComponent;