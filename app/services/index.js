import { useState, useEffect } from 'react';

const avas = () => {
	const members = [];

	return () => {
		const getRandom = () => Math.floor(Math.random() * 28) + 0;
		let r = getRandom();
		while (members.includes(r)) {
			r = getRandom();
		}
		members.push(r);
		return `https://joeschmoe.io/api/v1/${r}`;
	};
};

export const getAvatar = avas();

export const useGetData = (setLoaded) => {
	const [members, setMemberList] = useState([]);
	const header = { 'Access-Control-Allow-Origin': '*' };
  useEffect(async () => {
    const response = await fetch('https://reqres.in/api/users', { header });
    const { data } = await response.json();
		console.log('hi from hook useGetData ', data);

    setMemberList(data.map(item => ({ ...item, ...{ avatar: getAvatar() } })));
		setLoaded(false);
  }, []);
  return { members, setMemberList };
};
