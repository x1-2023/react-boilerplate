/**
 * @file index.jsx
 * @description Header brand text component.
 * @note This is a sub-component of the <Header /> component.
 */
import { Link } from 'react-router-dom';

import { routes } from '../../../../configs/react-router';

import * as styles from './BrandText.module.css';

/**
 * Header brand text component.
 * @returns Returns the component.
 */
function BrandText() {
    return (
        <Link
            className={styles['header-brand-text']}
            to={routes.home}
            tabIndex={-1}
        >
            <div>
                <h1>React Project</h1>
            </div>
        </Link>
    );
}

export default BrandText;
