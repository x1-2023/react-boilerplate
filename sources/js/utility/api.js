/**
 * @file api.js
 * @description Utility classes and functions used by API module.
 */

'use strict';

/**
 * API response object.
 */
class APIResponse {
    /**
     * Constructs a API response object.
     * @param {String} [message=''] Response message.
     * @param {Boolean} [success=false] Specifies whether the action is successful.
     * @param {Object=} [data=null] Response associated data.
     * @param {Boolean} [invalidToken=false]  Specifies whether the action is rejected due to an invalid token.
     * @returns {Object} Returns the response object.
     */
    constructor(
        message = '',
        success = false,
        data = null,
        invalidToken = false
    ) {
        this.message = message;
        this.success = success;
        this.data = data;
        this.invalidToken = invalidToken;
    }
}

export { APIResponse };
