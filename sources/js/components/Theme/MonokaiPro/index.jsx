/**
 * @file index.jsx
 * @description Monokai pro theme component.
 */
'use strict';
import css from '!!raw-loader!./MonokaiPro.css';

function Theme() {
    return <style>{`${css}`}</style>;
}

export default Theme;
