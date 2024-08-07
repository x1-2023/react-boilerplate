/**
 * @file useLocalStorage.jsx
 * @description Local storage hook.
 */

'use strict';
import { useState } from 'react';

/**
 * Hook provides a convenient way to access and-
 * manage data from browser local storage.
 * @param {String} key Item key name.
 * @param {String} initValue Initial value for the item. (If the item doesn't exist.)
 * @returns {[String, Function]} Returns a tuple containing the stored value and a function to update the value.
 */
function useLocalStorage(key, initValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(key);
            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(key, JSON.stringify(initValue));
                return initValue;
            }
        } catch (error) {
            console.error(error);
            return initValue;
        }
    });

    function setValue(newValue) {
        try {
            window.localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.log(error);
        }
        setStoredValue(newValue);
    }

    return [storedValue, setValue];
}

export { useLocalStorage };
