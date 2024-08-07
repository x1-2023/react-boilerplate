/**
 * @file index.jsx
 * @description Register section.
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

import * as styles from './RegisterSection.module.css';

/**
 * Register section.
 * @returns Returns the component.
 */
function RegisterSection() {
    const { authSession, login } = useAuth(),
        [pending, setPending] = useState(false),
        [serverMessage, setServerMessage] = useState(null), // { message, type }
        [email, setEmail] = useState(''),
        [username, setUsername] = useState(''),
        [password, setPassword] = useState(''),
        [passwordRepeat, setPasswordRepeat] = useState('');

    if (authSession) {
        return <Navigate to={routes.profile} />;
    }

    async function handleRegister(event) {
        event.preventDefault();
        setServerMessage(null);
        if (!email) {
            document.getElementById('email-input').focus();
            return;
        }
        if (!username) {
            document.getElementById('username-input').focus();
            return;
        }
        if (!password) {
            document.getElementById('password-input').focus();
            return;
        }
        if (!passwordRepeat) {
            document.getElementById('password-repeat-input').focus();
            return;
        }
        if (!/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(email)) {
            setServerMessage({
                message: 'The email address is invalid.',
                type: 'error',
            });
            return;
        }
        if (!/^[a-zA-Z0-9]+$/.test(username)) {
            setServerMessage({
                message:
                    'The username contains invalid character(s). [a-zA-Z0-9]',
                type: 'error',
            });
            return;
        }
        if (username.length < 6 || username.length > 16) {
            setServerMessage({
                message:
                    'The username must have a minimum length of 6 characters and a maximum of 16 characters.',
                type: 'error',
            });
            return;
        }
        if (password.length < 8 || password.length > 32) {
            setServerMessage({
                message:
                    'The password must have a minimum length of 8 characters and a maximum of 32 characters.',
                type: 'error',
            });
            return;
        }
        if (password !== passwordRepeat) {
            setServerMessage({
                message: 'Password not match.',
                type: 'error',
            });
            return;
        }

        setPending(true);

        const { message: registerMessage, success: isRegisterSuccess } =
            await apis.mysqlServer.register(email, username, password);
        if (!isRegisterSuccess) {
            console.warn(registerMessage);
            setServerMessage({ message: registerMessage, type: 'error' });
            setPassword('');
            setPasswordRepeat('');
            setPending(false);
            return;
        }

        const {
            message: loginMessage,
            success: isLoginSuccess,
            data,
        } = await apis.mysqlServer.authorize(username, password);
        if (!isLoginSuccess) {
            console.warn(loginMessage);
            setServerMessage({ message: loginMessage, type: 'error' });
            setPassword('');
            setPasswordRepeat('');
            setPending(false);
            return;
        }

        setTimeout(
            async () =>
                await login({ username: data.username, token: data.token }),
            300
        );

        setServerMessage({ message: registerMessage, type: 'success' });
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
                    <h1 className={styles['title']}>Register</h1>

                    <form className={styles['form']}>
                        <div className={styles['form-group']}>
                            <label
                                htmlFor="email-input"
                                className={styles['label']}
                            >
                                Email
                            </label>
                            <Input
                                type="email"
                                id="email-input"
                                value={email}
                                placeholder="Email"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                icon={{
                                    iconPosition: 'left',
                                    iconClass: 'fas fa-envelope',
                                }}
                                disabled={pending ? true : false}
                            />
                        </div>
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
                        <div className={styles['form-group']}>
                            <label
                                htmlFor="password-repeat-input"
                                className={styles['label']}
                            >
                                Confirm Password
                            </label>
                            <Input
                                id="password-repeat-input"
                                value={passwordRepeat}
                                type="password"
                                placeholder="Password"
                                onChange={(event) =>
                                    setPasswordRepeat(event.target.value)
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
                            onClick={(event) => handleRegister(event)}
                            disabled={pending ? true : false}
                        >
                            {pending ? 'Registering...' : 'Register'}
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
                                to={routes.login}
                                onClick={(event) => {
                                    if (pending) event.preventDefault();
                                }}
                            >
                                Login
                            </Link>
                        </div>{' '}
                    </form>
                </div>
            </FlexibleSection>
        </>
    );
}

export default RegisterSection;
