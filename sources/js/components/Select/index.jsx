/**
 * @file index.jsx
 * @description Select component.
 */

'use strict';
import PropTypes from 'prop-types';

import * as styles from './Select.module.css';

/**
 * Select input component.
 * @param {Object} props Component properties.
 * @param {String} props.id Select id.
 * @param {String} props.className Select additional class names.
 * @param {String} props.name Select group name.
 * @param {String} props.value Select value.
 * @param {String} props.color Select color. ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {String} props.size Select size. ('small' | 'large')
 * @param {Boolean} props.altStyle Specifies whether to use alternative style.
 * @param {Function} props.onBlur Select on-blur callback.
 * @param {Function} props.onChange Select on-change callback.
 * @param {Boolean} props.disabled Disable the select.
 * @param {*} props.children Select children.
 * @returns Returns the component.
 */
function Select({
    id,
    className,
    name,
    value,
    color,
    size,
    altStyle,
    onBlur,
    onChange,
    disabled,
    children,
}) {
    const classes = `${styles.select}
                     ${color ? styles[color] : ''}
                     ${size ? styles[size] : ''}
                     ${altStyle ? styles.alt : ''}
                     ${className || ''}`;
    return (
        <select
            className={classes}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            disabled={disabled}
            value={value}
        >
            {children}
        </select>
    );
}

Select.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
    color: PropTypes.oneOf([
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
    ]),
    size: PropTypes.oneOf(['small', 'large']),
    altStyle: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

export default Select;
