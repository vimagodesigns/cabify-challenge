import { TSHIRT, MUG } from "../constants/products.constants";

export const pricingRules = {
    [TSHIRT]: (product) => {
        const { quantity } = product;
        const shirtDiscount = 1;
        const discount = quantity < 3 ? 0 : shirtDiscount;

        return discount;
    },
    [MUG]: (product) => {
        const { quantity, price } = product;
        const isDiscountable = quantity % 2 === 0 && quantity > 1;
        const discount = isDiscountable ?  price : 0;

        return discount; 
    },
};
