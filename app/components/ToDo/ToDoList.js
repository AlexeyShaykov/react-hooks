import React from 'react';

import { ToDo } from './ToDo';

export const ToDoList = ({ toDoItems }) => {
  return (
	<>
	{toDoItems.map((item, index) => (
		<ToDo key={item.id} {...item }/>
	))}
	</>
  )
}