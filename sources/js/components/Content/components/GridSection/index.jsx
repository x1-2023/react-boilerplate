/**
 * @file index.jsx
 * @description Grid section component.
 */

'use strict';
import PropTypes from 'prop-types';
import { Row, Column } from '../../../GridSystem';

import * as styles from './GridSection.module.css';

/**
 * Grid section component.
 * @param {Object} props Component properties.
 * @param {Boolean} props.wide Use wide grid.
 * @param {Number} props.fixedHeight Specifies a fixed height for the section.
 * @param {Boolean} props.dynamicHeight Make the section's height determined by its content.
 *                                      By default, the section's height is scaled to fit the remaining space of the content wrapper.
 * @param {Object} props.style Style object.
 * @param {*} props.children Component children.
 * @returns Returns the component.
 */
function GridSection({ wide, fixedHeight, dynamicHeight, style, children }) {
    const classes = `${styles['section']}
                    ${wide ? 'wide' : ''}
                    ${fixedHeight || dynamicHeight ? styles['dynamic-height'] : ''}
                    grid`;
    if (fixedHeight) {
        if (!style) style = {};
        style.height = `${fixedHeight}px`;
    }
    return (
        <section className={classes} style={style}>
            {children}
        </section>
    );
}

GridSection.propTypes = {
    wide: PropTypes.bool,
    fixedHeight: PropTypes.number,
    dynamicHeight: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
};

/**
 * Dynamic section.
 * This section's height is determined by its content.
 * @param {Object} props Component properties.
 * @param {String} props.id Section id.
 * @param {String} props.className Section additional class names.
 * @param {Boolean} props.grid Specifies whether to make this section a grid layout '.grid'.
 * @param {Boolean} props.wide Specifies whether to use wide grid.
 * @param {Boolean} props.noGutters Specifies whether to remove default gutters.
 * @param {Object} props.style Additional style object for section.
 * @param {*} props.children Component children.
 * @returns Returns the component.
 */
function DynamicSection({
    id,
    className,
    grid,
    wide,
    noGutters,
    style,
    children,
}) {
    const classes = `c-12 m-12 l-12
                    ${className || ''}
                    ${grid ? (wide ? 'grid wide' : 'grid') : ''}`;
    return (
        <GridSection style={{ display: 'flex', flexGrow: '0' }}>
            <Row
                noGutters={noGutters}
                style={{
                    flexGrow: '1',
                }}
            >
                <Column id={id} className={classes} style={style}>
                    {children}
                </Column>
            </Row>
        </GridSection>
    );
}

DynamicSection.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    grid: PropTypes.bool,
    wide: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
};

/**
 * Fixed section.
 * This section has a fixed height.
 * @param {Object} props Component properties.
 * @param {String} props.id Section id.
 * @param {String} props.className Section additional class names.
 * @param {Number} props.height Section fixed height.
 * @param {Boolean} props.grid Specifies whether to make this section a grid layout '.grid'.
 * @param {Boolean} props.wide Specifies whether to use wide grid.
 * @param {Boolean} props.noGutters Specifies whether to remove default gutters.
 * @param {Object} props.style Additional style object for section.
 * @param {*} props.children Component children.
 * @returns Returns the component.
 */
function FixedSection({
    id,
    className,
    height,
    grid,
    wide,
    noGutters,
    style,
    children,
}) {
    const classes = `c-12 m-12 l-12
                    ${className || ''}
                    ${grid ? (wide ? 'grid wide' : 'grid') : ''}`;
    return (
        <GridSection fixedHeight={height} style={{ display: 'flex' }}>
            <Row
                noGutters={noGutters}
                style={{
                    flexGrow: '1',
                }}
            >
                <Column id={id} className={classes} style={style}>
                    {children}
                </Column>
            </Row>
        </GridSection>
    );
}

FixedSection.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.number.isRequired,
    grid: PropTypes.bool,
    wide: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
};

/**
 * Flexible section.
 * This section's height is automatically scaled to fit the remaining space.
 * @param {Object} props Component properties.
 * @param {String} props.id Section id.
 * @param {String} props.className Section additional class names.
 * @param {Boolean} props.grid Specifies whether to make this section a grid layout '.grid'.
 * @param {Boolean} props.wide Specifies whether to use wide grid.
 * @param {Boolean} props.noGutters Specifies whether to remove default gutters.
 * @param {Object} props.style Additional style object for section.
 * @param {*} props.children Component children.
 * @returns Returns the component.
 */
function FlexibleSection({
    id,
    className,
    grid,
    wide,
    noGutters,
    style,
    children,
}) {
    const classes = `c-12 m-12 l-12
                    ${className || ''}
                    ${grid ? (wide ? 'grid wide' : 'grid') : ''}`;
    return (
        <GridSection style={{ display: 'flex' }}>
            <Row
                noGutters={noGutters}
                style={{
                    flexGrow: '1',
                }}
            >
                <Column id={id} className={classes} style={style}>
                    {children}
                </Column>
            </Row>
        </GridSection>
    );
}

FlexibleSection.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    grid: PropTypes.bool,
    wide: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
};

export default GridSection;
export { DynamicSection, FixedSection, FlexibleSection };
