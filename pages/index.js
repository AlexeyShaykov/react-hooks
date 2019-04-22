import React, { useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'constants/theme';

import Head from 'components/head';
import Nav from 'components/nav';
import { ToDoList, ToDo } from 'components/ToDo';
import { Container, Box, Heading, Flex, Icon } from 'components/atoms';

import { useGetData, getAvatar } from 'services';

const Home = () => {
  const { toDoList, setToDoList } = useGetData(true);
  const [newMember, setNewMember] = useState('');
  
  const addNewMemberHandler = ({ newMember, toDoList, setToDoList }) => {
    const names = newMember.value.split(' ');
	if (!names && name.length < 2 && toDoList.length === 28) return toDoList
      return setToDoList([
        ...toDoList,
        {
          id: Date.now(),
          first_name: names[0],
		  last_name: names[1],
		  avatar: getAvatar()
        },
      ]);
  };
  return (
    <>
      <Head title="Hooks Power" />
      <Nav />
      <ThemeProvider theme={theme}>
        <Container>
          <Box py={2} mb={2}>
            <Heading heading2 center mb={2}>
              Новый сотрудник
            </Heading>
            <Flex direction={'row'}>
              <ToDo setNewMember={setNewMember} />
              <Icon
                name={'add'}
                onClick={() =>
                  addNewMemberHandler({ newMember, toDoList, setToDoList })
                }
                props={{ fill: '#ccc' }}
              />
            </Flex>
          </Box>
          <Box py={2}>
            <Heading heading2 center mb={2}>
              Cписок сотрудников
            </Heading>
            <Box>
              <ToDoList toDoItems={toDoList} />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Home;
