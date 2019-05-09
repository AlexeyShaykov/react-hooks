import React, { useState } from 'react';

import { Flex, Icon, Avatar } from 'components/atoms';

import { Member } from './Member';

export const MemberList = ({ MemberItems, eventHandler = () => {} }) => {
  const [activeID, setActiveID] = useState(-1);
  return (
    <>
      {MemberItems.map(item => {
        const { id, avatar } = item;
        return (
          <Flex key={id} direction="row" py={1}>
            <Avatar mr={2} src={avatar} />
            <Member
              {...item}
              disabled={activeID !== id}
              resetActive={() => setActiveID(-1)}
            />
            <Icon
              name="edit"
              onClick={() => setActiveID(id)}
              props={{ fill: '#ccc' }}
            />
            <Icon
              name="delete"
              onClick={() => eventHandler({ eventName: 'delete', id })}
              props={{ fill: '#ccc' }}
            />
          </Flex>
        );
      })}
    </>
  );
};
