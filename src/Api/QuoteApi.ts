import Axios, {AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';
import * as moment from 'moment';
import RequestQuote from '../Request/RequestQuote';

/**
 * @class QuoteApi
 * @since 0.3.0
 */
class QuoteApi {

    //---------------------------------------------------------------------------------------------
    // Properties
    //---------------------------------------------------------------------------------------------

    /**
     * HTTP Request config
     * @since 0.3.0
     */
    private httpConfig: AxiosRequestConfig = {};

    //---------------------------------------------------------------------------------------------
    // Magic methods
    //---------------------------------------------------------------------------------------------

    /**
     * @param {AxiosRequestConfig} httpConfig
     * @since 0.3.0
     */
    constructor(httpConfig: AxiosRequestConfig) {
        this.httpConfig = httpConfig;
    }

    //---------------------------------------------------------------------------------------------
    // Public methods
    //---------------------------------------------------------------------------------------------

    /**
     * @param {RequestQuote} request
     * @return {AxiosPromise}
     * @since 0.3.0
     */
    public getQuotes(request: RequestQuote): AxiosPromise {
        if (
            moment(request.startDate).startOf('day') < moment().startOf('day') ||
            moment(request.endDate).startOf('day') < moment().startOf('day')
        ) {
            return new Promise((resolve: (data: AxiosResponse) => void, reject: (data: AxiosResponse) => void) => {
                reject({
                    config: this.httpConfig,
                    data: [],
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json'
                    },
                    status: 400,
                    statusText: 'cant get quotes for past dates'
                });
            });
        }

        return Axios.post('/api/quote', request, this.httpConfig);
    }

    /**
     * @param {string} hash
     * @return {AxiosPromise}
     * @since 1.5.3
     */
    public getQuoteByHash(hash: string): AxiosPromise {
        return Axios.get('/api/quote/hash/' + hash, this.httpConfig);
    }

    /**
     * Create quote without send email
     * If we want to send an email, use QuoteApi.emailQuote()
     *
     * @param {RequestQuote} request
     * @return {AxiosPromise}
     * @since 1.4.0
     */
    public createQuote(request: RequestQuote): AxiosPromise {
        return Axios.post('/api/quote/create', request, this.httpConfig);
    }

    /**
     * Send email quote
     *
     * @param {RequestQuote} request
     * @return {AxiosPromise}
     * @since 0.3.0
     */
    public emailQuote(request: RequestQuote): AxiosPromise {
        return Axios.post('/api/quote/sendEmail', request, this.httpConfig);
    }
}

export default QuoteApi;
