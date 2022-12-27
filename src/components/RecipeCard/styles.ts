import styled, { keyframes } from 'styled-components';

const CardAppears = keyframes`
  from{
    opacity: 0;
    transform: translateX(-100%);
  }
  to{
    left: 0;
    transform: translateX(0);
  }
`;

export const Card = styled.div`
	width: 250px;
	height: 375px;
	display: flex;
	justify-content: center;
	align-items: center;
	transform-style: preserve-3d ;
	transition: all .4s linear;
	cursor: pointer;
	/* background-color: yellow; */

	&:hover{
		transform: rotateY(180deg);
	}
`

export const FrontCard = styled.div`
	/* flex-shrink: 0; */
	width: 98%;
	height: 98%;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND.RECIPECARD};
	animation: 0.7s ${CardAppears} ease-out;
	position: absolute;
	overflow: hidden;
	border-radius: 8px;
	
	> img{
		width: 100%;
		height: 35%;
	}

	> div{
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		height: 65%;
	}
`

export const MainInformations = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		text-align: center;
		font-weight: 600;
	}
	
	span{
		text-align: center;

		mark {
			background-color: rgba(0, 0, 0, 0);
			color: ${({ theme }) => theme.COLORS.TEXT.PRIMARYTITLE};
			font-weight: 600;
		}
	}

`

export const StarWrapper = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;

	svg{
		width: 30px;
		height: 30px;
	}

	span{
		margin-left: 8px;
		font-size: 1.2em;
	}
`

export const BackCard = styled.div`
	width: 98%;
	height: 98%;
	overflow: hidden;
	border-radius: 8px;
	transform: rotateY(180deg);
	position: absolute;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND.RECIPECARD};
	backface-visibility: hidden;
`