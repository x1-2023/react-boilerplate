/**
 * @file index.jsx
 * @description Login section.
 * TEST: Test component, subject to changes.
 */

'use strict';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

import { routes } from '../../../configs/react-router';
import apis from '../../../apis';

import { FlexibleSection } from '../../Content/components/GridSection';
import Input from '../../Input';
import Button from '../../Button';
import ServerMessage from './components/ServerMessage';

import * as styles from './LoginSection.module.css';

/**
 * Login section.
 * @returns Returns the component.
 */
function LoginSection() {
    const { authSession, login } = useAuth(),
        [pending, setPending] = useState(false),
        [serverMessage, setServerMessage] = useState(null), // { message, type }
        [username, setUsername] = useState(''),
        [password, setPassword] = useState('');

    if (authSession) {
        return <Navigate to={routes.profile} />;
    }

    async function handleLogin(event) {
        event.preventDefault();
        if (!username) {
            document.getElementById('username-input').focus();
            return;
        }
        if (!password) {
            document.getElementById('password-input').focus();
            return;
        }

        setPending(true);

        const { message, success, data } = await apis.mysqlServer.authorize(
            username,
            password
        );
        if (!success) {
            console.warn(message);
            setServerMessage({ message: message, type: 'error' });
            setPassword('');
            setPending(false);
            setTimeout(() => {
                document.getElementById('password-input').focus();
            }, 10);
            return;
        }

        setServerMessage({ message: 'Redirecting...', type: 'success' });
        setTimeout(
            async () =>
                await login({
                    username: data.username,
                    email: data.email,
                    role: data.role,
                    token: data.token,
                }),
            300
        );
    }

    return (
        <>
            <FlexibleSection
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '50px 20px',
                }}
            >
                {serverMessage && (
                    <ServerMessage
                        message={serverMessage.message}
                        onClick={() => setServerMessage(null)}
                        type={serverMessage.type}
                    />
                )}
                <div className={styles['wrapper']}>
                    <h1 className={styles['title']}>Login</h1>

                    <form className={styles['form']}>
                        <div className={styles['form-group']}>
                            <label
                                htmlFor="username-input"
                                className={styles['label']}
                            >
                                Username
                            </label>
                            <Input
                                id="username-input"
                                value={username}
                                placeholder="Username"
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                                icon={{
                                    iconPosition: 'left',
                                    iconClass: 'fas fa-user',
                                }}
                                disabled={pending ? true : false}
                            />
                        </div>
                        <div className={styles['form-group']}>
                            <label
                                htmlFor="password-input"
                                className={styles['label']}
                            >
                                Password
                            </label>
                            <Input
                                id="password-input"
                                value={password}
                                type="password"
                                placeholder="Password"
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                icon={{
                                    iconPosition: 'left',
                                    iconClass: 'fas fa-lock',
                                }}
                                disabled={pending ? true : false}
                            />
                        </div>
                        <Button
                            className={styles['submit']}
                            onClick={(event) => handleLogin(event)}
                            disabled={pending ? true : false}
                        >
                            {pending ? 'Authenticating...' : 'Login'}
                        </Button>
                        <div className={styles['links']}>
                            <Link
                                className={styles['link']}
                                to={routes.home}
                                onClick={(event) => {
                                    if (pending) event.preventDefault();
                                }}
                            >
                                <i className="fa-solid fa-arrow-left"></i> Back
                            </Link>
                            <Link
                                className={styles['link']}
                                to={routes.register}
                                onClick={(event) => {
                                    if (pending) event.preventDefault();
                                }}
                            >
                                Register
                            </Link>
                        </div>{' '}
                    </form>
                </div>
            </FlexibleSection>
        </>
    );
}

export default LoginSection;
