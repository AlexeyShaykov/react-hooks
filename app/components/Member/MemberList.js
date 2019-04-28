import React from 'react';

import { Flex, Icon, Avatar } from 'components/atoms';

import { Member } from './Member';

export const MemberList = ({ MemberItems, eventHandler = () => {} }) => {
  return (
    <>
      {MemberItems.map((item) => {
        const { id, avatar } = item;
        return (
          <Flex key={id} direction="row" py={1}>
            <Avatar mr={2} src={avatar} />
            <Member {...item} />
            <Icon
              name="edit"
              onClick={() => eventHandler({ eventName: 'edit', id })}
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
