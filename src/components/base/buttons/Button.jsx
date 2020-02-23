import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from 'components/base/buttons/styled';

const Button = ({ children, className, ...rest }) => (
  <StyledButton className={className} {...rest}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  fontSize: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: null,
  bgColor: null,
  fontSize: null,
  className: '',
};

export default Button;
