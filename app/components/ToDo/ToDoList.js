import React from 'react';

import { Flex, Icon, Avatar } from 'components/atoms';

import { ToDo } from './ToDo';

export const ToDoList = ({ toDoItems }) => {
	console.log(toDoItems);
  return (
    <>
      {toDoItems.map((item, index) => (
        <Flex key={item.id} direction={'row'} py={1}>
		  <Avatar mr={2} src={item.avatar} />
          <ToDo {...item} />
          <Icon
            name={'edit'}
            onClick={() => console.log('edit')}
            props={{ fill: '#ccc' }}
          />
          <Icon
            name={'delete'}
            onClick={() => console.log('delete')}
            props={{ fill: '#ccc' }}
          />
        </Flex>
      ))}
    </>
  );
};
