import Axios, {AxiosPromise, AxiosRequestConfig} from 'axios';

/**
 * @class PartnerApi
 * @since 0.3.0
 */
class PartnerApi {

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
     * Get current partner details
     *
     * @return {AxiosPromise}
     * @since 0.3.0
     */
    public getPartner(): AxiosPromise {
        return Axios.get('/api/partner', this.httpConfig);
    }

    /**
     * Get partner by transaction hashId
     *
     * @param {string} transactionHashId
     * @return {AxiosPromise}
     * @since 1.1.0
     */
    public getByTransactionHashId(transactionHashId: string): AxiosPromise {
        return Axios.get(`/api/partner/findByTransactionHashId/${transactionHashId}`, this.httpConfig);
    }
}

export default PartnerApi;
