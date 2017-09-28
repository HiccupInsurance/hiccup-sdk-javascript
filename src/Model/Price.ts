interface Price {
    basePremium: number;
    stampDuty: number;
    tax: number;
    subTotal: number;
    discount: number;
    discountPercentage: number;
    total: number;
    transactionFee: number;
    totalFeeTax: number;
    transactionTotal: number;
    currency: string;
}

export default Price;
