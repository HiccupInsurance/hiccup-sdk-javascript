import Axios, {AxiosPromise, AxiosRequestConfig} from 'axios';
import RequestToken from '../Request/RequestToken';

/**
 * @class AuthApi
 * @since 0.3.0
 */
class AuthApi {

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
     * Get user information
     *
     * @return {AxiosPromise}
     * @since 0.3.0
     */
    public me(): AxiosPromise {
        return Axios.get('/api/me', this.httpConfig);
    }

    /**
     * Get user token
     *
     * @param {RequestToken} request
     * @return {AxiosPromise}
     * @since 0.3.0
     */
    public getToken(request: RequestToken): AxiosPromise {
        return Axios.post('/api/me', request, this.httpConfig);
    }
}

export default AuthApi;
