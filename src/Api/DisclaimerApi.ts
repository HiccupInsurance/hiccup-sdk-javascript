import Axios, {AxiosPromise, AxiosRequestConfig} from 'axios';

class DisclaimerApi {

    //---------------------------------------------------------------------------------------------
    // Properties
    //---------------------------------------------------------------------------------------------

    /**
     * HTTP Request config
     */
    private httpConfig: AxiosRequestConfig = {};

    //---------------------------------------------------------------------------------------------
    // Magic methods
    //---------------------------------------------------------------------------------------------

    /**
     * @param {AxiosRequestConfig} httpConfig
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
     */
    public getDisclaimer(productName: string): AxiosPromise {
        return Axios.get(`/api/disclaimer/${productName}`, this.httpConfig);
    }
}

export default DisclaimerApi;
