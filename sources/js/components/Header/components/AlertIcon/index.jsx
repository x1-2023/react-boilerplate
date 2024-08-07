/**
 * @file index.jsx
 * @description Header alert icon button, with popup window.
 * @note This is a sub-component of the <Header /> component.
 */

'use strict';
import { useState } from 'react';

import IconButton, { IconButtonStyles } from '../IconButton';
import PopupWindow, { PopupStyles } from '../../../PopupWindow';
import * as styles from './AlertIcon.module.css';

/**
 * Header alert icon button, with popup window.
 * @returns Returns the component.
 */
function AlertIcon() {
    const [showPopup, setShowPopup] = useState(false);

    function handleClick() {
        setShowPopup(!showPopup);
    }

    function handleBackgroundClick() {
        setShowPopup(false);
    }

    return (
        <div>
            <PopupWindow
                interactive
                visible={showPopup}
                offset={[0, 0]}
                placement="bottom-start"
                onClickOutside={handleBackgroundClick}
                customAnimation={{
                    classIn: styles['animation-in'],
                    classOut: styles['animation-out'],
                    outAnimationName: styles['popup-out'],
                }}
                render={(attrs) => (
                    <div
                        className={`${styles['alert-popup']} ${PopupStyles['popup-window']}`}
                    ></div>
                )}
            >
                <IconButton
                    icon={`${showPopup ? 'fas' : 'far'} fa-bell`}
                    className={`${showPopup ? IconButtonStyles['is-popup-open'] : ''}`}
                    onClick={handleClick}
                />
            </PopupWindow>
        </div>
    );
}

export default AlertIcon;
