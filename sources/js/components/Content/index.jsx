/**
 * @file index.jsx
 * @description Content component.
 */

'use strict';
import PropTypes from 'prop-types';

import './Content.css';

/**
 * Content component.
 * @param {Object} props Component properties.
 * @param {*} props.children Content children.
 * @returns Returns the component.
 */
function Content({ children }) {
    return <div id="content-wrapper">{children}</div>;
}

Content.propTypes = {
    children: PropTypes.node,
};

export default Content;
