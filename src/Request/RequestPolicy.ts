import RequestQuote from './RequestQuote';

interface RequestPolicy extends RequestQuote {
    planId: string;
    paymentProcessor: string;
    paymentToken: string;
    number?: string;
}

export default RequestPolicy;
