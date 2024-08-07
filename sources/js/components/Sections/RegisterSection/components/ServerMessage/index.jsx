/**
 * @file index.jsx
 * @description Server message component.
 */

'use strict';
import PropTypes from 'prop-types';

import * as styles from './ServerMessage.module.css';

/**
 * Server message component.
 * @param {Object} props Component properties.
 * @param {String} props.message Server message.
 * @param {String} props.type Message type.
 * @param {Function=} props.onClick Delete message button on-click callback.
 * @returns Returns the component.
 */
function ServerMessage({ message, type, onClick }) {
    const classes = `${styles['server-message-wrapper']} ${styles[type]}`;
    return (
        <div className={classes}>
            <span className={styles['server-message']}>{message}</span>
            <div className={styles['server-message-delete']} onClick={onClick}>
                <i className="fa-solid fa-x"></i>
            </div>
        </div>
    );
}

ServerMessage.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(['success', 'error']),
    onClick: PropTypes.func,
};

export default ServerMessage;
