import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from 'components/atoms';

const icons = {
  add: require('./icons/add').default,
  edit: require('./icons/edit').default,
  delete: require('./icons/delete').default,
};

const IconBox = styled(Box)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const Icon = ({ name, mx, onClick, props }) => {
  const Component = icons[name];
  return name && onClick ? (
    <IconBox mx={mx} onClick={() => onClick(name)}>
      <Component {...props} />
    </IconBox>
  ) : null;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Icon.defaultProps = {
  name: '',
};
