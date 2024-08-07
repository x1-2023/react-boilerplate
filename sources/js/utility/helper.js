/**
 * @file helper.js
 * @description Helper module.
 * @note Populate a 'helper' object to the browser window object upon import.
 */

'use strict';

(() => {
    window.helper = {
        /**
         * Check if a string is a valid email.
         * @param {String} email The email string.
         * @returns {Boolean} Returns true if the string is a valid email, otherwise returns false.
         */
        validateEmailString(email) {
            if (/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(email))
                return true;
            return false;
        },
        /**
         * Parse a JSON string into object.
         * @param {String} string JSON string.
         * @returns {Object | Boolean} Returns the parsed JSON object if the string
         *                             is a valid JSON string, otherwise returns false.
         */
        parseJSON(string) {
            try {
                const result = JSON.parse(string);
                return result;
            } catch (error) {
                return false;
            }
        },
    };
})();
