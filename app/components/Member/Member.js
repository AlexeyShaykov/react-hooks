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

const Member = ({
  first_name = '',
  last_name = '',
  setNewMember = () => {},
  disabled = false,
  resetActive = () => {}
}) => {
  const inputEl = useRef(null);
  useEffect(() => {
    setNewMember(inputEl.current);
  });
  useEffect(() => {
    const value = first_name ? `${first_name} - ${last_name}` : '';
    inputEl.current.value = value;
  }, []);

  return (
    <>
      <MemberInput
        ref={inputEl}
        placeholder="enter name"
        disabled={disabled}
        onBlur={resetActive}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            resetActive();
          }
        }}
      />
    </>
  );
};

Member.propTypes = {
  first_name: string,
  last_name: string
};

Member.defaultProps = {
  first_name: '',
  last_name: ''
};

export default React.memo(Member);