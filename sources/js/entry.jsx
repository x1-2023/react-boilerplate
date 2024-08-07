/**
 * @file entry.js
 * @description Application entry.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './utility/helper';
import configs from './configs';
import apis from './apis';

import { showToast, showCustomToast } from './components/ToastOverlay';

window.React = React;
window.ReactDOM = ReactDOM;
const $ = document.querySelector.bind(document);

(() => {
    // Create the browser router.
    const BrowserRouter = createBrowserRouter(configs.reactRouter.appRouter);

    // Render the application.
    const render = createRoot($('#root'));
    render.render(<RouterProvider router={BrowserRouter} />);
})();

// Browser window key down events.
window.onkeydown = function (event) {
    if (!event.altKey) return;
    switch (event.code) {
        case 'Digit1': {
            const audio = new Audio(
                '/assets/static/sound/ClickSoundEffect.wav'
            );
            audio.play();
            showToast('Info', 'New version available for download!', 'info');
            break;
        }
        case 'Digit2': {
            const audio = new Audio(
                '/assets/static/sound/ClickSoundEffect.wav'
            );
            audio.play();
            showToast(
                'Success',
                'Your request has been sent successfully.',
                'success'
            );
            break;
        }
        case 'Digit3': {
            const audio = new Audio(
                '/assets/static/sound/ClickSoundEffect.wav'
            );
            audio.play();
            showToast(
                'Error',
                'Unable to connect to the remote server.',
                'error'
            );
            break;
        }
        case 'Digit4': {
            const audio = new Audio(
                '/assets/static/sound/ClickSoundEffect.wav'
            );
            audio.play();
            showCustomToast(
                'Custom Toast',
                'This is a custom toast message..',
                {
                    titleColor: '#fcfcfa',
                    descColor: '#fcfcfa',
                    backgroundColor: '#544e56',
                    borderColor: '#544e56',
                    iconColor: '#fcfcfa',
                    closeIconColor: '#fcfcfa',
                },
                'fa-solid fa-gear'
            );
            break;
        }
        case 'Digit5': {
            const audio = new Audio(
                '/assets/static/sound/ClickSoundEffect.wav'
            );
            audio.play();
            showToast('Message', 'You have new message(s).', 'message');
            break;
        }
        case 'Digit8': {
            (async () => {
                console.log(await apis.mysqlServer.getTestPosts(2));
            })();
            break;
        }
        default:
            break;
    }
};
