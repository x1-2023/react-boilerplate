/**
 * @file index.jsx
 * @description Protect route component.
 */

'use strict';
import { useAuth } from '../../hooks/useAuth';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import apis from '../../apis';
import { routes } from '../../configs/react-router';
import { showToast } from '../ToastOverlay';
import { FlexibleSection } from '../Content/components/GridSection';
import { MLLoading } from '../Icons/MLLoading';
/**
 * This component is used to prevent unauthenticated users from accessing private routes.
 * @param {Object} props Component properties.
 * @param {*} props.children Component children.
 * @returns Returns the component.
 */
function ProtectedRoute({ children }) {
    const { authSession, logout } = useAuth(),
        [isVerifying, setIsVerifying] = useState(true);

    // Redirect to login route if no authentication session found.
    if (!authSession) {
        return <Navigate to={routes.login} />;
    }

    // Verify the authentication session. (Check if token is still valid.)
    useEffect(() => {
        verifySession();
    }, [authSession]);

    // If the session token is invalid (expired, tampered) redirect to login page.
    // If the verification failed due to server error, redirect to homepage instead.
    async function verifySession() {
        const result = await apis.mysqlServer.verifySession(authSession),
            { message, success, invalidToken } = result;
        if (!success) {
            setTimeout(() => showToast('Error', message, 'error', 5000), 100);
            logout(invalidToken ? routes.login : routes.home);
        }
        setIsVerifying(false);
    }

    // Display loading component while verifying the session.
    if (isVerifying)
        return (
            <FlexibleSection
                style={{
                    display: 'flex',
                    flexFlow: 'columm nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '50px 20px',
                    textAlign: 'center',
                }}
            >
                <MLLoading style={{ width: '30px' }} />
            </FlexibleSection>
        );

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
};

export default ProtectedRoute;
