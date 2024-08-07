/**
 * @file index.jsx
 * @description Debug overlay component.
 */

'use strict';
import { useState, useEffect, useContext } from 'react';

import { GlobalContext } from '../Context/Global';
import './DebugOverlay.css';

/**
 * Debug overlay component.
 * @returns Returns the component.
 */
function DebugOverlay() {
    const { deviceType } = useContext(GlobalContext),
        [backgroundColor, setBackgroundColor] = useState(() => {
            switch (deviceType.deviceType) {
                case 'Tablet':
                    return 'var(--color-red)';
                case 'Mobile':
                    return 'var(--color-purple)';
                case 'Desktop':
                default:
                    return 'var(--color-orange)';
            }
        });

    useEffect(() => {
        switch (deviceType.deviceType) {
            case 'Tablet':
                setBackgroundColor('var(--color-red)');
                break;
            case 'Mobile':
                setBackgroundColor('var(--color-purple)');
                break;
            case 'Desktop':
            default:
                setBackgroundColor('var(--color-orange)');
        }
    }, [deviceType.deviceType]);

    return (
        <>
            <div id="debug-overlay">
                <h5 style={{ backgroundColor: backgroundColor }}>
                    {`${deviceType.deviceWidth}x${deviceType.deviceHeight} (${deviceType.deviceType})`}
                </h5>
            </div>
        </>
    );
}

export default DebugOverlay;
