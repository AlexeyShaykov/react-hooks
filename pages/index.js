import React from 'react'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components';

import theme from 'constants/theme';

import Head from 'components/head'
import Nav from 'components/nav'

import { ToDoList } from 'components/ToDo';

const Home = () => (
	<>
		<Head title="Hooks Power" />
		<Nav />
		<ThemeProvider theme={theme}>
			<ToDoList />
		</ThemeProvider>
	</>
)

export default Home
