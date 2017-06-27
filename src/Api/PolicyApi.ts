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
     * Purchase insurance
     *
     * @param {RequestPolicy} request
     * @return {AxiosPromise}
     * @since 0.3.0
     */
    public purchase(request: RequestPolicy): AxiosPromise {
        return Axios.post('/api/policy', request, this.httpConfig);
    }

    /**
     * Get policy by number
     *
     * @param {string} policyNumber
     * @return {AxiosPromise}
     * @since 1.1.0
     */
    public getByPolicyNumber(policyNumber: string): AxiosPromise {
        return Axios.get(`/api/policy/${policyNumber}`, this.httpConfig);
    }

    /**
     * Get policy by booking reference
     *
     * @param {string} bookingReference
     * @return {AxiosPromise}
     * @since 1.1.0
     */
    public getByBookingReference(bookingReference: string): AxiosPromise {
        return Axios.get(`/api/policy/findByBookingReference?booking_reference=${bookingReference}`, this.httpConfig);
    }

    /**
     * Get policy by booking id
     *
     * @param {number} bookingId
     * @return {AxiosPromise}
     * @since 1.1.0
     */
    public getByBookingId(bookingId: number): AxiosPromise {
        return Axios.get(`/api/policy/findByBookingId?booking_id=${bookingId}`, this.httpConfig);
    }

    /**
     * Get policy by hash id
     *
     * @param {string} hashId
     * @return {AxiosPromise}
     * @since 1.1.0
     */
    public getByHashId(hashId: string): AxiosPromise {
        return Axios.get(`/api/policy/findByHashId?hash_id=${hashId}`, this.httpConfig);
    }

}

export default PolicyApi;
