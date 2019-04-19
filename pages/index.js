import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components';

import theme from 'constants/theme';

import Head from 'components/head'
import Nav from 'components/nav'

import { ToDoList, ToDo } from 'components/ToDo';
import { Container, Box, Heading, Flex } from 'components/atoms';

const useGetData = flag => {
	const [toDoList, setToDoList] = useState([]);
	useEffect(async () => {
		const response = await fetch('https://reqres.in/api/users', {
			header: {
				'Access-Control-Allow-Origin':'*',
			}	
		});
		const { data } = await response.json();
		console.log('hi from hook ', data);
		setToDoList(data);
	  }, [flag]);
	  return toDoList
  };


const Home = () => {
	const toDoList = useGetData(true);
	return (
		<>
			<Head title="Hooks Power" />
			<Nav />
			<ThemeProvider theme={theme}>
			<Container>
				<Box py={2} mb={2}>
					<Heading heading2 center>
						  Новый сотрудник
					  </Heading>
					<ToDo />
				</Box>
				<Box py={2}>
					<Heading heading2 center>
						  Cписок сотрудников
					  </Heading>
					  <Flex>
						<ToDoList toDoItems={toDoList} />
					  </Flex>
				</Box>
			</Container>
			</ThemeProvider>
		</>
	)
} 

export default Home
