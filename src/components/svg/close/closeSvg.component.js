import React from 'react';
// import PropTypes from 'prop-types';

const CloseSvg = ({
    className,
    fill = 'black',
    size,
    width = 18,
    height = 18,
}) => (
    <svg width={size || width} height={size || height} viewBox="0 0 18 18" className={className}>
        <path fill={fill} d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
    </svg>
);


// TLogo.propTypes = {
//   className: PropTypes.string,
//   fill: PropTypes.string,
// };

// TLogo.defaultProps = {
//   className: undefined,
//   fill: '#333',
// };

export default CloseSvg;