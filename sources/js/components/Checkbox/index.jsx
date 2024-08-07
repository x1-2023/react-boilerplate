/**
 * @file index.jsx
 * @description Checkbox component.
 */

'use strict';
import PropTypes from 'prop-types';

import * as styles from './Checkbox.module.css';

/**
 * Checkbox component.
 * @param {Object} props Component properties.
 * @param {String} props.labelText Label text.
 * @param {String} props.color Checkbox color. ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {String} props.size Checkbox size. ('small' | 'large')
 * @param {String} props.altStyle Use checkbox alternative style. ('alt-1' | 'alt-2')
 * @param {Boolean} props.whiteOnly Use white only checkbox style.
 * @param {String} props.id Checkbox id. (This applies to the checkbox input element)
 * @param {String} props.className Additional checkbox class names. (This applies to the wrapper element)
 * @param {Function} props.onClick Checkbox on-click callback.
 * @param {Boolean} props.required Specifies whether the checkbox is required.
 * @param {Boolean} props.disabled Disable the checkbox.
 * @param {Object} props.wrapperStyle Additional checkbox wrapper styles.
 * @param {Object} props.checkboxStyle Additional checkbox styles.
 * @returns Returns the component.
 */
function Checkbox({
    labelText,
    color,
    size,
    altStyle,
    whiteOnly,
    id,
    className,
    onClick,
    required,
    disabled,
    wrapperStyle,
    checkboxStyle,
}) {
    let classes = `${styles['checkbox-wrapper']}
                   ${styles[color] || ''}
                   ${styles[size] || ''}
                   ${styles[altStyle] || ''}
                   ${whiteOnly ? styles['white-only'] : ''}
                   ${className || ''}`;
    return (
        <div className={classes} style={wrapperStyle}>
            <input
                id={id}
                type="checkbox"
                onClick={onClick}
                required={required}
                disabled={disabled}
                style={checkboxStyle}
            />
            <label htmlFor={id}>
                <span>{labelText}</span>
            </label>
        </div>
    );
}

Checkbox.propTypes = {
    labelText: PropTypes.string,
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
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    wrapperStyle: PropTypes.object,
    checkboxStyle: PropTypes.object,
};

export default Checkbox;
