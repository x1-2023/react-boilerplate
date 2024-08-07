/**
 * @file index.jsx
 * @description Modal overlay component.
 */

'use strict';
import { useEffect, useRef } from 'react';

import * as styles from './ModalOverlay.module.css';
const $ = document.querySelector.bind(document);

/**
 * Check if the modal overlay is visible.
 * The modal overlay becomes visible when a modal window is open.
 * @returns {Boolean} Returns true if the modal overlay is visible, otherwise returns false.
 */
function isModalOverlayVisible() {
    const modal_overlay = $('#modal-overlay');
    if (modal_overlay) {
        return modal_overlay.querySelector(
            `.${styles['modal-window']}.${styles['is-open']}`
        )
            ? true
            : false;
    }
    return false;
}

/**
 * Close the modal overlay.
 * @param {Bool} skipAnimation Specifies whether to skip animations.
 */
function closeModalOverlay(skipAnimation) {
    if (!isModalOverlayVisible()) return;
    const modal_overlay = $('#modal-overlay');
    for (const modal_window of modal_overlay.querySelectorAll(
        `.${styles['modal-window']}.${styles['is-open']}`
    )) {
        modal_overlay.classList.remove(styles['is-open']);
        modal_overlay.classList.add(styles['is-close']);
        if (!skipAnimation) {
            function onOverlayAnimationEnd(event) {
                if (event.target == modal_overlay)
                    modal_overlay.classList.add(styles['is-hidden']);
                modal_overlay.removeEventListener(
                    'animationend',
                    onOverlayAnimationEnd
                );
            }
            modal_overlay.addEventListener(
                'animationend',
                onOverlayAnimationEnd
            );
        } else modal_overlay.classList.add(styles['is-hidden']);

        modal_window.classList.remove(styles['is-open']);
        modal_window.classList.add(styles['is-close']);
        if (!skipAnimation) {
            function onModalWindowAnimationEnd() {
                modal_window.classList.add(styles['is-hidden']);
                modal_window.removeEventListener(
                    'animationend',
                    onModalWindowAnimationEnd
                );
            }
            modal_window.addEventListener(
                'animationend',
                onModalWindowAnimationEnd
            );
        } else modal_window.classList.add(styles['is-hidden']);
    }
}

/**
 * Open a modal window.
 * @param {String} modalWindowId Specifies the modal window id.
 */
function openModalWindow(modalWindowId) {
    if (isModalOverlayVisible()) closeModalOverlay(true);
    const modal_overlay = $('#modal-overlay');
    if (modal_overlay) {
        if (!modal_overlay.classList.contains(styles['is-open'])) {
            modal_overlay.classList.remove(styles['is-hidden']);
            modal_overlay.classList.remove(styles['is-close']);
            modal_overlay.classList.add(styles['is-open']);
        }

        const modal_window = modal_overlay.querySelector(`#${modalWindowId}`);
        if (!modal_window) {
            console.log(`'#${modalWindowId}' modal window not found.`);
            return;
        }
        modal_window.classList.remove(styles['is-hidden']);
        modal_window.classList.remove(styles['is-close']);
        modal_window.classList.add(styles['is-open']);
    }
}

/**
 * Modal overlay component.
 * @returns Returns the component.
 */
function ModalOverlay() {
    const modal_overlay = useRef();

    useEffect(() => {
        modal_overlay.current.addEventListener(
            'click',
            handleModalOverlayClick
        );
        window.addEventListener('keydown', handleModalOverlayKeypress);
    }, []);

    // Close modal overlay on background click.
    function handleModalOverlayClick(event) {
        if (isModalOverlayVisible() && event.target === modal_overlay.current)
            closeModalOverlay();
    }

    // Close modal overlay on escape key press.
    function handleModalOverlayKeypress(event) {
        if (!isModalOverlayVisible()) return;
        if (event.key === 'Escape') closeModalOverlay();
    }

    return (
        <>
            <div
                ref={modal_overlay}
                id="modal-overlay"
                className={`${styles['modal-overlay']}  ${styles['is-close']} ${styles['is-hidden']}`}
            >
                <div
                    id="custom-modal-window-1"
                    className={`${styles['modal-window']}  ${styles['is-close']} ${styles['is-hidden']}`}
                    style={{ padding: '20px', textAlign: 'center' }}
                    onClick={(event) => event.stopPropagation()}
                >
                    <h3>Modal Window 1</h3>
                    <p style={{ marginTop: '10px' }}>Modal window contents.</p>
                </div>
                <div
                    id="custom-modal-window-2"
                    className={`${styles['modal-window']}  ${styles['is-close']} ${styles['is-hidden']}`}
                    style={{ padding: '20px', textAlign: 'center' }}
                    onClick={(event) => event.stopPropagation()}
                >
                    <h3>Modal Window 2</h3>
                    <p style={{ marginTop: '10px' }}>Modal window contents.</p>
                </div>
            </div>
        </>
    );
}

export default ModalOverlay;
export { isModalOverlayVisible, closeModalOverlay, openModalWindow };
