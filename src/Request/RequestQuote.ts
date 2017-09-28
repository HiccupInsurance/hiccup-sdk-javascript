import State from '../Model/State';

interface RequestQuote {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    ageMin: number;
    ageMax: number;
    startDate: string;
    endDate: string;
    country: string;
    sourceCountry: string;
    product: string;
    pickupState?: State;
    coupon?: string;
    vehicleClass?: string;
}

export default RequestQuote;
