import Axios, {AxiosPromise, AxiosRequestConfig} from 'axios';

/**
 * @class ProductApi
 * @since 0.3.0
 */
class ProductApi {

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
     * Get list of countries
     *
     * @return {AxiosPromise}
     * @since 0.3.0
     */
    public getCountries(): AxiosPromise {
        return Axios.get('/api/country', this.httpConfig);
    }

    /**
     * Get list of states
     *
     * @param {state} countryCode
     * @return {AxiosPromise}
     * @since 0.3.0
     */
    public getStates(countryCode: string): AxiosPromise {
        return Axios.get(`/api/country/${countryCode}/state`, this.httpConfig);
    }
}

export default ProductApi;
