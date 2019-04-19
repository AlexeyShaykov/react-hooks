import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const ToDoInput = styled.input`
	width: 100px;
	height: 20px;
`

export const ToDo = ({ id, first_name = '', last_name = '' }) => {
	const onChangeHandler = () => {};
	const inputEl = useRef(null);
	console.log('caught in ToDo ', first_name);
	return (
		<>
		<ToDoInput value={ first_name === '' ? '' : `${first_name} - ${last_name}` } 
				   ref={inputEl} 
				   onChange={onChangeHandler}
				   placeholder="введите имя" /> 
		</>
	)
}

ToDo.propTypes = {

}
