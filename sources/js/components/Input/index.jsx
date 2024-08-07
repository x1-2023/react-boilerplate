/**
 * @file index.jsx
 * @description Input component.
 */

'use strict';
import PropTypes from 'prop-types';

import * as styles from './Input.module.css';

/**
 * Input component. (Text | Email | Password)
 * @param {Object} props Component properties.
 * @param {String} props.type Input type. ('text' | 'email' | 'password' - default: 'text')
 * @param {String} props.color Input color. ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {String} props.size Input size. ('small' | 'large')
 * @param {Boolean} props.transparent Make the input background transparent.
 * @param {Object} props.icon Input icon. ({iconPosition: 'left' | 'right', iconClass: '<icon classses>'})
 * @param {String} props.placeholder Input placeholder.
 * @param {String} props.id Input id. (This applies to the input element)
 * @param {String} props.value Input value.
 * @param {String} props.className Additional input class names. (This applies to the wrapper element)
 * @param {Function} props.onBlur Input on-blur callback.
 * @param {Function} props.onChange Input on-change callback.
 * @param {Boolean} props.disabled Disable the input.
 * @param {Object} props.wrapperStyle Additional input wrapper styles.
 * @param {Object} props.inputStyle Additional input styles.
 * @returns Returns the component.
 */
function Input({
    type = 'text',
    color,
    size,
    transparent,
    icon = { iconPosition: '', iconClass: '' },
    placeholder,
    id,
    value,
    className,
    onBlur,
    onChange,
    disabled,
    wrapperStyle,
    inputStyle,
}) {
    let icon_position_style =
        icon.iconPosition === 'right'
            ? styles['icon-right']
            : styles['icon-left'];

    let classes = `${styles['input-wrapper']}
                   ${styles[color] || ''}
                   ${styles[size] || ''}
                   ${transparent ? styles['transparent'] : ''}
                   ${icon.iconPosition ? icon_position_style : ''}
                   ${className || ''}`;
    return (
        <div className={classes} style={wrapperStyle}>
            {icon.iconClass ? <i className={icon.iconClass}></i> : null}
            <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onBlur={onBlur}
                onChange={onChange}
                disabled={disabled}
                style={inputStyle}
            />
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password']),
    color: PropTypes.oneOf([
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
    ]),
    size: PropTypes.oneOf(['small', 'large']),
    transparent: PropTypes.bool,
    icon: PropTypes.shape({
        iconPosition: PropTypes.oneOf(['left', 'right']).isRequired,
        iconClass: PropTypes.string.isRequired,
    }),
    placeholder: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    wrapperStyle: PropTypes.object,
    inputStyle: PropTypes.object,
};

export default Input;
