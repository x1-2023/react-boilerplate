/**
 * @file index.jsx
 * @description Button component.
 */

'use strict';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import * as styles from './Button.module.css';

/**
 * Button component.
 * @param {Object} props Component properties.
 * @param {String} props.color Button color. ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {String} props.size Button size. ('small' | 'large')
 * @param {Boolean} props.outline Use button outline style.
 * @param {Boolean} props.white Use white button style.
 * @param {Boolean} props.whiteOnly Use white only button style.
 * @param {String} props.id Button id.
 * @param {String} props.className Additional button class names.
 * @param {String} props.value Button value.
 * @param {Function} props.onClick Button on-click callback.
 * @param {Boolean} props.disabled Disable the button.
 * @param {Object} props.style Additional button styles.
 * @param {*} props.children Button children.
 * @param {String} props.elementType Element type ('button' | 'a' | 'div')
 * @returns Returns the component.
 */
const Button = forwardRef(function Button(
    {
        color,
        size,
        outline,
        white,
        whiteOnly,
        id,
        className,
        value,
        onClick,
        disabled,
        style,
        children,
        elementType = 'button',
    },
    ref
) {
    const classes = `${styles.button}
                     ${styles[color] || ''}
                     ${styles[size] || ''}
                     ${outline ? styles.outline : ''}
                     ${white ? styles.white : ''}
                     ${whiteOnly ? styles['white-only'] : ''}
                     ${className || ''}`,
        Component = elementType;

    return (
        <Component
            ref={ref}
            id={id}
            value={value}
            className={classes}
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {children}
        </Component>
    );
});

Button.propTypes = {
    color: PropTypes.oneOf([
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
    ]),
    size: PropTypes.oneOf(['small', 'large']),
    outline: PropTypes.bool,
    white: PropTypes.bool,
    whiteOnly: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
    elementType: PropTypes.oneOf(['button', 'a', 'div']),
};

export default Button;
