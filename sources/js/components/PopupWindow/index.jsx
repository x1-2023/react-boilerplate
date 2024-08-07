/**
 * @file index.jsx
 * @description Popup window component.
 */

'use strict';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import * as styles from './PopupWindow.module.css';

/**
 * Popup window component.
 * @param {Object} props Component properties.
 * @param {*} props.children Component children.
 * @param {Function} props.render Tippy render property.
 * @param {Function} props.onMount Additional callback that will be invoked in the tippy onMount callback. (Read note)
 * @param {Function} props.onHide Additional callback that will be invoked in the tippy onHide callback. (Read note)
 * @param {Object} props.customAnimation Custom CSS animation classes. ({classIn: '<in animation class>', classOut: '<out animation class>', outAnimationName: '<out animation name (keyframe)>'})
 * @param {*} props.tippyProps The rest of the properties to will passed directly to the tippy component.
 * @note This component utilize Tippy onMount, onHide callbacks to handle popup animation logics.
 *       Use 'onMount' & 'onHide' props to add additional callbacks if needed.
 * @returns Returns the component.
 */
function PopupWindow({
    children,
    render,
    onMount,
    onHide,
    customAnimation,
    ...tippyProps
}) {
    function onPopupMount(instance) {
        const popup = instance.popper.firstElementChild;
        requestAnimationFrame(() => {
            if (customAnimation) {
                popup.classList.remove(customAnimation.classOut);
                popup.classList.add(customAnimation.classIn);
            } else {
                popup.classList.remove(styles['animation-out']);
                popup.classList.add(styles['animation-in']);
            }
        });

        if (onMount) onMount(instance);
    }

    function onPopupHide(instance) {
        const popup = instance.popper.firstElementChild;
        requestAnimationFrame(() => {
            if (customAnimation) {
                popup.classList.remove(customAnimation.classIn);
                popup.classList.add(customAnimation.classOut);
            } else {
                popup.classList.remove(styles['animation-in']);
                popup.classList.add(styles['animation-out']);
            }
        });

        function handleAnimationEnd(event) {
            if (customAnimation) {
                if (event.animationName === customAnimation.outAnimationName) {
                    popup.removeEventListener(
                        'animationend',
                        handleAnimationEnd
                    );
                    instance.unmount();
                }
            } else {
                if (event.animationName === styles['popup-out']) {
                    popup.removeEventListener(
                        'animationend',
                        handleAnimationEnd
                    );
                    instance.unmount();
                }
            }
        }
        popup.addEventListener('animationend', handleAnimationEnd);

        if (onHide) onHide(instance);
    }

    return (
        <Tippy
            animation
            render={render}
            onMount={onPopupMount}
            onHide={onPopupHide}
            {...tippyProps}
        >
            {children}
        </Tippy>
    );
}

PopupWindow.propTypes = {
    children: PropTypes.node,
    render: PropTypes.func,
    onMount: PropTypes.func,
    onHide: PropTypes.func,
    customAnimation: PropTypes.shape({
        classIn: PropTypes.string.isRequired,
        classOut: PropTypes.string.isRequired,
        outAnimationName: PropTypes.string.isRequired,
    }),
};

export default PopupWindow;
export { styles as PopupStyles };
