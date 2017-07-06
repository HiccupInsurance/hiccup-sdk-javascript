import Product from './Product';
import Transaction from './Transaction';

interface Policy extends Transaction {
    number: string;
    createdDateTime: string;
    modifiedDateTime: string;
    destination: string;
    rentalSupplier: string;
    depot: string;
    partnerConfirmation: string,
    productPurchasedDescription: string,
    category: string,
    afterStart: boolean,
    policyEnded: boolean,
    paymentsCount: number,
    upgradePlans: Product[],
    partnerName: string
}

export default Policy;
