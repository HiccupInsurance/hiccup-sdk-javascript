import RequestQuote from "./RequestQuote";

interface RequestPolicy extends RequestQuote {
    planId: string;
    paymentProcessor: string;
    paymentToken: string;
}

export default RequestPolicy;
