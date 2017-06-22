import State from "./State";
import Product from "./Product";
import Price from "./Price";

interface Quote {
    durationDays: number,
    insuranceStampDuty: number,
    insuranceGST: number,
    insuranceDiscount: number,
    insuranceURL: string,
    status: number,
    country: string,
    sourceCountry: string,
    startDate: string,
    endDate: string,
    title: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    vehicleClass: string,
    productDescription: string,
    expired: boolean,
    pickupState: State,
    product: Product,
    pricing: Price
}

export default Quote;
