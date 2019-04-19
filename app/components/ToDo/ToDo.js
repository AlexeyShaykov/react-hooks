import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const ToDoInput = styled.input`
	width: 100px;
	height: 20px;
`

export const ToDo = props => {
  return (
	<>
	 <ToDoInput /> 
	</>
  )
}

ToDo.propTypes = {

}
