import Axios, {AxiosPromise, AxiosRequestConfig} from 'axios';
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
        return Axios.post('/api/quote', request, this.httpConfig);
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
