import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from 'components/base/buttons/styled';

const Link = ({
  children, className, openInNewTab, ...rest
}) => (
  <StyledLink
    className={className}
    target={openInNewTab ? '_blank' : '_self'}
    rel={openInNewTab ? 'noreferrer' : undefined}
    {...rest}
  >
    {children}
  </StyledLink>
);

Link.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  colorHover: PropTypes.string,
  bgColorHover: PropTypes.string,
  fontSize: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  openInNewTab: PropTypes.bool,
};

Link.defaultProps = {
  color: null,
  bgColor: null,
  colorHover: null,
  bgColorHover: null,
  fontSize: '1rem',
  className: '',
  openInNewTab: false,
};

export default Link;
