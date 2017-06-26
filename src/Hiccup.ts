import AuthApi from './Api/AuthApi';
import Axios, {AxiosPromise, AxiosRequestConfig} from 'axios';
import RequestQuote from './Request/RequestQuote';
import RequestPolicy from './Request/RequestPolicy';
import QuoteApi from './Api/QuoteApi';
import PolicyApi from './Api/PolicyApi';
import DisclaimerApi from './Api/DisclaimerApi';

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

    //---------------------------------------------------------------------------------------------
    // Private properties
    //---------------------------------------------------------------------------------------------

    private httpConfig: AxiosRequestConfig = {};
    private env: string;
    private auth: AuthApi;
    private quote: QuoteApi;
    private policy: PolicyApi;
    private dislcaimer: DisclaimerApi;

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
        this.auth = new AuthApi(this.httpConfig);
        this.quote = new QuoteApi(this.httpConfig);
        this.policy = new PolicyApi(this.httpConfig);
        this.dislcaimer = new DisclaimerApi(this.httpConfig);
    }

    /**
     *
     * @param {RequestQuote} request
     * @return {AxiosPromise}
     *
     * @deprecated deprecated since v0.3.0 and will be removed at v1.0.0
     * @see QuoteApi.getQuotes
     * @TODO(v1.0.0): remove this method
     */
    public getQuotes(request: RequestQuote): AxiosPromise {
        return Axios.post('/api/quote', request, this.httpConfig);
    }

    /**
     * Send email quote
     *
     * @param {RequestQuote} request
     * @return {AxiosPromise}
     *
     * @deprecated deprecated since v0.3.0 and will be removed at v1.0.0
     * @see QuoteApi.emailQuote
     * @TODO(v1.0.0): remove this method
     */
    public emailQuote(request: RequestQuote): AxiosPromise {
        return Axios.post('/api/quote/sendEmail', request, this.httpConfig);
    }

    /**
     * @param {RequestPolicy} request
     * @return {AxiosPromise}
     *
     * @deprecated deprecated since v0.3.0 and will be removed at v1.0.0
     * @see PolicyApi.purchase
     * @TODO(v1.0.0): remove this method
     */
    public purchasePolicy(request: RequestPolicy): AxiosPromise {
        return Axios.post('/api/policy', request, this.httpConfig);
    }

    /**
     * @param {string} productName
     * @return {AxiosPromise}
     *
     * @deprecated deprecated since v0.3.0 and will be removed at v1.0.0
     * @see DisclaimerApi.getDisclaimer
     * @TODO(v1.0.0): remove this method
     */
    public getDisclaimer(productName: string): AxiosPromise {
        return Axios.get(`/api/disclaimer/${productName}`, this.httpConfig);
    }

    /**
     * Get user information
     *
     * @return {AxiosPromise}
     *
     * @deprecated deprecated since v0.3.0 and will be removed at v1.0.0
     * @see AuthApi.me
     * @TODO(v1.0.0): remove this method
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
