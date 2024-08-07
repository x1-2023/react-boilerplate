/**
 * @file index.jsx
 * @description Header component.
 */

'use strict';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { routes } from '../../configs/react-router';

import { GlobalContext } from '../Context/Global';
import BrandLogo from './components/BrandLogo';
import BrandText from './components/BrandText';
import Navbar from './components/Navbar';
import MobileNavMenuIcon from './components/MobileNavMenuIcon';
import AlertIcon from './components/AlertIcon';
import UserIcon from './components/UserIcon';
import IconButton from './components/IconButton';
import Button from '../Button';
import { LineMdSunnyOutlineTwotone } from '../Icons/MLSun';
import { LineMdMoonSimpleTwotone } from '../Icons/MLMoon';
import { Fa6SolidCode } from '../Icons/FACode';
import { Fa6SolidCaretDown } from '../Icons/FACaretDown';
import { Fa6SolidUser } from '../Icons/FAUser';
import { Fa6SolidHouse } from '../Icons/FAHome';
import { showToast } from '../ToastOverlay';

import * as styles from './Header.module.css';
const $ = document.querySelector.bind(document);

/**
 * Header component.
 * @returns Returns the component.
 */
function Header() {
    const { theme, setTheme } = useContext(GlobalContext),
        { authSession, logout } = useAuth(),
        navigate = useNavigate();

    return (
        <header className={styles['header']}>
            {/* Left content box */}
            <div className={styles['left-content']}>
                {/* Mobile navigation menu */}
                <MobileNavMenuIcon
                    render={[
                        {
                            title: 'Navigation',
                            items: [
                                {
                                    text: 'Home',
                                    to: routes.home,
                                    icon: Fa6SolidHouse,
                                },
                                {
                                    text: 'Profile',
                                    to: routes.profile,
                                    icon: Fa6SolidUser,
                                    authOnly: true,
                                },
                            ],
                        },
                        {
                            title: 'Softwares',
                            items: [
                                {
                                    text: 'Shutdown Timer',
                                    desc: 'A simple PC shutdown timer',
                                    image: '/assets/static/img/shutdowntimer.png',
                                    hideOnClick: false,
                                    onClick: () =>
                                        showToast(
                                            'Info',
                                            'This application is currently unavailable.',
                                            'info'
                                        ),
                                },
                                {
                                    text: 'ASC File Cryptor',
                                    desc: 'Private file cryptor',
                                    image: '/assets/static/img/ascfilecryptor.png',
                                    hideOnClick: false,
                                    onClick: () =>
                                        showToast(
                                            'Info',
                                            'This application is currently unavailable.',
                                            'info'
                                        ),
                                },
                            ],
                        },
                        {
                            title: 'Components',
                            items: [
                                {
                                    text: 'Section',
                                    to: routes.samples.section,
                                    icon: Fa6SolidCode,
                                },
                                {
                                    text: 'Button',
                                    to: routes.samples.button,
                                    icon: Fa6SolidCode,
                                },
                                {
                                    text: 'Input',
                                    to: routes.samples.input,
                                    icon: Fa6SolidCode,
                                },
                                {
                                    text: 'Checkbox',
                                    to: routes.samples.checkbox,
                                    icon: Fa6SolidCode,
                                },
                                {
                                    text: 'Radio',
                                    to: routes.samples.radio,
                                    icon: Fa6SolidCode,
                                },
                            ],
                        },
                    ]}
                />

                {/* Brand logo and brand text */}
                <BrandLogo />
                <BrandText />
            </div>

            {/* Middle content box */}
            <div className={styles['middle-content']}>
                <Navbar
                    render={[
                        {
                            text: 'Home',
                            to: routes.home,
                        },
                        {
                            text: 'Softwares',
                            icon: Fa6SolidCaretDown,
                            items: [
                                {
                                    title: 'Shutdown Timer',
                                    desc: 'A simple PC shutdown timer',
                                    image: '/assets/static/img/shutdowntimer.png',
                                    hideOnClick: true,
                                },
                                {
                                    title: 'ASC File Cryptor',
                                    desc: 'Private file cryptor',
                                    image: '/assets/static/img/ascfilecryptor.png',
                                    hideOnClick: true,
                                },
                            ],
                        },
                        {
                            text: 'Components',
                            icon: Fa6SolidCaretDown,
                            layout: 'full-4',
                            items: [
                                {
                                    title: 'Section',
                                    to: routes.samples.section,
                                    icon: Fa6SolidCode,
                                },
                                {
                                    title: 'Button',
                                    to: routes.samples.button,
                                    icon: Fa6SolidCode,
                                },
                                {
                                    title: 'Input',
                                    to: routes.samples.input,
                                    icon: Fa6SolidCode,
                                },
                                {
                                    title: 'Checkbox',
                                    to: routes.samples.checkbox,
                                    icon: Fa6SolidCode,
                                },
                                {
                                    title: 'Radio',
                                    to: routes.samples.radio,
                                    icon: Fa6SolidCode,
                                },
                            ],
                        },
                        {
                            text: 'Profile',
                            to: routes.profile,
                            icon: Fa6SolidUser,
                            authOnly: true,
                        },
                    ]}
                />
            </div>

            {/* Right content box */}
            <div className={styles['right-content']}>
                {authSession ? (
                    <>
                        <IconButton
                            icon2={
                                theme === 'monokai-pro'
                                    ? LineMdMoonSimpleTwotone
                                    : LineMdSunnyOutlineTwotone
                            }
                            onClick={() =>
                                setTheme(
                                    theme === 'monokai-pro'
                                        ? 'light-blue'
                                        : 'monokai-pro'
                                )
                            }
                        />

                        {/* Alert icon */}
                        <AlertIcon />

                        {/* User icon */}
                        <UserIcon
                            menus={[
                                {
                                    id: 'default',
                                    menu: [
                                        {
                                            text: 'Profile',
                                            icon: 'fas fa-user',
                                            to: 'profile',
                                        },
                                        {
                                            text: 'Settings',
                                            icon: 'fas fa-gear',
                                            gotoMenu: 'settings',
                                        },
                                        {
                                            text: 'Logout',
                                            icon: 'fas fa-right-from-bracket',
                                            onClick: () => logout(),
                                        },
                                    ],
                                },
                                {
                                    id: 'settings',
                                    menu: [
                                        {
                                            text: 'No option availables.',
                                        },
                                        {
                                            text: 'Back',
                                            icon: 'fas fa-arrow-left',
                                            gotoMenu: 'default',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </>
                ) : (
                    <>
                        <IconButton
                            style={{ marginRight: '10px' }}
                            icon2={
                                theme === 'monokai-pro'
                                    ? LineMdMoonSimpleTwotone
                                    : LineMdSunnyOutlineTwotone
                            }
                            onClick={() =>
                                setTheme(
                                    theme === 'monokai-pro'
                                        ? 'light-blue'
                                        : 'monokai-pro'
                                )
                            }
                        />
                        <Link
                            className={styles['login-link']}
                            to={routes.login}
                        >
                            Login
                        </Link>{' '}
                        <Button
                            style={{ marginRight: '10px' }}
                            onClick={() => navigate(routes.register)}
                            elementType="div"
                        >
                            Register
                        </Button>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
