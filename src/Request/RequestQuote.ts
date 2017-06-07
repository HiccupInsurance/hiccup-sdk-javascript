
export default class RequestQuote {
    public title: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public phone: string;
    public ageMin: number;
    public ageMax: number;
    public planId: number;
    public startDate: string;
    public endDate: string;
    public country: string;
    public sourceCountry: string;
    public coupon: string | null = null;
    public vehicleClass: string | null = null;

    constructor() {

    }
}
