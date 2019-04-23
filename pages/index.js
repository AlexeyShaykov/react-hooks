import React, { useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'constants/theme';

import Head from 'components/head';
import GlobalStyle from 'components/GlobalStyle';
import { ToDoList, ToDo } from 'components/ToDo';
import { WithLoading } from 'components/HOCs';
import { Container, Box, Heading, Flex, Icon } from 'components/atoms';

import { useGetData, getAvatar } from 'services';


const ListWithLoading = WithLoading(ToDoList);


const Home = () => {
	const [ isLoading, setLoaded ] = useState(true);
  const { toDoList, setToDoList } = useGetData(setLoaded);
  const [newMember, setNewMember] = useState('');


  const addNewMemberHandler = ({ newMember, toDoList, setToDoList }) => {
    const names = newMember.value.split(' ');
    if (!names && name.length < 2 && toDoList.length === 28) return toDoList;
    return setToDoList([
      ...toDoList,
      {
        id: Date.now(),
        first_name: names[0],
        last_name: names[1],
        avatar: getAvatar(),
      },
    ]);
  };
  return (
    <>
      <Head title="Hooks Power" />
	  <GlobalStyle />
      <ThemeProvider theme={theme}>	  
          <Container>
            <Box py={2} mb={2}>
              <Heading heading2 center mb={2}>
                New Member
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
			  	Members List
              </Heading>
              <Box>
			  <ListWithLoading isLoading={isLoading} toDoItems={toDoList}/>
              </Box>
            </Box>
          </Container>
      </ThemeProvider>
    </>
  );
};

export default Home;
