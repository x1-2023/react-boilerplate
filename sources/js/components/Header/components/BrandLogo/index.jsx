/**
 * @file index.jsx
 * @description Header brand logo component.
 * @note This is a sub-component of the <Header /> component.
 */

'use strict';
import { Link } from 'react-router-dom';

import { routes } from '../../../../configs/react-router';

import * as styles from './BrandLogo.module.css';

/**
 * Header brand logo component.
 * @param {Object} props Component properties.
 * @param {String} props.id Element id.
 * @param {String} props.className Element addtional class names.
 * @returns Returns the component.
 */
function BrandLogo({ id, className }) {
    return (
        <Link
            id={id}
            className={`${styles['header-brand-logo']} ${className || ''}`}
            to={routes.home}
            tabIndex={-1}
        >
            <img src="/assets/static/img/brand-logo.png" alt="Brand Logo" />
        </Link>
    );
}

export default BrandLogo;
