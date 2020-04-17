import styled from 'styled-components';

export const ButtonContainer =styled.button`
	text-transform: capitalize;
	font-size: 1rem;
	background: #001a33;
	color:#fff;
	border: 0.05rem solid var(--lightBlue);
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition : all 0.3s ease-in-out;
	&:hover{
		background :var(--mainYellow);
		color : var(--mainBlue);
	}
	&:focus {
		outline: none;
	}
`;