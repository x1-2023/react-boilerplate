/**
 * @file index.jsx
 * @description Radio component.
 */

'use strict';
import PropTypes from 'prop-types';

import * as styles from './Radio.module.css';

/**
 * Radio component.
 * @param {Object} props Component properties.
 * @param {String} props.labelText Label text.
 * @param {String} props.name Radio group name. (required)
 * @param {String} props.value Radio value. (required)
 * @param {String} props.color Radio color. ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {String} props.size Radio size. ('small' | 'large')
 * @param {String} props.altStyle Use radio alternative style. ('alt-1' | 'alt-2')
 * @param {Boolean} props.whiteOnly Use white only radio style.
 * @param {String} props.id Radio id. (This applies to the radio input element)
 * @param {String} props.className Additional radio class names. (This applies to the wrapper element)
 * @param {Function} props.onClick Radio on-click callback.
 * @param {Boolean} props.disabled Disable the radio.
 * @param {Object} props.wrapperStyle Additional radio wrapper styles.
 * @param {Object} props.radioStyle Additional radio styles.
 * @returns Returns the component.
 */
function Radio({
    labelText,
    name,
    value,
    color,
    size,
    altStyle,
    whiteOnly,
    id,
    className,
    onClick,
    disabled,
    wrapperStyle,
    radioStyle,
}) {
    let classes = `${styles['radio-wrapper']}
                   ${styles[color] || ''}
                   ${styles[size] || ''}
                   ${styles[altStyle] || ''}
                   ${whiteOnly ? styles['white-only'] : ''}
                   ${className || ''}`;
    return (
        <div className={classes} style={wrapperStyle}>
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                onClick={onClick}
                disabled={disabled}
                style={radioStyle}
            />
            <label htmlFor={id}>
                <span>{labelText}</span>
            </label>
        </div>
    );
}

Radio.propTypes = {
    labelText: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
    ]),
    size: PropTypes.oneOf(['small', 'large']),
    altStyle: PropTypes.oneOf(['alt-1', 'alt-2']),
    whiteOnly: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    wrapperStyle: PropTypes.object,
    radioStyle: PropTypes.object,
};

export default Radio;
