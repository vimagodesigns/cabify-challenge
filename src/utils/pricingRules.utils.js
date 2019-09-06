const getPriceWithAmountLessDiscount = (price, discountAmount) => price - discountAmount;
const getPercentLessDiscount = (price, discountPercent) => {
    const discountAmount = (price * discountPercent) / 100;
    return price - discountAmount;
};

export const getPriceAndDiscountByAmount = (
    minProductAmount,
    discountAmount,
    quantity,
    price
) => {
    if (quantity < minProductAmount)
        return { finalPrice: price, discount: 0 };

    const priceWithDiscount = getPriceWithAmountLessDiscount(price, discountAmount);
    const finalPrice = priceWithDiscount * quantity;
    const discount = discountAmount * quantity;

    return { finalPrice, discount };
}

export const getPriceAndDiscountByPercentage = (
    eachProductAmount,
    discountPercentage,
    quantity,
    price
) => {
    console.log('llega aqui', {
        eachProductAmount,
        discountPercentage,
        quantity,
        price
    });
    console.log(eachProductAmount);
    console.log(quantity);
    return getPercentLessDiscount(price, discountPercentage);
}