import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { media } from 'utils/media';

const FlexDiv = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};

  ${media.phone`
    justify-content: ${({ justifyContentMobile }) => justifyContentMobile};
    flex-direction: ${({ flexDirectionMobile }) => flexDirectionMobile};
    align-items: ${({ alignItemsMobile }) => alignItemsMobile};
  `}
`;

const Flex = ({ children, className, ...rest }) => (
  <FlexDiv
    className={`flex ${className}`}
    {...rest}
  >
    {children}
  </FlexDiv>
);

Flex.propTypes = {
  alignItems: PropTypes.string,
  alignItemsMobile: PropTypes.string,

  className: PropTypes.string,

  justifyContent: PropTypes.string,
  justifyContentMobile: PropTypes.string,

  flexDirection: PropTypes.string,
  flexDirectionMobile: PropTypes.string,

  flexWrap: PropTypes.string,

  width: PropTypes.string,
  height: PropTypes.string,

  children: PropTypes.node.isRequired,
};

Flex.defaultProps = {
  alignItems: 'center',
  alignItemsMobile: 'center',

  className: '',

  justifyContent: 'space-between',
  justifyContentMobile: 'center',

  flexDirection: 'row',
  flexDirectionMobile: 'column',

  flexWrap: 'wrap',

  width: 'auto',
  height: 'auto',
};

export default Flex;
