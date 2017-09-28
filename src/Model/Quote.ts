import Transaction from './Transaction';

interface Quote extends Transaction {
    number: string;
    partnerName: string;
}

export default Quote;
