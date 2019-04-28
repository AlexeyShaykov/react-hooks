import React, { useRef, useEffect } from 'react';
import { string } from 'prop-types';

import styled from 'styled-components';

const MemberInput = styled.input`
  width: 200px;
  height: 20px;
  padding: 10px;
  border: solid 1px #ccc;
  border-radius: 4px;
`;

export const Member = ({ first_name = '', last_name = '', setNewMember = () => {} }) => {
  const onChangeHandler = () => {};
  const inputEl = useRef(null);
  const valueAtr = first_name !== '' ? { value: `${first_name} - ${last_name}` } : {};

  useEffect(() => { setNewMember(inputEl.current); });

  return (
    <>
      <MemberInput
        {...valueAtr}
        ref={inputEl}
        onChange={onChangeHandler}
        placeholder="enter name"
      />
    </>
  );
};

Member.propTypes = {
  first_name: string,
  last_name: string,
};

Member.defaultProps = {
  first_name: '',
  last_name: '',
};
