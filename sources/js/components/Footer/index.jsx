/**
 * @file index.jsx
 * @description Footer component.
 */

'use strict';
import { MdiGithub } from '../Icons/MDIGithub';
import { IcBaselineDiscord } from '../Icons/ICDiscord';
import { MdiYoutube } from '../Icons/MDIYoutube';
import { UilFacebook } from '../Icons/UILFacebook';
const $ = document.querySelector.bind(document);
import * as styles from './Footer.module.css';

/**
 * Footer component.
 * @returns Returns the component.
 */
function Footer() {
    return (
        <footer className={styles['footer']}>
            <span className={styles['copyright-text']}>
                © 2024{' '}
                <a href="/" className={styles['link']}>
                    www.0xf5t9.com
                </a>{' '}
                - All Rights Reserved.
            </span>

            <div className={styles['info-brands']}>
                <a
                    className={styles['github']}
                    href="https://github.com/0xF5T9"
                    target="_blank"
                >
                    <MdiGithub />
                </a>
                <a
                    className={styles['discord']}
                    href="https://discord.com/"
                    target="_blank"
                >
                    <IcBaselineDiscord />
                </a>
                <a
                    className={styles['youtube']}
                    href="https://youtube.com/"
                    target="_blank"
                >
                    <MdiYoutube />
                </a>
                <a
                    className={styles['facebook']}
                    href="https://facebook.com/"
                    target="_blank"
                >
                    <UilFacebook />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
