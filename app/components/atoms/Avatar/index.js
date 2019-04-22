import styled from 'styled-components';
import { space } from 'styled-system';

const Component = styled.img`
	${space};
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #e8d906;
    vertical-align: middle;
`;

export const Avatar = props => {
	return (
		<Component {...props} />
	)
  };