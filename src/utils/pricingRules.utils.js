export const discountByQuantity = ({
    productquantity,
    minQuantity,
    productDiscount,
}) => {
    const discount = productquantity < minQuantity ? 0 : productDiscount;

    return productquantity === minQuantity ?
        discount * minQuantity :
        discount;
};

export const discountTwoForOne = ({
    productquantity,
    productPrice,
}) => {
    const isDiscountable = productquantity % 2 === 0 && productquantity > 1;
    const discount = isDiscountable ?  productPrice : 0;

    return discount; 
};