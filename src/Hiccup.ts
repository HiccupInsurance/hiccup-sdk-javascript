import Axios, {AxiosPromise, AxiosRequestConfig} from 'axios';
import RequestQuote from './Request/RequestQuote';
import RequestPolicy from './Request/RequestPolicy';

class Hiccup {

    //---------------------------------------------------------------------------------------------
    // Static properties
    //---------------------------------------------------------------------------------------------

    static readonly ENV_TEST: string = 'test';
    static readonly ENV_LIVE: string = 'live';
    static readonly ENDPOINT_TEST: string = 'https://app.hiccup-staging.com';
    static readonly ENDPOINT_LIVE: string = 'https://app.hiccup.com.au';
    static readonly STRIPE_PUBLIC_KEY_TEST: string = 'pk_test_psTozAlz1OCmOT6NmOiKUNGe';
    static readonly STRIPE_PUBLIC_KEY_LIVE: string = 'pk_live_J7NwjEq4O4LWgiBv17xtsccO';

    /**
     * HTTP Request config
     */
    private httpConfig: AxiosRequestConfig = {};

    /**
     * SDK env
     */
    private env: string;

    //---------------------------------------------------------------------------------------------
    // Public methods
    //---------------------------------------------------------------------------------------------

    /**
     * @param {string} env
     * @param {string} token
     */
    public constructor(env: string, token: string) {
        switch (env) {
            case Hiccup.ENV_TEST:
                this.httpConfig.baseURL = Hiccup.ENDPOINT_TEST;
                break;
            case Hiccup.ENV_LIVE:
                this.httpConfig.baseURL = Hiccup.ENDPOINT_LIVE;
                break;
            default:
                throw new Error(`Invalid env "${env}" value`);
        }

        this.env = env;
        this.httpConfig.headers = {Authorization: 'Bearer ' + token};
    }

    public getQuotes(request: RequestQuote): AxiosPromise {
        return Axios.post('/api/quote', request, this.httpConfig);
    }

    /**
     * Send email quote
     *
     * @param {RequestQuote} request
     * @return {AxiosPromise}
     */
    public emailQuote(request: RequestQuote): AxiosPromise {
        return Axios.post('/api/quote/sendEmail', request, this.httpConfig);
    }

    public purchasePolicy(request: RequestPolicy): AxiosPromise {
        return Axios.post('/api/policy', request, this.httpConfig);
    }

    public getDisclaimer(productName: String): AxiosPromise {
        return Axios.get(`/api/disclaimer/${productName}`, this.httpConfig);
    }

    /**
     * Get user information
     *
     * @return {AxiosPromise}
     */
    public me(): AxiosPromise {
        return Axios.get('/api/me', this.httpConfig);
    }

    /**
     * Get list of countries
     *
     * @return {AxiosPromise}
     */
    public getCountries(): AxiosPromise {
        return Axios.get('/api/country', this.httpConfig);
    }

    /**
     * Get stripe public key
     *
     * @return {string}
     */
    public getStripePublicKey(): string {
        switch (this.env) {
            case Hiccup.ENV_TEST:
                return Hiccup.STRIPE_PUBLIC_KEY_TEST;
            case Hiccup.ENDPOINT_LIVE:
                return Hiccup.STRIPE_PUBLIC_KEY_LIVE;
        }

        throw new Error(`Invalid env "${this.env}" value`);
    }
}

export default Hiccup;
export { Hiccup as client };
