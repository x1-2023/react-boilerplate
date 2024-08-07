/**
 * @file index.jsx
 * @description Labeled input component.
 */

'use strict';
import PropTypes from 'prop-types';

import * as styles from './LabeledInput.module.css';

/**
 * Labeled input component.
 * @param {Object} props Component properties.
 * @param {String} [props.type='text'] Input type. (default: 'text')
 * @param {String} props.color Input color variant. ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {Boolean} props.reverse Specifies whether to use reverse variant.
 * @param {String} props.size Input size. ('small' | 'large')
 * @param {Number} props.width Input width.
 * @param {String} props.label Input label.
 * @param {String} props.id Input id.
 * @param {String} props.value Input value.
 * @param {String} props.placeholder Input placeholder.
 * @param {Boolean} props.readOnly Specifies whether the input is read-only.
 * @param {Function} props.onBlur Input on-blur callback.
 * @param {Function} props.onChange Input on-change callback.
 * @param {Boolean} props.disabled Specifies whether to disable the input.
 * @param {Object} props.wrapperStyle Input wrapper style object.
 * @param {Object} props.inputStyle Input style object.
 * @returns Returns the component.
 */
function LabeledInput({
    type = 'text',
    color,
    reverse,
    size,
    width,
    label,
    id,
    value,
    placeholder,
    readOnly,
    onBlur,
    onChange,
    disabled,
    wrapperStyle,
    inputStyle,
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
        <div className={classes} style={wrapperStyle} disabled={disabled}>
            <div className={styles['input-label']}>
                <label htmlFor={id}>{label}</label>
            </div>
            <input
                className={styles['input']}
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
                onBlur={onBlur}
                onChange={onChange}
                disabled={disabled}
                style={input_style}
            />
        </div>
    );
}

LabeledInput.propTypes = {
    type: PropTypes.string,
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
};

export default LabeledInput;
