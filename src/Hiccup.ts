import Axios, {AxiosPromise, AxiosRequestConfig} from 'axios';
import RequestQuote from './Request/RequestQuote';
import ResponseQuote from './Response/ResponseQuote';
import ResponseError from "./Response/ResponseError";

class Hiccup {

    //---------------------------------------------------------------------------------------------
    // Static properties
    //---------------------------------------------------------------------------------------------

    static readonly ENV_TEST: string = 'test';
    static readonly ENV_LIVE: string = 'live';
    static readonly ENDPOINT_TEST: string = 'https://app.hiccup-staging.com';
    static readonly ENDPOINT_LIVE: string = 'https://app.hiccup.com.au';

    /**
     * HTTP Request config
     */
    private httpConfig: AxiosRequestConfig = {};

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
                throw 'Invalid ENV value';
        }

        this.httpConfig.headers = {
            Authorization: 'Bearer ' + token
        };
    }

    public getQuotes(request: RequestQuote): AxiosPromise {
        return Axios.post('/api/quote', RequestQuote, this.httpConfig);
    }

    /**
     * Get user information
     *
     * @return {AxiosPromise}
     */
    public me(): AxiosPromise {
        return Axios.get('/api/me', this.httpConfig);
    }
}

export default Hiccup;
export { Hiccup as client };
