/**
 * @file index.jsx
 * @description Grid System components.
 */

'use strict';
import PropTypes from 'prop-types';
import * as styles from './GridSystem.module.css';

/**
 * Grid System row components.
 * @param {Object} props Component properties.
 * @param {String} props.id Id.
 * @param {String} props.className Class names.
 * @param {Object} props.style Style object.
 * @param {Boolean} props.noGutters Specifies whether to remove gutters.
 * @param {*} props.children Component children.
 * @returns Returns the component.
 */
function Row({ id, className, style, noGutters, children }) {
    const classes = `row
                    ${className ? className : ''}
                    ${noGutters ? 'no-gutters' : ''}`;
    return (
        <div id={id} className={classes} style={style}>
            {children}
        </div>
    );
}

Row.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    noGutters: PropTypes.bool,
    children: PropTypes.node,
};

/**
 * Grid System column components.
 * @param {Object} props Component properties.
 * @param {String} props.id Id.
 * @param {String} props.className Class names.
 * @param {Object} props.style Style object.
 * @param {*} props.children Component children.
 * @returns Returns the component.
 */
function Column({ id, className, style, children }) {
    const classes = `col ${className ? className : ''}`;
    return (
        <div id={id} className={classes} style={style}>
            {children}
        </div>
    );
}

Column.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

export { Row, Column };
