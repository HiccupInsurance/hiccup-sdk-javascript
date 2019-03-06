import {AxiosRequestConfig} from 'axios';
import { polyfill } from 'es6-promise';
import AuthApi from './Api/AuthApi';
import DisclaimerApi from './Api/DisclaimerApi';
import PartnerApi from './Api/PartnerApi';
import PolicyApi from './Api/PolicyApi';
import ProductApi from './Api/ProductApi';
import QuoteApi from './Api/QuoteApi';

/**
 * @class Hiccup
 * @since 0.0.1
 */
class Hiccup {

    //---------------------------------------------------------------------------------------------
    // Static properties
    //---------------------------------------------------------------------------------------------

    public static readonly ENV_TEST: string = 'test';
    public static readonly ENV_LIVE: string = 'live';
    private static readonly ENDPOINT_TEST: string = 'https://app.hiccup-staging.com';
    private static readonly ENDPOINT_LIVE: string = 'https://app.hiccup.com.au';
    private static readonly STRIPE_PUBLIC_KEY_TEST: string = 'pk_test_VQnPfqgS3DhNYGlsWhIxTn1Z';
    private static readonly STRIPE_PUBLIC_KEY_LIVE: string = 'pk_live_J7NwjEq4O4LWgiBv17xtsccO';
    private static readonly COUNTRY_CODE_AUSTRALIA = 'AU';
    private static readonly PRODUCT_RVE = 'RVE';
    private static readonly PRODUCT_RVEI = 'RVEI';

    //---------------------------------------------------------------------------------------------
    // Public properties
    //---------------------------------------------------------------------------------------------

    public readonly auth: AuthApi;
    public readonly quote: QuoteApi;
    public readonly policy: PolicyApi;
    public readonly disclaimer: DisclaimerApi;
    public readonly product: ProductApi;
    public readonly partner: PartnerApi;

    //---------------------------------------------------------------------------------------------
    // Private properties
    //---------------------------------------------------------------------------------------------

    private httpConfig: AxiosRequestConfig = {};
    private env: string;

    //---------------------------------------------------------------------------------------------
    // Magic methods
    //---------------------------------------------------------------------------------------------

    /**
     * @param {string} env
     * @param {string} token
     * @since 0.0.1
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

        polyfill();

        this.env = env;
        this.httpConfig.headers = {Authorization: 'Bearer ' + token};
        this.auth = new AuthApi(this.httpConfig);
        this.quote = new QuoteApi(this.httpConfig);
        this.policy = new PolicyApi(this.httpConfig);
        this.disclaimer = new DisclaimerApi(this.httpConfig);
        this.product = new ProductApi(this.httpConfig);
        this.partner = new PartnerApi(this.httpConfig);
    }

    //---------------------------------------------------------------------------------------------
    // Static methods
    //---------------------------------------------------------------------------------------------

    /**
     * Get product type
     *
     * @param {string} destination
     * @param {string} residency
     * @return {string|null}
     * @since 1.1.0
     */
    public static getProductType(destination: string, residency?: string): string|null {
        if (destination === Hiccup.COUNTRY_CODE_AUSTRALIA) {
            return Hiccup.PRODUCT_RVE;
        }

        if (destination !== Hiccup.COUNTRY_CODE_AUSTRALIA && residency === Hiccup.COUNTRY_CODE_AUSTRALIA) {
            return Hiccup.PRODUCT_RVEI;
        }

        return null;
    }

    //---------------------------------------------------------------------------------------------
    // Public methods
    //---------------------------------------------------------------------------------------------

    /**
     * Get stripe public key
     *
     * @return {string}
     */
    public getStripePublicKey(): string {
        switch (this.env) {
            case Hiccup.ENV_TEST:
                return Hiccup.STRIPE_PUBLIC_KEY_TEST;
            case Hiccup.ENV_LIVE:
                return Hiccup.STRIPE_PUBLIC_KEY_LIVE;
        }

        throw new Error(`Invalid env "${this.env}" value`);
    }
}

export default Hiccup;
export { Hiccup as client };
