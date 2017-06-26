import Axios, {AxiosPromise, AxiosRequestConfig} from 'axios';
import RequestToken from '../Request/RequestToken';

class Auth {

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
     * Get user information
     *
     * @return {AxiosPromise}
     */
    public me(): AxiosPromise {
        return Axios.get('/api/me', this.httpConfig);
    }

    /**
     * Get user token
     *
     * @param {RequestToken} request
     * @return {AxiosPromise}
     */
    public getToken(request: RequestToken): AxiosPromise {
        return Axios.post('/api/me', request, this.httpConfig);
    }
}

export default Auth;
