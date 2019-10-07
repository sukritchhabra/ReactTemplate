import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const FontAwesomeIconWrapper = ({ className, icon }) => <FontAwesomeIcon className={`fa-icon ${className}`} icon={icon} />;

const StyledFontAwesomeIconWrapper = styled(FontAwesomeIconWrapper)`
  ${({ marginLeft }) => `margin-left: ${marginLeft || 0};`}
  ${({ marginRight }) => `margin-right: ${marginRight || 0};`}
`;

FontAwesomeIconWrapper.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object.isRequired, // eslint-disable-line
};

FontAwesomeIconWrapper.defaultProps = {
  className: '',
};

export default StyledFontAwesomeIconWrapper;
