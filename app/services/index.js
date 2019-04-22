import { useState, useEffect } from 'react';

const avas = () => {
	let members = [];
	
	return () => {
		const getRandom = () => Math.floor(Math.random() * 28) + 0;
		let r = getRandom();
		while(members.includes(r)) {
			r = getRandom();
		}
		members.push(r);
		return `https://joeschmoe.io/api/v1/${r}`;
	};
}

export const getAvatar = avas();

export const useGetData = (flag, setLoaded) => {
  const [toDoList, setToDoList] = useState([]);
  useEffect(async () => {
    const response = await fetch('https://reqres.in/api/users', {
      header: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    const { data } = await response.json();
	console.log('hi from hook useGetData ', data);
	
    setToDoList(data.map(item => {
		return {...item, ...{ avatar: getAvatar()}};
	}));
	setLoaded(false);
  }, [flag]);
  return { toDoList, setToDoList };
};
