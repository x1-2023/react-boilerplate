/**
 * @file index.jsx
 * @description Global context for the application.
 */

'use strict';
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Themes from '../../Theme';

// Global context.
const GlobalContext = createContext();

/**
 * Global context provider component.
 * @param {Object} props Component properties.
 * @param {*} props.children Context children.
 * @returns Returns the component.
 */
function GlobalProvider({ children }) {
    const [theme, setTheme] = useState('light-blue'),
        [deviceType, setDeviceType] = useState(() => ({
            deviceType:
                window.innerWidth >= 1024
                    ? 'Desktop'
                    : window.innerWidth >= 741
                      ? 'Tablet'
                      : 'Mobile',
            deviceWidth: window.innerWidth,
            deviceHeight: window.innerHeight,
        }));

    let Theme;
    switch (theme) {
        case 'monokai-pro':
            Theme = Themes['MonokaiPro'];
            break;
        case 'light-blue':
            Theme = Themes['LightBlue'];
            break;
    }

    // TEST: Theme subscribers ?
    // useEffect(() => {}, [theme]);

    useEffect(() => {
        window.addEventListener('resize', handleUpdateDeviceType);
        return () => {
            window.removeEventListener('resize', handleUpdateDeviceType);
        };
    }, []);

    function handleUpdateDeviceType() {
        const device_type =
            window.innerWidth >= 1024
                ? 'Desktop'
                : window.innerWidth >= 741
                  ? 'Tablet'
                  : 'Mobile';
        setDeviceType({
            deviceType: device_type,
            deviceWidth: window.innerWidth,
            deviceHeight: window.innerHeight,
        });
    }

    const global = {
        theme,
        setTheme,
        deviceType,
    };

    return (
        <GlobalContext.Provider value={global}>
            {Theme && <Theme />}
            {children}
        </GlobalContext.Provider>
    );
}

GlobalProvider.propTypes = {
    children: PropTypes.node,
};

export { GlobalContext, GlobalProvider };
