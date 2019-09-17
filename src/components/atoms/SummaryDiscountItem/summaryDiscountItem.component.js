import React from 'react';
import PropTypes from 'prop-types';

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

SummaryDiscountItemComponent.propTypes = {
    discountLabel: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    getDiscountString: PropTypes.func.isRequired,
};