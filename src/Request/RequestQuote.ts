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
    coupon?: string;
    vehicleClass?: string;
}

export default RequestQuote;
