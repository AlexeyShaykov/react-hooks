import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'constants/theme';

import Head from 'components/head';
import GlobalStyle from 'components/GlobalStyle';
import { MemberList, Member } from 'components/Member';
import { WithLoading } from 'components/HOCs';
import {
  Container,
  Box,
  Heading,
  Flex,
  Icon,
} from 'components/atoms';

import { useGetData } from 'services';
import { addNewMemberHandler, removeMemberHandler } from 'utils';

const ListWithLoading = WithLoading(MemberList);


const Home = () => {
  const [isLoading, setLoaded] = useState(true);
  const { members, setMemberList } = useGetData(setLoaded);
  const [newMember, setNewMember] = useState('');

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
            <Flex direction="row">
              <Member setNewMember={setNewMember} />
              <Icon
                name="add"
                onClick={() => addNewMemberHandler({ newMember, members, setMemberList })}
                props={{ fill: '#ccc' }}
              />
            </Flex>
          </Box>
          <Box py={2}>
            <Heading heading2 center mb={2}>
              Members List
            </Heading>
            <Box>
              <ListWithLoading
                isLoading={isLoading}
                MemberItems={members}
                eventHandler={data => removeMemberHandler({ ...data, ...{ members, setMemberList } })}
              />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Home;
