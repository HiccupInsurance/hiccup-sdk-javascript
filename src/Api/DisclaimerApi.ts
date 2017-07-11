import Axios, {AxiosPromise, AxiosRequestConfig} from 'axios';

/**
 * @class DisclaimerApi
 * @since 0.3.0
 */
class DisclaimerApi {

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
     * @param {string} productName
     * @return {AxiosPromise}
     * @since 0.3.0
     */
    public getDisclaimer(productName: string): AxiosPromise {
        return Axios.get(`/api/disclaimer/${productName}`, this.httpConfig);
    }

    /**
     * @param {number} planId
     * @return {AxiosPromise}
     * @since 1.3.0
     */
    public getDisclaimerByPlan(planId: number): AxiosPromise {
        return Axios.get(`/api/disclaimer-by-plan/${planId}`, this.httpConfig);
    }
}

export default DisclaimerApi;
