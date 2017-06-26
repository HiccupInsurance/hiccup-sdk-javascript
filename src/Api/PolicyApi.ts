import Axios, {AxiosPromise, AxiosRequestConfig} from 'axios';
import RequestPolicy from '../Request/RequestPolicy';

/**
 * @class PolicyApi
 */
class PolicyApi {

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
     * @param {RequestPolicy} request
     * @return {AxiosPromise}
     * @since 0.3.0
     */
    public purchase(request: RequestPolicy): AxiosPromise {
        return Axios.post('/api/policy', request, this.httpConfig);
    }
}

export default PolicyApi;
