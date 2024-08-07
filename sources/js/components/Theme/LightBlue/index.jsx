/**
 * @file index.jsx
 * @description Light blue theme component.
 */
'use strict';
import css from '!!raw-loader!./LightBlue.css';

function Theme() {
    return <style>{`${css}`}</style>;
}

export default Theme;
