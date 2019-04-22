import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const ToDoInput = styled.input`
  width: 100px;
  height: 20px;
  padding: 10px;
`;

export const ToDo = ({ id, first_name = '', last_name = '', setNewMember = () => {} }) => {
  useEffect(() => {
	setNewMember(inputEl.current);
  });
  const onChangeHandler = () => {};
  const inputEl = useRef(null);
  const valueAtr =
    first_name !== '' ? { value: `${first_name} - ${last_name}` } : {};
  return (
    <>
      <ToDoInput
        {...valueAtr}
        ref={inputEl}
        onChange={onChangeHandler}
        placeholder="enter name"
      />
    </>
  );
};

ToDo.propTypes = {};
