import Price from './Price';
import Product from './Product';
import State from './State';

interface Transaction {
    durationDays: number;
    insuranceStampDuty: number;
    insuranceGST: number;
    insuranceDiscount: number;
    insuranceURL: string;
    status: number;
    country: string;
    sourceCountry: string;
    id: number;
    startDate: string;
    endDate: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    vehicleClass: string;
    productDescription: string;
    expired: boolean;
    pickupState: State;
    product: Product;
    pricing: Price;
}

export default Transaction;
