/**
 * @file index.jsx
 * @description Error layout component.
 */

'use strict';
import { Link, ScrollRestoration, useRouteError } from 'react-router-dom';

import { routes } from '../../../configs/react-router';

import Content from '../../Content';
import { FlexibleSection } from '../../Content/components/GridSection';
import ModalOverlay from '../../ModalOverlay';
import ToastOverlay from '../../ToastOverlay';
// import DebugOverlay from '../../DebugOverlay';
import Button from '../../Button';

import * as layoutStyles from '../Layout.module.css';
import * as styles from './ErrorLayout.module.css';

/**
 * Error layout component.
 * @returns Returns the component.
 */
function ErrorLayout() {
    const error = useRouteError();
    console.warn(error);

    return (
        <>
            <style>
                {`
                    :root {
                    --header-height: 0px !important;
                    --footer-height: 0px !important;
                    }
                `}
            </style>
            <div id="app">
                <Content>
                    <FlexibleSection
                        style={{
                            display: 'flex',
                            flexFlow: 'column nowrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '50px 20px',
                            '--value': '-12px',
                            padding: '20px 20px',
                            userSelect: 'none',
                        }}
                    >
                        {error.status ? (
                            <>
                                <h1
                                    className={styles['error-status-code']}
                                >{`${error.status}`}</h1>
                                <div className={styles['error-data']}>
                                    <span>{`${error.statusText}`}</span>
                                    <span>{`${error.data}`}</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <h1 className={styles['error-status-code']}>
                                    500
                                </h1>
                                <div className={styles['error-data']}>
                                    <span>{error.message}</span>
                                </div>
                            </>
                        )}
                        <div className={styles['homepage-link']}>
                            <Button>
                                <Link to={routes.home}>
                                    <i className="fa-solid fa-arrow-left"></i>{' '}
                                    Back To Homepage
                                </Link>{' '}
                            </Button>
                        </div>
                    </FlexibleSection>
                </Content>
                <ModalOverlay />
                <ToastOverlay />
                {/* <DebugOverlay /> */}
                <div className={layoutStyles['background']} />
            </div>
            <ScrollRestoration />
        </>
    );
}

export default ErrorLayout;
