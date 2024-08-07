/**
 * @file index.jsx
 * @description Toast overlay component.
 */

'use strict';
import './ToastOverlay.css';
const $ = document.querySelector.bind(document);

/**
 * Show a notification toast.
 * @param {String} title Specifies the toast title.
 * @param {String} message Specifies the toast message.
 * @param {String} type Specifies the toast type. ('message' | 'info' | 'success' | 'error' - default: 'message')
 * @param {Number} duration Specifies the toast duration in milliseconds. (default: 3000)
 * @param {Object} animationDuration Specifies the toast animation duration in milliseconds. (default: {fadeIn: 300, fadeOut: 300})
 * @note For 'title' and 'message' parameters, escape characters like '\n' or html tags can be used.
 */
function showToast(
    title,
    message,
    type = 'message',
    duration = 3000,
    animationDuration = { fadeIn: 300, fadeOut: 300 }
) {
    const toast_overlay = $('#toast-overlay');
    if (!toast_overlay) return;

    // Calculate float values for animation durations in seconds.
    const fadein_duration_float = (animationDuration.fadeIn / 1000).toFixed(2);
    const fadeout_duration_float = (animationDuration.fadeOut / 1000).toFixed(
        2
    );
    const total_toast_duration_float = (
        duration / 1000 +
        animationDuration.fadeIn / 1000 +
        animationDuration.fadeOut / 1000
    ).toFixed(2);

    // Define icon classes based on toast type
    const toast_icons = {
        message: 'fa-solid fa-message',
        info: 'fa-solid fa-circle-info',
        success: 'fa-solid fa-circle-check',
        error: 'fa-solid fa-circle-exclamation',
    };
    let toast_icon = toast_icons[type];
    if (toast_icon === undefined) toast_icon = toast_icons['message'];

    // Create the toast element.
    const toast_element = document.createElement(`div`);
    toast_element.classList.add('toast');
    if (type === 'success') toast_element.classList.add('toast-success');
    else if (type === 'error') toast_element.classList.add('toast-error');
    toast_element.style.animation = `toast-fade-in ${fadein_duration_float}s ease, toast-fade-out ${fadeout_duration_float}s linear ${total_toast_duration_float}s forwards`;
    toast_element.innerHTML = `
            <div class="toast-icon"><i class="${toast_icon}"></i></div>
            <div class="toast-message">
                <p class="toast-title">${title}</p>
                <p class="toast-desc">${message}</p>
            </div>
            <div class="toast-close"><i class="fa-solid fa-xmark"></i></div>
            `;

    // Set a timeout to remove the toast element after the specified duration.
    const timeout_id = setTimeout(
        function () {
            toast_element.remove();
        },
        duration + animationDuration.fadeIn + animationDuration.fadeOut * 2
    );

    // Define click event for closing the toast.
    toast_element.onclick = function (event) {
        if (event.target.closest('.toast-close')) {
            toast_element.remove();
            clearTimeout(timeout_id);
        }
    };

    // Append the toast element.
    toast_overlay.append(toast_element);
}

/**
 * Show a custom notification toast.
 * @param {String} title Specifies the toast title.
 * @param {String} message Specifies the toast message.
 * @param {Object} colors Specifies the toast colors. (default: {titleColor: '#fcfcfa', descColor: '#fcfcfa', backgroundColor: '#2d2a2e', borderColor: '#2d2a2e', iconColor: '#fcfcfa', closeIconColor: '#fcfcfa'})
 * @param {String} iconClasses Specifies the toast icon classes. (default: 'fa-solid fa-message')
 * @param {Number} duration Specifies the toast duration in milliseconds. (default: 3000)
 * @param {Object} animationDuration Specifies the toast animation duration in milliseconds. (default: {fadeIn: 300, fadeOut: 300})
 * @note For 'title' and 'message' parameters, escape characters like '\n' or html tags can be used.
 */
function showCustomToast(
    title,
    message,
    colors = {
        titleColor: '#fcfcfa',
        descColor: '#fcfcfa',
        backgroundColor: '#2d2a2e',
        borderColor: '#2d2a2e',
        iconColor: '#fcfcfa',
        closeIconColor: '#fcfcfa',
    },
    iconClasses = 'fa-solid fa-message',
    duration = 3000,
    animationDuration = { fadeIn: 300, fadeOut: 300 }
) {
    const toast_overlay = $('#toast-overlay');
    if (!toast_overlay) return;

    // Calculate float values for animation durations in seconds.
    const fadein_duration_float = (animationDuration.fadeIn / 1000).toFixed(2);
    const fadeout_duration_float = (animationDuration.fadeOut / 1000).toFixed(
        2
    );
    const total_toast_duration_float = (
        duration / 1000 +
        animationDuration.fadeIn / 1000 +
        animationDuration.fadeOut / 1000
    ).toFixed(2);

    // Define icon classes.
    let toast_icon = iconClasses;

    // Create the toast element.
    const toast_element = document.createElement(`div`);
    toast_element.classList.add('toast');
    toast_element.style.animation = `toast-fade-in ${fadein_duration_float}s ease, toast-fade-out ${fadeout_duration_float}s linear ${total_toast_duration_float}s forwards`;
    toast_element.style.setProperty(
        '--toast-title-color',
        `${colors.titleColor}`
    );
    toast_element.style.setProperty(
        '--toast-desc-color',
        `${colors.descColor}`
    );
    toast_element.style.setProperty(
        '--toast-background-color',
        `${colors.backgroundColor}`
    );
    toast_element.style.setProperty(
        '--toast-border-color',
        `${colors.borderColor}`
    );
    toast_element.style.setProperty(
        '--toast-icon-color',
        `${colors.iconColor}`
    );
    toast_element.style.setProperty(
        '--toast-close-icon-color',
        `${colors.closeIconColor}`
    );
    toast_element.innerHTML = `
            <div class="toast-icon"><i class="${toast_icon}"></i></div>
            <div class="toast-message">
                <p class="toast-title">${title}</p>
                <p class="toast-desc">${message}</p>
            </div>
            <div class="toast-close"><i class="fa-solid fa-xmark"></i></div>
            `;

    // Set a timeout to remove the toast element after the specified duration.
    const timeout_id = setTimeout(
        function () {
            toast_element.remove();
        },
        duration + animationDuration.fadeIn + animationDuration.fadeOut * 2
    );

    // Define click event for closing the toast.
    toast_element.onclick = function (event) {
        if (event.target.closest('.toast-close')) {
            toast_element.remove();
            clearTimeout(timeout_id);
        }
    };

    // Append the toast element.
    toast_overlay.append(toast_element);
}

/**
 * Toast overlay component.
 * @returns Returns the component.
 */
function ToastOverlay() {
    return <div id="toast-overlay"></div>;
}

export default ToastOverlay;
export { showToast, showCustomToast };
