/**
 * @file index.jsx
 * @description Labeled select component.
 */

'use strict';
import PropTypes from 'prop-types';

import * as styles from './LabeledSelect.module.css';

/**
 * Labeled select component.
 * @param {Object} props Component properties.
 * @param {*} props.color Input color variant. ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {*} props.reverse Specifies whether to use input reverse variant.
 * @param {*} props.size Input size. ('small' | 'large')
 * @param {*} props.width Input width.
 * @param {*} props.label Input label.
 * @param {*} props.id Input id.
 * @param {*} props.value Input value.
 * @param {*} props.placeholder Input placeholder.
 * @param {*} props.onBlur Input on-blur callback.
 * @param {*} props.onChange Input on-change callback.
 * @param {*} props.disabled Specifies whether to disable the input.
 * @param {*} props.wrapperStyle Input wrapper style object.
 * @param {*} props.inputStyle Input style object.
 * @param {*} props.children <select> elements.
 * @returns Returns the component.
 */
function LabeledSelect({
    color,
    reverse,
    size,
    width,
    label,
    id,
    value,
    placeholder,
    onBlur,
    onChange,
    disabled,
    wrapperStyle,
    inputStyle,
    children,
}) {
    let classes = `${styles['input-wrapper']}
                   ${color ? styles[color] : ''}
                   ${size ? styles[size] : ''}
                   ${reverse ? styles['reverse'] : ''}`;

    let input_style = Object.assign(
        { width: width && `${width}px` },
        inputStyle || {}
    );

    return (
        <div className={classes} style={wrapperStyle}>
            <div className={styles['input-label']}>
                <label htmlFor={id}>{label}</label>
            </div>
            <select
                className={styles['input']}
                id={id}
                value={value}
                placeholder={placeholder}
                onBlur={onBlur}
                onChange={onChange}
                disabled={disabled}
                style={input_style}
            >
                {children}
            </select>
        </div>
    );
}

LabeledSelect.propTypes = {
    color: PropTypes.oneOf([
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
    ]),
    reverse: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
    width: PropTypes.number,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    wrapperStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    children: PropTypes.node,
};

export default LabeledSelect;
